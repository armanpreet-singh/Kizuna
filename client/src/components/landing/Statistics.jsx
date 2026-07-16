
import { ShieldCheck } from "lucide-react";

const Statistics = () => {
  const stats = [
    { value: "99.99%", label: "Uptime SLA", isHighlight: true, subtext: "Enterprise reliability" },
    { value: "12ms", label: "Avg. Latency", isHighlight: false, subtext: "Global edge network" },
    { value: "2.4M", label: "Messages Daily", isHighlight: false, subtext: "Processed reliably" },
    {
      value: "E2EE",
      label: "Default Encryption",
      isHighlight: false,
      subtext: "AES-256-GCM",
      isText: true,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center flex flex-col items-center">
              {stat.isText ? (
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-7 h-7 text-emerald-500" strokeWidth={1.5} />
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
              ) : (
                <p
                  className={`text-3xl sm:text-4xl font-bold tracking-tight leading-none ${
                    stat.isHighlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {stat.value}
                </p>
              )}
              <p className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-200">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
