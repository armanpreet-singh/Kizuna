const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    // Added 'group' to the parent to control child hover states
    <article className="group h-full bg-surface-base border border-border-default rounded-xl shadow-sm p-6 transition-shadow duration-300 ease-in-out hover:shadow-md hover:border-state-hover">
      {/* Icon Container - Added tactile scale on card hover */}
      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4 transition-transform duration-300 ease-out group-hover:scale-110">
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>

      <h3 className="text-h3 font-semibold text-typography-primary leading-tight">{title}</h3>

      <p className="mt-2 text-body-base text-typography-secondary leading-relaxed">{description}</p>
    </article>
  );
};

export default FeatureCard;
