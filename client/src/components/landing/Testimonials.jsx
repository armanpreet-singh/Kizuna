import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  // ... keep exact same testimonials array ...
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "Axiom",
      initials: "SC",
      avatarTheme: "indigo",
      review:
        "We migrated from Slack because the interface had become too heavy. Kizuna feels like it was built by engineers, for engineers. The command palette and sub-100ms latency aren't just features; they fundamentally change how quickly we resolve production issues.",
    },
    {
      name: "Marcus Johnson",
      role: "Lead Product Designer",
      company: "Synthetica",
      initials: "MJ",
      avatarTheme: "pink",
      review:
        "Most chat apps are visual chaos. Kizuna respects typography, spacing, and hierarchy. It's the only tool where I can review Figma files natively in thread without the UI fighting for my attention. It respects the design process.",
    },
    {
      name: "Elena Rodriguez",
      role: "Engineering Manager",
      company: "Prisma Labs",
      initials: "ER",
      avatarTheme: "cyan",
      review:
        "The contextual notification routing is a game-changer. My team is no longer interrupted by off-topic channel noise. They focus on deep work, and Kizuna only alerts them when their specific expertise is actually required.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by teams who ship"
          subtitle="Don't take our word for it. Here is what engineering and design leaders say about switching to Kizuna."
          align="center"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
