import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to get the correct path for Lottie animations
// Use relative paths that work with Next.js public folder
export function getLottiePath(filename: string) {
  return `/${filename}`
}