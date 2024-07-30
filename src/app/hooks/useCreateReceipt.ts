'use client'
import { useState } from "react";




export default function useCreateReceipt(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function createReceipt(
        receipt : {
            title : string,
            description : string,
            date : Date,
            IsFree : boolean,
            amount : number,
            category : number,
            image : any,
            userId : number
        }
    ) {
        let data = [];
        setLoading(true);
        setError(null);

        try {
            data = await fetch('/api/receipt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(receipt),
            })
            .then((res) => res.json());

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        return { data, error };
    }
    return { createReceipt, loading, error };
}