import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu Primeiro App",
  description: "CRIADO POR LAURA FAUSTINO CACETE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// informações sobre sua pagina, heading, title page e mais
