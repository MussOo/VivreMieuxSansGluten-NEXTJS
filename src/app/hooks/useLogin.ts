'use client'
import { useAuth } from "@/context/authContext";
import axios from "axios";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function useLogin() {
    const { user, setUser } = useAuth();

    const login = async (email: string, password: string) => {
        let error = null;
        let loading = false;
        
        loading = true;
        try {
            const res = await axios.post("/api/login", {
                email: email,
                password: password,
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setUser(res.data.user);
        } catch (err) {
            error = err.response.data.message;
        }
        loading = false;

        return {error, loading};
    }

    return { login };
}