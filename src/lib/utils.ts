import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to get the correct base URL for assets
export function getBaseUrl() {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  
  // For server-side rendering, check environment variables
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  // Fallback for local development
  return 'http://localhost:3000'
}

// Utility function to get the correct path for Lottie animations
export function getLottiePath(filename: string) {
  const baseUrl = getBaseUrl()
  return `${baseUrl}/${filename}`
}