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
  image?: string; // e.g. "/events/verzus-1.jpg"
}
