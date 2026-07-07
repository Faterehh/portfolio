import { profile } from "@/lib/portfolio-data"

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16 md:py-24"
    >
      <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          About
        </h2>
        <div className="max-w-2xl space-y-6">
          {profile.about.map((paragraph, i) => (
            <p
              key={i}
              className="text-pretty text-lg leading-relaxed text-foreground/90"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
