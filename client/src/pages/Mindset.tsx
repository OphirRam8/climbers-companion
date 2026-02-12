/*
 * Mindset & Visualization Page — "Chalk Dust & Stone" Design System
 * 
 * Beta reading protocol, mental techniques, visualization
 * Accordion-style sections for each technique
 */

import { useState } from "react";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Eye, Brain, Wind, Target, Shield, Sparkles, Quote } from "lucide-react";

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  content: {
    description: string;
    steps?: string[];
    tips?: string[];
    quote?: string;
    quoteAuthor?: string;
  };
}

const sections: Section[] = [
  {
    id: "beta-reading",
    icon: Eye,
    title: "Beta Reading Protocol",
    subtitle: "The 3-Look Rule for route reading",
    content: {
      description:
        "As you move into V4+, the intended way to climb a route becomes more specific. Learning to read beta before you touch the wall saves energy and dramatically improves your send rate.",
      steps: [
        "The Wide Look — Stand back 10-15 feet. Identify start, finish, and general path. Get the big picture.",
        "The Detail Look — Identify every foothold. Note which way handholds face (side-pulls, underclings). Look for chalk marks.",
        "The Mental Rehearsal — Close your eyes. Imagine yourself doing the moves. Feel the tension in your core. If you 'blur' at a section, you don't know the beta yet.",
      ],
      tips: [
        "Work backward from the finish to determine left vs. right hand sequence",
        "Holds angled left = likely left hand. Holds angled right = likely right hand.",
        "Holds facing down = likely undercling or gaston",
        "The setter's intended beta is revealed through hold orientation",
      ],
      quote: "Time invested on the ground is energy saved on the route.",
      quoteAuthor: "Neil Gresham",
    },
  },
  {
    id: "visualization",
    icon: Brain,
    title: "Mental Rehearsal",
    subtitle: "Build neural pathways before touching the wall",
    content: {
      description:
        "Adam Ondra literally lies on a bouldering mat and performs moves while his coach acts as holds. The principle: develop muscle memory for a sequence you haven't done yet. This creates actual neural pathways.",
      steps: [
        "Stand at the base of the problem.",
        "Close your eyes.",
        "Perform every movement in your mind — feel the positions, the tension, the reaches.",
        "Do this 3-5 times before attempting.",
        "Climb the problem — your body knows the sequence.",
      ],
      tips: [
        "Level 0 (warm-ups): No route reading, just climb",
        "Level 1 (easy climbs): Quick glance, identify general sequence",
        "Level 2 (working grade): 1-2 minutes of beta reading",
        "Level 3 (project): 5-10 minutes of detailed visualization",
        "Level 4 (hard project): 10+ minutes, full visualization protocol",
      ],
    },
  },
  {
    id: "breathing",
    icon: Wind,
    title: "Controlled Breathing",
    subtitle: "Lower heart rate and reduce anxiety",
    content: {
      description:
        "Ondra visibly uses breathing before crux sequences. Controlled breathing helps maintain composure under pressure and prevents panic when pumped.",
      steps: [
        "Take deep, slow breaths before attempting a problem.",
        "Breathe DURING sequences — don't hold your breath.",
        "Use 4-7-8 breathing: 4 count inhale, 7 hold, 8 exhale.",
        "During hover drills, cycle one full inhale-exhale while feet are cut.",
      ],
      tips: [
        "Practice breathing during warm-up climbs to build the habit",
        "If you catch yourself holding breath on a crux, pause and breathe",
        "Lower heart rate through controlled exhales — the exhale is key",
      ],
    },
  },
  {
    id: "focus",
    icon: Target,
    title: "Focus on What You Can Control",
    subtitle: "Direct your energy where it matters",
    content: {
      description:
        "Before each attempt, list 3 things you can control. Focus only on those. This simple practice eliminates wasted mental energy on things outside your influence.",
      steps: [
        "Before each attempt, identify 3 controllable factors.",
        "Your preparation and warm-up",
        "Your breathing and tension",
        "Your beta choices and adjustments",
        "Your effort level and focus",
      ],
      tips: [
        "You CANNOT control: the setter's style, how others climb, perfect conditions, past failures",
        "Catch negative self-talk: replace 'I can't do this' with 'I'm learning how to do this'",
        "Reframe pressure as excitement — they're physiologically identical",
      ],
    },
  },
  {
    id: "fear",
    icon: Shield,
    title: "Progressive Exposure to Fear",
    subtitle: "Gradually expand your comfort zone",
    content: {
      description:
        "Fear of falling is normal and can be systematically addressed through progressive exposure. The key is gradual increase, always within your comfort zone expansion.",
      steps: [
        "Week 1-2: Take small falls from low on the wall",
        "Week 3-4: Fall from slightly higher, past the bolt/pad",
        "Week 5-6: Practice falling at your sticking point",
        "Week 7-8: Fall from above crux moves",
      ],
      tips: [
        "Always practice falling in a safe environment with proper padding",
        "Never force yourself beyond what feels manageable",
        "Celebrate each small expansion of your comfort zone",
      ],
    },
  },
  {
    id: "confidence",
    icon: Sparkles,
    title: "Building Confidence",
    subtitle: "The Micro-Progress Method",
    content: {
      description:
        "Confidence comes from evidence. Create evidence daily. Track technique improvements, not just grades. Celebrate better footwork, cleaner sequences, fewer attempts.",
      steps: [
        "Track technique improvements, not just grades sent.",
        "Celebrate: better footwork, cleaner sequences, fewer attempts.",
        "Build evidence of progress through your session log.",
        "Review wins weekly to compound confidence.",
      ],
      tips: [
        "Remember why you started climbing — fun, challenge, community",
        "Enjoy the creative problem-solving aspect",
        "Celebrate attempts, not just sends",
      ],
      quote: "Confidence comes from evidence. Create evidence daily.",
    },
  },
];

