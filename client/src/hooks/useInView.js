import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to detect if an element is in the viewport.
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Percentage of element visible to trigger (0 to 1)
 * @param {string} options.rootMargin - Margin around the root (e.g., '0px 0px -50px 0px')
 * @returns {Array} [ref, isInView]
 */
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once the element enters the viewport, mark it as seen and stop observing
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        // Trigger when 10% of the element is visible by default
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []); // Run once on mount

  return [ref, isInView];
};
