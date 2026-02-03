"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/constants";
import CartItem from "./CartItem";

export function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, totalPriceInCents, clearCart } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-bg transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-lg font-bold text-text">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-text-muted transition-colors hover:text-text"
            aria-label="Close cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-text-muted">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-text-muted">Total</span>
              <span className="text-xl font-bold text-text">
                {formatPrice(totalPriceInCents)}
              </span>
            </div>
            <button className="mb-2 w-full rounded-lg bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary-hover">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full rounded-lg border border-border py-2 text-sm text-text-muted transition-colors hover:border-danger hover:text-danger"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
