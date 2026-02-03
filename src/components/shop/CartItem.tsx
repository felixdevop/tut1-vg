"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/constants";
import type { CartItem as CartItemType } from "@/types";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-3">
      {/* Thumbnail */}
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl">
        {item.product.category === "music" ? "🎵" : item.product.category === "merch" ? "👕" : "🎧"}
      </div>

      {/* Details */}
      <div className="flex-1 overflow-hidden">
        <h4 className="truncate text-sm font-semibold text-text">
          {item.product.name}
        </h4>
        <p className="text-sm text-text-muted">
          {formatPrice(item.product.priceInCents)}
        </p>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-primary hover:text-primary"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="w-6 text-center text-sm font-medium text-text">
          {item.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:border-primary hover:text-primary"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.product.id)}
        className="text-text-muted transition-colors hover:text-danger"
        aria-label="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
