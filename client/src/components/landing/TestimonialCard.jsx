const TestimonialCard = ({ name, role, company, review, initials, avatarTheme = "primary" }) => {
  // Map semantic themes to avatar styles
  const themes = {
    primary: "bg-brand-primary/10 text-brand-primary",
    accent: "bg-brand-accent/10 text-brand-accent",
    success: "bg-state-success/10 text-state-success",
  };

  const activeTheme = themes[avatarTheme] || themes.primary;

  return (
    <article className="h-full bg-surface-base border border-border-default rounded-xl shadow-sm p-6 transition-shadow duration-300 ease-in-out hover:shadow-md">
      {/* Testimonial Quote */}
      <blockquote className="flex-1">
        <p className="text-body-base text-typography-secondary leading-relaxed">
          &ldquo;{review}&rdquo;
        </p>
      </blockquote>

      {/* Author Information */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border-default">
        {/* Avatar Placeholder using semantic brand tokens */}
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-body-base font-semibold flex-shrink-0 ${activeTheme}`}
          aria-hidden="true"
        >
          {initials}
        </div>

        <div>
          <p className="text-h4 text-typography-primary leading-tight">{name}</p>
          <p className="text-caption text-typography-secondary mt-0.5">
            {role} @ {company}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
