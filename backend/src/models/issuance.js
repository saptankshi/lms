const mongoose = require('mongoose');

const issuanceSchema = new mongoose.Schema({
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true }, // Reference to the Member model
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true }, // Reference to the Book model
    borrowedDate: { type: Date, default: Date.now },
    returnDueDate: { type: Date }
    // Add more fields as needed
});

const Issuance = mongoose.model('Issuance', issuanceSchema);

module.exports = Issuance;
