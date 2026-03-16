import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6 text-[var(--primary)]">
          Criar Conta
        </h1>

        <RegisterForm />

      </div>

    </div>
  );
}