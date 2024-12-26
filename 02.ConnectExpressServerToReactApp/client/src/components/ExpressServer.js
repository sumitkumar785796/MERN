import React, { useEffect, useState } from 'react';
import { getData } from '../api/apiService';

const ExpressServer = () => {
    const [view, setView] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await getData();
                setView(result);
            } catch (error) {
                setError(error.message); // Use the error message thrown from the API service
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <h1>View Express Server</h1>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <p style={{ color: 'yellowgreen' }}>{view?.message}</p>
            )}
        </>
    );
};

export default ExpressServer;