function AccordionItem({ section }: { section: Section }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = section.icon;

  return (
    <div className="bg-card border border-border/50 rounded-lg overflow-hidden border-l-[3px] border-l-orange">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center gap-3 text-left hover:bg-secondary/30 transition-colors"
      >
        <div className="w-8 h-8 rounded-md bg-orange/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-orange" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-sm text-foreground">{section.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{section.subtitle}</p>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4">
              <p className="text-sm text-foreground/85 leading-relaxed">
                {section.content.description}
              </p>

              {section.content.steps && (
                <div className="space-y-1.5">
                  {section.content.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="font-mono text-xs text-orange/60 mt-0.5 shrink-0 w-4">
                        {i + 1}.
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              )}

              {section.content.tips && (
                <div className="bg-secondary/50 rounded-md p-3 space-y-1.5">
                  {section.content.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className="mt-1 w-1 h-1 rounded-full bg-orange/50 shrink-0" />
                      {tip}
                    </div>
                  ))}
                </div>
              )}

              {section.content.quote && (
                <div className="border-l-2 border-orange/30 pl-3">
                  <p className="text-sm text-muted-foreground italic">
                    "{section.content.quote}"
                  </p>
                  {section.content.quoteAuthor && (
                    <p className="text-xs text-orange/60 mt-1">— {section.content.quoteAuthor}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Mindset() {
  return (
    <Layout>
      <div className="container py-6 space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-mono text-xs text-orange/80 tracking-wider uppercase">
            Mental Game
          </span>
          <h1 className="font-display font-bold text-3xl text-foreground mt-1">
            Mindset & Visualization
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            The mental techniques that separate good climbers from great ones
          </p>
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-orange/5 border border-orange/20 rounded-lg p-4"
        >
          <p className="text-sm text-foreground/90 leading-relaxed">
            <span className="text-orange font-semibold">Research Finding:</span>{" "}
            "Psychological factors predict climbing performance better than physiological measurements."
            Physical training might take months to show results, but mental techniques can show improvements in weeks.
          </p>
        </motion.div>

        {/* Accordion sections */}
        <div className="space-y-2">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.04 }}
            >
              <AccordionItem section={section} />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-l-2 border-orange/30 pl-4 py-2"
        >
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            "The battle against inner doubts might be the key to breaking through plateaus."
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}
