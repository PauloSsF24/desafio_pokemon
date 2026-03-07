import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[var(--primary)] text-white shadow">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold">
          Pokémon Center
        </h1>

        <div className="flex gap-6 font-medium">

          <Link href="/" className="hover:opacity-80 transition">
            Home
          </Link>

          <Link href="/login" className="hover:opacity-80 transition">
            Login
          </Link>

          <Link href="/register" className="hover:opacity-80 transition">
            Registrar
          </Link>

        </div>

      </div>

    </nav>
  );
}