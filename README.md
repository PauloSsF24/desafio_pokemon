# 🧢 Pokémon Center – Fullstack Challenge

Aplicação Fullstack desenvolvida como desafio técnico. O projeto consiste em uma **Pokédex com painel administrativo**, onde usuários podem gerenciar Pokémons e personalizar a interface escolhendo seu **Pokémon inicial**, que define o tema visual da aplicação.

---

# 🚀 Tecnologias Utilizadas

## Frontend

* Next.js (App Router)
* React
* TypeScript
* TailwindCSS
* Context API

## Backend

* Node.js
* NestJS
* JWT Authentication
* REST API

## Banco de Dados

* PostgreSQL
* Prisma ORM
* Supabase

---

## Demo

https://desafio-pokemon-omega.vercel.app/

# 🎨 Sistema de Temas (Diferencial)

Ao acessar a página inicial, o usuário pode entender melhorar as funcionalidades e escolher seu **Pokémon inicial**, que altera toda a paleta de cores do sistema.

### 🌿 Bulbasaur

Tema verde inspirado no tipo planta.

### 🔥 Charmander

Tema laranja inspirado no tipo fogo.

### 🌊 Squirtle

Tema azul inspirado no tipo água.

A escolha do Pokémon:

* é salva no **localStorage**
* altera o atributo `data-theme` no `<html>`
* atualiza automaticamente **todas as páginas do sistema**

Isso permite que:

* Login
* Registro
* Dashboard
* CRUD de Pokémons

utilizem o mesmo tema selecionado.

---

# 📦 Funcionalidades

### 🔐 Autenticação

* Registro de usuário
* Login com JWT
* Persistência do token no navegador

### 🧑‍💻 Painel Administrativo

* Dashboard com listagem de Pokémons
* CRUD completo

Operações disponíveis:

* Criar Pokémon
* Editar Pokémon
* Deletar Pokémon
* Listar Pokémons

### 📊 Informações de cada Pokémon

* Nome
* Tipo
* Nível
* HP
* Número da Pokédex

---

# 🖥 Estrutura do Projeto

```
src/
├── app/
│ ├── (public)/
│ │ ├── page.tsx
│ │ ├── login/
│ │ │ └── page.tsx
│ │ └── register/
│ │ ├── page.tsx
│ │ └── layout.tsx
│ ├── (admin)/
│ │ ├── dashboard/
│ │ │ └── page.tsx
│ │ └── pokemons/
│ │ ├── page.tsx
│ │ ├── layout.tsx
│ │ ├── create/
│ │ │ └── page.tsx
│ │ └── edit/[id]/
│ │ └── page.tsx
│ ├── api/
│ │ └── stats/
│ │ └── route.ts
│ ├── layout.tsx
│ ├── globals.css
│ └── favicon.ico
├── components/
│ ├── auth/
│ │ ├── LoginForm.tsx
│ │ └── RegisterForm.tsx
│ ├── dashboard/
│ │ ├── DashboardCards.tsx
│ │ ├── DashboardHeader.tsx
│ │ └── PokemonTable.tsx
│ ├── Navbar.tsx
│ ├── Sidebar.tsx
│ ├── PokemonForm.tsx
│ ├── StarterSelector.tsx
│ ├── Hero.tsx
│ ├── CTA.tsx
│ ├── Features.tsx
│ └── Comofunciona.tsx
├── context/
│ └── ThemeContext.tsx
├── hooks/
│ └── useAuth.ts
├── lib/
│ └── pokemonTypes.ts
├── services/
│ └── api.ts
└── types/
└── pokemon.ts
(+ __tests__/ na raiz do src)
```

---

# ⚙️ Como rodar o projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/PauloSsF24/desafio_pokemon.git
```

---

## 2️⃣ Instalar dependências

```
npm install
```

ou

```
yarn install
```

---

## 3️⃣ Rodar a aplicação

```
Para rodar o backend

npm run start:dev

Para rodar o frontend

npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3001
```

---

# 🧠 Decisões de Arquitetura

Algumas decisões importantes tomadas no projeto:

### Context API para temas

Utilizado para gerenciar globalmente o tema escolhido pelo usuário.

### CSS Variables

Permite alterar dinamicamente cores do sistema sem re-renderização de componentes.

### Separação de layouts

Utilização de diferentes layouts para:

* páginas públicas
* painel administrativo

### Componentização

Componentes reutilizáveis como:

* Navbar
* Sidebar
* PokemonForm

---

## Testes

O projeto possui testes automatizados utilizando Jest e React Testing Library.

Para rodar os testes:

```bash
npm run test

# 🏗 Possíveis melhorias futuras

* Paginação de Pokémons
* Busca por nome ou tipo
* Upload de imagem de Pokémon
* Perfil de usuário

---

# 👨‍💻 Autor

Desenvolvido por **Paulo Sérgio** como desafio técnico Fullstack.

---
