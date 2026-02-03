import VideoGrid from "@/components/gallery/VideoGrid";
import type { GalleryItem } from "@/types";

const sampleGalleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "violendgroove — Live from Vienna",
    embedUrl: "https://www.youtube.com/embed/NIxtVibuNz4?si=G8Sjb2BeAXOZnZ58",
    platform: "youtube",
  },
  {
    id: "gal-2",
    title: "Frankie Bones at VG presents S1Brooklyn, NYC",
   embedUrl: "https://www.youtube.com/embed/NIxtVibuNz4?si=G8Sjb2BeAXOZnZ58",
    platform: "youtube",
  },
  {
    id: "gal-3",
    title: "GROOVE VOL. 1 — Full Album",
    embedUrl: "https://www.youtube.com/embed/NIxtVibuNz4?si=G8Sjb2BeAXOZnZ58",
    platform: "soundcloud",
  },
  {
    id: "gal-4",
    title: "Bright O at VG Postgarage",
embedUrl: "https://www.youtube.com/embed/NIxtVibuNz4?si=G8Sjb2BeAXOZnZ58",
    platform: "youtube",
  },
  {
    id: "gal-5",
    title: "VG Summer Session 2024 recap",
   embedUrl: "https://www.youtube.com/embed/NIxtVibuNz4?si=G8Sjb2BeAXOZnZ58",
    platform: "youtube",
  },
  {
    id: "gal-6",
    title: "violendgroove — Festival Aftermovie",
embedUrl: "https://www.youtube.com/embed/NIxtVibuNz4?si=G8Sjb2BeAXOZnZ58",
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
