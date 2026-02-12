/*
 * Frameworks Page — "Chalk Dust & Stone" Design System
 * 
 * List of workout frameworks with duration and goal
 * Cards link to detailed framework views
 */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Target } from "lucide-react";
import { frameworks } from "@/data/frameworks";

const HERO_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/RVaEByZzOeSOm0YRsh6BMB-img-3_1770857986000_na1fn_aGVyby1mcmFtZXdvcmtz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L1JWYUVCeVp6T2VTT20wWVJzaDZCTUItaW1nLTNfMTc3MDg1Nzk4NjAwMF9uYTFmbl9hR1Z5YnkxbWNtRnRaWGR2Y210ei5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GhNhk-kfnnoGcDUvv6PIXS7PSNrpjfwKIZNp3~CUiplL4SH0EpyDkwSbPCjkiPpa-PpW~RXH8SLjPEzEd4g2Etkz2LjnrhTsxTBGmfawnSttcpWQKYfOWzN~vW~UjjMAIq~-dpDanMu1Tyovkg7EeljqqHxrS16f1eOGFhdOBtdjDf9BVOmu90NFeBVWSAYfmv0p0PcWXPOMz4QVd~Q-Oyc5koqkmAdE2Wn3BMOar-mPnfjk9VlzMt-jSXv~Wy98SoBKJ0rL0CpAKBRbHnaV2lBacWvmFB2VjrB04z9g9i-fmRUcdLiTX22lEQ1m8nc4uR6FmJaefJdQgyzTwiKSyA__";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Frameworks() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Climber resting on crash pad"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-6 container">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-mono text-xs text-orange/80 tracking-wider uppercase">
              Session Structure
            </span>
            <h1 className="font-display font-bold text-3xl text-foreground mt-1">
              Workout Frameworks
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Choose a structure that matches your energy and goals
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-6 space-y-6">
        {/* Info callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-orange/5 border border-orange/20 rounded-lg p-4"
        >
          <p className="text-sm text-foreground/90 leading-relaxed">
            <span className="text-orange font-semibold">How to use:</span>{" "}
            Pick a framework that matches your energy level and training goal for the day. 
            Each one provides a clear structure so you never have to wonder "what should I do today?"
          </p>
        </motion.div>

        {/* Framework Cards */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-3">
          {frameworks.map((fw) => (
            <motion.div key={fw.id} variants={item}>
              <Link href={`/frameworks/${fw.id}`}>
                <div className="group bg-card border border-border/50 rounded-lg p-5 hover:bg-card/80 hover:border-orange/20 transition-all duration-200 border-l-[3px] border-l-orange">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-base text-foreground">
                        {fw.name}
                      </h3>
                      <p className="text-xs text-orange/70 font-medium mt-0.5">
                        {fw.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                        {fw.goal}
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="font-mono text-xs text-muted-foreground">
                            {fw.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {fw.phases.length} phases
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-orange transition-colors shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}
