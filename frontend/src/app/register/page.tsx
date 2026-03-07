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
    <div className="flex h-screen items-center justify-center">
      <form className="flex flex-col gap-4 w-80">
        <h1 className="text-2xl font-bold">Registro</h1>

        <input
          className="border p-2"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="bg-green-500 text-white p-2"
        >
          Criar conta
        </button>
      </form>
    </div>
  );
}