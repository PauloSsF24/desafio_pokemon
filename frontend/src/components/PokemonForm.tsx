"use client";

import { useState } from "react";

export default function PokemonForm({ initialData, onSubmit }: any) {

  const [name, setName] = useState(initialData?.name || "");
  const [type, setType] = useState(initialData?.type || "");
  const [level, setLevel] = useState(initialData?.level || 1);
  const [hp, setHp] = useState(initialData?.hp || 10);
  const [pokedexNumber, setPokedexNumber] = useState(
    initialData?.pokedexNumber || 1
  );

  function handleSubmit(e: any) {
    e.preventDefault();

    onSubmit({
      name,
      type,
      level: Number(level),
      hp: Number(hp),
      pokedexNumber: Number(pokedexNumber),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow space-y-4 max-w-md text-black"
    >

      <h2 className="text-xl font-semibold">
        Dados do Pokémon
      </h2>

      <input
        className="border rounded p-2 w-full"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border rounded p-2 w-full"
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <input
        className="border rounded p-2 w-full"
        type="number"
        placeholder="Nível"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />

      <input
        className="border rounded p-2 w-full"
        type="number"
        placeholder="HP"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
      />

      <input
        className="border rounded p-2 w-full"
        type="number"
        placeholder="Número da Pokedex"
        value={pokedexNumber}
        onChange={(e) => setPokedexNumber(e.target.value)}
      />

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Salvar Pokémon
      </button>

    </form>
  );
}