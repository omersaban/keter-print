import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// בדיקה בטוחה שלא תקרוס בזמן ה-Build ב-Netlify
export const isIframe = typeof window !== "undefined" && window.self !== window.top;
