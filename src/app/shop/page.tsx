"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_KEYS } from "@/lib/constants";
import ProductGrid from "@/components/shop/ProductGrid";
import type { Product, UserPreferences } from "@/types";

const sampleProducts: Product[] = [
  {
    id: "prod-1",
    name: "violendgroove Logo Tee",
    description: "Premium cotton tee with the iconic logo print.",
    priceInCents: 3500,
    image: "/products/tee.jpg",
    category: "merch",
  },
  {
    id: "prod-2",
    name: "Midnight Sessions Hoodie",
    description: "Heavyweight hoodie for late-night studio vibes.",
    priceInCents: 6500,
    image: "/products/hoodie.jpg",
    category: "merch",
  },
  {
    id: "prod-3",
    name: "GROOVE VOL. 1 — Vinyl",
    description: "Limited edition 12\" vinyl. First press.",
    priceInCents: 2800,
    image: "/products/vinyl.jpg",
    category: "music",
  },
  {
    id: "prod-4",
    name: "GROOVE VOL. 2 — Digital",
    description: "High-quality WAV download. 10 tracks.",
    priceInCents: 1200,
    image: "/products/digital.jpg",
    category: "music",
  },
  {
    id: "prod-5",
    name: "VG Snapback Cap",
    description: "Structured snapback with embroidered logo.",
    priceInCents: 3000,
    image: "/products/cap.jpg",
    category: "accessories",
  },
  {
    id: "prod-6",
    name: "Studio Sticker Pack",
    description: "Set of 5 die-cut stickers. Waterproof.",
    priceInCents: 800,
    image: "/products/stickers.jpg",
    category: "accessories",
  },
];

const defaultPrefs: UserPreferences = {
  favoriteProductIds: [],
  favoriteEventIds: [],
};

export default function ShopPage() {
  const [prefs, setPrefs] = useLocalStorage<UserPreferences>(
    STORAGE_KEYS.FAVORITES,
    defaultPrefs
  );

  const toggleFavorite = (productId: string) => {
    setPrefs((prev) => {
      const ids = prev.favoriteProductIds;
      return {
        ...prev,
        favoriteProductIds: ids.includes(productId)
          ? ids.filter((id) => id !== productId)
          : [...ids, productId],
      };
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-black tracking-tight text-text">
          Shop
        </h1>
        <p className="text-text-muted">
          Exclusive merch, vinyl, and accessories. Rep the groove.
        </p>
      </div>

      <ProductGrid
        products={sampleProducts}
        favoriteIds={prefs.favoriteProductIds}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
