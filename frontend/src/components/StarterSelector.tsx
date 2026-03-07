"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function StarterSelector() {
  const { changeTheme } = useTheme();

  const starters = [
    {
      name: "Charmander",
      theme: "charmander",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      color: "#EA8B24",
    },
    {
      name: "Squirtle",
      theme: "squirtle",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      color: "#A1D9EF",
    },
    {
      name: "Bulbasaur",
      theme: "bulbasaur",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      color: "#7ECAAB",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] px-6">

      <h1 className="text-4xl font-bold mb-10 text-[var(--secondary)]">
        Escolha seu Pokémon inicial
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {starters.map((pokemon) => (

          <button
            key={pokemon.name}
            onClick={() => changeTheme(pokemon.theme)}
            className="bg-[var(--card)] p-6 rounded-xl shadow-lg hover:scale-105 transition transform flex flex-col items-center hover:scale-110 hover:rotate-1 transition-all duration-300"
          >

            <Image
              src={pokemon.img}
              alt={pokemon.name}
              width={200}
              height={200}
              className="mb-4"
            />

            <h2
              className="text-xl font-bold"
              style={{ color: pokemon.color }}
            >
              {pokemon.name}
            </h2>

          </button>

        ))}

      </div>

    </div>
  );
}