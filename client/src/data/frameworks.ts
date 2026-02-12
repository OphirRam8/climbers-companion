export interface FrameworkPhase {
  name: string;
  duration: string;
  description: string;
  details: string[];
  intensity: "low" | "moderate" | "high" | "max";
}

export interface Framework {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  goal: string;
  description: string;
  bestFor: string;
  phases: FrameworkPhase[];
  tips: string[];
}

export const frameworks: Framework[] = [
  {
    id: "90-minute-workout",
    name: "The 90-Minute Workout",
    subtitle: "Your Complete Session Structure",
    duration: "90 min",
    goal: "Balanced training covering technique, projecting, and volume",
    description:
      "The recommended session structure for a climber training 3-4 days per week. Quality of movement is more important than total time on the wall. This framework ensures you warm up properly, practice technique deliberately, push your limits on projects, and build capacity.",
    bestFor: "Regular training sessions, 3-4 days per week",
    phases: [
      {
        name: "Warm-Up",
        duration: "20 min",
        description: "Joint lubrication & CNS activation",
        details: [
          "Adam Ondra's 2-Phase Protocol (Synovial + Fascial)",
          "5-10 min off the wall, 10 min on the wall",
          "Start with VB-V1 problems with perfect form",
        ],
        intensity: "low",
      },
      {
        name: "Technique Drills",
        duration: "20 min",
        description: "Deliberate practice on specific skills",
        details: [
          "Pick 1-2 drills from the Drill Library",
          "Silent Feet, Sticky Hands, or Hover Hands",
          "Focus on quality, not difficulty",
          "Apply drills to problems 1-2 grades below max",
        ],
        intensity: "moderate",
      },
      {
        name: "Projecting",
        duration: "30-40 min",
        description: "Skill acquisition on limit boulders",
        details: [
          "Work 1-2 'limit' boulders at V4-V5 (or your project grade)",
          "Maximum 5-7 attempts per problem",
          "Use visualization before each attempt",
          "Rest fully between attempts (3-5 min)",
        ],
        intensity: "max",
      },
      {
        name: "Volume / Pump",
        duration: "10-15 min",
        description: "Capacity building through volume",
        details: [
          "4x4s or 'Project and Pump' on V1-V2",
          "Focus on maintaining technique while fatigued",
          "Build endurance for longer sessions",
        ],
        intensity: "high",
      },
      {
        name: "Cool-Down",
        duration: "5-10 min",
        description: "Recovery and antagonist work",
        details: [
          "Static stretching (shoulders, forearms, hips)",
          "Antagonist work: 3 sets of 15 push-ups",
          "Finger extensions with rubber band",
          "Gentle dead hangs to decompress spine",
        ],
        intensity: "low",
      },
    ],
    tips: [
      "Technique comes FIRST in the session, when you're fresh",
      "Don't skip the cool-down — it prevents Climber's Elbow",
      "If you only have 60 minutes, cut Volume/Pump and shorten Projecting",
    ],
  },
  {
    id: "boulder-pyramid",
    name: "The Boulder Pyramid",
    subtitle: "Progressive Difficulty System",
    duration: "60-90 min",
    goal: "Build a solid base of completed climbs across grades",
    description:
      "A session structure based on progressive difficulty. You start with easy problems and work up to your project grade, then cool down. The pyramid ensures you're building a solid foundation — not just chasing high grades. If you can't complete the lower levels consistently, you're not ready for the top.",
    bestFor: "Days focused on building volume and consistent progression",
    phases: [
      {
        name: "Level 1: Foundation",
        duration: "10-15 min",
        description: "Movement preparation and technique focus",
        details: [
          "3-5 problems at 3-4 grades below your max",
          "Example: If you climb V7, start with V3-V4",
          "Focus on perfect form and fluid movement",
          "These should feel easy and controlled",
        ],
        intensity: "low",
      },
      {
        name: "Level 2: Working Zone",
        duration: "20-30 min",
        description: "Build volume and refine technique under load",
        details: [
          "5-8 problems at 1-2 grades below your max",
          "Example: If you climb V7, work V5-V6",
          "Focus on efficiency and reading beta quickly",
          "Aim to flash or send in 2-3 attempts",
        ],
        intensity: "moderate",
      },
      {
        name: "Level 3: Project Zone",
        duration: "30-45 min",
        description: "Push limits and develop strength",
        details: [
          "2-4 problems at your current max or slightly above",
          "Maximum 5-7 attempts per problem to avoid injury",
          "Use full visualization protocol before attempts",
          "Rest 3-5 minutes between attempts",
        ],
        intensity: "max",
      },
      {
        name: "Level 4: Cool Down",
        duration: "10 min",
        description: "Flush muscles and reinforce technique",
        details: [
          "2-3 easy problems to flush lactic acid",
          "Focus on perfect technique and breathing",
          "This is NOT the time to try one more hard problem",
        ],
        intensity: "low",
      },
    ],
    tips: [
      "Build the base of your pyramid before chasing the peak",
      "If you can't flash Level 1, you need easier problems",
      "Track your pyramid over time — it should widen as you improve",
    ],
  },
  {
    id: "project-and-pump",
    name: "Project & Pump",
    subtitle: "Power + Endurance Intervals",
    duration: "60 min",
    goal: "Develop power and endurance simultaneously",
    description:
      "A high-intensity interval format that alternates between projecting hard boulders and pumping out easy ones. This simulates competition-style climbing and builds both power and endurance in a single session. It also builds mental toughness — climbing easy problems while pumped requires focus.",
    bestFor: "Building power-endurance, competition prep, breaking plateaus",
    phases: [
      {
        name: "Project Phase",
        duration: "15 min",
        description: "Full-effort attempts on hard problems",
        details: [
          "Choose 1 project climb above your grade",
          "Give maximum effort attempts",
          "Rest fully between attempts (3-5 min)",
          "Focus on linking moves and finding beta",
        ],
        intensity: "max",
      },
      {
        name: "Pump Phase",
        duration: "15 min",
        description: "High-volume easy climbing with no breaks",
        details: [
          "Climb 5-15 problems 2-3 grades below your max",
          "NO breaks between problems",
          "Re-chalk and shake out, then immediately continue",
          "Maintain technique even when pumped",
        ],
        intensity: "high",
      },
      {
        name: "Repeat",
        duration: "—",
        description: "Alternate between phases",
        details: [
          "Alternate between Project and Pump phases",
          "Do 2-3 full cycles depending on energy",
          "Stop when technique degrades significantly",
        ],
        intensity: "high",
      },
    ],
    tips: [
      "This is a demanding session — don't do it on consecutive days",
      "During the Pump phase, focus on breathing and straight arms",
      "If you can't maintain technique, reduce the number of cycles",
    ],
  },
  {
    id: "technique-focus",
    name: "Technique Focus Session",
    subtitle: "Deliberate Practice Day",
    duration: "60-75 min",
    goal: "Improve specific technical skills through deliberate practice",
    description:
      "A session dedicated entirely to technique improvement. No projecting, no ego. You climb well below your max and focus on executing specific drills with perfect form. This is where the real long-term gains happen — technique improvements compound over time.",
    bestFor: "Recovery days, technique plateaus, building good habits",
    phases: [
      {
        name: "Warm-Up",
        duration: "15 min",
        description: "Standard warm-up protocol",
        details: [
          "5-10 min off-wall activation",
          "10 min easy traversing and VB problems",
          "Focus on breathing and relaxation",
        ],
        intensity: "low",
      },
      {
        name: "Drill Block 1",
        duration: "20 min",
        description: "Primary technique drill",
        details: [
          "Choose your primary drill (e.g., Silent Feet)",
          "Apply to 4-6 problems at 2-3 grades below max",
          "Focus on perfect execution, not completion",
          "If technique breaks down, go easier",
        ],
        intensity: "moderate",
      },
      {
        name: "Drill Block 2",
        duration: "20 min",
        description: "Secondary technique drill",
        details: [
          "Choose a complementary drill (e.g., Straight Arms)",
          "Apply to 4-6 different problems",
          "Try combining both drills on the same problem",
          "Record yourself on video for review",
        ],
        intensity: "moderate",
      },
      {
        name: "Free Climbing + Cool-Down",
        duration: "15 min",
        description: "Apply techniques to free climbing",
        details: [
          "Climb 3-4 problems freely, applying what you practiced",
          "Notice how the drills change your natural movement",
          "Cool down with easy problems and stretching",
        ],
        intensity: "low",
      },
    ],
    tips: [
      "This is NOT a strength day — keep the ego in check",
      "Video yourself during drills to review later",
      "Pick drills that address your specific weaknesses",
      "Do this session 1-2 times per week for fastest improvement",
    ],
  },
];

export const intensityColors: Record<string, string> = {
  low: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  moderate: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  high: "bg-orange/20 text-orange border-orange/30",
  max: "bg-red-500/20 text-red-400 border-red-500/30",
};
