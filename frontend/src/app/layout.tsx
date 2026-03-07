import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body className="bg-gray-50">

        <nav className="bg-blue-600 text-white p-4 flex justify-between">

          <h1 className="font-bold">
            Pokémon Center Admin
          </h1>

          <a href="/dashboard">
            Dashboard
          </a>

        </nav>

        <main className="max-w-6xl mx-auto mt-10">
          {children}
        </main>

      </body>
    </html>
  );
}