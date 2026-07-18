import  { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.15,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const directionMap = {
    up: visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    down: visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8",
    left: visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
    right: visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
    none: visible ? "opacity-100" : "opacity-0",
    scale: visible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${directionMap[direction]} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
