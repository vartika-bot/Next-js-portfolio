const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/User');
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!['patient', 'doctor', 'admin'].includes(role)) {
        return res.status(400).json({ error: "Role must be one of 'patient', 'doctor', or 'admin'" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    const user_id = name.slice(0, 3) + email.split('@')[0].slice(0, 2);

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role,
        user_id
    });

    try {
        await newUser.save();
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                user_id: newUser.user_id,
                createdAt: newUser.createdAt
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET || 'secret_key', {
        expiresIn: '1h'
    });

    res.json({
        message: 'Login successful',
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            user_id: user.user_id,
            createdAt: user.createdAt
        },
        token
    });
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

router.get('/doctors', async (req, res) => {
    try {
        const doctors = await User.find({ role: 'doctor' });
        res.json({ doctors });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch doctors' });
    }
});

router.get('/patients', async (req, res) => {
    try {
        const patients = await User.find({ role: 'patient' });
        res.json({ patients });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch patients' });
    }
});

module.exports = router;
