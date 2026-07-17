const MobileMenu = ({ isOpen, onClose, links }) => {
  return (
    <div
      id="mobile-menu"
      className={`md:hidden absolute top-full left-0 right-0 bg-surface-base border-b border-border-default transform transition-all duration-300 ease-in-out origin-top ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="px-4 py-4 space-y-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="block text-base font-medium text-typography-secondary hover:text-typography-primary py-2 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}

        <div className="pt-4 border-t border-border-default flex flex-col gap-2">
          <a
            href="#login"
            onClick={onClose}
            className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-typography-primary bg-surface-high hover:bg-state-hover rounded-lg transition-colors duration-300"
          >
            Login
          </a>
          <a
            href="#register"
            onClick={onClose}
            className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-surface-base bg-brand-primary hover:opacity-90 rounded-lg transition-opacity duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
