import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">

      <section className="bg-blue-600 text-white p-16 rounded-xl text-center shadow">

        <h1 className="text-5xl font-bold mb-4">
          Pokémon Center
        </h1>

        <p className="text-lg mb-8">
          Sistema para gerenciar Pokémons de treinadores.
        </p>

        <Link
          href="/login"
          className="bg-white text-blue-600 px-6 py-3 rounded font-semibold"
        >
          Acessar Sistema
        </Link>

      </section>


      <section className="grid md:grid-cols-3 gap-8">

        <div className="bg-blue-600 p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            Gerencie Pokémons
          </h2>
          <p>
            Crie, edite e remova Pokémons facilmente.
          </p>
        </div>

        <div className="bg-blue-600 p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            Autenticação Segura
          </h2>
          <p>
            Sistema protegido com JWT.
          </p>
        </div>

        <div className="bg-blue-600 p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-2">
            Pokédex Completa
          </h2>
          <p>
            Visualize todos os Pokémons cadastrados.
          </p>
        </div>

      </section>

    </div>
  );
}