"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/services/api";
import Link from "next/link";

export default function PokemonsPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await apiFetch("/pokemons");
      setPokemons(data);
    }

    load();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-[var(--secondary)]">Pokémons</h1>

        <Link
          href="/pokemons/create"
          className="bg-[var(--primary)] text-white px-4 py-2 rounded"
        >
          Novo Pokémon
        </Link>
      </div>

      <div className="space-y-4">
        {pokemons.map((pokemon: any) => (
          <div
            key={pokemon.id}
            className="bg-[var(--card)] p-4 rounded shadow flex justify-between"
          >
            <div>
              <p className="font-bold">{pokemon.name}</p>
              <p>Tipo: {pokemon.type}</p>
            </div>

            <Link
              href={`/pokemons/edit/${pokemon.id}`}
              className="text-[var(--primary)]"
            >
              Editar
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}