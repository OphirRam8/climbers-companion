/*
 * Framework Detail Page — "Chalk Dust & Stone" Design System
 * 
 * Shows all phases of a workout framework
 * Intensity indicators per phase
 * Tips section at the bottom
 */

import { useParams, Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Lightbulb, AlertTriangle } from "lucide-react";
import { frameworks, intensityColors } from "@/data/frameworks";

export default function FrameworkDetail() {
  const { id } = useParams<{ id: string }>();
  const framework = frameworks.find((f) => f.id === id);

  if (!framework) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <p className="text-muted-foreground">Framework not found.</p>
          <Link href="/frameworks" className="text-orange text-sm mt-2 inline-block hover:underline">
            Back to Frameworks
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-4 space-y-6">
        {/* Back button */}
        <Link href="/frameworks" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-orange transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Frameworks
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
            {framework.name}
          </h1>
          <p className="text-orange text-sm mt-1 font-medium">{framework.subtitle}</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">{framework.duration}</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-card border border-border/50 rounded-lg p-4"
        >
          <p className="text-sm text-foreground/85 leading-relaxed">{framework.description}</p>
          <p className="text-xs text-muted-foreground mt-3">
            <span className="text-orange/70 font-medium">Best for:</span> {framework.bestFor}
          </p>
        </motion.div>

        {/* Phases */}
        <div className="space-y-3">
          {framework.phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="bg-card border border-border/50 rounded-lg p-4 border-l-[3px] border-l-orange"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-orange font-bold w-5 text-center">
                    {i + 1}
                  </span>
                  <h3 className="font-display font-semibold text-sm text-foreground">
                    {phase.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-medium border capitalize ${intensityColors[phase.intensity]}`}>
                    {phase.intensity}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{phase.duration}</span>
                </div>
              </div>
              <p className="text-xs text-orange/60 mb-2">{phase.description}</p>
              <ul className="space-y-1.5">
                {phase.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-orange/50 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tips */}
        {framework.tips.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-orange" />
              <h2 className="font-display font-semibold text-base text-foreground">Tips</h2>
            </div>
            <div className="bg-orange/5 border border-orange/20 rounded-lg p-4 space-y-2">
              {framework.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-orange/60 shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/85 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </Layout>
  );
}
