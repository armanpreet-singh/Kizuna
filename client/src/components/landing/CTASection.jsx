import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const CTASection = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-slate-900 overflow-hidden">
      {/* Decorative Background Gradient - Creates depth and premium feel */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Motivational Headline - High contrast for dark background */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Ready to build stronger
          <br className="hidden sm:block" /> connections?
        </h2>

        {/* Supporting Description - Muted to let the headline and CTAs shine */}
        <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Join thousands of teams who have moved to a faster, more secure, and beautifully crafted
          communication platform. Get started in seconds.
        </p>

        {/* CTA Group - Custom classes override Button defaults to fit dark theme */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href="#register"
            className="bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200 shadow-lg shadow-black/20"
          >
            Get Started for Free
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            href="#contact"
            className="text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white active:bg-slate-700"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
