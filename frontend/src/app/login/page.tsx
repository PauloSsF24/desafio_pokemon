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

    const data = await apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    localStorage.setItem("token", data.access_token);

    router.push("/dashboard");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-80"
      >
        <h1 className="text-2xl font-bold">Login</h1>

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

        <button className="bg-blue-500 text-white p-2">
          Entrar
        </button>
      </form>
    </div>
  );
}