import { FaGithub, FaXTwitter, FaMessage } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

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
        { label: "System Status", href: "#" },
        { label: "Import Tool", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "FaGithub", href: "#" },
        { label: "Twitter / X", href: "#" },
        { label: "Discord", href: "#" },
        { label: "Blog", href: "#" },
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
    <footer
      className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800"
      aria-label="Global footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid: 5 columns (Logo + 4 Groups) */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand Column - Spans 1 column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:pr-8">
            <a href="/" className="flex items-center gap-2 text-slate-900 dark:text-white mb-4">
              <FaMessage
                className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                strokeWidth={2.5}
              />
              <span className="text-lg font-semibold tracking-tight">Kizuna</span>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              The communication platform built for speed, clarity, and modern teams.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label="FaGithub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
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
        <div className="py-6 border-t border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {currentYear} Kizuna. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
            <span>Built with focus.</span>
            <span className="text-slate-200 dark:text-slate-700">•</span>
            <a
              href="#"
              className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Privacy
            </a>
            <span className="text-slate-200 dark:text-slate-700">•</span>
            <a
              href="#"
              className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
