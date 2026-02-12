/*
 * Drill Detail Page — "Chalk Dust & Stone" Design System
 * 
 * Full drill information with how-to, benefits, progression
 * Video link button
 * Quote from pro climbers when available
 */

import { useParams, Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote, TrendingUp, Target, Zap } from "lucide-react";
import {
  drills,
  categoryLabels,
  categoryColors,
  difficultyColors,
} from "@/data/drills";

export default function DrillDetail() {
  const { id } = useParams<{ id: string }>();
  const drill = drills.find((d) => d.id === id);

  if (!drill) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <p className="text-muted-foreground">Drill not found.</p>
          <Link href="/drills" className="text-orange text-sm mt-2 inline-block hover:underline">
            Back to Drill Library
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-4 space-y-6">
        {/* Back button */}
        <Link href="/drills" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-orange transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Drill Library
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${categoryColors[drill.category]}`}>
              {categoryLabels[drill.category]}
            </span>
            <span className={`text-[10px] font-mono capitalize ${difficultyColors[drill.difficulty]}`}>
              {drill.difficulty}
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
            {drill.name}
          </h1>
          <p className="text-orange text-sm mt-1 font-medium">{drill.focus}</p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-card border border-border/50 rounded-lg p-4"
        >
          <p className="text-sm text-foreground/85 leading-relaxed">{drill.description}</p>
        </motion.div>

        {/* How To */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-base text-foreground">How to Perform</h2>
          </div>
          <div className="space-y-2">
            {drill.howTo.map((step, i) => (
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

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-base text-foreground">Benefits</h2>
          </div>
          <div className="bg-card border border-border/50 rounded-lg p-4">
            <ul className="space-y-2">
              {drill.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange/60 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Progression */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-base text-foreground">Progression</h2>
          </div>
          <div className="bg-card border border-border/50 rounded-lg p-4">
            <ul className="space-y-2">
              {drill.progression.map((step, i) => (
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

        {/* Quote */}
        {drill.quote && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-orange/5 border border-orange/20 rounded-lg p-4"
          >
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-orange/50 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground/85 italic leading-relaxed">
                  "{drill.quote}"
                </p>
                {drill.quoteAuthor && (
                  <p className="text-xs text-orange/60 mt-2">— {drill.quoteAuthor}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Link */}
        {drill.videoUrl && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
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
