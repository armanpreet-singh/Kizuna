import { useState } from "react";
import { LayoutDashboard, MessageSquare, User, Smartphone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const ProductPreview = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const views = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "chat", label: "Group Chat", icon: MessageSquare },
    { id: "profile", label: "Profile", icon: User },
    { id: "mobile", label: "Mobile", icon: Smartphone },
  ];

  return (
    <section id="preview" className="py-20 sm:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interface"
          title="Designed for clarity"
          subtitle="Every pixel is intentional. A structured, dark-mode-first environment that reduces eye strain and keeps your team's focus exactly where it belongs."
          align="center"
          className="mb-12"
        />

        {/* Tab Navigation */}
        <div
          className="flex justify-center mb-10"
          role="tablist"
          aria-label="Product preview views"
        >
          <div className="inline-flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
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
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
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
        <div className="relative max-w-6xl mx-auto">
          {/* Decorative Glow behind mockup */}
          <div
            className="absolute -inset-4 bg-gradient-to-tr from-indigo-100 via-cyan-50 to-transparent rounded-3xl blur-2xl opacity-60 -z-10"
            aria-hidden="true"
          />

          {/* Faux Window Chrome */}
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-700/50 overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-slate-900/50 rounded-md border border-slate-700/50 text-xs text-slate-400 w-64 text-center truncate">
                  app.kizuna.com/{activeView}
                </div>
              </div>
              <div className="w-12"></div>
            </div>

            {/* View Panels with Crossfade Transition */}
            <div className="h-[500px] bg-slate-900 relative">
              {/* Dashboard Panel */}
              <div
                id="panel-dashboard"
                role="tabpanel"
                className={`absolute inset-0 flex transition-opacity duration-300 ease-in-out ${activeView === "dashboard" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <div className="w-56 bg-slate-900 border-r border-slate-700/50 p-4 flex flex-col gap-1">
                  <div className="h-4 w-3/4 bg-indigo-500/20 rounded mb-6"></div>
                  {[
                    { n: "Dashboard", a: true },
                    { n: "Channels", a: false },
                    { n: "Direct Messages", a: false },
                    { n: "Settings", a: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs font-medium ${item.a ? "bg-slate-800/80 text-slate-200" : "text-slate-500"}`}
                    >
                      {item.n}
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-200">Overview</h3>
                    <div className="h-7 w-24 bg-slate-800 rounded-md border border-slate-700/50"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Active Users", val: "1,248", color: "text-emerald-400" },
                      { label: "Messages Today", val: "54.2k", color: "text-indigo-400" },
                      { label: "Uptime", val: "99.99%", color: "text-cyan-400" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4"
                      >
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {stat.label}
                        </p>
                        <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.val}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <p className="text-xs font-medium text-slate-400 mb-4">Recent Activity</p>
                    <div className="space-y-3">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                          <div className="flex-1 h-3 bg-slate-700/50 rounded w-full"></div>
                          <div className="text-[10px] text-slate-600">2m ago</div>
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
                <div className="w-60 bg-slate-900 border-r border-slate-700/50 p-4 flex flex-col gap-2">
                  <div className="h-4 w-1/2 bg-slate-700/50 rounded mb-4"></div>
                  {[
                    { n: "Design Team", a: true },
                    { n: "Frontend", a: false },
                    { n: "Sarah Chen", a: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs ${item.a ? "bg-slate-800/80 text-slate-200" : "text-slate-500"}`}
                    >
                      {!item.n.includes("Team") && !item.n.includes("end") && (
                        <span className="text-slate-600 text-base leading-none">@</span>
                      )}
                      {item.n}
                    </div>
                  ))}
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="h-14 border-b border-slate-700/50 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-200">Design Team</span>
                      <div className="flex -space-x-2 ml-2">
                        <div className="w-5 h-5 rounded-full bg-pink-500/30 border-2 border-slate-900"></div>
                        <div className="w-5 h-5 rounded-full bg-blue-500/30 border-2 border-slate-900"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4 justify-end overflow-hidden">
                    <div className="flex gap-3 self-start">
                      <div className="w-7 h-7 rounded-full bg-pink-500/20 flex-shrink-0"></div>
                      <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-slate-300 max-w-xs">
                        Just finished the new icon set. Uploading the figma file now.
                      </div>
                    </div>
                    <div className="flex gap-3 self-start">
                      <div className="w-7 h-7 rounded-full bg-pink-500/20 flex-shrink-0"></div>
                      <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl rounded-tl-sm p-2 max-w-xs w-56">
                        <div className="flex items-center gap-2 p-2 bg-slate-700/30 rounded-lg">
                          <div className="w-8 h-8 bg-indigo-500/20 rounded flex items-center justify-center text-indigo-400 text-xs">
                            FIG
                          </div>
                          <div>
                            <p className="text-xs text-slate-200">ui-v2-components.fig</p>
                            <p className="text-[10px] text-slate-500">2.4 MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 self-end">
                      <div className="bg-indigo-600/20 border border-indigo-500/20 rounded-xl rounded-tr-sm px-3 py-2 text-xs text-indigo-100 max-w-xs">
                        Looks great. I'll start implementing the tokens.
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-slate-700/50 bg-slate-900/50">
                    <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-600 flex-1">Message Design Team...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Panel */}
              <div
                id="panel-profile"
                role="tabpanel"
                className={`absolute inset-0 flex transition-opacity duration-300 ease-in-out ${activeView === "profile" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <div className="w-56 bg-slate-900 border-r border-slate-700/50 p-4 flex flex-col gap-1">
                  <div className="h-4 w-3/4 bg-slate-700/50 rounded mb-6"></div>
                  {[
                    { n: "My Profile", a: true },
                    { n: "Account", a: false },
                    { n: "Security", a: false },
                    { n: "Notifications", a: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`px-2 py-1.5 rounded text-xs font-medium ${item.a ? "bg-slate-800/80 text-slate-200" : "text-slate-500"}`}
                    >
                      {item.n}
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-8 bg-slate-900 overflow-y-auto">
                  <div className="max-w-lg mx-auto">
                    <div className="flex flex-col items-center text-center mb-8 relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 p-[2px] mb-4">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xl font-bold text-white">
                          MJ
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white">Marcus Johnson</h3>
                      <p className="text-sm text-slate-400 mt-1">Lead Product Designer</p>
                      <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Online
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { l: "Username", v: "@marcusj" },
                        { l: "Email", v: "marcus@kizuna.com" },
                        { l: "Role", v: "Admin" },
                        { l: "Timezone", v: "UTC-8 (PST)" },
                      ].map((item) => (
                        <div
                          key={item.l}
                          className="flex items-center justify-between py-3 border-b border-slate-800"
                        >
                          <span className="text-sm text-slate-500">{item.l}</span>
                          <span className="text-sm text-slate-200">{item.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Panel */}
              <div
                id="panel-mobile"
                role="tabpanel"
                className={`absolute inset-0 flex items-center justify-center bg-slate-800/50 transition-opacity duration-300 ease-in-out ${activeView === "mobile" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                {/* Phone Frame */}
                <div className="w-[280px] h-[480px] bg-slate-950 rounded-[2.5rem] p-2 shadow-2xl relative border-[6px] border-slate-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-800 rounded-b-2xl z-10" />

                  {/* Screen */}
                  <div className="w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col border border-slate-700/30">
                    <div className="h-12 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 pt-2">
                      <span className="text-xs font-semibold text-white">Kizuna</span>
                      <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-slate-700"></div>
                        <div className="w-4 h-4 rounded-full bg-slate-700"></div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex-1 p-3 flex flex-col gap-3">
                        <div className="flex items-center gap-2 py-2 px-2 rounded bg-slate-800/50">
                          <span className="text-slate-600 text-xs">#</span>
                          <span className="text-xs text-slate-300">general</span>
                        </div>
                        <div className="flex items-center gap-2 py-2 px-2 rounded bg-indigo-500/10 border border-indigo-500/20">
                          <span className="text-indigo-500 text-xs">#</span>
                          <span className="text-xs text-indigo-300">engineering</span>
                          <span className="ml-auto bg-indigo-500 text-white text-[8px] px-1 rounded-full">
                            3
                          </span>
                        </div>
                        <div className="flex items-center gap-2 py-2 px-2 rounded">
                          <span className="text-slate-600 text-xs">#</span>
                          <span class="text-xs text-slate-500">design</span>
                        </div>
                      </div>
                      <div className="p-2 border-t border-slate-800 bg-slate-900">
                        <div className="h-7 w-full bg-slate-800 rounded-full"></div>
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
