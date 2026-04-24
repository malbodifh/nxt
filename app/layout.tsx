import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bytlane Studio | Desarrollo Web y Software en Costa Rica",
  description:
    "Bytlane Studio es un estudio premium de desarrollo web y software en Costa Rica. Creamos soluciones digitales a medida que impulsan el crecimiento de tu negocio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
