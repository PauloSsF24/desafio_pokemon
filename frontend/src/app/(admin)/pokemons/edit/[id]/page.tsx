"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { apiFetch } from "@/services/api";
import PokemonForm from "@/components/PokemonForm";

export default function EditPokemon() {

  const params = useParams();
  const router = useRouter();

  const [pokemon, setPokemon] = useState<any>(null);

  async function load() {
    const data = await apiFetch(`/pokemons/${params.id}`);
    setPokemon(data);
  }

  async function handleUpdate(data: any) {
    await apiFetch(`/pokemons/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });

    router.push("/dashboard");
  }

  useEffect(() => {
    load();
  }, []);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="p-10">

      <h1 className="text-2xl mb-6">
        Editar Pokémon
      </h1>

      <PokemonForm
        initialData={pokemon}
        onSubmit={handleUpdate}
      />

    </div>
  );
}