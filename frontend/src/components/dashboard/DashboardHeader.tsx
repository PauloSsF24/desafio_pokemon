"use client"

import { useRouter } from "next/navigation"

export default function DashboardHeader(){

  const router = useRouter()

  return(

    <div className="flex items-center justify-between mb-8">

      <div>

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Controle dos Pokémons registrados
        </p>

      </div>

      <button
        onClick={() => router.push("/pokemons/create")}
        className="
        bg-[var(--primary)]
        text-white
        px-5
        py-2
        rounded-lg
        font-semibold
        hover:opacity-90
        transition
        "
      >
        + Novo Pokémon
      </button>

    </div>

  )

}