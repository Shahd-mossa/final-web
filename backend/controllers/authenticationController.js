const User = require('../models/User')
const { generateToken } = require('../utils/jwt')

exports.register = async function (req, res) {
    try {
        const { name, email, phone, password } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res
                .status(400)
                .json({ success: "false", message: "User already exists" });
        }

        let hash = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            phone,
            password: hash,
        });

        res.cookie("token", generateToken(newUser.toJSON()), {
            maxAge: 900000,
            httpOnly: true,
        });

        return res.status(201).json({
            success: true,
            data: newUser,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!user || !isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = generateToken(user.toJSON());

        res.cookie("token", token, {
            maxAge: 900000,
            httpOnly: true,
        });

        return res.status(200).json({
            success: true,
            token,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}