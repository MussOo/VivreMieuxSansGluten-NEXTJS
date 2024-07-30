"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { json } from "stream/consumers";

const AuthContext = createContext(null);

const routeAdmin = [
  "/evenements/add",
  "/evenements/edit",
  "/evenements/delete",
  "/evenements/validate",
  "/recettes/add",
  "/recettes/edit",
  "/recettes/delete",
];
export const AuthProvider = ({ children }) => {
  const route = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === "undefined"
    ) {
      localStorage.clear();
      return;
    }
    async function fetchUser() {
      try {
        const response = await axios.get("/api/user/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(
          localStorage.getItem("user"),
          JSON.stringify(response.data.user)
        );
        if (
          localStorage.getItem("user") !== JSON.stringify(response.data.user)
        ) {
          localStorage.clear();
          return;
        }
        const data = await response.data;
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
    if (
      routeAdmin.includes(window.location.pathname) &&
      JSON.parse(localStorage.getItem("user"))?.type !== "admin"
    ) {
      route.push("/");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
