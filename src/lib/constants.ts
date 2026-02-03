export const STORAGE_KEYS = {
  CART: "violendgroove-cart",
  FAVORITES: "violendgroove-favorites",
} as const;

export const SITE = {
  name: "violendgroove",
  description: "Music. Beats. Culture.",
  url: "https://violendgroove.com",
} as const;

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
