const express = require('express');
const router = express.Router();
const Issuance = require('../models/issuance');

// Route to fetch all issuances (for admin dashboard)
router.get('/issuances', async (req, res) => {
    try {
        const issuances = await Issuance.find().populate('memberId').populate('bookId'); // Populate references
        res.json(issuances);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to create a new issuance (when a user borrows a book)
router.post('/issuances', async (req, res) => {
    const { memberId, bookId, returnDueDate } = req.body;

    try {
        const newIssuance = new Issuance({ memberId, bookId, returnDueDate });
        await newIssuance.save();
        res.status(201).json({ message: 'Issuance created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create issuance', details: error.message });
    }
});

module.exports = router;
