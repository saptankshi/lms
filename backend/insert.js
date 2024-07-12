const mongoose = require('mongoose');
const IssuanceModel = require('./src/models/issuance'); // Adjust path as per your file structure

mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log('MongoDB connected');

    // Dummy issuance data
    const issuanceData = [
        {
            book: "612e36b2b6e7c82934f6d5c3", // Replace with actual ObjectId of a book
            member: "612e36b2b6e7c82934f6d5c4", // Replace with actual ObjectId of a member
            issuedDate: new Date("2023-06-15"),
            returnDate: new Date("2023-07-15"),
        },
        {
            book: "612e36b2b6e7c82934f6d5c5", // Replace with actual ObjectId of a book
            member: "612e36b2b6e7c82934f6d5c6", // Replace with actual ObjectId of a member
            issuedDate: new Date("2023-07-01"),
            returnDate: new Date("2023-08-01"),
        },
        {
            book: "612e36b2b6e7c82934f6d5c7", // Replace with actual ObjectId of a book
            member: "612e36b2b6e7c82934f6d5c8", // Replace with actual ObjectId of a member
            issuedDate: new Date("2023-08-10"),
            returnDate: new Date("2023-09-10"),
        },
        {
            book: "612e36b2b6e7c82934f6d5c9", // Replace with actual ObjectId of a book
            member: "612e36b2b6e7c82934f6d5c4", // Replace with actual ObjectId of a member
            issuedDate: new Date("2023-08-20"),
            returnDate: new Date("2023-09-20"),
        },
        {
            book: "612e36b2b6e7c82934f6d5ca", // Replace with actual ObjectId of a book
            member: "612e36b2b6e7c82934f6d5c6", // Replace with actual ObjectId of a member
            issuedDate: new Date("2023-09-05"),
            returnDate: new Date("2023-10-05"),
        },
    ];

    try {
        // Insert dummy issuance data
        const insertedData = await IssuanceModel.insertMany(issuanceData);
        console.log('Dummy issuance data inserted:', insertedData);
    } catch (error) {
        console.error('Error inserting dummy issuance data:', error);
    } finally {
        mongoose.connection.close();
    }
})
.catch(err => console.error('MongoDB connection error:', err));
