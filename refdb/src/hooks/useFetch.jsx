import { useEffect, useState } from "react";
import { fetchDataFromTMDBApi} from "../utils/api";
const useFetch = (url) => {
    const [fetchData, setFetchData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setFetchData(null);
        setError(null);

        fetchDataFromTMDBApi(url)
            .then((res) => {
                setLoading(false);
                setFetchData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { fetchData, loading, error };
};

export default useFetch;