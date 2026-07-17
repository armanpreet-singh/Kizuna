import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "Axiom",
      initials: "SC",
      avatarTheme: "primary",
      review:
        "We migrated from Slack because the interface had become too heavy. Kizuna feels like it was built by engineers, for engineers. The command palette and sub-100ms latency aren't just features; they fundamentally change how quickly we resolve production issues.",
    },
    {
      name: "Marcus Johnson",
      role: "Lead Product Designer",
      company: "Synthetica",
      initials: "MJ",
      avatarTheme: "accent",
      review:
        "Most chat apps are visual chaos. Kizuna respects typography, spacing, and hierarchy. It's the only tool where I can review Figma files natively in thread without the UI fighting for my attention. It respects the design process.",
    },
    {
      name: "Elena Rodriguez",
      role: "Engineering Manager",
      company: "Prisma Labs",
      initials: "ER",
      avatarTheme: "success",
      review:
        "The contextual notification routing is a game-changer. My team is no longer interrupted by off-topic channel noise. They focus on deep work, and Kizuna only alerts them when their specific expertise is actually required.",
    },
  ];

  return (
    <section className="py-spacing-section-m bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-caption font-medium tracking-widest text-brand-primary uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-display-l font-semibold text-typography-primary tracking-tight leading-tight">
            Trusted by teams who ship
          </h2>
          <p className="mt-4 text-body-lg text-typography-secondary leading-relaxed">
            Don't take our word for it. Here is what engineering and design leaders say about
            switching to Kizuna.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              initials={testimonial.initials}
              avatarTheme={testimonial.avatarTheme}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
