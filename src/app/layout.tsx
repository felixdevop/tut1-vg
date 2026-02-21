import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CookieBanner from "@/components/layout/CookieBanner";
import { SITE_URL, SITE_NAME, SOCIAL_INSTAGRAM, SOCIAL_YOUTUBE } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Violendgroove — Vinyl Only House & Techno Collective",
    template: "%s | Violendgroove",
  },
  description: "Violendgroove is a Graz-based vinyl-only house and techno collective connecting nightlife, fashion, and underground culture across Europe.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Violendgroove — Vinyl Only House & Techno Collective",
    description: "Violendgroove is a Graz-based vinyl-only house and techno collective connecting nightlife, fashion, and underground culture across Europe.",
    url: SITE_URL,
    images: [{ url: "/verzus/vzspring3.jpeg", width: 1200, height: 800, alt: "violendgroove" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Violendgroove — Vinyl Only House & Techno Collective",
    description: "Violendgroove is a Graz-based vinyl-only house and techno collective connecting nightlife, fashion, and underground culture across Europe.",
    images: ["/verzus/vzspring3.jpeg"],
  },
  icons: { icon: "/VG-favicon.svg" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
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
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "violendgroove",
              description: "Violendgroove is a Graz-based vinyl-only house and techno collective connecting nightlife, fashion, and underground culture across Europe.",
              url: SITE_URL,
              logo: `${SITE_URL}/vglogo.svg`,
              sameAs: [SOCIAL_INSTAGRAM, SOCIAL_YOUTUBE, "https://ra.co/promoters/116162"],
            }),
          }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <CookieBanner />
      </body>
    </html>
  );
}
