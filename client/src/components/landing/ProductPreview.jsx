import  { useState } from "react";
import {
  LayoutDashboard,
  MessageSquare,
  Smartphone,
  Paperclip,
  Send,
  MessageCircle,
  Users,
} from "lucide-react";

const ProductPreview = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const views = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "chat", label: "Group Chat", icon: MessageSquare },
    { id: "mobile", label: "Mobile", icon: Smartphone },
  ];

  return (
    <section id="preview" className="py-spacing-section-m bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-caption font-medium tracking-widest text-brand-primary uppercase mb-4">
            Interface
          </p>
          <h2 className="text-display-l font-semibold text-typography-primary tracking-tight leading-tight">
            Designed for clarity
          </h2>
          <p className="mt-4 text-body-lg text-typography-secondary leading-relaxed">
            Every pixel is intentional. A structured environment that reduces eye strain and keeps
            your team's focus exactly where it belongs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex justify-center mb-10"
          role="tablist"
          aria-label="Product preview views"
        >
          <div className="inline-flex items-center gap-1 p-1 bg-surface-base rounded-xl border border-border-default shadow-sm">
            {views.map((view) => {
              const Icon = view.icon;
              const isActive = activeView === view.id;
              return (
                <button
                  key={view.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${view.id}`}
                  onClick={() => setActiveView(view.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-body-base font-medium rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "bg-surface-bg text-typography-primary shadow-sm"
                      : "text-typography-secondary hover:text-typography-primary hover:bg-surface-high"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{view.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mockup Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-base rounded-2xl shadow-2xl border border-border-default overflow-hidden">
            {/* Window Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-high border-b border-border-default">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-state-danger/80"></div>
                <div className="w-3 h-3 rounded-full bg-state-warning/80"></div>
                <div className="w-3 h-3 rounded-full bg-state-success/80"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-surface-bg rounded-md text-caption text-typography-secondary w-64 text-center truncate border border-border-default">
                  app.kizuna.com/{activeView}
                </div>
              </div>
              <div className="w-12" aria-hidden="true"></div>
            </div>

            {/* View Panels with Crossfade Transition */}
            <div className="h-[500px] bg-surface-bg relative">
              {/* Dashboard Panel - Replaced Skeletons with Real Analytics UI */}
              <div
                id="panel-dashboard"
                role="tabpanel"
                className={`absolute inset-0 flex transition-opacity duration-300 ease-in-out ${activeView === "dashboard" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <div className="w-56 bg-surface-base border-r border-border-default p-4 flex flex-col gap-1">
                  <div className="h-4 w-3/4 bg-surface-high rounded mb-6" aria-hidden="true"></div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-surface-high text-typography-primary text-body-base font-medium">
                    <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
                    Overview
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded text-body-base text-typography-secondary">
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Analytics
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded text-body-base text-typography-secondary">
                    <Users className="w-4 h-4" aria-hidden="true" />
                    Members
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                  <h3 className="text-h3 font-semibold text-typography-primary">Overview</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        label: "Active Users",
                        val: "1,248",
                        color: "text-state-success",
                        icon: Users,
                      },
                      {
                        label: "Messages Today",
                        val: "54.2k",
                        color: "text-brand-primary",
                        icon: MessageCircle,
                      },
                      {
                        label: "Uptime",
                        val: "99.99%",
                        color: "text-brand-accent",
                        icon: LayoutDashboard,
                      },
                    ].map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="bg-surface-high border border-border-default rounded-xl p-4"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <Icon className={`w-4 h-4 ${stat.color}`} aria-hidden="true" />
                            <span className={`text-h3 font-bold ${stat.color}`}>{stat.val}</span>
                          </div>
                          <p className="text-caption text-typography-secondary">{stat.label}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex-1 bg-surface-high/50 border border-border-default rounded-xl p-4">
                    <p className="text-body-base font-medium text-typography-secondary mb-4">
                      Recent Activity
                    </p>
                    <div className="space-y-3">
                      {[
                        { user: "SC", action: "pushed to main", time: "2m ago" },
                        { user: "MJ", action: "merged PR #142", time: "15m ago" },
                        { user: "ER", action: "created ticket", time: "1h ago" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-[8px] text-brand-primary font-bold"
                            aria-hidden="true"
                          >
                            {item.user}
                          </div>
                          <p className="flex-1 text-body-base text-typography-primary">
                            {item.action}
                          </p>
                          <div className="text-caption text-state-muted">{item.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Group Chat Panel - Added Reactions and Threads */}
              <div
                id="panel-chat"
                role="tabpanel"
                className={`absolute inset-0 flex transition-opacity duration-300 ease-in-out ${activeView === "chat" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <div className="w-60 bg-surface-base border-r border-border-default p-4 flex flex-col gap-2">
                  <div className="h-4 w-1/2 bg-surface-high rounded mb-4" aria-hidden="true"></div>
                  {[
                    { n: "Design Team", a: true },
                    { n: "Frontend", a: false },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded text-body-base ${item.a ? "bg-surface-high text-typography-primary" : "text-typography-secondary"}`}
                    >
                      {item.n}
                    </div>
                  ))}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="h-14 border-b border-border-default px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-body-base font-medium text-typography-primary">
                        Design Team
                      </span>
                      <div className="flex -space-x-2 ml-2">
                        <div
                          className="w-5 h-5 rounded-full bg-brand-primary/20 border-2 border-surface-bg"
                          aria-hidden="true"
                        ></div>
                        <div
                          className="w-5 h-5 rounded-full bg-brand-accent/20 border-2 border-surface-bg"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4 justify-end overflow-hidden">
                    {/* Message with Reaction */}
                    <div className="flex gap-3 self-start">
                      <div
                        className="w-7 h-7 rounded-full bg-brand-primary/20 flex-shrink-0"
                        aria-hidden="true"
                      ></div>
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-body-base font-semibold text-typography-primary">
                            Sarah C.
                          </span>
                          <span className="text-caption text-state-muted">10:38 AM</span>
                        </div>
                        <div className="bg-surface-high border border-border-default rounded-xl rounded-tl-sm px-3 py-2 text-body-base text-typography-primary max-w-xs">
                          Just finished the new icon set.
                        </div>
                        <div className="mt-1.5 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-surface-high border border-border-default rounded-md text-caption text-typography-secondary">
                            👍 4
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Message with Thread Preview */}
                    <div className="flex gap-3 self-start">
                      <div
                        className="w-7 h-7 rounded-full bg-brand-accent/20 flex-shrink-0"
                        aria-hidden="true"
                      ></div>
                      <div>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-body-base font-semibold text-typography-primary">
                            Marcus J.
                          </span>
                          <span className="text-caption text-state-muted">10:40 AM</span>
                        </div>
                        <div className="bg-surface-high border border-border-default rounded-xl rounded-tl-sm px-3 py-2 text-body-base text-typography-primary max-w-xs">
                          Let's break this task down into smaller tickets before starting.
                        </div>
                        <a
                          href="#"
                          className="mt-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 text-caption text-brand-primary font-medium hover:underline"
                        >
                          <MessageSquare className="w-3 h-3" aria-hidden="true" />
                          View 5 replies
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3 self-end">
                      <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl rounded-tr-sm px-3 py-2 text-body-base text-brand-primary max-w-xs">
                        Good call. I'll set up the sub-tasks.
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-border-default bg-surface-base">
                    <div className="flex items-center gap-3 bg-surface-high border border-border-default rounded-lg px-4 py-2.5">
                      <Paperclip className="w-4 h-4 text-state-muted" aria-hidden="true" />
                      <span className="text-body-base text-state-muted flex-1">
                        Message Design Team...
                      </span>
                      <Send className="w-5 h-5 text-state-muted" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Panel - Unchanged, already structurally sound */}
              <div
                id="panel-mobile"
                role="tabpanel"
                className={`absolute inset-0 flex items-center justify-center bg-surface-high transition-opacity duration-300 ease-in-out ${activeView === "mobile" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <div className="w-[280px] h-[480px] bg-surface-bg rounded-[2.5rem] p-2 shadow-2xl relative border-[6px] border-surface-base">
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-surface-base rounded-b-2xl z-10"
                    aria-hidden="true"
                  ></div>
                  <div className="w-full h-full bg-surface-base rounded-[2rem] overflow-hidden flex flex-col border border-border-default/50">
                    <div className="h-12 bg-surface-base border-b border-border-default flex items-center justify-between px-4 pt-2">
                      <span className="text-caption font-semibold text-typography-primary">
                        Kizuna
                      </span>
                      <div className="flex gap-2">
                        <div
                          className="w-4 h-4 rounded-full bg-surface-high"
                          aria-hidden="true"
                        ></div>
                        <div
                          className="w-4 h-4 rounded-full bg-surface-high"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex-1 p-3 flex flex-col gap-3">
                        <div className="flex items-center gap-2 py-2 px-2 rounded bg-surface-high">
                          <span className="text-typography-secondary text-caption">#</span>
                          <span className="text-body-base text-typography-primary">general</span>
                        </div>
                        <div className="flex items-center gap-2 py-2 px-2 rounded bg-brand-primary/10 border border-brand-primary/20">
                          <span className="text-brand-primary text-caption">#</span>
                          <span className="text-body-base text-brand-primary">engineering</span>
                          <span className="ml-auto bg-state-danger text-surface-base text-[8px] px-1 rounded-full">
                            3
                          </span>
                        </div>
                      </div>
                      <div className="p-2 border-t border-border-default bg-surface-base">
                        <div
                          className="h-7 w-full bg-surface-high rounded-full"
                          aria-hidden="true"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
