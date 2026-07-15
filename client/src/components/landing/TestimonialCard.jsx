import Card from "../ui/Card";

/**
 * TestimonialCard Component
 *
 * @param {string} name - The reviewer's name
 * @param {string} role - The reviewer's job title
 * @param {string} company - The reviewer's company name
 * @param {string} review - The testimonial text
 * @param {string} initials - 1-2 character string for the avatar placeholder
 * @param {'indigo' | 'cyan' | 'pink' | 'emerald'} avatarTheme - Color scheme for the avatar and accent border
 */
const TestimonialCard = ({ name, role, company, review, initials, avatarTheme = "indigo" }) => {
  // Theme mapping for avatars and subtle accent borders
  const themes = {
    indigo: {
      avatar: "bg-indigo-50 text-indigo-600",
      border: "border-l-indigo-500",
    },
    cyan: {
      avatar: "bg-cyan-50 text-cyan-600",
      border: "border-l-cyan-500",
    },
    pink: {
      avatar: "bg-pink-50 text-pink-600",
      border: "border-l-pink-500",
    },
    emerald: {
      avatar: "bg-emerald-50 text-emerald-600",
      border: "border-l-emerald-500",
    },
  };

  const activeTheme = themes[avatarTheme] || themes.indigo;

  return (
    <Card
      padding="md"
      className={`group h-full border-l-2 ${activeTheme.border} transition-shadow duration-300 ease-out group-hover:shadow-md`}
    >
      {/* Testimonial Quote */}
      <blockquote className="flex-1">
        <p className="text-[15px] text-slate-600 leading-relaxed">&ldquo;{review}&rdquo;</p>
      </blockquote>

      {/* Author Information */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
        {/* Avatar Placeholder with Dynamic Theme */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${activeTheme.avatar}`}
          aria-hidden="true"
        >
          {initials}
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900 leading-tight">{name}</p>
          <p className="text-xs text-slate-500 mt-0.5">
            {role} @ {company}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
