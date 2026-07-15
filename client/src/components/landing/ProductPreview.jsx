import { useState } from "react";
import { LayoutDashboard, MessageSquare, User, Smartphone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

// Reusable skeleton block for the mockups
const Skeleton = ({ className = "" }) => (
  <div className={`bg-slate-100 rounded ${className}`} aria-hidden="true" />
);

const ProductPreview = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const views = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "chat", label: "Chat Window", icon: MessageSquare },
    { id: "profile", label: "User Profile", icon: User },
    { id: "mobile", label: "Mobile View", icon: Smartphone },
  ];

  return (
    <section id="preview" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interface"
          title="See Kizuna in action"
          subtitle="A refined interface that balances power with simplicity. Explore the core views of the application."
          align="center"
          className="mb-12"
        />

        {/* Tab Navigation */}
        <div
          className="flex justify-center mb-10"
          role="tablist"
          aria-label="Product preview views"
        >
          <div className="inline-flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 shadow-sm">
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
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
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
        <div className="max-w-5xl mx-auto">
          {/* Faux Window Chrome */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-white rounded-md border border-slate-200 text-xs text-slate-400 w-64 text-center truncate">
                  app.kizuna.com/{activeView}
                </div>
              </div>
              <div className="w-12"></div>
            </div>

            {/* View Panels */}
            <div className="h-[500px] bg-slate-50 relative">
              {/* Dashboard Panel */}
              <div
                id="panel-dashboard"
                role="tabpanel"
                className={`absolute inset-0 flex ${activeView !== "dashboard" ? "hidden" : ""}`}
              >
                <div className="w-56 bg-white border-r border-slate-100 p-4 flex flex-col gap-3">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
                <div className="flex-1 p-6 flex flex-col gap-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-24 w-full rounded-lg" />
                    ))}
                  </div>
                  <Skeleton className="h-4 w-1/4" />
                  <div className="flex-1 bg-white rounded-lg border border-slate-100 p-4 flex flex-col gap-3">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-4 w-full" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Chat Panel */}
              <div
                id="panel-chat"
                role="tabpanel"
                className={`absolute inset-0 flex ${activeView !== "chat" ? "hidden" : ""}`}
              >
                <div className="w-60 bg-white border-r border-slate-100 p-4 flex flex-col gap-2">
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  {[...Array(8)].map((_, i) => (
                    <Skeleton key={i} className={`h-8 w-full ${i === 2 ? "bg-indigo-50" : ""}`} />
                  ))}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="h-16 border-b border-slate-100 px-6 flex items-center">
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4 justify-end overflow-hidden">
                    <div className="flex gap-3 self-start">
                      <Skeleton className="w-8 h-8 rounded-full" />
                      <Skeleton className="h-16 w-64 rounded-xl" />
                    </div>
                    <div className="flex gap-3 self-end">
                      <Skeleton className="h-12 w-48 rounded-xl bg-indigo-50" />
                    </div>
                    <div className="flex gap-3 self-start">
                      <Skeleton className="w-8 h-8 rounded-full" />
                      <Skeleton className="h-20 w-72 rounded-xl" />
                    </div>
                  </div>
                  <div className="p-4 border-t border-slate-100 bg-white">
                    <Skeleton className="h-12 w-full rounded-xl" />
                  </div>
                </div>
              </div>

              {/* Profile Panel */}
              <div
                id="panel-profile"
                role="tabpanel"
                className={`absolute inset-0 flex ${activeView !== "profile" ? "hidden" : ""}`}
              >
                <div className="w-56 bg-white border-r border-slate-100 p-4 flex flex-col gap-3">
                  <Skeleton className="h-8 w-3/4 mb-4" />
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-full" />
                  ))}
                </div>
                <div className="flex-1 p-8 bg-white overflow-y-auto">
                  <div className="flex flex-col items-center text-center mb-8">
                    <Skeleton className="w-24 h-24 rounded-full mb-4" />
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <div className="max-w-md mx-auto space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                      >
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-40" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Panel */}
              <div
                id="panel-mobile"
                role="tabpanel"
                className={`absolute inset-0 flex items-center justify-center bg-slate-100/50 ${activeView !== "mobile" ? "hidden" : ""}`}
              >
                {/* Phone Frame */}
                <div className="w-[280px] h-[500px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl relative border-4 border-slate-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-10" />

                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
                    <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4">
                      <Skeleton className="h-5 w-20" />
                    </div>
                    <div className="flex-1 p-3 flex flex-col gap-2">
                      <div className="flex gap-2 self-start">
                        <Skeleton className="w-6 h-6 rounded-full" />
                        <Skeleton className="h-10 w-40 rounded-lg" />
                      </div>
                      <div className="flex gap-2 self-end">
                        <Skeleton className="h-8 w-32 rounded-lg bg-indigo-50" />
                      </div>
                      <div className="flex gap-2 self-start">
                        <Skeleton className="w-6 h-6 rounded-full" />
                        <Skeleton className="h-14 w-44 rounded-lg" />
                      </div>
                    </div>
                    <div className="p-2 border-t border-slate-100 bg-white">
                      <Skeleton className="h-8 w-full rounded-full" />
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
