"use client"

import { useEffect, useState } from "react"
import { apiFetch } from "@/services/api"

type Stats = {
  pokemons: number
  trainers: number
  capturedToday: number
  types: number
}

export default function DashboardCards(){

  const [stats,setStats] = useState<Stats | null>(null)

  // 👇 PASSO 2 FICA AQUI
  async function fetchStats(){

    const pokemons = await apiFetch("/pokemons")
    const users = await apiFetch("/auth/users")

    const today = new Date().toDateString()

    const capturedToday = pokemons.filter((p:any)=>
      new Date(p.createdAt).toDateString() === today
    )

    const types = new Set(pokemons.map((p:any)=>p.type))

    setStats({
      pokemons: pokemons.length,
      trainers: users.length,
      capturedToday: capturedToday.length,
      types: types.size
    })
  }

  // chama a função quando o componente carrega
  useEffect(()=>{
    fetchStats()
  },[])

  if(!stats){
    return <p>Carregando...</p>
  }

  const cards = [
    {title:"Pokémons registrados", value:stats.pokemons},
    {title:"Treinadores ativos", value:stats.trainers},
    {title:"Capturados hoje", value:stats.capturedToday},
    {title:"Tipos catalogados", value:stats.types},
  ]

  return(
    <div className="grid md:grid-cols-4 gap-6 mb-10">
      {cards.map((stat)=>(
        <div
          key={stat.title}
          className="
          bg-[var(--card)]
          p-6
          rounded-xl
          shadow
          hover:shadow-lg
          transition
          "
        >
          <p className="text-sm text-gray-500">
            {stat.title}
          </p>

          <h2 className="text-3xl font-bold text-[var(--primary)]">
            {stat.value}
          </h2>

        </div>
      ))}
    </div>
  )
}