import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center text-[var(--primary)]">
          Entrar no Pokémon Center
        </h1>

        <LoginForm />

      </div>

    </div>
  );
}