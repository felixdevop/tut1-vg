import VideoGrid from "@/components/gallery/VideoGrid";
import type { GalleryItem } from "@/types";

const sampleGalleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "violendgroove — Live at Warehouse 23",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    platform: "youtube",
  },
  {
    id: "gal-2",
    title: "Deep House Mix — Summer 2025",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    platform: "youtube",
  },
  {
    id: "gal-3",
    title: "GROOVE VOL. 1 — Full Album",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789&color=%23a855f7&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    platform: "soundcloud",
  },
  {
    id: "gal-4",
    title: "Studio Session — Behind the Scenes",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    platform: "youtube",
  },
  {
    id: "gal-5",
    title: "Techno Essentials Mix",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987654321&color=%23a855f7&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
    platform: "soundcloud",
  },
  {
    id: "gal-6",
    title: "violendgroove — Festival Aftermovie",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
          Watch sets, listen to mixes, and experience the vibe.
        </p>
      </div>

      <VideoGrid items={sampleGalleryItems} />
    </div>
  );
}
