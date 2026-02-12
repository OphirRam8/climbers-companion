export type DrillCategory = "technique" | "strength" | "footwork" | "mindset" | "endurance";

export interface Drill {
  id: string;
  name: string;
  category: DrillCategory;
  focus: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  howTo: string[];
  benefits: string[];
  progression: string[];
  videoUrl?: string;
  videoLabel?: string;
  quote?: string;
  quoteAuthor?: string;
}

export const drills: Drill[] = [
  {
    id: "silent-feet",
    name: "Silent Feet",
    category: "footwork",
    focus: "Precision and core tension",
    difficulty: "beginner",
    description:
      "The foundational footwork drill used by beginners and pros alike. Forces you to look at the hold until the foot is placed, preventing blind placements that slip.",
    howTo: [
      "Choose a climb 1-2 grades below your max (V1-V2 is ideal).",
      "Look at the foothold and decide exactly where to place your foot.",
      "Direct your foot to that spot with intention.",
      "Place it without making ANY sound.",
      "Only look away once your foot is perfectly placed.",
    ],
    benefits: [
      "Develops precise foot placement",
      "Builds fluidity and speed in footwork",
      "Essential for outdoor climbing where footholds are smaller",
      "Reduces wasted energy from foot slips",
    ],
    progression: [
      "Start with large footholds on easy problems",
      "Progress to smaller jibs and chips",
      "Increase placement speed while maintaining silence",
      "Apply to overhanging terrain for added difficulty",
    ],
    videoUrl: "https://www.youtube.com/results?search_query=silent+feet+climbing+drill",
    videoLabel: "Search: Silent Feet Drill",
  },
  {
    id: "hover-hands",
    name: "Hover Hands",
    category: "technique",
    focus: "Core strength and body positioning",
    difficulty: "intermediate",
    description:
      "A favorite drill of many professional climbers. Before latching each handhold, you hover your hand above it for 3-5 seconds. To hover successfully, your feet and core must be perfectly positioned — if you can't hover, your beta is inefficient.",
    howTo: [
      "Choose 2-3 climbs that are 1-2 grades below your current level.",
      "Before latching each handhold, hover your hand 3-5 seconds above it.",
      "To hover successfully, you must use flagging, drop-stepping, and body tension.",
      "Focus on footwork and body position — these are what keep you stable.",
    ],
    benefits: [
      "Develops core strength on overhung terrain",
      "Improves body positioning awareness",
      "Forces deliberate footwork",
      "Reveals inefficient beta immediately",
    ],
    progression: [
      "Start on vertical walls (easier to maintain position)",
      "Progress to overhangs (intense core and tension work)",
      "Increase hover time to 7-10 seconds when ready",
      "Try on steeper angles for maximum challenge",
    ],
    videoUrl: "https://www.youtube.com/results?search_query=hover+hands+climbing+drill",
    videoLabel: "Search: Hover Hands Drill",
  },
  {
    id: "sticky-hands",
    name: "Sticky Hands",
    category: "technique",
    focus: "Commitment and hold reading",
    difficulty: "beginner",
    description:
      "Once you grab a hold, you cannot readjust your grip. Beginners often re-grip 3-4 times, wasting massive amounts of energy. This drill forces you to read the hold correctly before moving.",
    howTo: [
      "Choose a problem 1-2 grades below your max.",
      "Once you grab a hold, your hand is locked — no readjusting allowed.",
      "Before each move, study the hold and decide the best grip position.",
      "Commit fully to your grip choice.",
    ],
    benefits: [
      "Eliminates energy-wasting re-grips",
      "Develops instant hold reading ability",
      "Builds commitment and confidence",
      "Improves onsight climbing performance",
    ],
    progression: [
      "Start on jugs where grip position matters less",
      "Progress to crimps and slopers where precision is critical",
      "Combine with Silent Feet for a full technique session",
    ],
    videoUrl: "https://www.youtube.com/results?search_query=one+touch+climbing+drill",
    videoLabel: "Search: One-Touch Climbing Drill",
    quote: "I just got really good at not searching for the better parts of holds and instantly knowing, 'Okay, this is fine. I can move off of this.'",
    quoteAuthor: "Kris Hampton",
  },
  {
    id: "high-low-repeats",
    name: "High-Low Repeats",
    category: "technique",
    focus: "Hip positioning and versatility",
    difficulty: "intermediate",
    description:
      "Climb the same problem twice with completely different foot strategies. First with the highest possible feet, then with the lowest. This teaches you how hip positioning changes everything and gives you multiple beta options for any problem.",
    howTo: [
      "Find 2-3 climbs 1-2 grades below your level.",
      "Climb each route twice:",
      "First time: Use the highest possible foot placements. Practice getting hips over feet.",
      "Second time: Keep feet as low as possible. Practice extended, stretched positions.",
    ],
    benefits: [
      "Builds leg and hip strength",
      "Improves hip positioning awareness",
      "Develops body tension in stretched positions",
      "Teaches versatility in beta options",
    ],
    progression: [
      "Start on vertical walls with clear footholds",
      "Progress to overhangs where hip position is critical",
      "Try on slab to develop balance in both positions",
    ],
  },
  {
    id: "lock-off",
    name: "Lock-Off Drill",
    category: "strength",
    focus: "Lock-off strength and static power",
    difficulty: "intermediate",
    description:
      "A strength-building drill that develops your ability to hold a locked position while moving your other hand. The key insight: lock off in the position that helps you reach the next hold, not just pulling to your chest.",
    howTo: [
      "Choose 2-3 routes 1-2 grades below your level.",
      "Follow this sequence for every move: Move feet → Lock off → Move hands.",
      "Hold the lock-off position between each hand movement.",
      "Lock off in the position that helps reach the next hold (not just pulling to chest).",
    ],
    benefits: [
      "Develops lock-off strength",
      "Improves static climbing ability",
      "Builds position-specific pulling power",
      "Teaches efficient body positioning under load",
    ],
    progression: [
      "Start with 1-2 second lock-offs on easy terrain",
      "Increase hold time to 3-5 seconds",
      "Progress to steeper angles",
      "Combine with precise foot placements",
    ],
  },
  {
    id: "dead-stops",
    name: "Dead Stops",
    category: "technique",
    focus: "Body tension and dynamic control",
    difficulty: "advanced",
    description:
      "Created by Nate Drolet, this drill develops incredible body tension. You climb with momentum but try to stop all movement right before latching each hold. This translates directly to better onsighting.",
    howTo: [
      "Choose problems harder than warm-up but easier than your project grade.",
      "Climb with momentum and dynamic movement.",
      "Right before latching each hold, try to stop ALL momentum.",
      "Engage full-body tension to slow and stop the dynamic movement.",
    ],
    benefits: [
      "Develops incredible body tension",
      "Improves dynamic movement control",
      "Translates directly to better onsighting",
      "Builds awareness of momentum in climbing",
    ],
    progression: [
      "Start on vertical terrain with moderate holds",
      "Progress to steeper walls with more dynamic moves",
      "Try on problems with big moves where momentum is high",
    ],
    quote: "This drill made my onsight climbing leap forward hugely.",
    quoteAuthor: "Kris Hampton",
  },
  {
    id: "three-second-hover",
    name: "3-Second Hover",
    category: "technique",
    focus: "Core tension and stability",
    difficulty: "intermediate",
    description:
      "A variation of the Hover Hands drill with a strict 3-second count. Before grabbing each hold, hover your hand 1 inch above it for exactly 3 seconds. If you can't hover, your body position is wrong.",
    howTo: [
      "Choose problems 1-2 grades below your max.",
      "Before grabbing each hold, hover your hand 3 seconds above it.",
      "Maintain core tension and body position throughout the hover.",
      "If you wobble or can't hold position, adjust your feet before trying again.",
    ],
    benefits: [
      "Trains core tension maintenance",
      "Prevents barrel-roll swing",
      "Develops position awareness",
      "Reveals weak body positions immediately",
    ],
    progression: [
      "Start with 3-second hovers on vertical walls",
      "Progress to overhangs",
      "Increase to 5-second hovers",
      "Try with eyes closed for the last second",
    ],
  },
  {
    id: "straight-arm-climbing",
    name: "Straight Arm Climbing",
    category: "technique",
    focus: "Body positioning and energy conservation",
    difficulty: "beginner",
    description:
      "The single most impactful technique for reducing arm pump. Instead of locking off on every move, keep your arms straight and use twisting, hip movement, and body positioning to make moves easier.",
    howTo: [
      "Choose problems at or below your comfortable grade.",
      "Keep arms straight whenever you aren't actively moving.",
      "Use twisting and body positioning to reach holds.",
      "Search for positions that make moves easier without pulling hard.",
      "Think of your arms as 'hooks,' not 'pullers.'",
    ],
    benefits: [
      "Teaches advanced body positioning",
      "Dramatically reduces arm pump",
      "Develops climbing-specific core strength",
      "Conserves energy for harder moves",
    ],
    progression: [
      "Start on slab and vertical walls",
      "Progress to slight overhangs",
      "Combine with Silent Feet for maximum technique focus",
      "Apply to your warm-up climbs every session",
    ],
    quote: "How you use your feet is actually more important than being strong. Try climbing without your feet.",
    quoteAuthor: "Anderson Brothers",
  },
  {
    id: "blink-drill",
    name: "Blink Drill",
    category: "footwork",
    focus: "Kinesthetic awareness and proprioception",
    difficulty: "advanced",
    description:
      "An advanced body awareness drill. Look at a foothold, close your eyes, then place your foot using only feel. This develops the deep proprioceptive sense that separates good climbers from great ones.",
    howTo: [
      "Choose an easy problem with clear footholds.",
      "Look at a foothold and memorize its position.",
      "Close your eyes.",
      "Move your foot onto the hold using only 'feel.'",
      "Open your eyes to check accuracy.",
    ],
    benefits: [
      "Develops kinesthetic awareness",
      "Improves body-wall relationship",
      "Enhances proprioception",
      "Builds trust in your body's spatial awareness",
    ],
    progression: [
      "Start with large, obvious footholds",
      "Progress to smaller holds",
      "Try with both handholds and footholds",
      "Attempt on slightly harder problems",
    ],
  },
  {
    id: "slovenian-game",
    name: "Slovenian Team Game",
    category: "technique",
    focus: "Body awareness and creative problem-solving",
    difficulty: "advanced",
    description:
      "A drill from Janja Garnbret's training team. Climb the same boulder problem four times, each time with a different limb restriction. This develops incredible body awareness and forces creative problem-solving.",
    howTo: [
      "Choose a boulder problem you can climb comfortably.",
      "First attempt: Climb normally.",
      "Second attempt: Don't use your right hand.",
      "Third attempt: Don't use your left hand.",
      "Fourth attempt: Don't use one foot (alternate).",
    ],
    benefits: [
      "Develops incredible body awareness",
      "Forces creative problem-solving",
      "Builds adaptability and versatility",
      "Reveals weaknesses in specific limbs",
    ],
    progression: [
      "Start on very easy problems (VB-V1)",
      "Progress to harder problems as you improve",
      "Try combining restrictions (e.g., no right hand + no left foot)",
    ],
  },
  {
    id: "4x4s",
    name: "4x4s",
    category: "endurance",
    focus: "Power-endurance and pump tolerance",
    difficulty: "intermediate",
    description:
      "A classic endurance protocol. Choose 4 boulder problems and climb them back-to-back with no rest, then rest for 4 minutes. Repeat 4 times. This builds the pump tolerance needed for longer sessions and harder projects.",
    howTo: [
      "Select 4 boulder problems 2-3 grades below your max.",
      "Climb all 4 problems back-to-back with NO rest between them.",
      "Rest for 4 minutes after completing all 4.",
      "Repeat the entire circuit 4 times.",
    ],
    benefits: [
      "Builds power-endurance",
      "Increases pump tolerance",
      "Improves recovery between attempts",
      "Simulates competition-style climbing",
    ],
    progression: [
      "Start with very easy problems (3-4 grades below max)",
      "Gradually increase the difficulty of selected problems",
      "Reduce rest time between circuits",
      "Add a 5th problem to each circuit",
    ],
  },
  {
    id: "visualization-practice",
    name: "Visualization Practice",
    category: "mindset",
    focus: "Mental rehearsal and route reading",
    difficulty: "beginner",
    description:
      "An off-the-wall training drill that builds your mental library of movement patterns. Watch climbing, pause before each move, visualize yourself doing it, then check your accuracy. Adam Ondra literally lies on a mat performing moves while his coach acts as holds.",
    howTo: [
      "Stand at the base of a problem you want to attempt.",
      "Close your eyes.",
      "Perform every movement in your mind — feel the positions, the tension, the reaches.",
      "Do this 3-5 times before attempting.",
      "Climb the problem — your body knows the sequence.",
    ],
    benefits: [
      "Develops muscle memory before touching the wall",
      "Creates actual neural pathways for movements",
      "Improves onsight ability",
      "Reduces wasted attempts",
    ],
    progression: [
      "Start with simple problems you've already climbed",
      "Progress to visualizing problems you haven't tried",
      "Practice the 3-Look Rule: Wide Look → Detail Look → Mental Rehearsal",
      "Apply to your project before every attempt",
    ],
    quote: "Time invested on the ground is energy saved on the route.",
    quoteAuthor: "Neil Gresham",
  },
];

export const categoryLabels: Record<DrillCategory, string> = {
  technique: "Technique",
  strength: "Strength",
  footwork: "Footwork",
  mindset: "Mindset",
  endurance: "Endurance",
};

export const categoryColors: Record<DrillCategory, string> = {
  technique: "bg-orange/15 text-orange border-orange/30",
  strength: "bg-red-500/15 text-red-400 border-red-500/30",
  footwork: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  mindset: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  endurance: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export const difficultyColors: Record<string, string> = {
  beginner: "text-emerald-400",
  intermediate: "text-amber-400",
  advanced: "text-red-400",
};
