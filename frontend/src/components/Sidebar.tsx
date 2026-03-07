import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-700 text-white p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Pokémon Center</h1>

      <nav className="flex flex-col gap-4">
        <Link
          href="/dashboard"
          className="hover:bg-blue-600 p-2 rounded transition"
        >
          Dashboard
        </Link>

        <Link
          href="/pokemons/create"
          className="hover:bg-blue-600 p-2 rounded transition"
        >
          Adicionar Pokemon
        </Link>
      </nav>
    </aside>
  );
}