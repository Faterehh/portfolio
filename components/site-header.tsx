import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { profile } from "@/lib/portfolio-data"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight transition-colors hover:text-primary"
        >
          {profile.name}
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/#work"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            About
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
