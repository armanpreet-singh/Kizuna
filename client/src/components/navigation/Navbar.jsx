import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "GitHub", href: "#", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-surface-base/80 backdrop-blur-xl shadow-sm border-b border-border-default"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo />

        {/* Center: Desktop Nav Links */}
        <NavLinks links={navLinks} />

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />

          <div className="w-px h-5 bg-border-default mx-2" aria-hidden="true" />

          <a
            href="#login"
            className="px-4 py-2 text-sm font-medium text-typography-secondary hover:text-typography-primary transition-colors duration-300"
          >
            Login
          </a>

          <a
            href="#register"
            className="px-4 py-2 text-sm font-medium text-surface-base bg-brand-primary hover:opacity-90 rounded-lg transition-opacity duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Mobile: Toggle & Theme */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 rounded-lg text-typography-secondary hover:bg-surface-high hover:text-typography-primary transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-bg"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} links={navLinks} />
    </header>
  );
};

export default Navbar;
