import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "violendgroove — Music. Beats. Culture.",
  description:
    "violendgroove — DJ, producer, and creative. Shop merch, explore the gallery, and find upcoming events.",
  icons: {
    icon: "/VG-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-bg text-text antialiased`}>
        {/* Fixed backdrop */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/verzus/vzspring3.jpeg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
