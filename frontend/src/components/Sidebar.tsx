"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <aside className="w-64 min-h-screen bg-[var(--primary)] text-white p-6 flex flex-col justify-between">

      <div>

        <h1 className="text-2xl font-bold mb-8">
          Pokémon Center
        </h1>

        <nav className="flex flex-col gap-3">

          <Link
            href="/dashboard"
            className="hover:bg-[var(--accent)] p-2 rounded transition"
          >
            Dashboard
          </Link>

          <Link
            href="/pokemons/create"
            className="hover:bg-[var(--accent)] p-2 rounded transition"
          >
            Adicionar Pokémon
          </Link>

        </nav>

      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 p-2 rounded transition mt-8"
      >
        Sair
      </button>

    </aside>
  );
}