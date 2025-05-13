const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.render('beauty');
});
app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/login', (req, res) => {
    res.render('login');
});


app.get('/forgotpassword', (req, res) => {
    res.render('forgotpassword');
});

app.get('/product', (req, res) => {
    res.render('product');
});

app.get('/bridal', (req, res) => {
    res.render('bridal');
});

app.get('/package1', (req, res) => {
    res.render('package1');
});

app.get('/package2', (req, res) => {
    res.render('package2');
});

app.get('/package3', (req, res) => {
    res.render('package3');
});
app.get('/package4', (req, res) => {
    res.render('package4');
});


app.get('/nailcare', (req, res) => {
    res.render('nailcare');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/makeup', (req, res) => {
    res.render('makeup');
});

app.get('/hair', (req, res) => {
    res.render('hair');
});

app.get('/bodycare', (req, res) => {
    res.render('bodycare');
});
// Handle signup form submission

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    // Here you would typically save to a database
    res.redirect('/login');
});


// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Here you would typically validate against a database
    if (username === 'admin' && password === 'password123') {
        res.redirect('/beauty');
    } else {
        res.render('login', { error: 'Invalid username or password' });
    }
});


// Handle forgot password form submission
app.post('/forgotpassword', (req, res) => {
    const { phoneNumber, verificationCode } = req.body;
    // Here you would typically handle password reset logic
    res.redirect('/login');
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('404', { 
        title: '404 - Page Not Found',
        message: 'The page you are looking for does not exist.'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', {
        title: '500 - Server Error',
        message: 'Something went wrong on our end.'
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});