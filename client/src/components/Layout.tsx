/*
 * Layout Component — "Chalk Dust & Stone" Design System
 * 
 * Design: Dark industrial climbing aesthetic
 * - Bottom navigation bar for mobile-first, one-handed use
 * - Safety-orange accent for active states
 * - Frosted glass effect on nav bar
 * - Grain texture applied globally via App.tsx
 */

import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  Flame,
  LayoutGrid,
  Brain,
  Lightbulb,
  BookOpen,
  Archive,
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { path: "/warmup", label: "Warm-Up", icon: Flame },
  { path: "/vault", label: "Vault", icon: Archive },
  { path: "/frameworks", label: "Frameworks", icon: LayoutGrid },
  { path: "/mindset", label: "Mindset", icon: Brain },
  { path: "/tips", label: "Tips", icon: Lightbulb },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col pb-20">
      {/* Top header bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-md bg-orange/15 border border-orange/30 flex items-center justify-center">
              <span className="text-orange font-display font-bold text-sm">CC</span>
            </div>
            <span className="font-display font-semibold text-sm text-foreground tracking-tight hidden sm:block">
              Climber's Companion
            </span>
          </Link>
          <a
            href="https://www.notion.so/ophir-ram/3026780ba3928052a949c9377da2abcb?v=3026780ba3928035a17a000c13e1f251&source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-orange/15 border border-orange/30 text-orange text-sm font-medium hover:bg-orange/25 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">Log Session</span>
            <span className="sm:hidden">Log</span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/90 border-t border-border/50">
        <div className="container flex items-center justify-around h-16">
          {navItems.map((item) => {
            const isActive = location === item.path || 
              (item.path !== "/" && location.startsWith(item.path));
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative flex flex-col items-center gap-0.5 py-1 px-2"
              >
                <div className="relative">
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? "text-orange" : "text-muted-foreground"
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? "text-orange" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
