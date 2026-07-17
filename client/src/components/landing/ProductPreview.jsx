import { useState } from "react";
import {
  LayoutDashboard,
  MessageSquare,
  Smartphone,
  Paperclip,
  Send,
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
              {/* Dashboard Panel */}
              <div
                id="panel-dashboard"
                role="tabpanel"
                className={`absolute inset-0 flex transition-opacity duration-300 ease-in-out ${activeView === "dashboard" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <div className="w-56 bg-surface-base border-r border-border-default p-4 flex flex-col gap-1">
                  <div className="h-4 w-3/4 bg-surface-high rounded mb-6" aria-hidden="true"></div>
                  {[
                    { n: "Overview", a: true },
                    { n: "Analytics", a: false },
                    { n: "Settings", a: false },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded text-body-base font-medium ${item.a ? "bg-surface-high text-typography-primary" : "text-typography-secondary"}`}
                    >
                      {item.n}
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                  <h3 className="text-h3 font-semibold text-typography-primary">Overview</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Active Users", val: "1,248", color: "text-state-success" },
                      { label: "Messages Today", val: "54.2k", color: "text-brand-primary" },
                      { label: "Uptime", val: "99.99%", color: "text-brand-accent" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-surface-high border border-border-default rounded-xl p-4"
                      >
                        <p className="text-caption text-typography-secondary uppercase tracking-wider">
                          {stat.label}
                        </p>
                        <p className={`text-h3 font-bold mt-1 ${stat.color}`}>{stat.val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 bg-surface-high/50 border border-border-default rounded-xl p-4">
                    <p className="text-body-base font-medium text-typography-secondary mb-4">
                      Recent Activity
                    </p>
                    <div className="space-y-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-full bg-surface-base"
                            aria-hidden="true"
                          ></div>
                          <div
                            className="flex-1 h-3 bg-surface-base rounded w-full"
                            aria-hidden="true"
                          ></div>
                          <div className="text-caption text-state-muted">2m ago</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Group Chat Panel */}
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
                    <div className="flex gap-3 self-start">
                      <div
                        className="w-7 h-7 rounded-full bg-brand-primary/20 flex-shrink-0"
                        aria-hidden="true"
                      ></div>
                      <div className="bg-surface-high border border-border-default rounded-xl rounded-tl-sm px-3 py-2 text-body-base text-typography-primary max-w-xs">
                        Just finished the new icon set. Uploading the figma file now.
                      </div>
                    </div>
                    <div className="flex gap-3 self-start">
                      <div
                        className="w-7 h-7 rounded-full bg-brand-primary/20 flex-shrink-0"
                        aria-hidden="true"
                      ></div>
                      <div className="bg-surface-high border border-border-default rounded-xl rounded-tl-sm p-2 max-w-xs w-56">
                        <div className="flex items-center gap-2 p-2 bg-surface-bg rounded-lg">
                          <div
                            className="w-8 h-8 bg-brand-accent/20 rounded flex items-center justify-center text-brand-accent text-caption font-bold"
                            aria-hidden="true"
                          >
                            FIG
                          </div>
                          <div>
                            <p className="text-body-base text-typography-primary">
                              ui-v2-components.fig
                            </p>
                            <p className="text-caption text-typography-secondary">2.4 MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 self-end">
                      <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-xl rounded-tr-sm px-3 py-2 text-body-base text-brand-primary max-w-xs">
                        Looks great. I'll start implementing the tokens.
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

              {/* Mobile Panel */}
              <div
                id="panel-mobile"
                role="tabpanel"
                className={`absolute inset-0 flex items-center justify-center bg-surface-high transition-opacity duration-300 ease-in-out ${activeView === "mobile" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                {/* Phone Frame using surface-bg for deep contrast */}
                <div className="w-[280px] h-[480px] bg-surface-bg rounded-[2.5rem] p-2 shadow-2xl relative border-[6px] border-surface-base">
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-surface-base rounded-b-2xl z-10"
                    aria-hidden="true"
                  ></div>

                  {/* Screen */}
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
