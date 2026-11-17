"use client"

import { useRef, type CSSProperties } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import type { Shot } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

/**
 * A screenshot that opens full size in a modal when clicked.
 * The button carries the frame (rounded corners, ring, shadow) so it hugs the image exactly.
 */
export function ZoomableShot({
  image,
  sizes,
  className,
  style,
}: {
  image: Shot
  sizes: string
  className?: string
  style?: CSSProperties
}) {
  const dialog = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-haspopup="dialog"
        style={style}
        className={cn(
          "block cursor-zoom-in overflow-hidden rounded-md bg-white shadow-[0_1px_2px_rgb(0_0_0/0.06),0_8px_24px_-8px_rgb(0_0_0/0.18)] ring-1 ring-black/[0.07] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring motion-reduce:transition-none motion-reduce:hover:translate-y-0",
          className,
        )}
      >
        <span className="sr-only">Enlarge screenshot: </span>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          loading="lazy"
          className="block h-auto w-full"
        />
      </button>

      <dialog
        ref={dialog}
        aria-label={image.alt}
        onClick={() => dialog.current?.close()}
        className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none cursor-zoom-out bg-transparent p-0 backdrop:bg-black/85"
      >
        <div className="flex h-full w-full items-center justify-center p-4 md:p-10">
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            sizes="100vw"
            loading="lazy"
            className="h-auto max-h-full w-auto max-w-full rounded-lg bg-white shadow-2xl"
          />
        </div>
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X className="size-5" aria-hidden="true" />
          <span className="sr-only">Close</span>
        </button>
      </dialog>
    </>
  )
}
