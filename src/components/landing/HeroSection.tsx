import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden md:min-h-[90vh]">

      <div className="relative z-8 px-4 text-center">
        <Image
          src="/verzus/vzspring1.jpeg"
          alt="violendgroove event photo"
          width={3000}
          height={2000}
          sizes="(max-width: 768px) 100vw, 800px"
          className="mx-auto mb-2 w-full rounded-lg object-cover md:mt-12 md:mb-4 md:max-w-3xl"
          priority
        />
        {/* SEO: visually hidden h1 for screen readers and crawlers */}
        <h1 className="sr-only">violendgroove</h1>
        <Image
          src="/vglogo.svg"
          alt="violendgroove"
          width={600}
          height={150}
          className="mx-auto mb-4 h-auto w-full max-w-[273px] md:max-w-[310px] lg:-mt-8 lg:max-w-[413px]"
          priority
        />
        <p className="mx-auto mb-12 max-w-lg text-lg text-text-muted md:text-xl">
          Music. Events. Culture.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://leftkiss.com/pages/violendgroove"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-black transition-colors hover:bg-primary-hover"
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
