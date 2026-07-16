
import { Zap, Eye, ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const WhyKizuna = () => {
  const pillars = [
    // ... (Keep the exact same pillar objects from the previous iteration to save space)
    {
      id: "speed",
      icon: Zap,
      title: "Engineered for speed.",
      description:
        "Latency is the enemy of flow. We built Kizuna on a non-blocking architecture, ensuring messages appear the moment they are sent. No loading spinners, no delayed typing indicators. Just pure, instantaneous communication.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
          {" "}
          {/* Keep previous visual */}{" "}
        </div>
      ),
    },
    {
      id: "focus",
      icon: Eye,
      title: "Designed for focus.",
      description:
        "Most chat apps demand your attention. Kizuna respects it. We stripped away the clutter—excessive toolbars, flashy animations, and visual noise—leaving only what matters: your team's words.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
          {" "}
          {/* Keep previous visual */}{" "}
        </div>
      ),
    },
    {
      id: "trust",
      icon: ShieldCheck,
      title: "Built on trust.",
      description:
        "Your conversations are proprietary. We implemented E2E encryption by default, open-source our client-side encryption protocols, and ensure your data is never monetized or sold.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
          {" "}
          {/* Keep previous visual */}{" "}
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Philosophy"
          title="Why Kizuna exists"
          subtitle="We believe communication tools have become too complex. Kizuna is our answer: a return to clarity, speed, and respect for the user."
          align="center"
          className="mb-20 sm:mb-28"
        />
        <div className="space-y-24 lg:space-y-32">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={pillar.id}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
              >
                <div className="flex-1 max-w-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div
                  className={`flex-1 w-full ${isReversed ? "lg:flex lg:justify-start" : "lg:flex lg:justify-end"}`}
                >
                  {pillar.visual}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKizuna;
