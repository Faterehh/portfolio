import Link from "next/link"
import type { CSSProperties } from "react"
import { ArrowRight } from "lucide-react"
import type { Block, Caption, Shot } from "@/lib/portfolio-data"
import { ZoomableShot } from "@/components/zoomable-shot"
import { cn } from "@/lib/utils"

const textClass = "text-pretty text-lg leading-relaxed text-foreground/90"

/** Every tile in a screenshot grid shares this shape, so rows line up. */
const TILE_RATIO = 16 / 10

/** The soft backdrop screenshots sit on. */
const canvasClass = "rounded-xl border border-border bg-canvas"

function Lead({ lead, text }: { lead?: string; text?: string }) {
  return (
    <>
      {lead && <strong className="font-semibold text-foreground">{lead}</strong>}
      {lead && text ? " " : null}
      {text}
    </>
  )
}

function FigureCaption({ caption }: { caption: Caption }) {
  return (
    <figcaption className="mt-4 max-w-2xl text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
      <strong className="font-semibold text-foreground">{caption.title}</strong> {caption.text}
    </figcaption>
  )
}

/**
 * Fixed 16:10 tile with the screenshot centred inside and padded evenly.
 * The tile is a container, so the screenshot width is `min(fit width, fit height)`
 * in container units: wide screens fill the width, tall ones fill the height.
 */
function Tile({ image, sizes }: { image: Shot; sizes: string }) {
  const ratio = (image.width / image.height).toFixed(4)
  return (
    <div className={cn(canvasClass, "@container [--pad:0.875rem] sm:[--pad:1.125rem]")}>
      <div className="flex aspect-[16/10] items-center justify-center">
        <ZoomableShot
          image={image}
          sizes={sizes}
          style={{
            width: `min(100cqw - 2 * var(--pad), (100cqw / ${TILE_RATIO} - 2 * var(--pad)) * ${ratio})`,
          }}
        />
      </div>
    </div>
  )
}

/** Grid shape for a numbered sequence: 3 in a row, 2 × 2, or 2 then 3 for five. */
function stepLayout(count: number) {
  if (count === 3)
    return {
      grid: "md:grid-cols-3",
      item: () => "",
      sizes: "(max-width: 768px) 100vw, 320px",
    }
  if (count === 5)
    return {
      grid: "md:grid-cols-6",
      item: (i: number) => (i < 2 ? "md:col-span-3" : "md:col-span-2"),
      sizes: "(max-width: 768px) 100vw, 480px",
    }
  return {
    grid: "sm:grid-cols-2",
    item: () => "",
    sizes: "(max-width: 640px) 100vw, 480px",
  }
}

/** Blocks that take the full page width instead of the text column. */
const isMedia = (b: Block) => b.type === "figure" || b.type === "figurePair" || b.type === "steps"
const isText = (b: Block) => b.type === "p" || b.type === "bullets" || b.type === "summary"

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className={cn("max-w-2xl", textClass)}>
          <Lead lead={block.lead} text={block.text} />
        </p>
      )

    case "bullets":
      return (
        <ul className="max-w-2xl space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className={cn("flex gap-3", textClass)}>
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              <span>
                <Lead lead={item.lead} text={item.text} />
              </span>
            </li>
          ))}
        </ul>
      )

    case "summary":
      return (
        <dl className="max-w-2xl space-y-4">
          {block.items.map((item) => (
            <div key={item.label} className="grid gap-0.5 sm:grid-cols-[96px_minmax(0,1fr)] sm:gap-4">
              <dt className="text-lg font-semibold leading-relaxed">{item.label}</dt>
              <dd className={textClass}>{item.text}</dd>
            </div>
          ))}
        </dl>
      )

    case "figure":
      return (
        <figure>
          <div className={cn(canvasClass, "p-3 sm:p-6 md:p-8")}>
            <ZoomableShot
              image={block.image}
              sizes="(max-width: 1024px) 100vw, 920px"
              className="w-full"
            />
          </div>
          <FigureCaption caption={block.caption} />
        </figure>
      )

    case "figurePair": {
      // Column widths proportional to each screen's aspect ratio give both the same height.
      const cols = {
        "--pair-cols": `minmax(0, ${(block.wide.width / block.wide.height).toFixed(4)}fr) minmax(0, ${(block.narrow.width / block.narrow.height).toFixed(4)}fr)`,
      } as CSSProperties
      return (
        <figure>
          <div className={cn(canvasClass, "p-3 sm:p-6 md:p-8")}>
            <div
              style={cols}
              className="grid items-start gap-4 sm:gap-6 sm:[grid-template-columns:var(--pair-cols)]"
            >
              <ZoomableShot image={block.wide} sizes="(max-width: 640px) 100vw, 720px" className="w-full" />
              <ZoomableShot
                image={block.narrow}
                sizes="(max-width: 640px) 200px, 200px"
                className="mx-auto w-full max-w-[200px] sm:max-w-none"
              />
            </div>
          </div>
          <FigureCaption caption={block.caption} />
        </figure>
      )
    }

    case "steps": {
      const layout = stepLayout(block.items.length)
      return (
        <ol className={cn("grid gap-x-5 gap-y-8", layout.grid)}>
          {block.items.map((item, i) => (
            <li key={item.label} className={cn("min-w-0", layout.item(i))}>
              <Tile image={item.image} sizes={layout.sizes} />
              <p className="mt-3 flex items-start gap-2.5 text-[0.95rem] font-medium leading-snug">
                <span
                  className="grid size-6 shrink-0 place-items-center rounded-full bg-accent font-mono text-xs font-semibold text-primary"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="pt-0.5">{item.label}</span>
              </p>
            </li>
          ))}
        </ol>
      )
    }

    case "linkCards":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          {block.items.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                {card.eyebrow}
              </span>
              <span className="text-xl font-semibold tracking-tight">{card.title}</span>
              <span className="text-pretty text-[0.95rem] leading-relaxed text-muted-foreground">
                {card.text}
              </span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                {card.linkLabel}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      )
  }
}

/**
 * A case study section built from blocks. On desktop the label sits in the left column,
 * text in the right column, and screenshots span both columns (the full page width).
 */
export function BlocksSection({ heading, blocks }: { heading: string; blocks: Block[] }) {
  // Runs of text sit close together; screenshots and cards get more room around them.
  const groups: Block[][] = []
  for (const block of blocks) {
    const last = groups[groups.length - 1]
    if (last && isText(block) && isText(last[0])) last.push(block)
    else groups.push([block])
  }

  return (
    <section className="grid gap-y-10 border-t border-border py-10 md:grid-cols-[200px_minmax(0,1fr)] md:gap-x-12 md:gap-y-14 md:py-14">
      <h2 className="-mb-4 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground md:mb-0 md:pt-1.5">
        {heading}
      </h2>
      {groups.map((group, i) =>
        isMedia(group[0]) ? (
          <div key={i} className="min-w-0 md:col-span-2">
            <BlockView block={group[0]} />
          </div>
        ) : (
          <div key={i} className="min-w-0 space-y-5 md:col-start-2">
            {group.map((block, j) => (
              <BlockView key={j} block={block} />
            ))}
          </div>
        ),
      )}
    </section>
  )
}
