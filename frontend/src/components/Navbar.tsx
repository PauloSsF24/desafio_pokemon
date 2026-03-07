import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold">
          Pokémon Center
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Registrar</Link>
        </div>

      </div>
    </nav>
  );
}