import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisons = [
  {
    feature: "Real-time messaging",
    kizuna: true,
    slack: true,
    teams: true,
  },
  {
    feature: "Threaded conversations",
    kizuna: true,
    slack: true,
    teams: true,
  },
  {
    feature: "Sub-50ms message delivery",
    kizuna: true,
    slack: false,
    teams: false,
  },
  {
    feature: "Keyboard-first navigation",
    kizuna: true,
    slack: false,
    teams: false,
  },
  {
    feature: "Clean, distraction-free UI",
    kizuna: true,
    slack: false,
    teams: false,
  },
  {
    feature: "Smart notification batching",
    kizuna: true,
    slack: false,
    teams: false,
  },
  {
    feature: "Cross-platform sync",
    kizuna: true,
    slack: true,
    teams: true,
  },
  {
    feature: "Focus mode & DND scheduling",
    kizuna: true,
    slack: false,
    teams: false,
  },
];

const reasons = [
  {
    number: "01",
    title: "Built for speed",
    description:
      "Every interaction in Kizuna is optimized. Sub-50ms message delivery, instant search, and a keyboard-first interface mean your team moves faster.",
  },
  {
    number: "02",
    title: "Context that travels",
    description:
      "Threaded conversations keep discussions organized. Every decision, every file, every link — always findable, always in context.",
  },
  {
    number: "03",
    title: "Respects your focus",
    description:
      "Smart notification batching and scheduled DND means Kizuna delivers information when it matters, not whenever it happens.",
  },
  {
    number: "04",
    title: "Designed to last",
    description:
      "An interface you and your team will actually love using. No dark patterns, no feature bloat, just clarity and control.",
  },
];

const WhyKizuna = () => {
  return (
    <section id="why-kizuna" className="py-24 md:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <SectionHeading
            eyebrow="Why Kizuna"
            title="Not another chat app"
            description="Kizuna was built by a team who felt the pain of noisy, cluttered collaboration tools. Here's what makes us different."
          />
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Reasons */}
          <div className="space-y-8">
            {reasons.map((reason, i) => (
              <RevealOnScroll key={reason.number} delay={i * 100} direction="left">
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20 border border-violet-200 dark:border-violet-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
                      {reason.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Comparison table */}
          <RevealOnScroll direction="right" delay={200}>
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 bg-gray-50 dark:bg-white/5 px-4 py-3 border-b border-gray-200 dark:border-white/10">
                <div className="col-span-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Feature
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-500/15 px-2 py-0.5 rounded-full">
                    Kizuna
                  </span>
                </div>
                <div className="text-center text-xs font-medium text-gray-400">Slack</div>
                <div className="text-center text-xs font-medium text-gray-400">Teams</div>
              </div>
              {comparisons.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-4 px-4 py-3 items-center ${
                    i < comparisons.length - 1 ? "border-b border-gray-100 dark:border-white/5" : ""
                  } hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors`}
                >
                  <div className="col-span-1 text-xs text-gray-700 dark:text-gray-300 pr-2">
                    {row.feature}
                  </div>
                  <div className="flex justify-center">
                    <CheckCircle2 size={16} className="text-violet-500" />
                  </div>
                  <div className="flex justify-center">
                    {row.slack ? (
                      <CheckCircle2 size={16} className="text-gray-400" />
                    ) : (
                      <XCircle size={16} className="text-gray-300 dark:text-gray-700" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.teams ? (
                      <CheckCircle2 size={16} className="text-gray-400" />
                    ) : (
                      <XCircle size={16} className="text-gray-300 dark:text-gray-700" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default WhyKizuna;
