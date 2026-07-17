// src/hooks/useRevealOnScroll.js
import { useState, useEffect, useRef } from "react";

export const useRevealOnScroll = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        // Trigger slightly before the element is fully in view to pace the reading flow
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return [ref, isInView];
};
