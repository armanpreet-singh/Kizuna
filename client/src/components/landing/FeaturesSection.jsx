import { Zap, GitBranch, HardDrive, ShieldCheck, Bell, Command } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Sub-100ms Delivery",
      description:
        "Messages appear the instant they are typed. Our event-driven architecture ensures zero perceptible latency.",
    },
    {
      icon: GitBranch,
      title: "Threaded Context",
      description:
        "Keep main channels clean. Branch off into focused threads without losing the narrative of the parent conversation.",
    },
    {
      icon: HardDrive,
      title: "Native File Ecosystem",
      description:
        "Drag, drop, and preview without leaving the app. Built-in rendering for code snippets, Figma files, and media.",
    },
    {
      icon: ShieldCheck,
      title: "Zero-Knowledge Architecture",
      description:
        "E2E encryption by default. We cannot read your messages, and we never will. Your data belongs to you.",
    },
    {
      icon: Bell,
      title: "Contextual Alerts",
      description:
        "Smart notification routing that understands your role and current focus, batching noise into a single daily digest.",
    },
    {
      icon: Command,
      title: "Command Palette",
      description:
        "Navigate channels, search files, or execute actions instantly using keyboard-first commands (Cmd+K).",
    },
  ];

  return (
    <section id="features" className="py-spacing-section-m bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-caption font-medium tracking-widest text-brand-primary uppercase mb-4">
            Capabilities
          </p>
          <h2 className="text-display-l font-semibold text-typography-primary tracking-tight leading-tight">
            Tools that disappear so you can focus
          </h2>
          <p className="mt-4 text-body-lg text-typography-secondary leading-relaxed">
            We stripped away the bloat found in legacy chat apps. What remains is a refined set of
            tools designed to accelerate your team's workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
