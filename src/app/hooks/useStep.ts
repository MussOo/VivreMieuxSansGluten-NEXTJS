'use client'
import axios from "axios";
import { useEffect, useState } from "react";



export default function useStep(params: { }) {
    const [steps, setSteps] = useState([0]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


        const fetchStep = async () => {
            try{
            const res = await axios.get(`/api/step`,{
                params: params
            });
            setSteps(res.data.data);
            setLoading(false);
            }catch(error){
                console.log(error);
                setError(true);
                setLoading(false);
            }

        }
        
        useEffect(() => {
            fetchStep();
        }
        , []);



    return { steps, loading, error };
}