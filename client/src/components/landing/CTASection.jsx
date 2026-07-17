import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-spacing-section-m bg-surface-high overflow-hidden">
      {/* Subtle radial gradient to draw focus to the center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-display-l font-semibold text-typography-primary tracking-tight leading-tight">
          Stop fighting your tools.
          <br className="hidden sm:block" /> Start building together.
        </h2>

        {/* Supporting Description */}
        <p className="mt-6 text-body-lg text-typography-secondary leading-relaxed max-w-2xl mx-auto">
          Migrate your team in minutes. Kizuna's import tool seamlessly pulls your channels,
          history, and files from Slack, Discord, and Telegram—so you don't lose a single thread.
        </p>

        {/* CTA Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-body-base font-medium text-surface-base bg-brand-primary hover:opacity-90 rounded-lg transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-high"
          >
            Get Started for Free
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-body-base font-medium text-typography-secondary border border-border-default hover:bg-surface-bg hover:text-typography-primary rounded-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-high"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
