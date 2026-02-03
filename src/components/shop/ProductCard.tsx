"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/constants";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group rounded-xl border border-border bg-surface transition-all hover:border-primary/50 hover:bg-surface-hover">
      {/* Image placeholder */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="flex h-full items-center justify-center text-4xl text-text-muted">
          {product.category === "music" ? "🎵" : product.category === "merch" ? "👕" : "🎧"}
        </div>

        {/* Favorite button */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute right-3 top-3 rounded-full bg-bg/60 p-2 backdrop-blur-sm transition-colors hover:bg-bg/80"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={isFavorite ? 0 : 1.5}
            className={`h-5 w-5 ${isFavorite ? "text-danger" : "text-text-muted"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
          {product.category}
        </p>
        <h3 className="mb-1 text-lg font-bold text-text">{product.name}</h3>
        <p className="mb-3 text-sm text-text-muted">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-text">
            {formatPrice(product.priceInCents)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
