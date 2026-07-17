
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { BookOpen } from "lucide-react";
import Logo from "../navigation/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linkGroups = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#" },
        { label: "Security", href: "#security" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "System Status", href: "#" },
        { label: "Import Tool", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "DPA", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-surface-base border-t border-border-default" aria-label="Global footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid: Logo + 4 Link Groups */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <Logo />
            <p className="mt-4 text-body-base text-typography-secondary leading-relaxed">
              The communication platform built for speed, clarity, and modern teams.
            </p>

            {/* Social Links - Expanded for production SaaS */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="text-typography-secondary hover:text-typography-primary transition-colors duration-300"
                aria-label="FaGithub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-typography-secondary hover:text-typography-primary transition-colors duration-300"
                aria-label="Twitter / X"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-typography-secondary hover:text-typography-primary transition-colors duration-300"
                aria-label="Documentation"
              >
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-body-base font-semibold text-typography-primary mb-4">
                {group.title}
              </h3>
              <nav aria-label={`${group.title} links`}>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-body-base text-typography-secondary hover:text-typography-primary transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-typography-secondary">
            © {currentYear} Kizuna. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-caption text-typography-secondary">
            <span>Built with focus.</span>
            <span className="text-border-default" aria-hidden="true">
              •
            </span>
            <a href="#" className="hover:text-typography-primary transition-colors duration-300">
              Privacy
            </a>
            <span className="text-border-default" aria-hidden="true">
              •
            </span>
            <a href="#" className="hover:text-typography-primary transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
