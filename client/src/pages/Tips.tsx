/*
 * Pro Tips Page — "Chalk Dust & Stone" Design System
 * 
 * Wisdom from elite climbers organized by topic
 * Grade progression timelines
 * Common mistakes to avoid
 * Handhold types and techniques reference
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingUp,
  Battery,
  Clock,
  Hand,
  Footprints,
  Quote,
  Zap,
  Shield,
} from "lucide-react";

const gradeTimelines = [
  { from: "VB", to: "V3", time: "3-6 months", color: "bg-emerald-500" },
  { from: "V3", to: "V4", time: "6-12 months", color: "bg-emerald-400" },
  { from: "V4", to: "V5", time: "6-12 months", color: "bg-amber-400" },
  { from: "V5", to: "V6", time: "1-2 years", color: "bg-amber-500" },
  { from: "V6", to: "V7", time: "2-3 years", color: "bg-orange" },
  { from: "V7", to: "V10", time: "5-10 years", color: "bg-red-500" },
];

const commonMistakes = [
  { mistake: "Skipping warm-up", consequence: "Leads to injuries", icon: AlertTriangle },
  { mistake: "Training everything at once", consequence: "Use periodization instead", icon: Zap },
  { mistake: "Ignoring leg strength", consequence: "High-steps and full ROM are crucial", icon: Footprints },
  { mistake: "Not practicing technique when fresh", consequence: "Technique should come first in session", icon: TrendingUp },
  { mistake: "Training like professionals", consequence: "Without professional recovery", icon: Battery },
  { mistake: "Neglecting mental training", consequence: "Mind determines if you use physical ability", icon: Shield },
  { mistake: "No objective tracking", consequence: "Log your training for progressive overload", icon: Clock },
];

const holdTypes = [
  { name: "Jugs", tip: "Keep arms straight. Use them to rest and shake out.", difficulty: "VB+" },
  { name: "Crimps", tip: "Use Half-Crimp (90° bend) to protect tendons. Avoid Full Crimp.", difficulty: "V3+" },
  { name: "Slopers", tip: "Keep hips low. Maximize hand surface contact.", difficulty: "V3+" },
  { name: "Pinches", tip: "Engage your thumb — it's your strongest digit for these.", difficulty: "V4+" },
  { name: "Pockets", tip: "Use middle and ring fingers. Keep them aligned.", difficulty: "V4+" },
  { name: "Volumes", tip: "Use smearing with palms and feet on flat sides.", difficulty: "V2+" },
];

const movementSkills = [
  { name: "Flagging", description: "Extending a leg as a counterbalance to prevent barn-dooring. Keep the flagging leg straight and press against the wall." },
  { name: "Drop Knees", description: "Rotating one knee downward while the hip turns into the wall. Use outside edge on your foot and sink your hip in for massive extra reach." },
  { name: "Heel & Toe Hooks", description: "Using feet to pull your body toward the wall. For heel hooks, point toes away to lock the heel in. For toe hooks, engage shin muscles." },
  { name: "Deadpointing", description: "Moving dynamically but catching the hold at the exact moment your upward momentum stops — the 'dead point.'" },
  { name: "Backstepping", description: "Using the outside edge of your shoe to turn your hip into the wall. Creates extra reach and better body positioning." },
];

const proQuotes = [
  { quote: "How you use your feet is actually more important than being strong.", author: "Anderson Brothers" },
  { quote: "Time invested on the ground is energy saved on the route.", author: "Neil Gresham" },
  { quote: "Physical training might take months to show results. But mental techniques can show improvements in weeks.", author: "Elite Coaching Research" },
  { quote: "If you use our bodies correctly, we will have fewer injuries.", author: "Adam Ondra" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function Tips() {
  return (
    <Layout>
      <div className="container py-6 space-y-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="font-mono text-xs text-orange/80 tracking-wider uppercase">
            Knowledge Base
          </span>
          <h1 className="font-display font-bold text-3xl text-foreground mt-1">
            Pro Tips & Reference
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Wisdom from Ondra, Garnbret, and elite coaches
          </p>
        </motion.div>

        {/* Grade Progression */}
        <motion.section variants={stagger} initial="hidden" animate="show">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-lg text-foreground">
              Grade Progression Timelines
            </h2>
          </div>
          <div className="bg-card border border-border/50 rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-4">
              Realistic expectations for dedicated training, 3-4 days per week
            </p>
            <div className="space-y-3">
              {gradeTimelines.map((grade, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 w-24 shrink-0">
                    <span className="font-mono text-xs text-foreground font-medium">{grade.from}</span>
                    <span className="text-muted-foreground text-xs">→</span>
                    <span className="font-mono text-xs text-foreground font-medium">{grade.to}</span>
                  </div>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${grade.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, (i + 1) * 16.6)}%` }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground w-24 text-right shrink-0">
                    {grade.time}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-orange/60 mt-4 italic">
              "Plateauing is common when approaching V5 or V6. Going higher requires doubling down on training and technique."
            </p>
          </div>
        </motion.section>

        {/* Handhold Types */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Hand className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-lg text-foreground">
              Handhold Types
            </h2>
          </div>
          <div className="grid gap-2">
            {holdTypes.map((hold, i) => (
              <div
                key={i}
                className="bg-card border border-border/50 rounded-lg p-3 border-l-[3px] border-l-orange flex items-start gap-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-sm text-foreground">
                      {hold.name}
                    </h3>
                    <span className="font-mono text-[10px] text-muted-foreground">{hold.difficulty}</span>
                  </div>
                  <p className="text-xs text-foreground/70 mt-1">{hold.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Movement Skills */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Footprints className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-lg text-foreground">
              Essential Movement Skills
            </h2>
          </div>
          <div className="space-y-2">
            {movementSkills.map((skill, i) => (
              <div
                key={i}
                className="bg-card border border-border/50 rounded-lg p-3 border-l-[3px] border-l-orange"
              >
                <h3 className="font-display font-semibold text-sm text-foreground">
                  {skill.name}
                </h3>
                <p className="text-xs text-foreground/70 mt-1 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Common Mistakes */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-lg text-foreground">
              Common Mistakes to Avoid
            </h2>
          </div>
          <div className="space-y-2">
            {commonMistakes.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-card border border-border/50 rounded-lg p-3 flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-md bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-foreground">
                      {item.mistake}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.consequence}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Key Training Principles */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-lg text-foreground">
              Key Training Principles
            </h2>
          </div>
          <div className="space-y-3">
            <div className="bg-card border border-border/50 rounded-lg p-4 border-l-[3px] border-l-orange">
              <h3 className="font-display font-semibold text-sm text-foreground">The 80% Effort Rule</h3>
              <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
                Most training should be at 80% of maximum effort. Start with problems 1-2 V grades below your hardest send. 
                Save 100% effort for true project days. This prevents burnout and allows focus on technique over pure strength.
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-lg p-4 border-l-[3px] border-l-orange">
              <h3 className="font-display font-semibold text-sm text-foreground">Deload Weeks</h3>
              <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
                Every 4-8 weeks, take a deload week. Reduce climbing days from 4 to 2-3, drop intensity by 1-2 grades, 
                focus on technique and movement quality. This allows connective tissue to recover and often leads to breaking through plateaus.
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-lg p-4 border-l-[3px] border-l-orange">
              <h3 className="font-display font-semibold text-sm text-foreground">Progressive Overload</h3>
              <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
                Change ONE variable at a time. Don't increase volume AND intensity simultaneously. 
                Progress through: increased difficulty, increased volume, increased density (less rest), or increased specificity (target weaknesses).
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-lg p-4 border-l-[3px] border-l-orange">
              <h3 className="font-display font-semibold text-sm text-foreground">The SAID Principle</h3>
              <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
                Specific Adaptation to Imposed Demands. Training steep overhangs? Practice on steep walls. 
                Project has crimps? Train crimp strength specifically. Do X to get better at X. Keep your training simple.
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-lg p-4 border-l-[3px] border-l-orange">
              <h3 className="font-display font-semibold text-sm text-foreground">Antagonist Training</h3>
              <p className="text-xs text-foreground/70 mt-1 leading-relaxed">
                Climbing is all "pulling." To prevent Climber's Elbow, do 3 sets of 15 push-ups and finger extensions 
                (using a rubber band) twice a week. This balances the muscles and prevents overuse injuries.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Pro Quotes */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Quote className="w-4 h-4 text-orange" />
            <h2 className="font-display font-semibold text-lg text-foreground">
              Words from the Pros
            </h2>
          </div>
          <div className="space-y-3">
            {proQuotes.map((q, i) => (
              <div key={i} className="border-l-2 border-orange/30 pl-4 py-2">
                <p className="text-sm text-foreground/80 italic leading-relaxed">
                  "{q.quote}"
                </p>
                <p className="text-xs text-orange/60 mt-1">— {q.author}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Recommended Resources */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-display font-semibold text-lg text-foreground mb-3">
            Recommended Channels
          </h2>
          <div className="grid gap-2">
            {[
              { name: "Neil Gresham Climbing", desc: "The gold standard for technique" },
              { name: "Lattice Training", desc: "Science-based training and drills" },
              { name: "Mani the Monkey", desc: "Beginner to intermediate movement breakdowns" },
              { name: "Hooper's Beta", desc: "Injury prevention and hold tutorials" },
            ].map((channel, i) => (
              <div
                key={i}
                className="bg-card border border-border/50 rounded-lg p-3 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-orange/60 shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-sm text-foreground">
                    {channel.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{channel.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}
