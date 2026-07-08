import { ArrowUpRight } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </h2>
          <div className="max-w-2xl">
            <p className="text-balance text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              Want to work with me?{" "}
              <span className="font-serif italic text-muted-foreground">
                Get in touch.
              </span>
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
              <span>
                &copy; {new Date().getFullYear()} {profile.name}. {profile.location}.
              </span>
              <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </footer>
  )
}
