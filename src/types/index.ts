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
  date: string; // ISO date string
  venue: string;
  location: string;
  ticketUrl?: string;
  description?: string;
}

export interface UserPreferences {
  favoriteProductIds: string[];
  favoriteEventIds: string[];
}
