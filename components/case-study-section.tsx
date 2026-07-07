import type { Section } from "@/lib/portfolio-data"

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
