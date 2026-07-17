import { Zap, Eye, ShieldCheck } from "lucide-react";

const WhyKizuna = () => {
  const pillars = [
    {
      id: "speed",
      icon: Zap,
      number: "01",
      title: "Engineered for speed.",
      description:
        "Latency is the enemy of flow. We built Kizuna on a non-blocking architecture, ensuring messages appear the moment they are sent. No loading spinners, no delayed typing indicators. Just pure, instantaneous communication.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-surface-base border border-border-default rounded-xl shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-caption font-medium text-typography-secondary uppercase tracking-wider">
              Network Status
            </span>
            <span className="flex items-center gap-1.5 text-caption text-state-success">
              <span className="w-1.5 h-1.5 rounded-full bg-state-success" aria-hidden="true"></span>
              Connected
            </span>
          </div>
          <div className="space-y-3">
            {[
              { label: "Message Delivery", value: "12ms" },
              { label: "State Sync", value: "8ms" },
              { label: "File Upload", value: "45ms" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between p-3 bg-surface-high rounded-lg border border-border-default"
              >
                <span className="text-body-base text-typography-primary">{item.label}</span>
                <span className="text-body-base font-mono text-state-success">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 h-12 flex items-end gap-1 px-2" aria-hidden="true">
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
      icon: Eye,
      number: "02",
      title: "Designed for focus.",
      description:
        "Most chat apps demand your attention. Kizuna respects it. We stripped away the clutter—excessive toolbars, flashy animations, and visual noise—leaving only what matters: your team's words.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-surface-base border border-border-default rounded-xl shadow-2xl overflow-hidden">
          <div className="h-10 bg-surface-high border-b border-border-default flex items-center px-4">
            <span className="text-caption text-typography-secondary"># design-system</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex gap-3">
              <div
                className="w-7 h-7 rounded-full bg-brand-primary/20 flex-shrink-0 flex items-center justify-center text-[10px] text-brand-primary font-bold"
                aria-hidden="true"
              >
                SC
              </div>
              <div className="bg-surface-high border border-border-default rounded-xl rounded-tl-sm px-3 py-2">
                <p className="text-body-base text-typography-primary">
                  Kept the spacing strict. No unnecessary borders.
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl rounded-tr-sm px-3 py-2">
                <p className="text-body-base text-brand-primary">Perfect. Clean and readable.</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-2 bg-surface-high border-t border-border-default flex items-center gap-2">
            <Eye className="w-3 h-3 text-brand-primary" aria-hidden="true" />
            <span className="text-caption text-state-muted font-medium">
              Focus Mode Active — UI chrome hidden
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "trust",
      icon: ShieldCheck,
      number: "03",
      title: "Built on trust.",
      description:
        "Your conversations are proprietary. We implemented E2E encryption by default, open-source our client-side encryption protocols, and ensure your data is never monetized or sold.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-surface-base border border-border-default rounded-xl shadow-2xl p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-state-success/10 border border-state-success/20 flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-state-success" />
            </div>
            <h4 className="text-h3 font-semibold text-typography-primary mb-1">
              End-to-End Encrypted
            </h4>
            <p className="text-body-base text-typography-secondary mb-6">
              Protocol v2.4.1 • Verified
            </p>

            <div className="w-full space-y-2">
              <div className="flex items-center justify-between p-3 bg-surface-high rounded-lg border border-border-default">
                <span className="text-body-base text-typography-secondary">Key Exchange</span>
                <span className="text-body-base text-state-success font-mono">X25519</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-high rounded-lg border border-border-default">
                <span className="text-body-base text-typography-secondary">Cipher Suite</span>
                <span className="text-body-base text-state-success font-mono">AES-256-GCM</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-spacing-section-m bg-surface-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
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

        {/* Split-Index Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Table of Contents Index (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-center">
            <nav
              className="relative border-l border-border-default pl-8 space-y-12"
              aria-label="Philosophy index"
            >
              {pillars.map((pillar) => (
                <a
                  key={pillar.id}
                  href={`#${pillar.id}`}
                  className="block group transition-colors duration-300"
                >
                  <span className="text-caption text-brand-primary font-mono mb-2 block">
                    {pillar.number}
                  </span>
                  <h3 className="text-display-m font-bold text-typography-primary group-hover:text-brand-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column: Content & Visual Flow */}
          <div className="lg:col-span-8 flex flex-col gap-24">
            {pillars.map((pillar) => (
              <div key={pillar.id} id={pillar.id} className="scroll-mt-24">
                {/* Mobile-only Header (Replaces the left index) */}
                <div className="flex items-center gap-3 mb-6 lg:hidden">
                  <span className="text-caption text-brand-primary font-mono">{pillar.number}</span>
                  <h3 className="text-h2 font-semibold text-typography-primary">{pillar.title}</h3>
                </div>

                {/* Description */}
                <p className="text-body-lg text-typography-secondary leading-relaxed max-w-2xl mb-10">
                  {pillar.description}
                </p>

                {/* Visual Proof */}
                <div className="flex justify-end">{pillar.visual}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKizuna;
