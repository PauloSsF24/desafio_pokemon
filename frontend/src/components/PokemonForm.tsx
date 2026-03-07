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
      className="flex flex-col gap-4 max-w-md"
    >
      <input
        className="border p-2"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2"
        placeholder="Tipo"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <input
        className="border p-2"
        type="number"
        placeholder="Nível"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      />

      <input
        className="border p-2"
        type="number"
        placeholder="HP"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
      />

      <input
        className="border p-2"
        type="number"
        placeholder="Pokedex Number"
        value={pokedexNumber}
        onChange={(e) => setPokedexNumber(e.target.value)}
      />

      <button className="bg-blue-500 text-white p-2 rounded">
        Salvar
      </button>
    </form>
  );
}