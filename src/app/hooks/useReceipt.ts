'use client'
import axios from "axios";
import { useEffect, useState } from "react";


export default function useReceipt({ page = 0, category = null, id = null }: { page?: number, category?: number, id?: number }) {
    const [receipts, setReceipts] = useState([]);
    const [counts, setCounts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchReceipts = async () => {
        try {
            const res = await axios.get(`/api/receipt`,
                {
                    params: {
                        page : page,
                        category : category,
                        id : id
                    }
            }
            );
            setReceipts(res.data.data);
            setCounts(res.data.count);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchReceipts();
    }, [page, category]);

    return { receipts, counts, loading, error };
}