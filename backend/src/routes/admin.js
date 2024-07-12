// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { fetchPendingReturnsFromDatabase } = require('../controllers/issuanceControllers');

// Route to fetch pending returns
// routes/adminRoutes.js

// Route to fetch pending returns
router.get('/pending-returns', fetchPendingReturnsFromDatabase);

module.exports = router;
