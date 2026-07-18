

import TestimonialCard from "./TestimonialCard";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";

const testimonials = [
  {
    quote:
      "Kizuna completely replaced our Slack and Notion combination. Having everything in one clean, fast workspace has been a game changer for our distributed team.",
    author: "Alexandra Chen",
    role: "Head of Engineering",
    company: "Vertex Labs",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    quote:
      "The threaded conversations are what sold us. We went from constant context-switching to actual focused work. Our team's output has measurably improved.",
    author: "Jordan Marsh",
    role: "Product Lead",
    company: "Fieldwork",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    quote:
      "I have tried every team communication tool on the market. Kizuna is the first one that doesn't feel like it's fighting against me. The keyboard shortcuts alone are worth it.",
    author: "Ravi Patel",
    role: "Founder",
    company: "Sidecar",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    quote:
      "We onboarded a 50-person team in a single afternoon. The UX is so intuitive that we didn't need training sessions. That says everything about the design.",
    author: "Mia Thompson",
    role: "Chief of Staff",
    company: "Altitude IO",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    quote:
      "The presence indicators and focus mode have transformed how we handle async communication. Our team respects each other's time now — Kizuna made that possible.",
    author: "Luca Ferrara",
    role: "Engineering Manager",
    company: "Crescent",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "We migrated from Microsoft Teams and the difference is night and day. Faster, cleaner, and the search actually works. Best decision we made this year.",
    author: "Sophie Laurent",
    role: "COO",
    company: "Pulsar",
    gradient: "from-cyan-400 to-blue-500",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by teams everywhere"
            description="Thousands of teams rely on Kizuna every day. Here's what they have to say."
            centered
          />
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <RevealOnScroll
              key={testimonial.author}
              delay={i * 80}
              direction="up"
              className="h-full"
            >
              <TestimonialCard {...testimonial} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Rating summary */}
        <RevealOnScroll direction="up" delay={400}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    className="text-amber-400"
                  >
                    <path d="M7 0l1.8 5.5H14l-4.6 3.4 1.8 5.5L7 11 2.8 14.4l1.8-5.5L0 5.5h5.2L7 0z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">4.9 / 5</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">from 2,400+ reviews</span>
            </div>
            <div className="w-px h-4 bg-gray-200 dark:bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Rated #1 in</span>
              <span className="font-medium text-gray-900 dark:text-white">Team Communication</span>
              <span>on G2</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;
