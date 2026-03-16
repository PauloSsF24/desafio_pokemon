"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function StarterSelector() {

  const { changeTheme, theme } = useTheme();

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

      <h1 className="text-4xl font-bold mb-10 text-[var(--primary)]">
        Escolha seu Pokémon inicial
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {starters.map((pokemon) => (

          <motion.button
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            key={pokemon.name}
            onClick={() => changeTheme(pokemon.theme)}
            className={`
              bg-[var(--card)]
              p-6
              rounded-xl
              shadow-lg
              flex
              flex-col
              items-center
              transition-all
              duration-300
              ${theme === pokemon.theme ? "ring-4 ring-[var(--primary)]" : ""}
            `}
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

          </motion.button>

        ))}

      </div>

    </div>
  );
}