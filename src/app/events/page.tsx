"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { STORAGE_KEYS } from "@/lib/constants";
import EventList from "@/components/events/EventList";
import type { EventItem, UserPreferences } from "@/types";

const sampleEvents: EventItem[] = [
  {
    id: "evt-1",
    title: "violendgroove — Warehouse Rave",
    date: "2026-03-15T22:00:00",
    venue: "Warehouse 23",
    location: "Berlin, Germany",
    ticketUrl: "#",
    description: "An all-night underground experience. Expect heavy bass and relentless energy.",
  },
  {
    id: "evt-2",
    title: "Deep Cuts — Rooftop Session",
    date: "2026-04-05T19:00:00",
    venue: "Skyline Terrace",
    location: "Amsterdam, Netherlands",
    ticketUrl: "#",
    description: "Sunset grooves on the rooftop. Deep house and soulful beats.",
  },
  {
    id: "evt-3",
    title: "GROOVE Festival 2026",
    date: "2026-06-20T14:00:00",
    venue: "Riverside Park",
    location: "London, UK",
    ticketUrl: "#",
    description: "The annual gathering. Multiple stages, all-day music.",
  },
  {
    id: "evt-4",
    title: "Club Night — Residency",
    date: "2026-05-10T23:00:00",
    venue: "Basement Club",
    location: "Paris, France",
    ticketUrl: "#",
  },
  {
    id: "evt-5",
    title: "violendgroove x Friends — B2B Night",
    date: "2026-07-18T21:00:00",
    venue: "The Bunker",
    location: "New York, USA",
    ticketUrl: "#",
    description: "Back-to-back sets with special guests. One night only.",
  },
];

const defaultPrefs: UserPreferences = {
  favoriteProductIds: [],
  favoriteEventIds: [],
};

export default function EventsPage() {
  const [prefs, setPrefs] = useLocalStorage<UserPreferences>(
    STORAGE_KEYS.FAVORITES,
    defaultPrefs
  );

  const toggleFavorite = (eventId: string) => {
    setPrefs((prev) => {
      const ids = prev.favoriteEventIds;
      return {
        ...prev,
        favoriteEventIds: ids.includes(eventId)
          ? ids.filter((id) => id !== eventId)
          : [...ids, eventId],
      };
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-black tracking-tight text-text">
          Events
        </h1>
        <p className="text-text-muted">
          Find us at a venue near you. Upcoming shows and tickets.
        </p>
      </div>

      <EventList
        events={sampleEvents}
        favoriteIds={prefs.favoriteEventIds}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
