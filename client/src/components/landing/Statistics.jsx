import RevealOnScroll from "../ui/RevealOnScroll";

const stats = [
  { value: "10K+", label: "Teams worldwide", suffix: "" },
  { value: "2M", label: "Messages sent daily", suffix: "+" },
  { value: "99.9", label: "Uptime guaranteed", suffix: "%" },
  { value: "180", label: "Countries reached", suffix: "+" },
];

const Statistics = () => {
  return (
    <section className="relative py-20 bg-gray-950 dark:bg-gray-950 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 100} direction="up">
              <div className="bg-gray-950 p-8 md:p-10 text-center hover:bg-white/[0.02] transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                  {stat.value}
                  <span className="text-violet-400">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
