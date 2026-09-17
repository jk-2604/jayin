import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prefixes root-relative static asset paths (e.g. PDFs linked via raw <a>/<iframe>,
// which next/link and next/image don't auto-prefix) with the configured basePath,
// so they resolve correctly when deployed under a subpath (e.g. GitHub Pages project sites).
export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return `${basePath}${path}`
}
