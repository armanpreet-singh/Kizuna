const NavLinks = ({ links }) => {
  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          className="text-sm font-medium text-typography-secondary hover:text-typography-primary transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
