

const Statistics = () => {
  // Realistic placeholder data structured for easy updates
  const stats = [
    { value: "12,500+", label: "Active Communities" },
    { value: "85M+", label: "Messages Delivered" },
    { value: "2.1M+", label: "Files Shared" },
    { value: "48,000+", label: "Developers Using Kizuna" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              {/* Metric Value - High contrast, bold typography */}
              <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {stat.value}
              </p>
              {/* Metric Label - Muted, descriptive typography */}
              <p className="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
