'use client'
import axios from "axios";
import { useEffect, useState } from "react";




export default function useCategory() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const res = await axios.get(`/api/category`);
            setCategories(res.data.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return { categories };
}