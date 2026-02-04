import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "violendgroove — Music. Beats. Culture.",
  description:
    "violendgroove — DJ, producer, and creative. Shop merch, explore the gallery, and find upcoming events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-bg text-text antialiased`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
