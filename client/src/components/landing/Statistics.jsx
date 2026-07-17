
import { ShieldCheck } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      value: "99.99%",
      label: "Uptime SLA",
      subtext: "Enterprise reliability",
      isHighlight: true,
      isText: false,
    },
    {
      value: "12ms",
      label: "Avg. Latency",
      subtext: "Global edge network",
      isHighlight: false,
      isText: false,
    },
    {
      value: "2.4M",
      label: "Messages Daily",
      subtext: "Processed reliably",
      isHighlight: false,
      isText: false,
    },
    {
      value: "E2EE",
      label: "Default Encryption",
      subtext: "AES-256-GCM",
      isHighlight: false,
      isText: true,
    },
  ];

  return (
    <section
      className="py-spacing-section-s bg-surface-base border-y border-border-default"
      aria-label="Platform statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center flex flex-col items-center">
              {/* Metric Value */}
              {stat.isText ? (
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck
                    className="w-7 h-7 text-state-success"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="text-display-m font-bold text-typography-primary tracking-tight">
                    {stat.value}
                  </span>
                </div>
              ) : (
                <p
                  className={`text-display-m font-bold tracking-tight leading-none ${
                    stat.isHighlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent"
                      : "text-typography-primary"
                  }`}
                >
                  {stat.value}
                </p>
              )}

              {/* Metric Label */}
              <p className="mt-2 text-body-base font-medium text-typography-primary">
                {stat.label}
              </p>

              {/* Contextual Subtext */}
              <p className="mt-0.5 text-caption text-typography-secondary">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
