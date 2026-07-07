import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/portfolio-data"
import { accentMap, iconMap } from "@/lib/project-visuals"

export function ProjectsGrid() {
  return (
    <section
      id="work"
      className="mx-auto max-w-5xl scroll-mt-20 border-t border-border px-6 py-16 md:py-24"
    >
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Selected Work
        </h2>
        <span className="text-sm text-muted-foreground">
          {projects.length} case studies
        </span>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const accent = accentMap[project.accent]
          const Icon = iconMap[project.icon]
          return (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.name} project cover`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-xl backdrop-blur-sm ${accent.chip}`}>
                    {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <span className={`text-xs font-medium uppercase tracking-wider ${accent.text}`}>
                      {project.category}
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
