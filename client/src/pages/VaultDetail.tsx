/*
 * Vault Detail Page — Works for both Techniques and Drills
 * "Chalk Dust & Stone" Design System
 */

import { useParams, Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote, TrendingUp, Target, Zap, Link2 } from "lucide-react";
import {
  drills,
  difficultyColors,
} from "@/data/drills";
import { techniques } from "@/data/techniques";

const typeBadgeColors: Record<string, string> = {
  technique: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  drill: "bg-orange/15 text-orange border-orange/30",
};

const levelBadgeColors: Record<string, string> = {
  beginner: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  intermediate: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  advanced: "bg-red-500/15 text-red-400 border-red-500/30",
};

export default function VaultDetail() {
  const { id } = useParams<{ id: string }>();

  // Find in drills or techniques
  const drill = drills.find((d) => d.id === id);
  const technique = techniques.find((t) => t.id === id);
  const item = drill || technique;

  if (!item) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <p className="text-muted-foreground">Item not found.</p>
          <Link href="/vault" className="text-orange text-sm mt-2 inline-block hover:underline">
            Back to The Vault
          </Link>
        </div>
      </Layout>
    );
  }

  const isDrill = !!drill;
  const itemType = isDrill ? "drill" : "technique";

  // Get related items for techniques
  const relatedItems = technique
    ? technique.relatedDrills
        .map((rid) => {
          const rd = drills.find((d) => d.id === rid);
          if (rd) return { id: rd.id, name: rd.name, type: "drill" as const };
          const rt = techniques.find((t) => t.id === rid);
          if (rt) return { id: rt.id, name: rt.name, type: "technique" as const };
          return null;
        })
        .filter(Boolean)
    : [];

  // For drills, find techniques that reference this drill
  const relatedTechniques = isDrill
    ? techniques
        .filter((t) => t.relatedDrills.includes(drill.id))
        .map((t) => ({ id: t.id, name: t.name, type: "technique" as const }))
    : [];

  const allRelated = [...relatedItems, ...relatedTechniques].filter(
    (v, i, a) => v && a.findIndex((x) => x?.id === v?.id) === i
  );

  return (
    <Layout>
      <div className="container py-4 space-y-6">
        {/* Back button */}
        <Link href="/vault" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-orange transition-colors">
          <ArrowLeft className="w-4 h-4" />
          The Vault
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${typeBadgeColors[itemType]}`}>
              {isDrill ? "Drill" : "Technique"}
            </span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${levelBadgeColors[item.difficulty]}`}>
              {item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              {isDrill ? drill.category : technique!.category}
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
            {item.name}
          </h1>
          {isDrill && drill.focus && (
            <p className="text-orange text-sm mt-1 font-medium">{drill.focus}</p>
          )}
          {!isDrill && (
            <p className="text-blue-400 text-sm mt-1 font-medium">{technique!.level}</p>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-card border border-border/50 rounded-lg p-4"
        >
          <p className="text-sm text-foreground/85 leading-relaxed">{item.description}</p>
        </motion.div>

        {/* How To Execute */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-base text-foreground">How to Execute</h2>
          </div>
          <div className="space-y-2">
            {item.howTo.map((step, i) => (
              <div
                key={i}
                className="bg-card border border-border/50 rounded-lg p-3 flex items-start gap-3 border-l-[3px] border-l-orange"
              >
                <span className="font-mono text-xs text-orange font-bold mt-0.5 shrink-0 w-5 text-center">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground/85 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* How to Drill It (techniques) / Progression (drills) */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-base text-foreground">
              {isDrill ? "Progression" : "How to Drill It"}
            </h2>
          </div>
          <div className="bg-card border border-border/50 rounded-lg p-4">
            <ul className="space-y-2">
              {(isDrill ? drill.progression : technique!.drillInstructions).map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <span className="font-mono text-xs text-orange/60 mt-0.5 shrink-0 w-4">
                    {i + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-base text-foreground">Benefits</h2>
          </div>
          <div className="bg-card border border-border/50 rounded-lg p-4">
            <ul className="space-y-2">
              {item.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange/60 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Related Items */}
        {allRelated.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Link2 className="w-4 h-4 text-orange" />
              <h2 className="font-display font-semibold text-base text-foreground">Related</h2>
            </div>
            <div className="space-y-2">
              {allRelated.map((related) =>
                related ? (
                  <Link key={related.id} href={`/vault/${related.id}`}>
                    <div className={`bg-card border border-border/50 rounded-lg p-3 flex items-center gap-3 hover:bg-card/80 hover:border-orange/20 transition-all duration-200 border-l-[3px] ${
                      related.type === "technique" ? "border-l-blue-400" : "border-l-orange"
                    }`}>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${typeBadgeColors[related.type]}`}>
                        {related.type === "technique" ? "Technique" : "Drill"}
                      </span>
                      <span className="text-sm text-foreground/85 flex-1">{related.name}</span>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </motion.section>
        )}

        {/* Quote (drills only) */}
        {isDrill && drill.quote && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-orange/5 border border-orange/20 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-orange/50 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground/85 italic leading-relaxed">
                  "{drill.quote}"
                </p>
                {drill.quoteAuthor && (
                  <p className="text-xs text-orange/60 mt-2">-- {drill.quoteAuthor}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Link (drills only) */}
        {isDrill && drill.videoUrl && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <a
              href={drill.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-orange/15 border border-orange/30 text-orange font-medium text-sm hover:bg-orange/25 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              {drill.videoLabel || "Watch Video Tutorial"}
            </a>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
