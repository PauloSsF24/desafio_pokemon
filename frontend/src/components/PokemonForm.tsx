"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";


type Pokemon = {
  id?: string;
  name: string;
  type: string;
  level: number;
  hp: number;
  pokedexNumber: number;
};

type Props = {
  initialData?: Pokemon;
  onSubmit: (data: Pokemon) => Promise<void>;
};

const pokemonTypes = [
  "Normal","Fire","Water","Electric","Grass","Ice",
  "Fighting","Poison","Ground","Flying","Psychic",
  "Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"
];

export default function PokemonForm({ initialData, onSubmit }: Props) {

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<Pokemon>({
    defaultValues: initialData || {
      name: "",
      type: "",
      level: 1,
      hp: 10,
      pokedexNumber: 1
    }
  });

  async function submit(data: Pokemon) {
    await onSubmit(data);

    toast.success("Pokémon salvo com sucesso!");
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit(submit)}
      className="
      bg-[var(--card)]
      p-6
      rounded-xl
      shadow-md
      space-y-5
      max-w-md
      text-[var(--secondary)]
      "
    >
      <h2 className="text-xl font-semibold">
        {initialData ? "Editar Pokémon" : "Novo Pokémon"}
      </h2>

      {/* Nome */}
      <div>
        <label className="text-sm font-medium">
          Nome
        </label>

        <input
          {...register("name", { required: true })}
          className="border rounded p-2 w-full mt-1"
          placeholder="Ex: Pikachu"
        />
      </div>

      {/* Tipo */}
      <div>
        <label className="text-sm font-medium">
          Tipo
        </label>

        <select
          {...register("type", { required: true })}
          className="border rounded p-2 w-full mt-1"
        >
          <option value="">Selecione</option>

          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Nível */}
      <div>
        <label className="text-sm font-medium">
          Nível
        </label>

        <input
          type="number"
          {...register("level", { valueAsNumber: true })}
          className="border rounded p-2 w-full mt-1"
        />
      </div>

      {/* HP */}
      <div>
        <label className="text-sm font-medium">
          HP
        </label>

        <input
          type="number"
          {...register("hp", { valueAsNumber: true })}
          className="border rounded p-2 w-full mt-1"
        />
      </div>

      {/* Pokédex */}
      <div>
        <label className="text-sm font-medium">
          Número da Pokédex
        </label>

        <input
          type="number"
          {...register("pokedexNumber", { valueAsNumber: true })}
          className="border rounded p-2 w-full mt-1"
        />
      </div>

      <button
        disabled={isSubmitting}
        className="
        bg-[var(--primary)]
        text-white
        px-4
        py-2
        rounded
        w-full
        font-semibold
        hover:opacity-90
        transition
        disabled:opacity-50
        "
      >
        {isSubmitting ? "Salvando..." : "Salvar Pokémon"}
      </button>

    </motion.form>
  );
}