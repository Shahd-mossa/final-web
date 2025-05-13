const generateToken = (payload) => {
    const options = {
      expiresIn: "10h", // Token expiration time
    };
  
    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    return token;
};