"use client";

import PokemonForm from "@/components/PokemonForm";
import { apiFetch } from "@/services/api";
import { useRouter } from "next/navigation";

export default function CreatePokemon() {
  const router = useRouter();

  async function handleCreate(data: any) {
    await apiFetch("/pokemons", {
      method: "POST",
      body: JSON.stringify(data),
    });

    router.push("/pokemons");
  }

  return (
    <div className="p-10 text-black">
      <h1 className="text-2xl mb-6">Criar Pokémon</h1>

      <PokemonForm onSubmit={handleCreate} />
    </div>
  );
}