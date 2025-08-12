"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Sparkles,
    ArrowRight,
    Github,
    Twitter,
    Mail,
    Moon,
    Sun,
    Heart,
    Music,
    Users,
    Cloud,
    CloudMoon,
    CloudRain,
    Star,
    Headphones,
    User,
    Activity,
    BookOpen,
    Wind,
    MessageSquareHeart,
} from "lucide-react";

/**
 * Next.js (App Router) – /app/page.tsx
 * -------------------------------------------------
 * - Displays 10 apps: 5 concept + 5 wellness
 * - Concept apps: primary icon visible, alt icon cross-fades; legacy icon appears ONLY on hover
 * - Wellness apps: white-badge primary icon; legacy icon appears ONLY on hover
 * - Subtle per-app hover glow; Tailwind safelist for dynamic gradient utilities
 * - Cards are fully clickable via `link`
 * - Tiny navbar toggle shows alt icons at rest for quick visual QA
 */

function TailwindSafelist() {
    // Invisible element containing all gradient classes so Tailwind JIT includes them
    return (
        <div
            className="hidden bg-gradient-to-br
      from-sky-500/25 to-indigo-500/25
      from-teal-400/25 to-fuchsia-500/25
      from-amber-400/25 to-rose-500/25
      from-violet-500/25 to-cyan-400/25
      from-purple-500/25 to-blue-400/25
      from-emerald-400/25 to-cyan-400/25
      from-indigo-400/25 to-violet-500/25
      from-teal-300/25 to-sky-400/25
      from-rose-400/25 to-fuchsia-500/25"
        />
    );
}

// Concept apps (primary + alt + legacy shown on hover)
const conceptApps = [
    {
        name: "Emotional Weather System",
        description:
            "Your emotional climate becomes a living, interactive landscape — watch your inner world shift in real time.",
        category: "Mood",
        icon: <Cloud className="h-6 w-6" />,
        altIcon: <CloudRain className="h-6 w-6" />,
        legacyIcon: <Cloud className="h-5 w-5" />,
        glow: "from-sky-500/25 to-indigo-500/25",
        link: "#",
    },
    {
        name: "Memory Constellation",
        description:
            "Each memory becomes a star in your personal galaxy; AI maps patterns across your life's journey.",
        category: "Memories",
        icon: <Sparkles className="h-6 w-6" />,
        altIcon: <Star className="h-6 w-6" />,
        legacyIcon: <Sparkles className="h-5 w-5" />,
        glow: "from-teal-400/25 to-fuchsia-500/25",
        link: "#",
    },
    {
        name: "Rhythm of You",
        description:
            "Turn movement and breath into a personalized soundtrack — the way you move becomes music.",
        category: "Movement",
        icon: <Music className="h-6 w-6" />,
        altIcon: <Headphones className="h-6 w-6" />,
        legacyIcon: <Music className="h-5 w-5" />,
        glow: "from-amber-400/25 to-rose-500/25",
        link: "#",
    },
    {
        name: "Social Silhouettes",
        description:
            "Experience raw, authentic moments with strangers — anonymous, humane, and judgment-free.",
        category: "Connection",
        icon: <Users className="h-6 w-6" />,
        altIcon: <User className="h-6 w-6" />,
        legacyIcon: <Users className="h-5 w-5" />,
        glow: "from-violet-500/25 to-cyan-400/25",
        link: "#",
    },
    {
        name: "Dream Architect",
        description:
            "Your dreams are the blueprint. AI reconstructs subconscious visions into explorable worlds.",
        category: "Dreams",
        icon: <CloudMoon className="h-6 w-6" />,
        altIcon: <Moon className="h-6 w-6" />,
        legacyIcon: <CloudMoon className="h-5 w-5" />,
        glow: "from-purple-500/25 to-blue-400/25",
        link: "#",
    },
];

