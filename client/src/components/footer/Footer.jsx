import { FaGithub, FaXTwitter, FaMessage } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Link groups structured for easy content management
  const linkGroups = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Security", href: "#security" },
        { label: "Changelog", href: "#" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Community", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200" aria-label="Global footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 text-slate-900 mb-4">
              <FaMessage className="w-6 h-6 text-indigo-600" strokeWidth={2.5} />
              <span className="text-lg font-semibold tracking-tight">Kizuna</span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              Modern real-time communication built for teams who value speed and clarity.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="FaGithub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="FaXTwitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© {currentYear} Kizuna. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
