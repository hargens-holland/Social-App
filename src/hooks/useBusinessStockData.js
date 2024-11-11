import { useState, useEffect } from 'react';

const useBusinessStockData = (stockSymbol) => {
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                // Replace with your preferred stock API
                const response = await fetch(
                    `YOUR_STOCK_API_ENDPOINT/${stockSymbol}`
                );
                const data = await response.json();
                setStockData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStockData();
        // Set up real-time updates if needed
        const interval = setInterval(fetchStockData, 60000); // Update every minute

        return () => clearInterval(interval);
    }, [stockSymbol]);

    return { stockData, loading, error };
};

export default useBusinessStockData;