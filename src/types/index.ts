export interface Product {
  id: string;
  name: string;
  description: string;
  priceInCents: number;
  image: string;
  category: "merch" | "music" | "accessories";
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  embedUrl: string;
  platform: "youtube" | "soundcloud";
  thumbnail?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO date string, e.g. "2026-03-15"
  venue: string;
  location: string; // e.g. "Berlin, DE"
  ticketUrl?: string; // optional link to tickets
}

export interface UserPreferences {
  favoriteProductIds: string[];
}
