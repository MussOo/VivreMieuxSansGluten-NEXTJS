'use client'
import swal from "sweetalert";
import { useEffect, useState } from "react";
import axios from "axios";


export default function useEvent(page: number) {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const res = await axios.get(`/api/events`,{
                params: {
                    page: page,
                },
            });
            setEvents(res.data.data);
        } catch (error) {
            console.log(error);
            swal("Error", "Sorry, an error occurred", "error");
        }
    }

    useEffect(() => {
        fetchEvents();
    }, [page]);

    return { events };
}