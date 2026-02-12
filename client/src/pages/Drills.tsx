/*
 * Drills Page — "Chalk Dust & Stone" Design System
 * 
 * Searchable, filterable drill library
 * Cards with orange left-edge accent
 * Category filter buttons
 */

import { useState, useMemo } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, X } from "lucide-react";
import {
  drills,
  categoryLabels,
  categoryColors,
  difficultyColors,
  type DrillCategory,
} from "@/data/drills";

const categories: DrillCategory[] = ["technique", "strength", "footwork", "mindset", "endurance"];

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/RVaEByZzOeSOm0YRsh6BMB-img-2_1770857998000_na1fn_aGVyby1kcmlsbHM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L1JWYUVCeVp6T2VTT20wWVJzaDZCTUItaW1nLTJfMTc3MDg1Nzk5ODAwMF9uYTFmbl9hR1Z5Ynkxa2NtbHNiSE0uanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LwwfN7LTJkhCIGlqVHUPrljKHC31tfzfdW3BB4ayvbcIdQLj8yutHNwL2fkfzAIwBTHC6qjdaBgrcL3MbFm6hg5LylbVFBo~IKXMnhRic6lOKUK0Vwmpt5AUPXuPQXCb-jY3xbWrBpg08VHy-kaW-HgNZaUg-T8rNqRNhtkHGQ1CJWvzGppev35bsN-5LNeoZPzmlDX8Adk9Xcw1ahHbNdMcmDC0gDw8cPtpG8BFIzv-kAt0Gc1dYRLf~t~oJVyHEyfs0KPFG4vMjMdsWS5vaxI8n8AG7wmrztZ1sio64zuGud9DE1SMDnVArzvq5Idj8NrxKHpCFaMz49MLaJEVZA__";

export default function Drills() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<DrillCategory | null>(null);

  const filtered = useMemo(() => {
    const difficultyOrder: Record<string, number> = { beginner: 0, intermediate: 1, advanced: 2 };
    return drills
      .filter((drill) => {
        const matchesSearch =
          search === "" ||
          drill.name.toLowerCase().includes(search.toLowerCase()) ||
          drill.focus.toLowerCase().includes(search.toLowerCase()) ||
          drill.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = !activeCategory || drill.category === activeCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => (difficultyOrder[a.difficulty] ?? 1) - (difficultyOrder[b.difficulty] ?? 1));
  }, [search, activeCategory]);

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Bouldering gym wall with colorful holds"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-6 container">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs text-orange/80 tracking-wider uppercase">
              Training Library
            </span>
            <h1 className="font-display font-bold text-3xl text-foreground mt-1">
              Drill Library
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {drills.length} elite drills from pro climbers and coaches
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search drills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-card border border-border/50 rounded-lg pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange/50 focus:ring-1 focus:ring-orange/20 transition-colors"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
          <button
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
              !activeCategory
                ? "bg-orange/15 text-orange border-orange/30"
                : "bg-card text-muted-foreground border-border/50 hover:border-border"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                activeCategory === cat
                  ? categoryColors[cat]
                  : "bg-card text-muted-foreground border-border/50 hover:border-border"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-muted-foreground font-mono">
          {filtered.length} drill{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Drill Cards */}
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((drill) => (
              <motion.div
                key={drill.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/drills/${drill.id}`}>
                  <div className="group bg-card border border-border/50 rounded-lg p-4 hover:bg-card/80 hover:border-orange/20 transition-all duration-200 border-l-[3px] border-l-orange">
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold text-sm text-foreground">
                            {drill.name}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
                          {drill.focus}
                        </p>
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-medium border ${categoryColors[drill.category]}`}
                          >
                            {categoryLabels[drill.category]}
                          </span>
                          <span
                            className={`text-[10px] font-mono capitalize ${difficultyColors[drill.difficulty]}`}
                          >
                            {drill.difficulty}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-orange transition-colors shrink-0 mt-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-sm">No drills match your search.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory(null);
                }}
                className="text-orange text-sm mt-2 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
