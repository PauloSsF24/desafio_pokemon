"use client";

import { useState } from "react";
import { apiFetch } from "@/services/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();

    try {
      const data = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!data.access_token) {
        alert("Email ou senha inválidos");
        return;
      }

      localStorage.setItem("token", data.access_token);

      router.push("/pokemons");

    } catch (err) {
      alert("Erro ao conectar com o servidor");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow w-80 space-y-4"
      >

        <h1 className="text-2xl font-bold text-center text-black">
          Login
        </h1>

        <input
          className="border p-2 w-full rounded text-black"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full rounded text-black"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
        >
          Entrar
        </button>

      </form>

    </div>
  );
}