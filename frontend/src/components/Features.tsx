import { Database, Palette, Cpu, BarChart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Database,
      title: "CRUD Completo",
      description: "Crie, visualize e gerencie Pokémons facilmente."
    },
    {
      icon: Palette,
      title: "Tema Dinâmico",
      description: "Escolha seu Pokémon inicial e personalize o tema."
    },
    {
      icon: Cpu,
      title: "API Moderna",
      description: "Backend robusto com NestJS."
    },
    {
      icon: BarChart,
      title: "Dashboard",
      description: "Visualize dados e estatísticas."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white px-8">
      <h2 className="text-3xl font-bold text-center mb-12">
        Recursos da Plataforma
      </h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => {
          const Icon = feature.icon

          return (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition"
            >

              <Icon className="text-[var(--primary)] mb-4" size={28}/>

              <h3 className="font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>

            </div>
          )
        })}
      </div>
    </section>
  );
}