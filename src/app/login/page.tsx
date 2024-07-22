"use client";

import useUsers from "../hooks/useUsers";

export default function LoginPage() {
  const { users, isLoading, isError } = useUsers();

  console.log(users);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Se connecter</h1>
      <form className="flex flex-col space-y-4 mt-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded-lg"
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
          Se connecter
        </button>
      </form>
    </div>
  );
}
