
import Card from "../ui/Card";

const TestimonialCard = ({ name, role, company, review, initials, avatarTheme = "indigo" }) => {
  const themes = {
    indigo: {
      avatar: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
      border: "border-l-indigo-500 dark:border-l-indigo-400",
    },
    cyan: {
      avatar: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      border: "border-l-cyan-500 dark:border-l-cyan-400",
    },
    pink: {
      avatar: "bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400",
      border: "border-l-pink-500 dark:border-l-pink-400",
    },
    emerald: {
      avatar: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      border: "border-l-emerald-500 dark:border-l-emerald-400",
    },
  };
  const activeTheme = themes[avatarTheme] || themes.indigo;

  return (
    <Card
      padding="md"
      className={`group h-full border-l-2 ${activeTheme.border} transition-shadow duration-300 ease-out group-hover:shadow-md dark:group-hover:shadow-slate-900/50`}
    >
      <blockquote className="flex-1">
        <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
          &ldquo;{review}&rdquo;
        </p>
      </blockquote>
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700/50">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${activeTheme.avatar}`}
          aria-hidden="true"
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
            {name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {role} @ {company}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
