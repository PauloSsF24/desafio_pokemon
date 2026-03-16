"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    try {

      setLoading(true);

      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      if (!res.ok) {
        throw new Error("Email ou senha inválidos");
      }

      const data = await res.json()

      if (!data.access_token) {
        throw new Error("Token não recebido do servidor")
      }

      localStorage.setItem("token", data.access_token)

      router.push("/dashboard")

    } catch (err: any) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  }

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-[var(--card)] p-8 rounded-xl shadow-lg flex flex-col gap-4"
    >

      {error && (
        <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-1">

        <label className="text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="seu@email.com"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

      </div>

      <div className="flex flex-col gap-1">

        <label className="text-sm font-medium">
          Senha
        </label>

        <input
          type="password"
          placeholder="********"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="
          bg-[var(--primary)]
          text-white
          py-2
          rounded-lg
          font-semibold
          hover:opacity-90
          transition
          disabled:opacity-50
        "
      >

        {loading ? "Entrando..." : "Entrar"}

      </button>

      <p className="text-sm text-center text-gray-500">

        Não tem conta?{" "}
        <a
          href="/register"
          className="text-[var(--primary)] font-medium"
        >
          Criar conta
        </a>

      </p>

    </form>
  );
}