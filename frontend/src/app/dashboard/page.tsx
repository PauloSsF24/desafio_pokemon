"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/services/api";

export default function Dashboard() {
  const [pokemons, setPokemons] = useState<any[]>([]);

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
      <h1 className="text-3xl mb-6">Pokédex Admin</h1>

      <table className="w-full border">
        <thead>
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
          {pokemons.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.type}</td>
              <td>{p.level}</td>
              <td>{p.hp}</td>
              <td>{p.pokedexNumber}</td>

              <td>
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