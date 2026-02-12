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
  { name: "Jugs", tip: "Keep arms straight. Use them to rest and shake out.", difficulty: "VB+", image: "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/oEsNDln6sKUs5cnMWkkuxt-img-1_1770859310000_na1fn_aG9sZC1qdWdz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L29Fc05EbG42c0tVczVjbk1Xa2t1eHQtaW1nLTFfMTc3MDg1OTMxMDAwMF9uYTFmbl9hRzlzWkMxcWRXZHoucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Jl7IqbztDjeVfBeUi8xNpuICxqHIREN1ooJ4rPZSsoh9MIN8ib5NapTCccVNYlh5QZHxFv6lU-8gTeUIEBUGBtHt679ZefTcoEvNrUl~Vy0KueTXBXodNEfMcWad4H4d8rS45UbE8X3uaQ5e~YUFPcso9GQe3jyqLibNvegRCg0KHl~dTe7gjQ3yAuwF6WGqWxt70ADiEXSARORh4ylBKGSVC13XugMkSl4PDnt0rKje87YxIhylfpjZfCq3vlqND8P-et2XsCfU5rmPQCdPAY-0qozrC6wZPp1cLp36iA2liZy3YvCRz3K3lhQe02MzPOSnEifGyh1C8BQkcPbOTQ__" },
  { name: "Crimps", tip: "Use Half-Crimp (90° bend) to protect tendons. Avoid Full Crimp.", difficulty: "V3+", image: "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/oEsNDln6sKUs5cnMWkkuxt-img-2_1770859313000_na1fn_aG9sZC1jcmltcHM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L29Fc05EbG42c0tVczVjbk1Xa2t1eHQtaW1nLTJfMTc3MDg1OTMxMzAwMF9uYTFmbl9hRzlzWkMxamNtbHRjSE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=au7KYe4lE~0rAM7aNeMAJi1iQ4agYYJyJDVlb9xNMV1-d4egKrMY3lPvUlsn4-Hhvz53QsLHH6Tt7mAlYiwUPvFy1jBbeO-IGv9M7yqF1ZcEcK1LVN0D87rsYgNvHmG-NfwnpHi2iCFhL~xeGtD8pgHcUAMevbSj-FXVvWYLbcICFjlWvHhT8CZ4AOtpug~ACCZw~EOI5ziBoBSXeXEju3~cPE6fW32wb2lBPVHpiUhHbqFO-DtdhiN1ULmqo2d45rjUr0h2dPmIWZAnW6IocmV6RpBVfkkoYxG~a1rYQ-LxAEFMcsLI9lzXa1~wJ3JEsrxixR2KFkcb5RZZuwjiFg__" },
  { name: "Slopers", tip: "Keep hips low. Maximize hand surface contact.", difficulty: "V3+", image: "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/oEsNDln6sKUs5cnMWkkuxt-img-3_1770859317000_na1fn_aG9sZC1zbG9wZXJz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L29Fc05EbG42c0tVczVjbk1Xa2t1eHQtaW1nLTNfMTc3MDg1OTMxNzAwMF9uYTFmbl9hRzlzWkMxemJHOXdaWEp6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=b5suTmgRs-KwkJvpmnz7mi2lBGK~cPqNpb4aS5pmZkqZxea3tQWywT3MUSr-6pimi7hFH4epp5sz2s0hUrx4yz4fDife6Ws5JqekgXnTUajanr0DUsKc-hzn7~mOrHMeF0ZQKW0Na1AigClM~GBWON4HyiSMa4QWiINnae77VPR4lAxb5639RraHNtyFQNeWWNFBor93aIFvRG6EdDOwiS5yieIxfKU0pHGtgXI4zjnxnG09CYzxkPBe3AarpmmV6HhcqoRm2KEgtVcb42-dXyr18pp-faGW03iygsavGFdbs5Z2gcg5mEmzC-DFqxAN4kfejx4UKj49D2mRjebE2g__" },
  { name: "Pinches", tip: "Engage your thumb — it's your strongest digit for these.", difficulty: "V4+", image: "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/oEsNDln6sKUs5cnMWkkuxt-img-4_1770859313000_na1fn_aG9sZC1waW5jaGVz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L29Fc05EbG42c0tVczVjbk1Xa2t1eHQtaW1nLTRfMTc3MDg1OTMxMzAwMF9uYTFmbl9hRzlzWkMxd2FXNWphR1Z6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=q9p-7XYAyUeVXobG9sMATVHo11lOkylLigDCzI0lzCO6bhFEEfn9Q5RcXPGzapj1dLV7wb1jKG1EovOIboglk91T6T1qkWscpMWtKjzUJY7tTJ6ag-Syk8ILxQsAKJPxWKHpX9umO6lZfd~BbkOyJoAkH3Zwl~YLqDcn7cyrcGmPXdw4yoYh8HJS7ruhq6Y7tsPs169Wm9Ijp5a3B56tOuK2v008B3t8rzVuPTMUOdIIKKoBBB60~1g-xpkU6q3nTUbyex1IQFJeaFRmAlnbrpjcXULmcScEWOSIC5kBvo5L2VIrI7jtU96aQSoCJwaV3uVV7zctVnlCDf1JbS7jyw__" },
  { name: "Pockets", tip: "Use middle and ring fingers. Keep them aligned.", difficulty: "V4+", image: "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/oEsNDln6sKUs5cnMWkkuxt-img-5_1770859312000_na1fn_aG9sZC1wb2NrZXRz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L29Fc05EbG42c0tVczVjbk1Xa2t1eHQtaW1nLTVfMTc3MDg1OTMxMjAwMF9uYTFmbl9hRzlzWkMxd2IyTnJaWFJ6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=plrQiZw0lsJekueEWCwZnUoujP-jNJYcsBwvpN8AgFm4IrNqVFiFbtF4ERPM2enNeFaDCj1KfA8j1ipo-ZLXQiBMNVuBCrG-v-CXK5QLoOzW6g4C0-iaeeKW876ed-3t6z2XG-wKS7BWspZU2bgg585Npz6vn1x9M14cdirYc0hz~d~BQMr2~gxIll-REdvVd-wxVxC0CKs0M-1YFhoKgzLLh1EADn1dRWnjktvpnU~J9Y61Sis1lhsCuPEk64KG1RxIQiQc0cEblSpY~QIjzHvGzjVejaTtSfouNFpatI8TvLK8SovwH~US3-EPcQRGcI4KdbFuAXjYeYw9hdlFHw__" },
  { name: "Volumes", tip: "Use smearing with palms and feet on flat sides.", difficulty: "V2+", image: "https://private-us-east-1.manuscdn.com/sessionFile/wdjwTTmoCxr61Jk59rmcmy/sandbox/cgdmcKWfl6HbPtHb8Si1hp-img-1_1770859371000_na1fn_aG9sZC12b2x1bWVz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2Rqd1RUbW9DeHI2MUprNTlybWNteS9zYW5kYm94L2NnZG1jS1dmbDZIYlB0SGI4U2kxaHAtaW1nLTFfMTc3MDg1OTM3MTAwMF9uYTFmbl9hRzlzWkMxMmIyeDFiV1Z6LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UTYAB8oY97zpBb4JvOEP8RjihsGdz1PTj0O6w8I5gglWJw3HXjJOrthDJz4dQOCJc~fdLjJQyo5Dj~VDxcMEwaljH6Fqyug-Rcn1uZt7MNKkG~6W2yK4Xr-qyPAbv2ekf4-TAAUZd5K96BhpvBB3qmSsCNWzCjMFoWOVqeSbHe6syNFpx4w7wCmpLPAzIYWx522d55fxzQEAZCFZCWzlTefXtw7twzaAHJuXnHUliwTCmqUMkxypt0RWwhGUDCT5gIn6zQW0E2SVbuItSKpPKx2AgebXeIyec-Zwq2ZzBQL7x5M9L4aIdQ8r41-mNLIZ-X2SUfwUhC2bK4GbdR-lPg__" },
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {holdTypes.map((hold, i) => (
              <div
                key={i}
                className="bg-card border border-border/50 rounded-lg overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={hold.image}
                    alt={`${hold.name} grip technique`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-mono text-orange">
                    {hold.difficulty}
                  </div>
                </div>
                <div className="p-3 border-t border-border/50">
                  <h3 className="font-display font-semibold text-sm text-foreground">
                    {hold.name}
                  </h3>
                  <p className="text-xs text-foreground/70 mt-1 leading-relaxed">{hold.tip}</p>
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
