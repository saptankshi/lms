import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [pendingReturns, setPendingReturns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPendingReturns = async () => {
            try {
                const response = await axios.get('/admin/pending-returns');
                console.log('Response:', response.data); // Log response data
                setPendingReturns(response.data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Failed to fetch pending returns:', error);
                setError('Failed to fetch pending returns. Please try again later.');
                setLoading(false); // Set loading to false on error as well
            }
        };

        fetchPendingReturns();
    }, []); // Empty dependency array ensures this runs only once on component mount

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Admin Dashboard - Pending Returns</h2>
            {pendingReturns.length > 0 ? (
                <ul>
                    {pendingReturns.map((returnItem, index) => (
                        <li key={index}>
                            Member Name: {returnItem.member_details.name}<br />
                            Member ID: {returnItem.member_details.member_id}<br />
                            Book ID: {returnItem.book_id}<br />
                            Borrowed Date: {returnItem.borrowed_date}<br />
                            Return Due Date: {returnItem.return_due_date}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No pending returns found</p>
            )}
        </div>
    );
};

export default AdminDashboard;
