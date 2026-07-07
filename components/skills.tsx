import { Search, PenTool, Code2, Boxes, Wrench, type LucideIcon } from "lucide-react"
import { skillGroups } from "@/lib/portfolio-data"

const groupIcons: Record<string, LucideIcon> = {
  "Research & Strategy": Search,
  Design: PenTool,
  "Web Development": Code2,
  "XR Development": Boxes,
  Tools: Wrench,
}

export function Skills() {
  return (
    <section className="mx-auto max-w-5xl border-t border-border px-6 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Skills &amp; Tools
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.label]
            return (
              <div key={group.label}>
                <h3 className="mb-3 flex items-center gap-2 text-base font-medium">
                  {Icon ? (
                    <span className="inline-flex size-7 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                  ) : null}
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
