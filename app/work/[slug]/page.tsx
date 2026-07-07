import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CaseStudySection } from "@/components/case-study-section"
import { getProject, projects } from "@/lib/portfolio-data"
import { accentMap, iconMap } from "@/lib/project-visuals"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.name} — Fatereh Tondro`,
    description: project.summary,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]
  const accent = accentMap[project.accent]
  const Icon = iconMap[project.icon]

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All work
        </Link>

        <header className="mt-8 pb-10">
          <div className="flex items-center gap-3">
            <span className={`inline-flex size-11 items-center justify-center rounded-xl ${accent.chip}`}>
              {Icon ? <Icon className="size-6" aria-hidden="true" /> : null}
            </span>
            <p className={`text-sm font-medium uppercase tracking-[0.18em] ${accent.text}`}>
              {project.category}
            </p>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-secondary">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.name} project cover`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover"
            />
          </div>
        </header>

        <dl className="grid gap-x-8 gap-y-6 border-b border-border py-10 sm:grid-cols-2 lg:grid-cols-4">
          {project.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {m.label}
              </dt>
              <dd className="mt-1.5 text-pretty leading-relaxed">{m.value}</dd>
            </div>
          ))}
        </dl>

        {project.overview && (
          <section className="border-b border-border py-10 md:grid md:grid-cols-[200px_1fr] md:gap-12 md:py-12">
            <h2 className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground md:mb-0">
              Overview
            </h2>
            <ul className="max-w-2xl space-y-4">
              {project.overview.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-pretty text-lg leading-relaxed text-foreground/90"
                >
                  <span
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.sections.map((section, i) => (
          <CaseStudySection key={i} section={section} />
        ))}

        {project.demo && (
          <div className="border-t border-border py-10">
            <a
              href={project.demo.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {project.demo.label}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        )}

        <nav className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-6">
          <span className="text-sm text-muted-foreground">Next project</span>
          <Link
            href={`/work/${next.slug}`}
            className="group inline-flex items-center gap-2 text-lg font-semibold tracking-tight transition-colors hover:text-primary"
          >
            {next.name}
            <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  )
}
