import type { Section } from "@/lib/portfolio-data"
import { BlocksSection } from "@/components/case-study-blocks"

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-pretty leading-relaxed text-foreground/90">
          <span
            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CaseStudySection({ section }: { section: Section }) {
  if (section.kind === "blocks") {
    return <BlocksSection heading={section.heading} blocks={section.blocks} />
  }

  return (
    <section className="border-t border-border py-10 md:grid md:grid-cols-[200px_1fr] md:gap-12 md:py-12">
      <h2 className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground md:mb-0">
        {section.heading}
      </h2>
      <div className="max-w-2xl">
        {section.kind === "paragraphs" && (
          <div className="space-y-5">
            {section.body.map((p, i) => (
              <p key={i} className="text-pretty text-lg leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </div>
        )}

        {section.kind === "list" && (
          <div className="space-y-5">
            {section.intro && (
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {section.intro}
              </p>
            )}
            <CheckList items={section.items} />
          </div>
        )}

        {section.kind === "subgroups" && (
          <div className="space-y-6">
            {section.intro && (
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {section.intro}
              </p>
            )}
            <div className="grid gap-5">
              {section.groups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="mb-3 text-base font-medium">{group.label}</h3>
                  {group.body?.map((p, i) => (
                    <p key={i} className="mb-2 leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  {group.items && <CheckList items={group.items} />}
                </div>
              ))}
            </div>
          </div>
        )}

        {section.kind === "callout" && (
          <div className="rounded-lg border border-primary/25 border-l-4 border-l-primary bg-primary/5 p-5 md:p-6">
            {section.body && (
              <div className="space-y-4">
                {section.body.map((p, i) => (
                  <p key={i} className="text-pretty leading-relaxed text-foreground/90">
                    {p}
                  </p>
                ))}
              </div>
            )}
            {section.points && (
              <dl className="divide-y divide-primary/15">
                {section.points.map((point) => (
                  <div key={point.label} className="py-4 first:pt-0 last:pb-0">
                    <dt className="text-xs font-medium uppercase tracking-wider text-primary">
                      {point.label}
                    </dt>
                    <dd className="mt-1.5 text-pretty leading-relaxed text-foreground/90">
                      {point.text}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        )}

        {section.kind === "decisions" && (
          <div className="space-y-6">
            {section.intro && (
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {section.intro}
              </p>
            )}
            <ol className="grid gap-5">
              {section.items.map((item, i) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-medium tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-medium leading-snug">{item.title}</h3>
                  </div>
                  <div className="mt-3 space-y-3">
                    {item.body.map((p, j) => (
                      <p key={j} className="text-pretty leading-relaxed text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {section.kind === "challenges" && (
          <div className="grid gap-5">
            {section.pairs.map((pair, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-5"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Challenge
                </p>
                <p className="mt-1.5 font-medium leading-relaxed">{pair.challenge}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">
                  Solution
                </p>
                <p className="mt-1.5 leading-relaxed text-foreground/90">
                  {pair.solution}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
