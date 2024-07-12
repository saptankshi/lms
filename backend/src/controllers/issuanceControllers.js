// src/controllers/issuanceControllers.js
const fetchPendingReturns = require('../models/issuance');

// controllers/adminController.js
const fetchPendingReturnsFromDatabase = async (req, res) => {
    try {
        const pendingReturns = await fetchPendingReturns(); // Replace with your actual function to fetch data
        res.json(pendingReturns);
    } catch (error) {
        console.error('Error fetching pending returns:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    fetchPendingReturnsFromDatabase,
};
