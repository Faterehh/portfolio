import {
  Sun,
  Glasses,
  Stethoscope,
  GraduationCap,
  HeartPulse,
  CalendarHeart,
  Bot,
  FileText,
  type LucideIcon,
} from "lucide-react"
import type { Accent } from "@/lib/portfolio-data"

export const iconMap: Record<string, LucideIcon> = {
  Sun,
  Glasses,
  Stethoscope,
  GraduationCap,
  HeartPulse,
  CalendarHeart,
  Bot,
  FileText,
}

type AccentStyle = {
  chip: string
  text: string
  dot: string
  bar: string
}

export const accentMap: Record<Accent, AccentStyle> = {
  amber: {
    chip: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    text: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
    bar: "bg-amber-500",
  },
  indigo: {
    chip: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
    text: "text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-500",
    bar: "bg-indigo-500",
  },
  teal: {
    chip: "bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300",
    text: "text-teal-700 dark:text-teal-300",
    dot: "bg-teal-500",
    bar: "bg-teal-500",
  },
  emerald: {
    chip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    text: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
  },
  sky: {
    chip: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    text: "text-sky-700 dark:text-sky-300",
    dot: "bg-sky-500",
    bar: "bg-sky-500",
  },
  rose: {
    chip: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
    text: "text-rose-700 dark:text-rose-300",
    dot: "bg-rose-500",
    bar: "bg-rose-500",
  },
  cyan: {
    chip: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
    text: "text-cyan-700 dark:text-cyan-300",
    dot: "bg-cyan-500",
    bar: "bg-cyan-500",
  },
  blue: {
    chip: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
    text: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
    bar: "bg-blue-500",
  },
}
