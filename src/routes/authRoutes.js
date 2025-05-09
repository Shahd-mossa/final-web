const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup route
router.post('/signup', authController.signup);

// Verify email route
router.post('/verify-email', authController.verifyEmail);

module.exports = router; 