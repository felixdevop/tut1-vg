import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "@/types";

// ── Manually maintained list of upcoming events ──────────────────────
const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "evt-1",
    title: "Oblivion Verzus Violendgroove",
    date: "2026-03-13",
    venue: "Postgarage 1st & 2nd",
    location: "Graz, AT",
    // ticketUrl: "https://ra.co/events/123456",
    //  image: "/events/krocher.png",  
  },
  {
    id: "evt-2",
    title: "DJ Vibekiller Birthday Bash",
    date: "2026-03-20",
    venue: "GRNGR",
    location: "Graz, AT",
    // ticketUrl: "https://ra.co/events/123456",
    // image: "/events/xmess-1.jpg",  
  },
  // {
  //   id: "evt-3",
  //   title: "Verzus Clubnight 3 2026",
  //   date: "2026-10-03",
  //   venue: "Postgarage 2nd",
  //   location: "Graz, AT",
  //   ticketUrl: "https://ra.co/events/123456",
  //    image: "/events/5years-ta.png",  
  // },
  // {
  //   id: "evt-4",
  //   title: "Feuer & Peitsche #2",
  //   date: "2026-12-04",
  //   venue: "Postgarage",
  //   location: "Graz, AT",
  //   ticketUrl: "https://ra.co/events/123456",
  // },
];

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-black tracking-tight text-text">
          Events
        </h1>
        <p className="text-text-muted">
          Upcoming shows and tickets for events near you.
        </p>
      </div>

      {UPCOMING_EVENTS.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent"
            >
              {event.image && (
                <div className="relative aspect-square w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5">
              <p className="mb-1 text-sm font-medium text-accent">
                {formatDate(event.date)}
              </p>
              <h2 className="mb-2 text-lg font-bold text-text">
                {event.title}
              </h2>
              <p className="text-sm text-text-muted">
                {event.venue} &middot; {event.location}
              </p>
              {event.ticketUrl && (
                <Link
                  href={event.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  Tickets &rarr;
                </Link>
              )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-surface px-6 py-16 text-center">
          <p className="text-text-muted">
            No upcoming events right now. Check back soon!
          </p>
        </div>
      )}
      <hr className="mt-8"/>

      <div className="mt-6 text-center">
        <Link
          href="https://ra.co/promoters/116162"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent px-5 py-2.5 font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
        >
          View past events on RA &rarr;
        </Link>
      </div>
    </div>
  );
}
