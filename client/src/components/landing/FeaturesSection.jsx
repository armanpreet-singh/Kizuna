import { Zap, GitBranch, HardDrive, ShieldCheck, Bell, Command } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
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
    <section id="features" className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Tools that disappear so you can focus"
          subtitle="We stripped away the bloat found in legacy chat apps. What remains is a refined set of tools designed to accelerate your team's workflow."
          align="center"
          className="mb-16"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
