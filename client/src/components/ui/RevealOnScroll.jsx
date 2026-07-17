import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const RevealOnScroll = ({ children, className = "" }) => {
  const [ref, isInView] = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ease-out ${
        isInView
          ? "opacity-100 translate-y-0"
          : // Reduced from -translate-y-1.5 to -translate-y-1 for a tighter, premium materialization
            "opacity-0 -translate-y-1"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
