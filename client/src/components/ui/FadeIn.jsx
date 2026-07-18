
import { useEffect, useRef, useState } from "react";

const FadeIn = ({ children, delay = 0, duration = 600, direction = "up", className = "" }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const directionMap = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : undefined,
      }}
    >
      <div
        className={`transition-transform ${
          visible ? "translate-y-0 translate-x-0" : directionMap[direction]
        }`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

export default FadeIn;
