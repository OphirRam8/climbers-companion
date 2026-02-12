/*
 * Home Page — "Chalk Dust & Stone" Design System
 * 
 * Full-bleed hero with gym interior image
 * Navigation cards to each section
 * Quick-access "Log Session" button
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Flame,
  Dumbbell,
  LayoutGrid,
  Brain,
  Lightbulb,
  BookOpen,
  ChevronRight,
  Mountain,
} from "lucide-react";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/RVaEByZzOeSOm0YRsh6BMB-img-4_1770857995000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L1JWYUVCeVp6T2VTT20wWVJzaDZCTUItaW1nLTRfMTc3MDg1Nzk5NTAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ijQYZlVbj-b6bHUmXfZNACD2o4q9j6oBCDlcRshrEGVPU7g97GEctYFtmvX6E6pLhfUnhuqNx6hkMGPJruploFoPNdZ6A-h75rlz-9L7XeV~aIkq54Prgwoxhg5W7RWTwNX6-vhpEIROuR~vm729AEElVxODCCPCpnbmHvAwEYoOG7VkFx2af9V1tMl4Rcqf5FWAeNIDEGluuk74NE~TmdBctgO7Nnf40Wsj5Ax8oImXpUBS384jLPPqdVBWcUGx8sk~uoj5WV7SDjAWxNlDTJ7pk3H7zhe50xaySw10-xkzqjsJfRdqBmEwn8VZEQ~oFdYvSQfF5hKdRGbJzc9LjA__";

const sections = [
  {
    path: "/warmup",
    icon: Flame,
    title: "Warm-Up",
    description: "15-20 min protocol to prepare your body and mind",
    accent: "border-l-orange",
  },
  {
    path: "/drills",
    icon: Dumbbell,
    title: "Drill Library",
    description: "12 elite drills for technique, strength, and footwork",
    accent: "border-l-orange",
  },
  {
    path: "/frameworks",
    icon: LayoutGrid,
    title: "Workout Frameworks",
    description: "Structured session plans for every training goal",
    accent: "border-l-orange",
  },
  {
    path: "/mindset",
    icon: Brain,
    title: "Mindset & Visualization",
    description: "Beta reading, mental rehearsal, and performance psychology",
    accent: "border-l-orange",
  },
  {
    path: "/tips",
    icon: Lightbulb,
    title: "Pro Tips",
    description: "Wisdom from Ondra, Garnbret, and elite coaches",
    accent: "border-l-orange",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Indoor bouldering gym"
          className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-12 container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange/20 border border-orange/40 flex items-center justify-center">
                <Mountain className="w-5 h-5 text-orange" />
              </div>
              <span className="font-mono text-xs text-orange/80 tracking-wider uppercase">
                Training Companion
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight mb-3">
              Climb Smarter.<br />
              <span className="text-orange">Send Harder.</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed">
              Your elite bouldering training library. Warm-ups, drills, frameworks, and mindset — everything you need in your pocket.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="container -mt-4 relative z-20 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-3"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div key={section.path} variants={item}>
                <Link href={section.path}>
                  <div className="group bg-card border border-border/50 rounded-lg p-4 flex items-center gap-4 hover:bg-card/80 hover:border-orange/20 transition-all duration-200 border-l-[3px] border-l-orange">
                    <div className="w-10 h-10 rounded-md bg-orange/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-orange" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground text-sm">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-xs mt-0.5 line-clamp-1">
                        {section.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-orange transition-colors shrink-0" />
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Log Session Card */}
          <motion.div variants={item}>
            <a
              href="https://www.notion.so/ophir-ram/3026780ba3928052a949c9377da2abcb?v=3026780ba3928035a17a000c13e1f251"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group bg-orange/10 border border-orange/30 rounded-lg p-4 flex items-center gap-4 hover:bg-orange/15 transition-all duration-200">
                <div className="w-10 h-10 rounded-md bg-orange/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-orange text-sm">
                    Log Session in Notion
                  </h3>
                  <p className="text-orange/60 text-xs mt-0.5">
                    Open your Bouldering Workouts database
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-orange/60 group-hover:text-orange transition-colors shrink-0" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 px-4"
        >
          <blockquote className="border-l-2 border-orange/30 pl-4">
            <p className="text-muted-foreground text-sm italic leading-relaxed">
              "The best training program is the one you'll actually stick to."
            </p>
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
}
