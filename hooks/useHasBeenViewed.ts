"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type UseHasBeenViewedReturn = [boolean, (node?: Element | null) => void];

export const useHasBeenViewed = (): UseHasBeenViewedReturn => {
  const [hasBeenViewedBefore, setHasBeenViewedBefore] = useState(false);
  const [ref, inView] = useInView();
  const prevInView = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const location = window.location.pathname;
      const storageKey = `hasBeenViewed-${location}`;
      
      // Reset local storage on refresh
      window.addEventListener("beforeunload", () => {
        localStorage.removeItem(storageKey);
        setHasBeenViewedBefore(true);
      });

      if (inView) {
        setHasBeenViewedBefore(true);
      }
    }

    prevInView.current = inView;
  }, [inView]);

  return [hasBeenViewedBefore || prevInView.current || inView, ref];
};