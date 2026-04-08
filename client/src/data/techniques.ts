export interface Technique {
  id: string;
  name: string;
  type: "technique";
  category: string;
  level: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  howTo: string[];
  drillInstructions: string[];
  benefits: string[];
  relatedDrills: string[];
}

export const techniques: Technique[] = [
  // === BEGINNER (V0-V2) ===
  {
    id: "edging",
    name: "Edging",
    type: "technique",
    category: "Footwork",
    level: "Beginner (V0-V2)",
    difficulty: "beginner",
    description:
      "Edging means standing on footholds using the edge of the climbing shoe rather than the flat sole. Used on small ledges and incut footholds to create secure, precise contact and keep most weight on the feet instead of the arms, increasing efficiency and reducing pump.",
    howTo: [
      "Place the inside or outside edge of the shoe on a foothold, aiming to contact it with the rigid edge near the toes.",
      "Keep the ankle close to 90 degrees (avoid dropping the heel too low) so weight is driven through the edge rather than rolling onto the sole.",
      "Look at the foothold while placing the foot and make the step as quiet and precise as possible to encourage control.",
    ],
    drillInstructions: [
      "On a low-angle wall, climb easy problems focusing only on using the inside edge for several moves, then repeat using the outside edge.",
      "Perform 'silent feet' drills: repeat an easy circuit where the goal is to make zero noise when placing feet, forcing precision and balance.",
      "Traverse across a vertical wall using only small footholds, avoiding large volumes or smears to improve trust in small edges.",
    ],
    benefits: [
      "Creates secure, precise foot contact on small holds",
      "Keeps weight on feet instead of arms",
      "Increases climbing efficiency and reduces pump",
      "Builds foundation for all advanced footwork",
    ],
    relatedDrills: ["silent-feet", "blink-drill"],
  },
  {
    id: "smearing",
    name: "Smearing",
    type: "technique",
    category: "Footwork",
    level: "Beginner (V0-V2)",
    difficulty: "beginner",
    description:
      "Smearing is using the flat rubber of the shoe against a featureless or nearly featureless surface, relying on friction rather than a defined foothold. Most important on slab or low-angle terrain where there are few edges, and controlled body position is needed to keep weight over the feet.",
    howTo: [
      "Place the front of the shoe on the wall and then drop the heel slightly to maximize rubber contact.",
      "Keep the hips close to the wall and over the smearing foot so that body weight presses the shoe into the surface, increasing friction.",
      "Take small, deliberate steps and avoid sudden shifts that can cause the smear to slip.",
    ],
    drillInstructions: [
      "On a slab wall with minimal footholds, climb easy problems using smears whenever possible instead of stepping on big footholds.",
      "Practice standing on a single smear on a gently inclined wall and rocking weight on and off that foot to feel the friction limit.",
      "Do up-and-down laps on a mellow slab using only smears for feet, focusing on hip position and controlled movement.",
    ],
    benefits: [
      "Enables climbing on featureless terrain",
      "Develops trust in friction and shoe rubber",
      "Improves hip positioning and body awareness",
      "Essential for slab and outdoor climbing",
    ],
    relatedDrills: ["silent-feet", "blink-drill"],
  },
  {
    id: "balance-weight-transfer",
    name: "Balance & Weight Transfer",
    type: "technique",
    category: "Body Position",
    level: "Beginner (V0-V2)",
    difficulty: "beginner",
    description:
      "Good bouldering relies on keeping body weight over the feet rather than hanging mainly from the arms, improving endurance and control. Effective balance and weight transfer are used in nearly every move, from stepping up on slabs to standing up on small ledges.",
    howTo: [
      "Keep the center of gravity (hips) close to the wall and generally above the footholds to reduce strain on the hands.",
      "When stepping up, consciously shift weight onto the new foot before committing, often by rocking the hips over that foot.",
      "Use controlled breathing and slow, deliberate movement to feel when the body is balanced before reaching for the next hold.",
    ],
    drillInstructions: [
      "Climb easy slabs 'one-handed' or 'no-handed' where possible, forcing reliance on foot placement and weight shifts rather than pulling.",
      "Practice 'rock-over' drills: on a small step, start with weight on a lower foot and rock the hips over a higher foot until fully standing, then reverse.",
      "Traverse on vertical terrain with hands on large jugs, focusing on moving the hips over each foot before stepping to the next hold.",
    ],
    benefits: [
      "Reduces arm fatigue by keeping weight on feet",
      "Improves endurance and control on every move",
      "Builds awareness of center of gravity",
      "Foundation for all climbing movement",
    ],
    relatedDrills: ["straight-arm-climbing", "high-low-repeats"],
  },
  {
    id: "straight-arms-efficient-grip",
    name: "Straight Arms & Efficient Grip",
    type: "technique",
    category: "Body Position",
    level: "Beginner (V0-V2)",
    difficulty: "beginner",
    description:
      "Using straight arms whenever possible allows the skeleton to carry load instead of constantly engaging the forearms, improving endurance and reducing pump. Efficient grip use involves choosing relaxed grip types and avoiding over-gripping on good holds.",
    howTo: [
      "Hang with arms as straight as possible between moves, engaging shoulders and core to stay stable rather than bending the elbows.",
      "Use open-hand grips on positive holds when possible instead of full crimp, which is more stressful on tendons.",
      "Move feet and body first, then make quick, decisive hand movements to new holds rather than slowly locking off through every move.",
    ],
    drillInstructions: [
      "On a circuit board or easy boulder wall, climb several problems with the rule that elbows can only bend during the actual reach and must be straight otherwise.",
      "Film short boulders and review to identify moments of unnecessary lock-offs or over-gripping, then repeat with a focus on relaxing.",
      "Perform easy traverses using only open-hand grips on jugs and slopers to build comfort and finger strength without crimping.",
    ],
    benefits: [
      "Dramatically reduces arm pump",
      "Allows skeleton to carry load instead of muscles",
      "Protects tendons by avoiding excessive crimping",
      "Conserves energy for harder moves",
    ],
    relatedDrills: ["straight-arm-climbing", "sticky-hands"],
  },
  {
    id: "body-positioning",
    name: "Body Positioning (Facing & Backstepping)",
    type: "technique",
    category: "Body Position",
    level: "Beginner (V0-V2)",
    difficulty: "beginner",
    description:
      "Facing the wall square-on and using simple backsteps are foundational body positions that determine reach, balance, and how efficiently one can move between holds. A backstep is when the climber turns the hip toward the wall and uses the outside edge of the foot, often making twisting moves feel easier.",
    howTo: [
      "For straightforward moves, face the wall with both hips square and use inside edges for symmetrical footing.",
      "For diagonal or side moves, rotate the hip of the working foot toward the wall and place the outside edge of that foot, creating a backstep.",
      "Keep the shoulders stacked over the hips and avoid sagging away from the wall, which increases arm load.",
    ],
    drillInstructions: [
      "On a vertical wall, climb an easy problem three ways: facing straight on, only backstepping with the right foot, then only backstepping with the left, noticing which feels more balanced.",
      "Practice 'zigzag' walking on a slab by alternating between facing left and right, pivoting around each step to feel hip rotation.",
      "Set simple mirror-image boulders that force either square-on or backstep positions and repeat laps to internalize movement patterns.",
    ],
    benefits: [
      "Determines reach, balance, and efficiency",
      "Enables twisting moves to feel easier",
      "Reduces arm load through proper hip positioning",
      "Foundation for drop knees and advanced twisting",
    ],
    relatedDrills: ["high-low-repeats", "hover-hands"],
  },

  // === INTERMEDIATE (V3-V5) ===
  {
    id: "flagging",
    name: "Flagging",
    type: "technique",
    category: "Body Position",
    level: "Intermediate (V3-V5)",
    difficulty: "intermediate",
    description:
      "Flagging is extending a free leg out to the side or behind the body to counterbalance and prevent the body from swinging or barn-dooring off the wall. Most useful on vertical or slightly overhanging walls where handholds are to the side and there is no obvious foothold for the spare foot.",
    howTo: [
      "When pulling sideways on a hold, let the free leg extend in the opposite direction of the pull to create counterweight.",
      "Keep the flagging foot lightly touching the wall if possible to add friction and stability without loading it as a primary foothold.",
      "Maintain core tension so the hips stay close to the wall, which reduces the torque that causes barn-door swings.",
    ],
    drillInstructions: [
      "On a vertical wall, climb easy problems with the rule that one foot must always be off a foothold and used only as a flag.",
      "Purposefully climb slightly too far to one side on an easy route and use flags to rebalance, experimenting with inside and outside flags.",
      "Film climbs with big sideways moves and analyze where flagging could have kept the body from swinging off, then reshoot with deliberate flags.",
    ],
    benefits: [
      "Prevents barn-dooring off the wall",
      "Creates counterbalance for sideways moves",
      "Reduces need for extra footholds",
      "Improves stability on overhanging terrain",
    ],
    relatedDrills: ["hover-hands", "three-second-hover"],
  },
  {
    id: "drop-knees-backsteps",
    name: "Drop Knees & Backsteps",
    type: "technique",
    category: "Body Position",
    level: "Intermediate (V3-V5)",
    difficulty: "intermediate",
    description:
      "A drop knee (or twist-lock) is a deeper version of a backstep where the knee is rotated inward and dropped, twisting the hips toward the wall to gain reach and stability. These twisting positions let climbers keep weight on footholds while reaching farther with less effort, especially on vertical and slight overhangs.",
    howTo: [
      "Start from a backstep, then rotate the working knee inward and down, allowing the same-side hip to drop closer to the wall.",
      "Keep most of the weight on the bent leg and engage core and glutes to stabilize the knee in its rotated position.",
      "Use the twist to bring the shoulders over the pulling hand and extend the opposite hand farther to a target hold.",
    ],
    drillInstructions: [
      "On a vertical wall with good footholds, practice stepping into drop knees at various heights, then standing up and unwinding back to neutral.",
      "Create a traversing drill where every second step must involve a deliberate drop knee before moving hands.",
      "Repeat familiar problems substituting drop knees wherever possible, paying attention to how they change reach and effort.",
    ],
    benefits: [
      "Extends reach significantly through hip rotation",
      "Reduces effort on vertical and overhanging terrain",
      "Keeps weight efficiently on footholds",
      "Enables moves that feel impossible with square-on positioning",
    ],
    relatedDrills: ["high-low-repeats", "hover-hands"],
  },
  {
    id: "heel-hooks",
    name: "Heel Hooks",
    type: "technique",
    category: "Hooks",
    level: "Intermediate (V3-V5)",
    difficulty: "intermediate",
    description:
      "A heel hook is placing the heel on a hold and using the leg to pull the body toward or up from that point, almost like using a third hand. Heel hooks are especially powerful on overhangs, roofs, and high steps where the climber needs to keep the hips close and unweight the arms.",
    howTo: [
      "Place the heel on a suitable edge or volume, ideally in the most positive part of the hold, with the toe pointing slightly downward.",
      "Engage hamstrings and calves to pull the body toward the heel, rather than relying on pressing down with the heel itself.",
      "Keep the knee pushed outward to avoid twisting strain and to keep the hips close to the wall for better control.",
    ],
    drillInstructions: [
      "Practice Swiss-ball hamstring curls to strengthen the pulling motion used in heel hooks, then transfer that feeling onto big holds on the wall.",
      "On a steep wall, set or choose easy problems that allow repeated heel hooks at chest or hip height and focus on standing up off the heel.",
      "Do 'heel-only' traverses on a training wall using heels for as many foot placements as possible to build confidence and body awareness.",
    ],
    benefits: [
      "Acts like a third hand on steep terrain",
      "Unweights arms on overhangs and roofs",
      "Keeps hips close to the wall",
      "Enables powerful high-step moves",
    ],
    relatedDrills: ["dead-stops", "lock-off"],
  },
  {
    id: "toe-hooks",
    name: "Toe Hooks",
    type: "technique",
    category: "Hooks",
    level: "Intermediate (V3-V5)",
    difficulty: "intermediate",
    description:
      "Toe hooks involve wrapping the top of the foot or toes over a hold, using tension to pull the body in and prevent swinging or cutting loose. They are particularly useful on steep overhangs, roofs, and compression problems where opposing forces between hands and feet keep the body on.",
    howTo: [
      "Place the front/top of the shoe over an edge or volume so that the rubber on the toe box contacts the hold.",
      "Engage the shin, hamstring, and core to pull the body toward the toe hook, maintaining continuous tension.",
      "Keep the ankle slightly flexed and adjust angle so the toe hook feels locked in and secure, rather than hanging purely from the shoe rubber.",
    ],
    drillInstructions: [
      "On a steep training wall, practice basic 'toe catches' where the climber cuts loose and re-catches with a toe hook to control swing.",
      "Incorporate toe hooks into familiar problems by intentionally using them instead of heel hooks where both are possible.",
      "Perform core exercises like hanging leg raises and knee tucks to build the tension required for strong toe hooks and then apply them on moderate roof problems.",
    ],
    benefits: [
      "Prevents swinging on steep terrain",
      "Creates opposing forces to stay on the wall",
      "Essential for roof and compression climbing",
      "Builds core tension and body awareness",
    ],
    relatedDrills: ["dead-stops", "lock-off"],
  },
  {
    id: "directional-holds",
    name: "Underclings, Sidepulls & Gastons",
    type: "technique",
    category: "Strategy",
    level: "Intermediate (V3-V5)",
    difficulty: "intermediate",
    description:
      "Many problems rely on directional holds: underclings (pulled upward), sidepulls (pulled sideways), and gastons (pushed outward). These holds require aligning the body so that the pull direction matches the way the hold is designed, making difficult moves feel easier and more secure.",
    howTo: [
      "For underclings, keep feet high and body low, pulling up on the hold while pushing down and out through the feet to create opposition.",
      "For sidepulls, twist the hips and shoulders so they face in the opposite direction of the pull, allowing the hold to draw the body into the wall.",
      "For gastons, position the elbow down and slightly in front, pressing outward while the feet oppose the force to prevent the body from opening up.",
    ],
    drillInstructions: [
      "On a vertical wall, set or follow problems focusing on one hold type at a time (all sidepulls, all underclings) to learn ideal body positions.",
      "Perform isolation drills: stand on good feet and repeatedly move into and out of the optimal body position for each hold type without progressing upward.",
      "Film climbs that feel awkward and look for misaligned body positions on directional holds, then redraw beta emphasizing twisting into sidepulls and underclings.",
    ],
    benefits: [
      "Makes difficult moves feel easier through proper alignment",
      "Unlocks holds that feel unusable with square-on positioning",
      "Develops understanding of force direction",
      "Essential for reading and solving harder problems",
    ],
    relatedDrills: ["sticky-hands", "hover-hands"],
  },
  {
    id: "deadpointing",
    name: "Basic Dynamic Movement & Deadpointing",
    type: "technique",
    category: "Dynamic",
    level: "Intermediate (V3-V5)",
    difficulty: "intermediate",
    description:
      "Dynamic movement uses momentum and coordinated timing to reach holds more efficiently, instead of slowly locking off into every position. A deadpoint is a controlled, quick reach to a hold timed at the moment when the body is weightless at the top of a small movement arc, allowing harder moves with less strength.",
    howTo: [
      "Start from slightly bent legs and arms, then drive through the legs while pulling with the arms to initiate upward motion.",
      "Time the reach so the hand moves quickly toward the new hold at the precise moment the body's upward motion briefly pauses (the 'deadpoint').",
      "Keep the eyes fixed on the target hold and commit to the movement instead of hesitating midway, which wastes energy and reduces accuracy.",
    ],
    drillInstructions: [
      "Climb easy boulders one-handed (using one hand plus both feet) so that each move becomes a small deadpoint rather than a static lock-off.",
      "On a vertical or slight overhang wall, choose a pair of starting holds and a slightly out-of-reach target hold and practice repeating the same deadpoint move many times.",
      "Use bar 'jump and catch' drills: jump to a pull-up bar or good jug, catch with engaged shoulders and slightly bent arms, and drop, repeating for multiple sets.",
    ],
    benefits: [
      "Reaches holds with less strength than static climbing",
      "Uses momentum instead of pure lock-off power",
      "Develops timing and coordination",
      "Essential foundation for dynos and advanced movement",
    ],
    relatedDrills: ["dead-stops", "lock-off"],
  },

  // === ADVANCED (V6+) ===
  {
    id: "full-dynos",
    name: "Full Dynos & Coordinated Jumps",
    type: "technique",
    category: "Dynamic",
    level: "Advanced (V6+)",
    difficulty: "advanced",
    description:
      "Dynos are fully dynamic leaps where the climber's body becomes airborne, sometimes with no points of contact, to reach distant holds. Modern comp-style bouldering also uses coordination moves involving run-and-jump sequences and timing between feet and hands.",
    howTo: [
      "Build momentum by performing a single powerful 'pump' from bent legs and arms rather than multiple small bounces, then explode toward the target.",
      "Keep hips over the feet during takeoff by slightly twisting or driving the hips so the jump direction stays aligned with the footholds.",
      "Aim to catch the target hold with engaged shoulders and a slight bend in the elbows to absorb impact, committing fully rather than hesitating.",
    ],
    drillInstructions: [
      "Practice box jumps and similar plyometric exercises off the wall to develop leg power and safe landing mechanics.",
      "On the wall, set progressive dynos, starting with small jumps where at least one hand or foot stays on (slaps and jumps) before moving to full body dynos.",
      "Train coordination moves by practicing run-and-jumps or double-clutch moves on moderate problems, focusing on timing of foot placement and hand release.",
    ],
    benefits: [
      "Reaches distant holds impossible with static movement",
      "Develops explosive power and coordination",
      "Essential for competition-style bouldering",
      "Builds commitment and aerial awareness",
    ],
    relatedDrills: ["dead-stops", "slovenian-game"],
  },
  {
    id: "cutting-loose",
    name: "Cutting Loose & Re-Catching",
    type: "technique",
    category: "Strength",
    level: "Advanced (V6+)",
    difficulty: "advanced",
    description:
      "On steep roofs and overhangs, climbers often cut their feet off the wall and must maintain enough core tension to re-place them without swinging off. Developing this control allows more efficient climbing on powerful problems and reduces the need for constant heel or toe hooks.",
    howTo: [
      "When cutting, keep the shoulders active and the core braced so the body swings in a controlled arc rather than wildly.",
      "Use small hip and leg movements to bring the feet back toward footholds, aiming to catch them precisely rather than slapping.",
      "Coordinate breathing and movement so that exhalations coincide with effortful re-catches to maintain tension.",
    ],
    drillInstructions: [
      "On a steep wall, intentionally cut loose on easy juggy problems, then practice quickly and quietly re-placing feet on the same holds.",
      "Perform core exercises such as front levers, hanging leg raises, and 'toes-to-bar' to build strength for controlling swings.",
      "Combine cutting and re-catch drills with toe hooks or heel hooks to learn when to use tension alone versus hooks for extra stability.",
    ],
    benefits: [
      "Controls body swing on steep terrain",
      "Reduces reliance on constant heel/toe hooks",
      "Develops powerful core tension",
      "Enables efficient movement on roofs and overhangs",
    ],
    relatedDrills: ["dead-stops", "4x4s"],
  },
  {
    id: "heel-toe-compression",
    name: "Heel/Toe Combinations & Compression",
    type: "technique",
    category: "Hooks",
    level: "Advanced (V6+)",
    difficulty: "advanced",
    description:
      "Advanced problems often demand simultaneous use of heel hooks, toe hooks, and opposing hand pressures to create full-body compression around volumes and big holds. These techniques allow static movement on otherwise very powerful sequences and are common in modern gym setting.",
    howTo: [
      "Use opposing heel and toe hooks on different sides of a volume or feature to lock the hips in place while moving the hands.",
      "For compression, press outward with both hands on opposing holds or volumes while squeezing with the feet in the opposite direction, keeping the core maximally engaged.",
      "Adjust the angle of heels and toes incrementally until the tension 'locks,' minimizing the need to pull hard with the arms alone.",
    ],
    drillInstructions: [
      "On steep comp-style volumes, set drills where the climber must hold a position using only opposing heels and toes plus one hand.",
      "Practice moving one limb at a time ('three-point' rule) while maintaining tension in the other three points of contact.",
      "Repeat roof problems focusing on finding alternative heel/toe combinations that reduce the need for all-out pulling, exploring subtle variations in foot placement.",
    ],
    benefits: [
      "Creates full-body compression for static movement",
      "Locks hips in place on volumes and features",
      "Reduces arm effort on powerful sequences",
      "Essential for modern comp-style climbing",
    ],
    relatedDrills: ["dead-stops", "slovenian-game"],
  },
  {
    id: "route-reading",
    name: "Advanced Route Reading & Beta",
    type: "technique",
    category: "Strategy",
    level: "Advanced (V6+)",
    difficulty: "advanced",
    description:
      "At higher grades, success often depends more on beta -- finding the most efficient sequence -- than on raw strength alone. Route reading and experimentation use observation, experimentation, and feedback (video or partners) to refine how each move is executed.",
    howTo: [
      "Before pulling on, visually trace the holds, identify likely cruxes, and imagine body positions, including possible flags, drop knees, and hook options.",
      "Break problems into sections, working individual moves or small links repeatedly until they feel efficient, then connect them.",
      "Use video or partner feedback to spot micro-adjustments in feet, hips, or timing that make moves feel easier.",
    ],
    drillInstructions: [
      "Spend dedicated sessions on a single hard project, trying different betas and documenting them, instead of always climbing new problems.",
      "After topping a problem, immediately repeat it and deliberately change beta (different foot, different body position) to test alternatives.",
      "Review session videos to identify recurring technical weaknesses (e.g., lack of flagging, poor hip movement) and design drills around them.",
    ],
    benefits: [
      "Sends harder grades with less raw strength",
      "Develops problem-solving and observation skills",
      "Refines micro-beta for maximum efficiency",
      "Builds projecting and competition skills",
    ],
    relatedDrills: ["visualization-practice", "slovenian-game"],
  },

  // === COMBO DRILLS (Multi-Level) ===
  {
    id: "footwork-circuits",
    name: "Footwork Circuits",
    type: "technique",
    category: "Footwork",
    level: "Beginner (V0-V2)",
    difficulty: "beginner",
    description:
      "Footwork circuits are sequences of easy problems where the climber focuses on a specific foot technique rather than difficulty. They are effective for all levels because they allow high repetition with low risk of failure.",
    howTo: [
      "Choose a set of problems well below your max grade.",
      "Assign a specific footwork focus for each lap (edging only, smearing only, silent feet, etc.).",
      "Climb the circuit multiple times, changing the footwork focus each round.",
      "Prioritize quality of movement over speed or difficulty.",
    ],
    drillInstructions: [
      "Beginner: V0-V1 slab and vert problems using only edging or only smearing for entire laps.",
      "Intermediate: V2-V4 problems where each move must incorporate a deliberate flag, backstep, or drop knee.",
      "Advanced: V4-V6 problems on varied angles climbed with constraints like 'silent feet' or 'one-foot only' to sharpen precision.",
    ],
    benefits: [
      "High repetition builds muscle memory",
      "Low risk of failure keeps sessions productive",
      "Scalable across all skill levels",
      "Directly improves climbing-specific foot precision",
    ],
    relatedDrills: ["silent-feet", "blink-drill"],
  },
  {
    id: "movement-quality-sessions",
    name: "Movement-Quality Sessions",
    type: "technique",
    category: "Strategy",
    level: "Intermediate (V3-V5)",
    difficulty: "intermediate",
    description:
      "Dedicated movement sessions replace performance goals (sending hard grades) with goals around smoothness, rhythm, and control. These sessions build habits that carry over to harder climbing.",
    howTo: [
      "Choose a moderate circuit and aim to climb every problem with continuous motion, avoiding pauses and unnecessary lock-offs.",
      "Downclimb each problem instead of jumping to practice controlled weight shifts and reversed sequences.",
      "Use self-imposed rules like 'no cutting feet,' 'only straight arms,' or 'breathe out on every move' to build habits.",
    ],
    drillInstructions: [
      "Warm up, then select 5-8 problems at a moderate grade.",
      "Climb each problem focusing on one quality rule per lap.",
      "Downclimb every problem after topping out.",
      "Film yourself and review for smoothness and control.",
    ],
    benefits: [
      "Builds smooth, efficient climbing habits",
      "Replaces bad movement patterns with good ones",
      "Improves rhythm and flow on the wall",
      "Develops control and body awareness",
    ],
    relatedDrills: ["straight-arm-climbing", "hover-hands", "sticky-hands"],
  },
  {
    id: "dynamic-skill-blocks",
    name: "Dynamic Skill Blocks",
    type: "technique",
    category: "Dynamic",
    level: "Advanced (V6+)",
    difficulty: "advanced",
    description:
      "Dynamic-focused training blocks build comfort with deadpoints, dynos, and coordination moves without the pressure of sending a benchmark problem. They connect general power with climbing-specific movement.",
    howTo: [
      "Warm up thoroughly, then spend 20-30 minutes on a small selection of dynamic drills such as bar catches, small repeated deadpoints, and progressive dynos.",
      "Alternate between wall drills and off-wall plyometrics (box jumps, explosive step-ups) to connect general power with climbing-specific movement.",
      "Finish the session by applying new dynamic skills to one or two real problems, even if they are below max grade, to reinforce transfer.",
    ],
    drillInstructions: [
      "Start with bar 'jump and catch' drills for 5 sets of 5 reps.",
      "Move to the wall for progressive deadpoint practice on 3-4 target holds.",
      "Incorporate 2-3 sets of box jumps or explosive step-ups between wall drills.",
      "End with 2 real problems applying dynamic skills learned in the session.",
    ],
    benefits: [
      "Builds comfort with dynamic movement in a low-pressure setting",
      "Connects general power with climbing-specific coordination",
      "Develops timing and commitment for dynos",
      "Reinforces transfer from drills to real climbing",
    ],
    relatedDrills: ["dead-stops", "4x4s"],
  },
];
