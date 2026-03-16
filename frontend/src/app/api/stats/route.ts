import { NextResponse } from "next/server";

export async function GET() {

  const pokemonsRes = await fetch("http://localhost:3000/api/pokemons");
  const pokemons = await pokemonsRes.json();

  const stats = {
    pokemons: pokemons.length,
    capturedToday: 7
  };

  return NextResponse.json(stats);
}