import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "sonner";
import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg)]">
        <ThemeProvider>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}