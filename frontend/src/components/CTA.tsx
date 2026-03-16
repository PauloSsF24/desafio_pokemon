export function CTA() {
  return (
    <section className="py-20 bg-[var(--primary)] text-white text-center">

      <h2 className="text-3xl font-bold mb-6">
        Pronto para começar sua jornada?
      </h2>

      <p className="mb-8">
        Crie sua conta e comece a gerenciar Pokémons agora mesmo.
      </p>

      <a
        href="/register"
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
      >
        Criar Conta
      </a>

    </section>
  );
}