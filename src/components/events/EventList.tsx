"use client";

import EventCard from "./EventCard";
import type { EventItem } from "@/types";

interface EventListProps {
  events: EventItem[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

export default function EventList({
  events,
  favoriteIds,
  onToggleFavorite,
}: EventListProps) {
  const now = new Date();

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= now)
    .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  if (upcomingEvents.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-surface p-12 text-center">
        <p className="text-text-muted">No upcoming events. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {upcomingEvents.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          isFavorite={favoriteIds.includes(event.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
