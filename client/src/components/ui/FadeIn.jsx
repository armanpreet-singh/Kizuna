import { useInView } from "../../hooks/useInView";

/**
 * FadeIn Component
 *
 * @param {React.ReactNode} children - Elements to animate
 * @param {number} delay - Delay before animation starts (in ms, e.g., 100, 200)
 * @param {string} className - Additional classes to pass to the wrapper
 */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, isInView] = useInView({
    // Start animation slightly before the element fully enters the screen
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
