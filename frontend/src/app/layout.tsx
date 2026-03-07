import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg)]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}