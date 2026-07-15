
/**
 * Card Component
 *
 * @param {React.ReactNode} children - The content inside the card
 * @param {'sm' | 'md' | 'lg'} padding - Internal spacing scale based on the 4px grid
 * @param {boolean} hover - If true, applies an elevation shift on mouse hover
 * @param {string} className - Additional custom classes for the wrapper
 */
const Card = ({ children, padding = "md", hover = false, className = "" }) => {
  // Padding tokens mapped to Design System spacing scale
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  // Base styles mapping to Design System Surface, Border, Radius, and Shadow
  const baseStyles = `
    bg-white 
    rounded-xl 
    border border-slate-200 
    shadow-sm
    ${paddingStyles[padding] || paddingStyles.md}
  `.trim();

  // Interactive hover state for clickable or focusable cards (like Feature Cards)
  const hoverStyles = hover
    ? "transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 hover:border-slate-300"
    : "";

  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>;
};

export default Card;
