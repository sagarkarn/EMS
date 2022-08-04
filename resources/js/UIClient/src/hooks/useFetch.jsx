import axios from "axios";
import React, { useState } from "react";

function useFetch(url, data) {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        setResult(null);
        setError(null);
        if (!data) {
            data = {};
        }
        fetch(url, data)
            .then((res) => {
                setLoading(false);
                setResult(res.json());
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
            });
    }, [url, data]);
    return result, loading, error;
}

export default useFetch;
