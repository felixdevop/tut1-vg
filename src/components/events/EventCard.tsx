"use client";

import type { EventItem } from "@/types";

interface EventCardProps {
  event: EventItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function EventCard({
  event,
  isFavorite,
  onToggleFavorite,
}: EventCardProps) {
  const date = new Date(event.date);
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="group flex flex-col gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-primary/50 hover:bg-surface-hover sm:flex-row sm:items-center">
      {/* Date badge */}
      <div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary">
        <span className="text-xs font-medium uppercase">{month}</span>
        <span className="text-2xl font-black">{day}</span>
        <span className="text-xs text-text-muted">{weekday}</span>
      </div>

      {/* Event details */}
      <div className="flex-1">
        <h3 className="mb-1 text-lg font-bold text-text">{event.title}</h3>
        <p className="text-sm text-text-muted">
          {event.venue} &middot; {event.location}
        </p>
        <p className="text-sm text-text-muted">{time}</p>
        {event.description && (
          <p className="mt-2 text-sm text-text-muted">{event.description}</p>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggleFavorite(event.id)}
          className="rounded-full border border-border p-2 transition-colors hover:border-primary"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={isFavorite ? 0 : 1.5}
            className={`h-5 w-5 ${isFavorite ? "text-danger" : "text-text-muted"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>

        {event.ticketUrl && (
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Tickets
          </a>
        )}
      </div>
    </div>
  );
}
