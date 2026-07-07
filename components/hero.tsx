import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import Image from "next/image";

export function Hero() {
  return (
    <section className="grid md:grid-flow-col gap-8 mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div>
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
        {profile.location.split(",")[0]} based designer
      </p>
      <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        Hi, I&apos;m {profile.name.split(" ")[0]}.{" "}
        <span className="font-serif italic text-muted-foreground">
          I make complex systems simple to use.
        </span>
      </h1>
      <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {profile.tagline}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <MapPin className="size-4 text-primary" aria-hidden="true" />
          {profile.location}
        </span>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <Mail className="size-4 text-primary" aria-hidden="true" />
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
        >
          LinkedIn
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href={profile.CV}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
        >
          CV
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      </div>
      <div className="hidden md:block w-full shrink-0 md:w-sm md:mx-0">
        <Image
          src="/avatar.png"
          alt={`Portrait of ${profile.name}`}
          width={320}
          height={400}
          priority
          className="aspect-[4/5] w-full rounded-2xl object-cover ring-border"
        />
      </div>
    </section>
  );
}
