import type { GalleryItem } from "@/types";

interface VideoEmbedProps {
  item: GalleryItem;
}

export default function VideoEmbed({ item }: VideoEmbedProps) {
  const isYouTube = item.platform === "youtube";

  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-primary/50">
      <div
        className={`relative w-full ${isYouTube ? "aspect-video" : "aspect-[4/1]"}`}
      >
        <iframe
          src={item.embedUrl}
          title={item.title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={isYouTube}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-secondary">
          {item.platform}
        </p>
        <h3 className="text-sm font-semibold text-text">{item.title}</h3>
      </div>
    </div>
  );
}
