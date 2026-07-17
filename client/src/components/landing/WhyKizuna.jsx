import {  Eye, ShieldCheck } from "lucide-react";

const WhyKizuna = () => {
  const pillars = [
    {
      id: "speed",
      number: "01",
      title: "Engineered for speed.",
      description:
        "Latency is the enemy of flow. We built Kizuna on a non-blocking architecture, ensuring messages appear the moment they are sent. No loading spinners, no delayed typing indicators.",
      visual: (
        <div className="w-full bg-surface-base border border-border-default rounded-xl shadow-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-caption font-medium text-typography-secondary uppercase tracking-wider">
              Network Status
            </span>
            <span className="flex items-center gap-1.5 text-caption text-state-success">
              <span className="w-1.5 h-1.5 rounded-full bg-state-success" aria-hidden="true"></span>
              Connected
            </span>
          </div>
          <div className="space-y-2">
            {[
              { label: "Message Delivery", value: "12ms" },
              { label: "State Sync", value: "8ms" },
              { label: "File Upload", value: "45ms" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between p-2.5 bg-surface-high rounded-lg border border-border-default"
              >
                <span className="text-caption text-typography-primary">{item.label}</span>
                <span className="text-caption font-mono text-state-success">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 h-10 flex items-end gap-1 px-1" aria-hidden="true">
            {[40, 20, 30, 10, 25, 15, 5, 10, 5, 8, 12, 5].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-brand-primary/20 rounded-t"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "focus",
      number: "02",
      title: "Designed for focus.",
      description:
        "Most chat apps demand your attention. We stripped away the clutter—excessive toolbars, flashy animations, and visual noise—leaving only what matters: your team's words.",
      visual: (
        <div className="w-full bg-surface-base border border-border-default rounded-xl shadow-2xl overflow-hidden">
          <div className="h-8 bg-surface-high border-b border-border-default flex items-center px-3">
            <span className="text-[10px] text-typography-secondary font-medium">
              # design-system
            </span>
          </div>
          <div className="p-3 space-y-2">
            <div className="flex gap-2">
              <div
                className="w-5 h-5 rounded-full bg-brand-primary/20 flex-shrink-0 flex items-center justify-center text-[8px] text-brand-primary font-bold"
                aria-hidden="true"
              >
                SC
              </div>
              <div className="bg-surface-high border border-border-default rounded-lg rounded-tl-sm px-2 py-1.5">
                <p className="text-[10px] text-typography-primary leading-tight">
                  Kept the spacing strict. No unnecessary borders.
                </p>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-lg rounded-tr-sm px-2 py-1.5">
                <p className="text-[10px] text-brand-primary leading-tight">
                  Perfect. Clean and readable.
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-surface-high border-t border-border-default flex items-center gap-1.5">
            <Eye className="w-2.5 h-2.5 text-brand-primary" aria-hidden="true" />
            <span className="text-[10px] text-state-muted font-medium">Focus Mode Active</span>
          </div>
        </div>
      ),
    },
    {
      id: "trust",
      number: "03",
      title: "Built on trust.",
      description:
        "Your conversations are proprietary. We implemented E2E encryption by default and ensure your data is never monetized or sold.",
      visual: (
        <div className="w-full bg-surface-base border border-border-default rounded-xl shadow-2xl p-4 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-state-success/10 border border-state-success/20 flex items-center justify-center mb-3">
            <ShieldCheck className="w-6 h-6 text-state-success" />
          </div>
          <h4 className="text-body-base font-semibold text-typography-primary mb-0.5">
            End-to-End Encrypted
          </h4>
          <p className="text-[10px] text-typography-secondary mb-4">Protocol v2.4.1</p>

          <div className="w-full space-y-1.5">
            <div className="flex items-center justify-between p-2 bg-surface-high rounded-md border border-border-default">
              <span className="text-[10px] text-typography-secondary">Key Exchange</span>
              <span className="text-[10px] text-state-success font-mono">X25519</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-surface-high rounded-md border border-border-default">
              <span className="text-[10px] text-typography-secondary">Cipher Suite</span>
              <span className="text-[10px] text-state-success font-mono">AES-256</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-spacing-section-m bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered Manifesto Intro */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-caption font-medium tracking-widest text-brand-primary uppercase mb-4">
            Philosophy
          </p>
          <h2 className="text-display-l font-semibold text-typography-primary tracking-tight leading-tight">
            Why Kizuna exists
          </h2>
          <p className="mt-4 text-body-lg text-typography-secondary leading-relaxed">
            We believe communication tools have become too complex. Kizuna is our answer: a return
            to clarity, speed, and respect for the user.
          </p>
        </div>

        {/* Evidence Grid - "Show, Don't Tell" Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <article key={pillar.id} id={pillar.id} className="group scroll-mt-24 flex flex-col">
              {/* The Proof (Visual Mockup) - Elevated to the top */}
              <div className="mb-6 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                {pillar.visual}
              </div>

              {/* The Statement */}
              <div className="space-y-3">
                <span className="text-caption font-mono text-brand-primary block">
                  {pillar.number}
                </span>
                <h3 className="text-h2 font-semibold text-typography-primary tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-body-base text-typography-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKizuna;
