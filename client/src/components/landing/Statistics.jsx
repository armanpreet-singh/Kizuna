const Statistics = () => {
  // Replaced "E2EE" with a numerical metric to fix visual grid inconsistency
  const stats = [
    {
      value: "99.99%",
      label: "Uptime SLA",
      subtext: "Enterprise reliability",
      isHighlight: true,
    },
    {
      value: "12ms",
      label: "Avg. Latency",
      subtext: "Global edge network",
      isHighlight: false,
    },
    {
      value: "2.4M",
      label: "Messages Daily",
      subtext: "Processed reliably",
      isHighlight: false,
    },
    {
      value: "<50ms",
      label: "API Response",
      subtext: "Average query time",
      isHighlight: false,
    },
  ];

  return (
    <section
      className="py-spacing-section-xs bg-surface-base border-y border-border-default"
      aria-label="Platform statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center flex flex-col items-center">
              {/* Metric Value - Simplified logic by removing the text/acronym conditional */}
              <p
                className={`text-display-m font-bold tracking-tight leading-none ${
                  stat.isHighlight
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent"
                    : "text-typography-primary"
                }`}
              >
                {stat.value}
              </p>

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
