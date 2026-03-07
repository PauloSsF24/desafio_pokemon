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
    <div className="p-10">
      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Pokédex Admin
        </h1>

        <Link
          href="/pokemons/create"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Novo Pokémon
        </Link>

      </div>

      <table className="w-full border">

        <thead className="bg-gray-100">
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Nível</th>
            <th>HP</th>
            <th>Pokedex</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {pokemons.map((p: any) => (
            <tr key={p.id}>

              <td>{p.name}</td>
              <td>{p.type}</td>
              <td>{p.level}</td>
              <td>{p.hp}</td>
              <td>{p.pokedexNumber}</td>

              <td className="flex gap-2">

                <Link
                  href={`/pokemons/edit/${p.id}`}
                  className="text-blue-500"
                >
                  Editar
                </Link>

                <button
                  onClick={() => deletePokemon(p.id)}
                  className="text-red-500"
                >
                  Excluir
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}