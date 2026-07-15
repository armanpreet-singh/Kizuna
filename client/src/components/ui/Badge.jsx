/**
 * Badge Component
 *
 * @param {string} variant - 'unread' | 'online' | 'admin' | 'owner'
 * @param {number|string} count - Optional: The number to display (primarily for 'unread')
 * @param {React.ReactNode} children - Optional: Fallback text if count isn't used
 * @param {string} className - Additional custom classes
 */
const Badge = ({ variant = "unread", count, children, className = "" }) => {
  // Base styles shared across all variants
  const baseStyles = "inline-flex items-center justify-center font-semibold";

  // Variant styles mapped strictly to the Design System tokens
  const variantStyles = {
    unread: `
      bg-red-500 text-white 
      rounded-full 
      min-w-[18px] h-[18px] px-[5px] 
      text-[10px] leading-none
    `,
    online: `
      bg-emerald-500 text-transparent 
      rounded-full 
      w-2 h-2 
    `,
    admin: `
      bg-indigo-600 text-white 
      rounded 
      px-1 py-0.5 
      text-[10px] leading-none
    `,
    owner: `
      bg-amber-500 text-slate-900 
      rounded 
      px-1 py-0.5 
      text-[10px] leading-none
    `,
  };

  const combinedStyles =
    `${baseStyles} ${variantStyles[variant] || variantStyles.unread} ${className}`.trim();

  // Special handling for the 'online' variant to ensure it remains a strict dot
  if (variant === "online") {
    return <span className={combinedStyles} aria-hidden="true" />;
  }

  // Handling unread counts - if count is 0, don't render the badge to keep UI clean
  if (variant === "unread" && (count === 0 || count === undefined || count === null)) {
    // If it's an unread badge but no count, render a generic ping dot
    return (
      <span
        className={`${variantStyles.unread} w-2 h-2 min-w-0 p-0`}
        aria-label="New notifications"
      />
    );
  }

  return <span className={combinedStyles}>{count !== undefined ? count : children}</span>;
};

export default Badge;
