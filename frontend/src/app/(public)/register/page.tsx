"use client";

import { useState } from "react";
import { apiFetch } from "@/services/api";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: any) {
    e.preventDefault();

    await apiFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    router.push("/login");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[var(--bg)]">
      <form className="bg-[var(--card)] p-8 rounded-lg shadow w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center text-[var(--secondary)]">Registro</h1>

        <input
          className="border p-2 w-full rounded text-[var(--secondary)]"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full rounded text-[var(--secondary)]"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full rounded text-[var(--secondary)]"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-[var(--primary)] hover:opacity-90 text-white w-full py-2 rounded"
        >
          Criar conta
        </button>
      </form>
    </div>
  );
}