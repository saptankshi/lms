const express = require('express');
const { NewUserModel } = require('../models/member');
const router = express.Router();

// Registration endpoint
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!password) {
            return res.status(400).json({ message: 'Password is required' });
        }

        // Store the password as plain text (not recommended)
        const newUser = new NewUserModel({ username: email, password, name, role: 'user' });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

module.exports = router;
