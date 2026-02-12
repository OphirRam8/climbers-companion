/*
 * Warm-Up Page — "Chalk Dust & Stone" Design System
 * 
 * Two-phase warm-up protocol:
 * Part 1: Off-the-Wall Activation (5-10 min)
 * Part 2: On-the-Wall Integration (10 min)
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Activity,
  RotateCcw,
  Zap,
  Footprints,
  TrendingUp,
} from "lucide-react";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/RVaEByZzOeSOm0YRsh6BMB-img-1_1770857993000_na1fn_aGVyby13YXJtdXA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L1JWYUVCeVp6T2VTT20wWVJzaDZCTUItaW1nLTFfMTc3MDg1Nzk5MzAwMF9uYTFmbl9hR1Z5YnkxM1lYSnRkWEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sp4itAthEPGayPOK2ZFjMgMMvAYz7z0oJcjImzxIocvOjsV13NYmFA1-a~0Csae2vOnRE0nCM-i1Tq2IY-0DUJ--gaJduKz23EPbCLQy-le06L4CCvJ~6Ou74ZbOkkIM6PHTL8b6nHxUdUKvMikZETMaB6lCfmoJnJd1ewe4PpeEsoXQ1uPEQsUu4lehth0KWehFrakHOu7ZDzkkUvpw~SbNLlki38pigM2~7SqgxuL8BXQVljPdhGGzWLEffrKjN7Y4ysWt1Iv3KH9BToFj-b0CYD52LVloOHAaiT-nBLiwHWFFhzPkvqOUaOgicpeIbpIHA34KpNXidOjIx4Jl2Q__";

const offWallExercises = [
  {
    icon: Activity,
    title: "Cardiovascular Activation",
    duration: "2 min",
    items: [
      "Jumping jacks, high knees, or light jogging in place",
      "Goal: Increase heart rate and blood flow",
    ],
  },
  {
    icon: RotateCcw,
    title: "Joint Rotations",
    duration: "3 min",
    items: [
      "Neck — gentle half-circles",
      "Shoulders — large arm circles, forward & backward",
      "Elbows & Wrists — full rotations both directions",
      "Hips — large leg swings, forward/backward & side-to-side",
      "Knees & Ankles — gentle circles",
    ],
    note: "10-15 controlled circles in each direction per joint",
  },
  {
    icon: Zap,
    title: "Dynamic Stretches & Activation",
    duration: "3 min",
    items: [
      "Torso Twists — 10 per side",
      "Cat-Cow Stretch — 10 reps to mobilize the spine",
      "Resistance Band Pull-Aparts — 2 sets of 15 for shoulder stabilizers",
    ],
  },
];

const onWallExercises = [
  {
    icon: Footprints,
    title: "Easy Traversing",
    duration: "3-4 min",
    items: [
      "Traverse on large jugs and positive holds",
      "Keep arms straight at all times",
      "Move feet deliberately and silently (Silent Feet drill)",
      "Breathe calmly and consistently",
    ],
  },
  {
    icon: TrendingUp,
    title: "Progressive Boulders",
    duration: "6-7 min",
    items: [
      "Climbs 1-2: Easiest grade available (VB) — focus on fluid movement",
      "Climbs 3-4: One grade up (V0) — incorporate precise body positioning",
      "Climb 5: Another grade up (V1) — feel fully warm, not tired",
    ],
    note: "Goal: Feel warm and ready, not fatigued",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function WarmUp() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Chalked hands gripping a climbing hold"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-6 container">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs text-orange/80 tracking-wider uppercase">
              Step 1 — Preparation
            </span>
            <h1 className="font-display font-bold text-3xl text-foreground mt-1">
              Warm-Up Protocol
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              15-20 minutes · Based on Adam Ondra's 2-Phase Method
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-6 space-y-8">
        {/* Principle callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-orange/5 border border-orange/20 rounded-lg p-4"
        >
          <p className="text-sm text-foreground/90 leading-relaxed">
            <span className="text-orange font-semibold">Key Principle:</span>{" "}
            Proper warm-up is more critical for injury prevention than post-workout stretching. 
            Never skip warm-up before projecting or limit bouldering.
          </p>
        </motion.div>

        {/* Part 1: Off the Wall */}
        <motion.section variants={stagger} initial="hidden" animate="show">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-md bg-orange/15 border border-orange/30 flex items-center justify-center">
              <span className="font-display font-bold text-orange text-sm">1</span>
            </div>
            <div>
              <h2 className="font-display font-semibold text-lg text-foreground">
                Off-the-Wall Activation
              </h2>
              <p className="text-muted-foreground text-xs">5-10 minutes · Joint lubrication & nervous system activation</p>
            </div>
          </div>

          <div className="space-y-3">
            {offWallExercises.map((exercise) => {
              const Icon = exercise.icon;
              return (
                <motion.div
                  key={exercise.title}
                  variants={fadeUp}
                  className="bg-card border border-border/50 rounded-lg p-4 border-l-[3px] border-l-orange"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-orange" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-semibold text-sm text-foreground">
                          {exercise.title}
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground">
                          {exercise.duration}
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {exercise.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="text-orange/60 mt-1.5 w-1 h-1 rounded-full bg-orange/60 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {exercise.note && (
                        <p className="mt-2 text-xs text-muted-foreground italic">
                          {exercise.note}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="flex items-center gap-3 py-2">
          <div className="flex-1 h-px bg-border/50" />
          <ArrowDown className="w-4 h-4 text-orange/50" />
          <span className="text-xs text-muted-foreground font-mono">Move to the wall</span>
          <ArrowDown className="w-4 h-4 text-orange/50" />
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Part 2: On the Wall */}
        <motion.section variants={stagger} initial="hidden" animate="show">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-md bg-orange/15 border border-orange/30 flex items-center justify-center">
              <span className="font-display font-bold text-orange text-sm">2</span>
            </div>
            <div>
              <h2 className="font-display font-semibold text-lg text-foreground">
                On-the-Wall Integration
              </h2>
              <p className="text-muted-foreground text-xs">10 minutes · Finger, tendon & climbing-specific preparation</p>
            </div>
          </div>

          <div className="space-y-3">
            {onWallExercises.map((exercise) => {
              const Icon = exercise.icon;
              return (
                <motion.div
                  key={exercise.title}
                  variants={fadeUp}
                  className="bg-card border border-border/50 rounded-lg p-4 border-l-[3px] border-l-orange"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-orange" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-semibold text-sm text-foreground">
                          {exercise.title}
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground">
                          {exercise.duration}
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1.5">
                        {exercise.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="text-orange/60 mt-1.5 w-1 h-1 rounded-full bg-orange/60 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {exercise.note && (
                        <p className="mt-2 text-xs text-muted-foreground italic">
                          {exercise.note}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Pro insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-l-2 border-orange/30 pl-4 py-2"
        >
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            "Warm-ups for intense work such as bouldering should be about getting your nervous system ramped up."
          </p>
          <p className="text-xs text-orange/60 mt-1">— Elite Coaching Principle</p>
        </motion.div>
      </div>
    </Layout>
  );
}
