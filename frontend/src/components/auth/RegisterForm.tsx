"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {

  const router = useRouter();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");

  async function handleSubmit(e:React.FormEvent){

    e.preventDefault()

    setError("")
    setSuccess("")

    if(!name || !email || !password || !confirmPassword){
      setError("Preencha todos os campos.")
      return
    }

    if(password.length < 6){
      setError("A senha precisa ter pelo menos 6 caracteres.")
      return
    }

    if(password !== confirmPassword){
      setError("As senhas não coincidem.")
      return
    }

    try{

      setLoading(true)

      const res = await fetch("http://localhost:3000/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      })

      if(!res.ok){
        throw new Error("Erro ao criar conta.")
      }

      setSuccess("Conta criada com sucesso!")

      setTimeout(()=>{
        router.push("/login")
      },1500)

    }catch(err:any){

      setError(err.message)

    }finally{

      setLoading(false)

    }

  }

  return(

    <form
      onSubmit={handleSubmit}
      className="bg-[var(--card)] p-8 rounded-xl shadow-lg flex flex-col gap-4"
    >

      {error && (
        <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 text-green-600 text-sm p-3 rounded-lg">
          {success}
        </div>
      )}

      <div className="flex flex-col gap-1">

        <label className="text-sm font-medium">
          Nome
        </label>

        <input
          type="text"
          placeholder="Ash Ketchum"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

      </div>

      <div className="flex flex-col gap-1">

        <label className="text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="ash@pokemon.com"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

      </div>

      <div className="flex flex-col gap-1">

        <label className="text-sm font-medium">
          Senha
        </label>

        <input
          type="password"
          placeholder="********"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

      </div>

      <div className="flex flex-col gap-1">

        <label className="text-sm font-medium">
          Confirmar senha
        </label>

        <input
          type="password"
          placeholder="********"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="
          bg-[var(--primary)]
          text-white
          py-2
          rounded-lg
          font-semibold
          hover:opacity-90
          transition
          disabled:opacity-50
        "
      >

        {loading ? "Criando conta..." : "Criar conta"}

      </button>

      <p className="text-sm text-center text-gray-500">

        Já tem conta?{" "}
        <a
          href="/login"
          className="text-[var(--primary)] font-medium"
        >
          Fazer login
        </a>

      </p>

    </form>

  )
}