// Wellness apps (white badge primary; legacy on hover)
const wellnessApps = [
    {
        name: "Serenity",
        description: "Daily grounding, check-ins, and mood tracking.",
        category: "Wellness",
        icon: <Activity className="h-6 w-6" />,
        legacyIcon: <Activity className="h-5 w-5" />,
        whiteBadge: true,
        glow: "from-emerald-400/25 to-cyan-400/25",
        link: "#",
    },
    {
        name: "Reflect",
        description: "AI-guided journaling with smart prompts.",
        category: "Journaling",
        icon: <BookOpen className="h-6 w-6" />,
        legacyIcon: <BookOpen className="h-5 w-5" />,
        whiteBadge: true,
        glow: "from-indigo-400/25 to-violet-500/25",
        link: "#",
    },
    {
        name: "Breathe",
        description: "Box, 4-7-8, and resonant breathing exercises.",
        category: "Breathwork",
        icon: <Wind className="h-6 w-6" />,
        legacyIcon: <Wind className="h-5 w-5" />,
        whiteBadge: true,
        glow: "from-teal-300/25 to-sky-400/25",
        link: "#",
    },
    {
        name: "Affirm",
        description: "Personalized affirmations, delivered when you need them.",
        category: "Mindset",
        icon: <MessageSquareHeart className="h-6 w-6" />,
        legacyIcon: <MessageSquareHeart className="h-5 w-5" />,
        whiteBadge: true,
        glow: "from-rose-400/25 to-fuchsia-500/25",
        link: "#",
    },
    {
        name: "Dreamcatcher",
        description: "Dream log with gentle AI tagging and themes.",
        category: "Sleep",
        icon: <CloudMoon className="h-6 w-6" />,
        legacyIcon: <CloudMoon className="h-5 w-5" />,
        whiteBadge: true,
        glow: "from-purple-500/25 to-blue-400/25",
        link: "#",
    },
];

const apps = [...conceptApps, ...wellnessApps];

// Lightweight runtime checks (acts like tiny tests without a runner)
if (typeof window !== "undefined") {
    console.assert(Array.isArray(apps), "apps should be an array");
    console.assert(apps.length === 10, "Expected exactly 10 apps configured");
    console.assert(
        apps.every((a) => a.name && a.description && a.icon && typeof a.link === "string"),
        "Each app must have name, description, icon, and link"
    );
    console.assert(
        conceptApps.every((a) => a.altIcon && a.legacyIcon),
        "Concept apps must include altIcon and legacyIcon"
    );
    console.assert(
        wellnessApps.every((a) => a.legacyIcon && a.whiteBadge === true),
        "Wellness apps must include legacyIcon and be marked whiteBadge"
    );
}

