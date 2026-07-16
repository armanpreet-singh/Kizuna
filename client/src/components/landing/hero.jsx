import { ArrowRight, Play } from "lucide-react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40">
      {/* Animated Decorative Background Element - Adapts to theme */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }
        .hero-glow {
          animation: gradient-shift 8s ease-in-out infinite;
        }
      `}</style>
      <div
        className="hero-glow absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-indigo-200 via-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:via-indigo-950/20 dark:to-cyan-900/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
            <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 tracking-wide">
              Now in Public Beta
            </span>
          </div>

          {/* Headline - Tighter tracking for premium feel */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
            Chat should accelerate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
              your work
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto text-slate-500 dark:text-slate-400">
            Kizuna brings your team's conversations, files, and tools into one fast,
            distraction-free workspace. Built for clarity, not clutter.
          </p>

          {/* CTA Group */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#register">
              Try Kizuna Free
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="#preview"
              className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            >
              <Play className="w-4 h-4" />
              See how it works
            </Button>
          </div>
        </div>

        {/* Realistic Product Illustration */}
        <div className="relative mt-16 sm:mt-20 max-w-6xl mx-auto">
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/50 border border-slate-700/50 overflow-hidden">
            {/* Faux Window Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-slate-900/50 rounded-md text-xs text-slate-400 w-64 text-center truncate border border-slate-700/50">
                  app.kizuna.com/channels/engineering
                </div>
              </div>
              <div className="w-12"></div>
            </div>

            {/* Realistic App Layout (Dark Mode Preview) - Unchanged internally as it's already dark */}
            <div className="flex h-[350px] sm:h-[500px] bg-slate-900 text-slate-400">
              {/* Sidebar: Channels */}
              <div className="hidden sm:flex flex-col w-56 border-r border-slate-700/50 bg-slate-900 p-4 gap-1">
                <div className="h-4 w-3/4 bg-slate-700/50 rounded mb-4"></div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-slate-800/80 text-slate-200 text-xs font-medium">
                  <span className="text-slate-500">#</span> general
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs">
                  <span className="text-slate-600">#</span> design
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20">
                  <span className="text-indigo-500">#</span> engineering
                  <span className="ml-auto bg-indigo-500 text-white text-[10px] font-bold px-1.5 rounded-full">
                    3
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded text-xs">
                  <span className="text-slate-600">#</span> random
                </div>
              </div>

              {/* Main Content: Chat */}
              <div className="flex-1 flex flex-col">
                <div className="h-14 border-b border-slate-700/50 px-6 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                    <span className="text-slate-500 text-lg">#</span> engineering
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col gap-5 overflow-hidden">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex-shrink-0 flex items-center justify-center text-[10px] text-indigo-300 font-bold">
                      SC
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-semibold text-slate-200">Sarah C.</span>
                        <span className="text-[10px] text-slate-600">10:42 AM</span>
                      </div>
                      <p className="text-sm text-slate-400 mt-1">
                        Just pushed the new auth flow to staging. Can someone run the integration
                        tests? 🚀
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 self-end max-w-[70%]">
                    <div className="flex-1 flex flex-col items-end">
                      <div className="bg-indigo-600/20 border border-indigo-500/20 rounded-xl rounded-tr-sm px-4 py-2.5">
                        <p className="text-sm text-indigo-100">
                          On it. I'll spin up the CI pipeline now.
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-600 mt-1 mr-1">10:44 AM</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex-shrink-0 flex items-center justify-center text-[10px] text-cyan-300 font-bold">
                      MJ
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-700/50 flex-shrink-0"></div>
                    <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl px-4 py-3 flex items-center gap-1">
                      <div
                        className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-700/50 bg-slate-900/50">
                  <div className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2.5">
                    <svg
                      className="w-4 h-4 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      />
                    </svg>
                    <span className="text-sm text-slate-600 flex-1">Message #engineering...</span>
                    <svg
                      className="w-5 h-5 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Sidebar: Users */}
              <div className="hidden lg:flex flex-col w-56 border-l border-slate-700/50 bg-slate-900 p-4 gap-3">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Online — 4
                </span>

                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-[8px] text-indigo-300 font-bold">
                    SC
                  </div>
                  <span className="text-xs text-slate-400 truncate">Sarah C.</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-[8px] text-cyan-300 font-bold">
                    MJ
                  </div>
                  <span className="text-xs text-slate-400 truncate">Marcus J.</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-[8px] text-amber-300 font-bold">
                    ER
                  </div>
                  <span className="text-xs text-slate-400 truncate">Elena R.</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <div className="relative w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[8px] text-slate-400 font-bold">
                    DK
                  </div>
                  <span className="text-xs text-slate-500 truncate">David K.</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-slate-600"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Fade out bottom edge - Adapts to theme */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent pointer-events-none"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
