import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-bg to-bg" />

      {/* Animated glow */}
      <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[128px]" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-6xl font-black tracking-tighter text-text md:text-8xl lg:text-9xl">
          violend
          <span className="text-primary">groove</span>
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-lg text-text-muted md:text-xl">
          Music. Events. Culture.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://leftkiss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Shop Now
          </a>
          <Link
            href="/events"
            className="rounded-lg border border-border px-8 py-3 font-semibold text-text-muted transition-colors hover:border-primary hover:text-primary"
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}
