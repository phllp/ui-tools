import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VUZIX Gamelab",
  description: "Demo de ferramentas de UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* HEADER */}
        <nav className="bg-purple-800 w-full h-14 flex items-center px-8 justify-between shadow-md">
          <span className="text-yellow-400 font-bold text-lg">
            Gamelab VUZIX + YOLO
          </span>
          <div className="flex gap-6">
            <a href="/" className="text-white hover:text-yellow-400 transition">
              Início
            </a>
            <a
              href="/projetos"
              className="text-yellow-400 font-semibold border-b-2 border-yellow-400"
            >
              Projetos
            </a>
            <a href="#" className="text-white hover:text-yellow-400 transition">
              Contato
            </a>
          </div>
        </nav>
        {children}

        {/* FOOTER */}
        <footer className="bg-purple-900 w-full py-4 flex flex-col items-center text-gray-300 text-sm">
          <p>
            © {new Date().getFullYear()} Gamelab. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-yellow-400 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              GitHub
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Sobre
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
