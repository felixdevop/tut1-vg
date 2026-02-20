import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL,                   changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/events`,       changeFrequency: "weekly",  priority: 0.9 },
    { url: `${SITE_URL}/shop`,         changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`,      changeFrequency: "monthly", priority: 0.7 },
  ];
}
