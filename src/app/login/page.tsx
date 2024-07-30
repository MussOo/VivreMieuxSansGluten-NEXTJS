"use client";

import swal from "sweetalert";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    login(email, password).then((res) => {
      let message = "";
      if (res.error) {
        if (res.error === "User not found") {
          message = "email incorrect";
        } else if (res.error === "Invalid password") {
          message = "mot de passe incorrect";
        }

        swal({
          title: "Erreur",
          text: message,
          icon: "error",
          value: "retour",
        }).then((value) => {
          if (value === "retour") {
            window.location.href = "/login";
          }
        });
      } else {
        router.push("/");
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Se connecter</h1>
      <form
        className="flex flex-col space-y-4 mt-4 w-80"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded-lg "
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <a href="#" className="text-bleu-main opacity-50 hover:opacity-100">
          Mot de passe oublié ?
        </a>
        <button className="bg-jaune-main hover:bg-bleu-main transition-all text-white font-bold text-lg p-2 rounded-lg">
          Connexion
        </button>
      </form>
    </div>
  );
}
