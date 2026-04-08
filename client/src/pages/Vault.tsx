/*
 * The Vault — Unified Techniques & Drills Library
 * "Chalk Dust & Stone" Design System
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
} from "@/data/drills";
import { techniques } from "@/data/techniques";

type TypeFilter = "all" | "technique" | "drill";
type LevelFilter = "all" | "beginner" | "intermediate" | "advanced";

// Merge drills and techniques into a unified list
const allItems = [
  ...drills.map((d) => ({
    id: d.id,
    name: d.name,
    type: d.type as "drill",
    category: d.category,
    level: d.level,
    difficulty: d.difficulty,
    description: d.description,
    focus: d.focus,
  })),
  ...techniques.map((t) => ({
    id: t.id,
    name: t.name,
    type: t.type as "technique",
    category: t.category,
    level: t.level,
    difficulty: t.difficulty,
    description: t.description,
    focus: "",
  })),
];

const typeBadgeColors: Record<string, string> = {
  technique: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  drill: "bg-orange/15 text-orange border-orange/30",
};

const levelBadgeColors: Record<string, string> = {
  beginner: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  intermediate: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  advanced: "bg-red-500/15 text-red-400 border-red-500/30",
};

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/RVaEByZzOeSOm0YRsh6BMB-img-2_1770857998000_na1fn_aGVyby1kcmlsbHM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L1JWYUVCeVp6T2VTT20wWVJzaDZCTUItaW1nLTJfMTc3MDg1Nzk5ODAwMF9uYTFmbl9hR1Z5Ynkxa2NtbHNiSE0uanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LwwfN7LTJkhCIGlqVHUPrljKHC31tfzfdW3BB4ayvbcIdQLj8yutHNwL2fkfzAIwBTHC6qjdaBgrcL3MbFm6hg5LylbVFBo~IKXMnhRic6lOKUK0Vwmpt5AUPXuPQXCb-jY3xbWrBpg08VHy-kaW-HgNZaUg-T8rNqRNhtkHGQ1CJWvzGppev35bsN-5LNeoZPzmlDX8Adk9Xcw1ahHbNdMcmDC0gDw8cPtpG8BFIzv-kAt0Gc1dYRLf~t~oJVyHEyfs0KPFG4vMjMdsWS5vaxI8n8AG7wmrztZ1sio64zuGud9DE1SMDnVArzvq5Idj8NrxKHpCFaMz49MLaJEVZA__";

export default function Vault() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");

  const filtered = useMemo(() => {
    const difficultyOrder: Record<string, number> = { beginner: 0, intermediate: 1, advanced: 2 };
    return allItems
      .filter((item) => {
        const matchesSearch =
          search === "" ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase());
        const matchesType = typeFilter === "all" || item.type === typeFilter;
        const matchesLevel = levelFilter === "all" || item.difficulty === levelFilter;
        return matchesSearch && matchesType && matchesLevel;
      })
      .sort((a, b) => (difficultyOrder[a.difficulty] ?? 1) - (difficultyOrder[b.difficulty] ?? 1));
  }, [search, typeFilter, levelFilter]);

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
              Techniques & Drills
            </span>
            <h1 className="font-display font-bold text-3xl text-foreground mt-1">
              The Vault
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {techniques.length} techniques + {drills.length} drills from pro climbers and coaches
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
            placeholder="Search techniques & drills..."
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

        {/* Type Filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
          {(["all", "technique", "drill"] as TypeFilter[]).map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                typeFilter === t
                  ? t === "all"
                    ? "bg-orange/15 text-orange border-orange/30"
                    : typeBadgeColors[t]
                  : "bg-card text-muted-foreground border-border/50 hover:border-border"
              }`}
            >
              {t === "all" ? "All" : t === "technique" ? "Techniques" : "Drills"}
            </button>
          ))}
        </div>

        {/* Level Filters */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
          {(["all", "beginner", "intermediate", "advanced"] as LevelFilter[]).map((l) => (
            <button
              key={l}
              onClick={() => setLevelFilter(l)}
              className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                levelFilter === l
                  ? l === "all"
                    ? "bg-orange/15 text-orange border-orange/30"
                    : levelBadgeColors[l]
                  : "bg-card text-muted-foreground border-border/50 hover:border-border"
              }`}
            >
              {l === "all" ? "All Levels" : l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-muted-foreground font-mono">
          {filtered.length} item{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Cards */}
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={`${item.type}-${item.id}`}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/vault/${item.id}`}>
                  <div className={`group bg-card border border-border/50 rounded-lg p-4 hover:bg-card/80 hover:border-orange/20 transition-all duration-200 border-l-[3px] ${
                    item.type === "technique" ? "border-l-blue-400" : "border-l-orange"
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-semibold text-sm text-foreground">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-medium border ${typeBadgeColors[item.type]}`}
                          >
                            {item.type === "technique" ? "Technique" : "Drill"}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-medium border ${levelBadgeColors[item.difficulty]}`}
                          >
                            {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {item.category}
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
              <p className="text-muted-foreground text-sm">No items match your search.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setTypeFilter("all");
                  setLevelFilter("all");
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