export default function Page() {
    const [dark, setDark] = useState(true);
    const [showAltIcons, setShowAltIcons] = useState(false); // quick visual toggle for concept alt icons

    return (
        <div className={dark ? "dark" : ""}>
            <main className="min-h-screen font-[ui-sans-serif] bg-zinc-50 text-zinc-900 dark:bg-[#0b0c10] dark:text-zinc-100 transition-colors">
                {/* NAVBAR */}
                <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 border-b border-zinc-200/50 dark:border-zinc-800/60">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/20">
                                <Brain className="h-5 w-5 text-white" />
                            </div>
                            <div className="leading-tight">
                                <p className="text-sm tracking-wider text-zinc-700 dark:text-zinc-300">JINRIX LABS</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Where logic meets intuition</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <a href="#apps" className="hidden sm:inline-flex rounded-xl px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:text-white hover:bg-zinc-900/80 dark:hover:bg-zinc-100/10 transition">Apps</a>
                            <a href="#about" className="hidden sm:inline-flex rounded-xl px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:text-white hover:bg-zinc-900/80 dark:hover:bg-zinc-100/10 transition">About</a>
                            <a href="#contact" className="hidden sm:inline-flex rounded-xl px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:text-white hover:bg-zinc-100/10 transition">Contact</a>

                            <button
                                aria-label="Toggle alt icons"
                                onClick={() => setShowAltIcons((v) => !v)}
                                className="rounded-xl border border-zinc-300/50 dark:border-zinc-700/60 px-3 py-2 text-xs hover:bg-black/5 dark:hover:bg-white/5"
                            >
                                {showAltIcons ? "ALT" : "ICON"}
                            </button>

                            <button
                                aria-label="Toggle theme"
                                onClick={() => setDark((d) => !d)}
                                className="rounded-xl border border-zinc-300/50 dark:border-zinc-700/60 p-2 hover:bg-black/5 dark:hover:bg-white/5"
                            >
                                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>
                </header>

                {/* HERO */}
                <section className="relative overflow-hidden">
                    <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
                    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2 sm:px-6">
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/60 bg-white/60 px-3 py-1 text-xs text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700/60 dark:bg-white/5 dark:text-zinc-300">
                                <Sparkles className="h-3.5 w-3.5" />
                                AI tools for self-being
                            </div>
                            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                                Build calm, think clearly, <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">grow wiser</span>.
                            </h1>
                            <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
                                Jinrix Labs crafts small, elegant AI tools that help you notice more, stress less, and make kinder choices. Where logic meets intuition.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a href="#apps" className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg dark:bg-white dark:text-zinc-900">
                                    Explore apps
                                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                                </a>
                                <a href="#newsletter" className="inline-flex items-center gap-2 rounded-xl border border-zinc-300/60 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700/60 dark:hover:bg-white/5">
                                    Get updates
                                </a>
                            </div>
                            <div className="mt-6 flex items-center gap-5 text-zinc-500 dark:text-zinc-400">
                                <div className="inline-flex items-center gap-2"><Heart className="h-4 w-4" /> Calm-first design</div>
                                <div className="inline-flex items-center gap-2"><Brain className="h-4 w-4" /> AI-native</div>
                            </div>
                        </motion.div>

                        {/* Preview tiles (first 4 concept apps + 5th) */}
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 to-white shadow-2xl dark:border-zinc-800/60 dark:from-white/5 dark:to-white/0">
                                <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-2xl" />
                                <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-cyan-400/20 blur-2xl" />
                                <div className="relative aspect-[4/3] p-6">
                                    <div className="grid h-full w-full grid-cols-2 gap-3">
                                        {conceptApps.slice(0, 4).map((a, i) => (
                                            <a
                                                key={i}
                                                href={a.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 p-4 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-white/5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                                            >
                                                <div className={`pointer-events-none absolute -inset-0.5 z-0 rounded-3xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-100 bg-gradient-to-br ${a.glow}`} />
                                                <div className="relative z-10">
                                                    <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium">
                                                        {/* Primary/alt stack */}
                                                        <span className="relative inline-flex h-6 w-6 items-center justify-center">
                                                            <span className={`absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 transition-opacity duration-300 ${showAltIcons ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 group-hover:opacity-0'}`}>{a.icon}</span>
                                                            <span className={`absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 transition-opacity duration-300 ${showAltIcons ? 'opacity-100 group-hover:opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>{a.altIcon}</span>
                                                        </span>
                                                        {/* Legacy badge (hover-only, space reserved) */}
                                                        <span className="inline-flex w-7 justify-center">
                                                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-white text-zinc-900 ring-1 ring-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                                {a.legacyIcon}
                                                            </span>
                                                        </span>
                                                        {a.name}
                                                    </div>
                                                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{a.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                        {/* Fifth concept app tile */}
                                        <a
                                            href={conceptApps[4].link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 p-4 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-white/5 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                                        >
                                            <div className={`pointer-events-none absolute -inset-0.5 z-0 rounded-3xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-100 bg-gradient-to-br ${conceptApps[4].glow}`} />
                                            <div className="relative z-10">
                                                <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium">
                                                    <span className="relative inline-flex h-6 w-6 items-center justify-center">
                                                        <span className={`absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 transition-opacity duration-300 ${showAltIcons ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 group-hover:opacity-0'}`}>{conceptApps[4].icon}</span>
                                                        <span className={`absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 transition-opacity duration-300 ${showAltIcons ? 'opacity-100 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>{conceptApps[4].altIcon}</span>
                                                    </span>
                                                    <span className="inline-flex w-7 justify-center">
                                                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-white text-zinc-900 ring-1 ring-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                            {a.legacyIcon}
                                                        </span>
                                                    </span>
                                                    {a.name}
                                                </div>
                                                <p className="text-xs text-zinc-500 dark:text-zinc-400">{a.description}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* APPS GRID (all 10) */}
                <section id="apps" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold sm:text-3xl">Mini apps</h2>
                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">A suite of lightweight tools for presence, clarity, and reflection.</p>
                        </div>
                        <a href="#contact" className="hidden text-sm underline-offset-4 hover:underline sm:inline">Partner with us</a>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {apps.map((a, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.03 }}
                                className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 p-5 shadow-sm backdrop-blur transition duration-300 ease-out hover:-translate-y-1 dark:border-zinc-800/60 dark:bg-white/5"
                            >
                                {/* Accent glow */}
                                <div className={`pointer-events-none absolute -inset-0.5 z-0 rounded-3xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-100 bg-gradient-to-br ${a.glow}`} />

                                <div className="relative z-10">
                                    <div className="mb-3 inline-flex items-center gap-2 text-xs text-zinc-500">
                                        <span className="rounded-full border border-zinc-300/60 px-2 py-0.5 dark:border-zinc-700/60">{a.category}</span>
                                    </div>

                                    <div className="mb-2 inline-flex items-center gap-2">
                                        {/* Primary icon area */}
                                        {a.whiteBadge ? (
                                            // Wellness: white badge visible; legacy appears on hover next to it
                                            <>
                                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white text-zinc-900 shadow ring-1 ring-white/60">
                                                    {a.icon}
                                                </span>
                                                {/* Legacy hover badge with reserved space */}
                                                <span className="inline-flex w-7 justify-center">
                                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-white text-zinc-900 ring-1 ring-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                        {a.legacyIcon}
                                                    </span>
                                                </span>
                                            </>
                                        ) : (
                                            // Concept: primary/alt cross-fade + legacy hover badge
                                            <>
                                                <span className="relative inline-flex h-8 w-8 items-center justify-center">
                                                    <span className={`absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 transition-opacity duration-300 ${showAltIcons ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 group-hover:opacity-0'}`}>{a.icon}</span>
                                                    <span className={`absolute inset-0 flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 transition-opacity duration-300 ${showAltIcons ? 'opacity-100 group-hover:opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>{a.altIcon}</span>
                                                </span>
                                                {/* Legacy hover badge with reserved space */}
                                                <span className="inline-flex w-7 justify-center">
                                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-lg bg-white text-zinc-900 ring-1 ring-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                        {a.legacyIcon}
                                                    </span>
                                                </span>
                                            </>
                                        )}

                                        <h3 className="text-lg font-medium">{a.name}</h3>
                                    </div>

                                    <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{a.description}</p>

                                    <div className="flex items-center gap-3">
                                        <a
                                            href={a.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-sm font-medium text-fuchsia-600 hover:underline dark:text-fuchsia-400"
                                        >
                                            Try demo <ArrowRight className="h-4 w-4" />
                                        </a>
                                        <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:underline">Learn more</a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold sm:text-3xl">Why Jinrix Labs?</h2>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                                We build small, opinionated tools that slot naturally into your day. Less feed, more focus. Each mini app is designed with a calm-first posture, strong privacy defaults, and practical AI that stays out of your way.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                <li>• Calm, dark-first design language</li>
                                <li>• Local-first where possible; private by default</li>
                                <li>• AI agents that feel like quiet collaborators</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl border border-zinc-200/60 bg-white/40 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-white/5">
                            <h3 className="mb-2 text-lg font-medium">Brand kit</h3>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div className="rounded-xl border border-zinc-200/60 p-4 dark:border-zinc-800/60">
                                    <p className="text-zinc-500">Primary</p>
                                    <div className="mt-2 h-10 w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
                                </div>
                                <div className="rounded-xl border border-zinc-200/60 p-4 dark:border-zinc-800/60">
                                    <p className="text-zinc-500">Surface</p>
                                    <div className="mt-2 h-10 w-full rounded-lg bg-zinc-900" />
                                </div>
                                <div className="rounded-xl border border-zinc-200/60 p-4 dark:border-zinc-800/60">
                                    <p className="text-zinc-500">Accent</p>
                                    <div className="mt-2 h-10 w-full rounded-lg bg-white/10 ring-1 ring-white/20" />
                                </div>
                                <div className="rounded-xl border border-zinc-200/60 p-4 dark:border-zinc-800/60">
                                    <p className="text-zinc-500">Typeface</p>
                                    <p className="mt-2 font-medium">Inter / UI Sans</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEWSLETTER */}
                <section id="newsletter" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
                    <div className="rounded-3xl border border-zinc-200/60 bg-gradient-to-br from-white/60 to-white/30 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:from-white/5 dark:to-white/0">
                        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <div>
                                <h3 className="text-xl font-semibold">Get quiet updates</h3>
                                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">No spam. Occasional notes when something genuinely helpful ships.</p>
                            </div>
                            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md items-center gap-2">
                                <input
                                    type="email"
                                    required
                                    placeholder="you@domain.com"
                                    className="w-full rounded-xl border border-zinc-300/60 bg-white/70 px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-fuchsia-400 dark:border-zinc-700/60 dark:bg-white/10"
                                />
                                <button className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg dark:bg-white dark:text-zinc-900">
                                    Subscribe <ArrowRight className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer id="contact" className="border-t border-zinc-200/60 py-10 dark:border-zinc-800/60">
                    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400">
                                <Brain className="h-4 w-4 text-white" />
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} Jinrix Labs</div>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
                            <a href="#" className="hover:text-zinc-900 dark:hover:text-white"><Github className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-zinc-900 dark:hover:text-white"><Twitter className="h-5 w-5" /></a>
                            <a href="mailto:hello@jinrixlabs.ai" className="hover:text-zinc-900 dark:hover:text-white"><Mail className="h-5 w-5" /></a>
                        </div>
                    </div>
                </footer>

                {/* Safelist injector (ensures gradient classes are generated) */}
                <TailwindSafelist />
            </main>
        </div>
    );
}
