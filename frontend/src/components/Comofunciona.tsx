export function HowItWorks() {
  const steps = [
    "Escolha seu Pokémon inicial",
    "Crie sua conta",
    "Adicione Pokémons ao sistema",
    "Gerencie e visualize dados no dashboard"
  ];

  return (
    <section className="py-20 bg-white text-center px-8">

      <h2 className="text-3xl font-bold mb-12">
        Como funciona
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {steps.map((step, index) => (
          <div key={step} className="p-6">

            <div className="text-4xl font-bold text-(--primary)] mb-4">
              {index + 1}
            </div>

            <p className="text-gray-600">
              {step}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}