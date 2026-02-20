import VideoGrid from "@/components/gallery/VideoGrid";
import type { Metadata } from "next";
import type { GalleryItem } from "@/types";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Watch DJ sets and mixes by violendgroove — YouTube video picks of live performances and highlights.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | violendgroove",
    description: "Watch DJ sets and mixes by violendgroove.",
    url: `${SITE_URL}/gallery`,
  },
};

const sampleGalleryItems: GalleryItem[] = [
    {
    id: "gal-1",
    title: "Tokyo Drift: 1morning",
    embedUrl: "https://www.youtube.com/embed/7HT5Wf9v9GE?si=t2a4z4IDcgNmsE6K",
    platform: "youtube",
  },
    {
    id: "gal-2",
    title: "Springfestival 2024 - Laure Croft vs. Slin",
    embedUrl: "https://www.youtube.com/embed/F0biNxmhNeE?si=6rucxw2ynNXN1YIQ",
    platform: "youtube",
  },
   {
    id: "gal-3",
    title: "DJ VK & Thommy Coconut @ postgarage - 100% original Tracks",
   embedUrl: "https://www.youtube.com/embed/MKMg-Wwwm9U?si=1rXeS4iL-qu-aN5i",
    platform: "youtube",
  },

 
  {
    id: "gal-4",
    title: "VG NYC: Frankie Bones (S1Brooklyn)",
    embedUrl: "https://www.youtube.com/embed/Za1C2_a6Zb0?si=WtWpHPsvO0iDbrBd",
    platform: "youtube",
  },
  

];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-black tracking-tight text-text">
          Gallery
        </h1>
        <p className="text-text-muted">
          Youtube picks of our favorite sets. 
        </p>
      </div>

      <VideoGrid items={sampleGalleryItems} />
    </div>
  );
}
