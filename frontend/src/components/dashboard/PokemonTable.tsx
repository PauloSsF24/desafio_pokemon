"use client"

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { apiFetch } from "@/services/api";
import Link from "next/link";
import { toast } from "sonner";

type Pokemon = {
  id: string;
  name: string;
  type: string;
  level: number;
};

export default function PokemonTable(){
useAuth();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function load() {
    const data = await apiFetch("/pokemons");
    setPokemons(data);
  }

  async function deletePokemon(id: string) {

    const confirm = window.confirm("Tem certeza que deseja deletar?");

    if (!confirm) return;

    await apiFetch(`/pokemons/${id}`, {
      method: "DELETE",
    });

    toast.success("Pokémon deletado com sucesso!");
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return(

    <div className="bg-[var(--card)] rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        Pokémons registrados
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="py-2">Nome</th>
            <th>Tipo</th>
            <th>Nível</th>
            <th>Ações</th>

          </tr>

        </thead>

        <tbody>

          {pokemons.map((pokemon)=>(
            
            <tr
              key={pokemon.name}
              className="border-b hover:bg-gray-50"
            >

              <td className="py-3">
                {pokemon.name}
              </td>

              <td>
                {pokemon.type}
              </td>

              <td>
                {pokemon.level}
              </td>

              <td className="flex gap-2">

                  <Link
                    href={`/pokemons/edit/${pokemon.id}`}
                    className="text-white font-bold bg-blue-500 hover:bg-blue-500 p-1 rounded transition"
                  >
                    Editar
                  </Link>

                <button 
                  onClick={() => deletePokemon(pokemon.id)}
                  className="text-red-500">
                  Excluir
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}