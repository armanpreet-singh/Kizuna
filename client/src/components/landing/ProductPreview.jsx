import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";
import {
  Hash,

  Bell,
  Search,
  Plus,
  Settings,
  ChevronDown,
  Smile,
  Paperclip,
  Send,
} from "lucide-react";

const tabs = ["Channels", "Threads", "Direct Messages"];

const ChannelView = () => (
  <div className="flex h-full">
    {/* Sidebar */}
    <div className="w-60 flex-shrink-0 bg-gray-900 flex flex-col">
      {/* Workspace header */}
      <div className="px-4 py-3.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="text-sm font-semibold text-white">Acme Corp</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
        <button className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20">
          <Plus size={14} className="text-gray-400" />
        </button>
      </div>

      {/* Search */}
      <div className="px-3 py-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
          <Search size={13} className="text-gray-500" />
          <span className="text-xs text-gray-500">Search</span>
          <span className="ml-auto text-xs text-gray-600 bg-white/5 px-1.5 py-0.5 rounded">⌘K</span>
        </div>
      </div>

      {/* Channels */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        <div className="px-2 py-1 flex items-center justify-between group">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Channels
          </span>
          <Plus
            size={13}
            className="text-gray-600 opacity-0 group-hover:opacity-100 cursor-pointer"
          />
        </div>
        {[
          { name: "general", active: true, unread: 0 },
          { name: "design-system", active: false, unread: 3 },
          { name: "engineering", active: false, unread: 0 },
          { name: "product", active: false, unread: 1 },
          { name: "marketing", active: false, unread: 0 },
          { name: "random", active: false, unread: 0 },
        ].map((ch) => (
          <div
            key={ch.name}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer text-xs transition-colors ${
              ch.active
                ? "bg-white/15 text-white"
                : "text-gray-400 hover:bg-white/5 hover:text-gray-300"
            }`}
          >
            <Hash size={13} className={ch.active ? "text-gray-300" : "text-gray-600"} />
            <span className="flex-1">{ch.name}</span>
            {ch.unread > 0 && (
              <span className="bg-violet-500 text-white text-xs rounded-full px-1.5 min-w-[18px] text-center leading-[18px] h-[18px] flex items-center justify-center">
                {ch.unread}
              </span>
            )}
          </div>
        ))}

        <div className="px-2 py-1 mt-3 flex items-center justify-between group">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Direct Messages
          </span>
          <Plus
            size={13}
            className="text-gray-600 opacity-0 group-hover:opacity-100 cursor-pointer"
          />
        </div>
        {[
          { name: "Sarah K.", online: true, color: "from-pink-400 to-rose-500" },
          { name: "Marcus L.", online: true, color: "from-blue-400 to-indigo-500" },
          { name: "Priya R.", online: false, color: "from-violet-400 to-purple-500" },
          { name: "Tom B.", online: false, color: "from-amber-400 to-orange-500" },
        ].map((dm) => (
          <div
            key={dm.name}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer text-xs text-gray-400 hover:bg-white/5 hover:text-gray-300 transition-colors"
          >
            <div className="relative flex-shrink-0">
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-br ${dm.color} flex items-center justify-center`}
              >
                <span className="text-white text-[9px] font-bold">{dm.name[0]}</span>
              </div>
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-gray-900 ${dm.online ? "bg-emerald-400" : "bg-gray-600"}`}
              />
            </div>
            <span>{dm.name}</span>
          </div>
        ))}
      </div>

      {/* User footer */}
      <div className="px-3 py-3 border-t border-white/10 flex items-center gap-2">
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">Y</span>
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-gray-900" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium text-white truncate">You</div>
          <div className="text-xs text-gray-500 truncate">Active</div>
        </div>
        <Settings size={14} className="text-gray-500 hover:text-gray-300 cursor-pointer" />
      </div>
    </div>

    {/* Main content */}
    <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-gray-900">
      {/* Channel header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Hash size={18} className="text-gray-400" />
          <span className="font-semibold text-gray-900 dark:text-white text-sm">general</span>
        </div>
        <div className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-1" />
        <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block truncate">
          Team announcements and general discussion — 14 members
        </span>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {[
              "from-pink-400 to-rose-500",
              "from-blue-400 to-indigo-500",
              "from-violet-400 to-purple-500",
            ].map((c, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full bg-gradient-to-br ${c} border-2 border-white dark:border-gray-900 flex items-center justify-center`}
              >
                <span className="text-white text-[9px] font-bold">{["S", "M", "P"][i]}</span>
              </div>
            ))}
            <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 border-2 border-white dark:border-gray-900 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-[9px] font-bold">+11</span>
            </div>
          </div>
          <Bell
            size={16}
            className="text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-200"
          />
          <Search
            size={16}
            className="text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-200"
          />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
        {/* Date divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-100 dark:bg-white/5" />
          <span className="text-xs text-gray-400 whitespace-nowrap">Today</span>
          <div className="flex-1 h-px bg-gray-100 dark:bg-white/5" />
        </div>

        {[
          {
            name: "Sarah Kim",
            avatar: "from-pink-400 to-rose-500",
            time: "10:32 AM",
            messages: [
              "Hey everyone! 👋 Just pushed the new design system tokens to Figma. The color palette, typography scale, and spacing are all updated.",
              "I'd love to get everyone's eyes on it before we start implementing. Link in the thread below! 🧵",
            ],
            reactions: [
              { emoji: "🔥", count: 5 },
              { emoji: "👀", count: 3 },
            ],
          },
          {
            name: "Marcus Lee",
            avatar: "from-blue-400 to-indigo-500",
            time: "10:41 AM",
            messages: [
              "This looks absolutely incredible, Sarah! The new palette is so much more cohesive.",
              "Starting implementation in the component library now. Should have the Button and Input components updated by EOD.",
            ],
            reactions: [{ emoji: "🙌", count: 4 }],
          },
          {
            name: "Priya Rao",
            avatar: "from-violet-400 to-purple-500",
            time: "10:45 AM",
            messages: [
              "Love this direction. Can we schedule a quick sync to align on the dark mode specs? I want to make sure we're consistent across all surfaces.",
            ],
            reactions: [
              { emoji: "✅", count: 3 },
              { emoji: "💯", count: 2 },
            ],
          },
        ].map((thread) => (
          <div key={thread.name} className="flex gap-3 group">
            <div
              className={`w-9 h-9 rounded-xl bg-gradient-to-br ${thread.avatar} flex-shrink-0 flex items-center justify-center shadow-sm`}
            >
              <span className="text-white text-sm font-bold">{thread.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {thread.name}
                </span>
                <span className="text-xs text-gray-400">{thread.time}</span>
              </div>
              {thread.messages.map((msg, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-1"
                >
                  {msg}
                </p>
              ))}
              <div className="flex items-center gap-2 mt-2">
                {thread.reactions.map((r) => (
                  <button
                    key={r.emoji}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-violet-100 dark:hover:bg-violet-500/10 border border-transparent hover:border-violet-200 dark:hover:border-violet-500/20 text-xs text-gray-600 dark:text-gray-400 transition-colors"
                  >
                    {r.emoji} <span>{r.count}</span>
                  </button>
                ))}
                <button className="opacity-0 group-hover:opacity-100 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all px-2 py-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/5">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="px-5 pb-5">
        <div className="relative border border-gray-200 dark:border-white/10 rounded-xl bg-white dark:bg-white/5 shadow-sm">
          <div className="px-4 py-3">
            <p className="text-sm text-gray-400 dark:text-gray-500">Message #general...</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border-t border-gray-100 dark:border-white/5">
            <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
              <Paperclip size={16} />
            </button>
            <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
              <Smile size={16} />
            </button>
            <div className="flex-1" />
            <button className="p-1.5 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors">
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ThreadView = () => (
  <div className="flex h-full">
    <div className="w-60 flex-shrink-0 bg-gray-900 flex flex-col px-2 py-3">
      <div className="px-2 mb-3">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          All Threads
        </div>
      </div>
      {[
        {
          channel: "# design-system",
          preview: "Token updates are ready...",
          time: "10:45",
          unread: true,
        },
        {
          channel: "# engineering",
          preview: "PR review needed for...",
          time: "9:30",
          unread: true,
        },
        {
          channel: "# product",
          preview: "Q1 roadmap discussion",
          time: "Yesterday",
          unread: false,
        },
        { channel: "# general", preview: "Team lunch next Friday?", time: "Mon", unread: false },
      ].map((t, i) => (
        <div
          key={i}
          className={`px-3 py-2.5 rounded-lg cursor-pointer mb-1 transition-colors ${i === 0 ? "bg-white/15" : "hover:bg-white/5"}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-300">{t.channel}</span>
            <span className="text-xs text-gray-500">{t.time}</span>
          </div>
          <p className="text-xs text-gray-500 truncate">{t.preview}</p>
          {t.unread && <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1" />}
        </div>
      ))}
    </div>

    <div className="flex-1 flex flex-col bg-white dark:bg-gray-900">
      <div className="px-5 py-3.5 border-b border-gray-100 dark:border-white/10">
        <div className="font-semibold text-sm text-gray-900 dark:text-white">
          Thread · # design-system
        </div>
        <div className="text-xs text-gray-400 mt-0.5">6 replies · Last activity 10:45 AM</div>
      </div>
      <div className="flex-1 px-5 py-4 overflow-y-auto space-y-4">
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Kim</span>
              <span className="text-xs text-gray-400">10:32 AM</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Just pushed the design tokens update. Colors, type, spacing — all updated!
            </p>
            <div className="mt-2 px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-4 rounded bg-violet-500 flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">F</span>
                </div>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  design-tokens-v2.fig
                </span>
              </div>
              <div className="text-xs text-gray-400">Figma file · Updated 10 min ago</div>
            </div>
          </div>
        </div>
        {[
          {
            name: "Marcus L.",
            avatar: "from-blue-400 to-indigo-500",
            msg: "On it! Will update the component library this afternoon.",
            time: "10:41 AM",
          },
          {
            name: "Priya R.",
            avatar: "from-violet-400 to-purple-500",
            msg: "Dark mode tokens look 👌 Great work Sarah!",
            time: "10:45 AM",
          },
        ].map((r) => (
          <div key={r.name} className="flex gap-3 ml-4">
            <div
              className={`w-7 h-7 rounded-lg bg-gradient-to-br ${r.avatar} flex-shrink-0 flex items-center justify-center`}
            >
              <span className="text-white text-xs font-bold">{r.name[0]}</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {r.name}
                </span>
                <span className="text-xs text-gray-400">{r.time}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{r.msg}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 pb-5">
        <div className="border border-gray-200 dark:border-white/10 rounded-xl bg-white dark:bg-white/5 px-4 py-3">
          <p className="text-sm text-gray-400 dark:text-gray-500">Reply in thread...</p>
        </div>
      </div>
    </div>
  </div>
);

const DMView = () => (
  <div className="flex h-full">
    <div className="w-60 flex-shrink-0 bg-gray-900 flex flex-col">
      <div className="px-4 py-3 border-b border-white/10">
        <div className="text-sm font-semibold text-white mb-3">Direct Messages</div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg">
          <Search size={13} className="text-gray-500" />
          <span className="text-xs text-gray-500">Find a conversation</span>
        </div>
      </div>
      <div className="flex-1 px-2 py-2 space-y-0.5">
        {[
          {
            name: "Sarah Kim",
            online: true,
            preview: "Tokens look great!",
            time: "10:45",
            unread: 2,
            color: "from-pink-400 to-rose-500",
          },
          {
            name: "Marcus Lee",
            online: true,
            preview: "Implementing now...",
            time: "10:30",
            unread: 0,
            color: "from-blue-400 to-indigo-500",
          },
          {
            name: "Priya Rao",
            online: false,
            preview: "Let's sync tomorrow",
            time: "Yesterday",
            unread: 0,
            color: "from-violet-400 to-purple-500",
          },
          {
            name: "Tom Blake",
            online: false,
            preview: "PR is ready for review",
            time: "Mon",
            unread: 0,
            color: "from-amber-400 to-orange-500",
          },
        ].map((dm, i) => (
          <div
            key={dm.name}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${i === 0 ? "bg-white/15" : "hover:bg-white/5"}`}
          >
            <div className="relative flex-shrink-0">
              <div
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${dm.color} flex items-center justify-center`}
              >
                <span className="text-white text-sm font-bold">{dm.name[0]}</span>
              </div>
              <div
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-gray-900 ${dm.online ? "bg-emerald-400" : "bg-gray-600"}`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white truncate">{dm.name}</span>
                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{dm.time}</span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <p className="text-xs text-gray-500 truncate">{dm.preview}</p>
                {dm.unread > 0 && (
                  <span className="flex-shrink-0 ml-1 bg-violet-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {dm.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex-1 flex flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100 dark:border-white/10">
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-gray-900" />
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Kim</div>
          <div className="text-xs text-emerald-500">Active now</div>
        </div>
      </div>

      <div className="flex-1 px-5 py-4 overflow-y-auto space-y-4">
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Kim</span>
              <span className="text-xs text-gray-400">10:40 AM</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Hey! Quick question about the component API. Should we expose the `size` prop on all
              form elements or just inputs?
            </p>
          </div>
        </div>

        <div className="flex gap-3 flex-row-reverse">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-500 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">Y</span>
          </div>
          <div className="max-w-xs">
            <div className="flex items-baseline gap-2 mb-1 flex-row-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">You</span>
              <span className="text-xs text-gray-400">10:42 AM</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 bg-violet-500 text-white! rounded-xl px-4 py-2.5">
              <span className="text-white">
                All form elements for consistency. Let's keep the API surface uniform across the
                board.
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Kim</span>
              <span className="text-xs text-gray-400">10:45 AM</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Tokens look great! 🎉 The new spacing scale is exactly what we needed.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-12">
          <div className="flex gap-1">
            {["from-pink-400 to-rose-500", "from-blue-400 to-indigo-500"].map((c, i) => (
              <div
                key={i}
                className={`w-5 h-5 rounded-full bg-gradient-to-br ${c} border-2 border-white dark:border-gray-900`}
              />
            ))}
          </div>
          <div className="flex gap-1 px-3 py-1.5 bg-gray-100 dark:bg-white/5 rounded-full">
            <span
              className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="border border-gray-200 dark:border-white/10 rounded-xl bg-white dark:bg-white/5 px-4 py-3">
          <p className="text-sm text-gray-400 dark:text-gray-500">Message Sarah Kim...</p>
        </div>
      </div>
    </div>
  </div>
);

const viewMap = {
  Channels: ChannelView,
  Threads: ThreadView,
  "Direct Messages": DMView,
};

const ProductPreview = () => {
  const [activeTab, setActiveTab] = useState("Channels");
  const View = viewMap[activeTab];

  return (
    <section id="preview" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <SectionHeading
            eyebrow="Product Preview"
            title="See Kizuna in action"
            description="A workspace designed for the way real teams communicate. Clean, fast, and intuitive."
            centered
          />
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={150}>
          <div className="mt-10 flex items-center justify-center gap-1 p-1 bg-gray-200/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={250}>
          <div className="mt-8 relative">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-900/10 dark:shadow-black/40">
              {/* Browser chrome */}
              <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-white/10 w-48">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      app.kizuna.io
                    </span>
                  </div>
                </div>
              </div>

              {/* App */}
              <div className="h-[500px] md:h-[560px]">
                <View />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ProductPreview;
