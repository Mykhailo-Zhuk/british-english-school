import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const calPath = (pathname, url) => (pathname.includes('en') ? `en/${url}` : url);
