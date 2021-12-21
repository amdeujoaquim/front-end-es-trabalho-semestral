
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {

    const [dbData, setDbData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setLoading(false);
                setDbData(response.data);
            } catch (error) {
                setError(error)
            }
        };
        getData();
    }, [])

    return { dbData, error, loading }

}

export default useFetch
