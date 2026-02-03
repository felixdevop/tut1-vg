import VideoEmbed from "./VideoEmbed";
import type { GalleryItem } from "@/types";

interface VideoGridProps {
  items: GalleryItem[];
}

export default function VideoGrid({ items }: VideoGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <VideoEmbed key={item.id} item={item} />
      ))}
    </div>
  );
}
