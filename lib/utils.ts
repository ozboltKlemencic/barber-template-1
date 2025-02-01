import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// utils/googleMaps.ts
export const getGoogleMapsApiKey = (): string => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined in environment variables');
  }
  return apiKey;
};


// Singleton to manage Google Maps script loading
let loadingPromise: Promise<void> | null = null;

export const loadGoogleMapsScript = (): Promise<void> => {
  if (window.google?.maps) {
    return Promise.resolve();
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = new Promise((resolve, reject) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      reject(new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined'));
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(
      `script[src*="maps.googleapis.com/maps/api/js"]`
    );
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      loadingPromise = null;
      resolve();
    };

    script.onerror = (error) => {
      loadingPromise = null;
      reject(error);
    };

    document.head.appendChild(script);
  });

  return loadingPromise;
};