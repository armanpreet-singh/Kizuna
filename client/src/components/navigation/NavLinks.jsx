const NavLinks = ({ links }) => {
  return (
    <nav className="hidden md:flex items-center gap-10" aria-label="Primary navigation">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          /* 
            Negative margin pill technique: 
            Extends the clickable area and background visually without altering layout spacing.
          */
          className="relative text-body-base font-medium text-typography-secondary rounded-md px-3 py-1.5 -mx-3 -my-1.5 hover:bg-surface-high hover:text-typography-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-bg"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
