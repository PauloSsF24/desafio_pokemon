"use client"

import { motion } from "framer-motion"
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export function Hero() {

  const { theme } = useTheme();
  const pokeballColors: Record<string, string> = {
  charmander: "#EA8B24",
  squirtle: "#4FC3F7",
  bulbasaur: "#66BB6A"
};

  return (
    <section className="relative bg-gray-50 py-28 overflow-hidden">

      {/* Pokebola animada no fundo */}

      <Image
        src="/pokeball.svg"
        alt="pokeball background"
        width={700}
        height={700}
        className="
          absolute
          right-[-250px]
          top-[-100px]
          opacity-10
          animate-spin-slow
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <motion.div
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >

          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Gerencie Pokémons de Centros de Pesquisa
          </h1>

          <p className="text-gray-600 mb-8">
            Sistema completo para registro, monitoramento e controle de
            Pokémons em Centros Pokémon.
          </p>

          <div className="flex gap-4 mb-10">

            <a 
              href="/register"
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Começar Agora
            </a>

            <a 
              href="#features"
              className="border px-6 py-3 rounded-lg"
            >
              Ver Recursos
            </a>

          </div>

          <div className="flex gap-10">

            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)]">124</h3>
              <p className="text-sm text-gray-500">Pokémons registrados</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--primary)]">18</h3>
              <p className="text-sm text-gray-500">Treinadores</p>
            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{opacity:0, x:40}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.6}}
        >
        </motion.div>

      </div>

    </section>
  )
}