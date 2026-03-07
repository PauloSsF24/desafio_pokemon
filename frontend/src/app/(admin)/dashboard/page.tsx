"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { apiFetch } from "@/services/api";
import Link from "next/link";

export default function Dashboard() {
  useAuth();

  const [pokemons, setPokemons] = useState([]);

  async function load() {
    const data = await apiFetch("/pokemons");
    setPokemons(data);
  }

  async function deletePokemon(id: string) {
    await apiFetch(`/pokemons/${id}`, {
      method: "DELETE",
    });

    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-6 text-[var(--secondary)]">

      <h1 className="text-3xl font-bold text-[var(--secondary)]">
        Pokédex Admin
      </h1>

      <div className="bg-[var(--card)] rounded-lg shadow p-6">

        <table className="w-full">

          <thead>
            <tr className="text-left border-b">
              <th className="py-3">Nome</th>
              <th>Tipo</th>
              <th>Nível</th>
              <th>HP</th>
              <th>Pokedex</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {pokemons.map((p:any) => (

              <tr
                key={p.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-3 font-medium">
                  {p.name}
                </td>

                <td>
                  <span className="bg-[var(--accent)] text-white px-2 py-1 rounded text-sm">
                    {p.type}
                  </span>
                </td>

                <td>{p.level}</td>

                <td>{p.hp}</td>

                <td>#{p.pokedexNumber}</td>

                <td className="flex gap-3">

                  <Link
                    href={`/pokemons/edit/${p.id}`}
                    className="text-white font-bold bg-blue-500 hover:bg-blue-500 p-1 rounded transition"
                  >
                    Editar
                  </Link>

                  <button
                    onClick={() => deletePokemon(p.id)}
                    className="text-white font-bold bg-red-500 hover:bg-red-500 p-1 rounded transition"
                  >
                    Excluir
                  </button>

                </td>

              </tr>

            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}