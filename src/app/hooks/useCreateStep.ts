import { useState } from "react";



export default function useCreateStep(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function createStep(
        step : [
            {
                title : string,
                content : string,
                receiptid : number,
                image : any
            }
        ]
    ) {
        let data = [];
        setLoading(true);
        setError(null);

        try {
            data = await fetch('/api/step', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(step),
            })
            .then((res) => res.json());

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
        return { data, error };
    }
    return { createStep, loading, error };

}