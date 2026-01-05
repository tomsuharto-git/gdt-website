import { GDTAnalysis } from '@/lib/types';

/**
 * Survodutide (Boehringer Ingelheim) Pre-Launch GDT Analysis
 * Source: outputs/survo-usa-2025-01-02/
 * Analysis Type: Pre-Launch Opportunity Assessment
 */
export const survodutideAnalysis: GDTAnalysis = {
  brand: {
    id: 'survodutide',
    name: 'Survodutide',
    market: 'USA',
    category: 'GLP-1/Glucagon Dual Agonist',
    date: '2025-01-02',
    accentColor: '#FF5A8A'
  },

  // Scoring lens: Current reality, not potential. Challenges as challenges.
  totalScore: 45.0,

  // Growth Profile - Cultural Entry (adapted for pre-launch)
  growthProfile: {
    id: 'cultural-entry',
    name: 'Cultural Entry',
    sequence: 'Build → Legitimize → Scale',
    definition: 'Survodutide must build everything from scratch—brand recognition, HCP relationships, patient trust, payer contracts—before it can compete. The challenge isn\'t just market entry; it\'s constructing the infrastructure for market entry while competitors have 5+ years of head start.',
    implications: 'The core challenge is visibility: Ozempic has 97% unaided awareness, Survodutide has effectively zero. You can\'t compete when no one knows you exist. The cultural landscape adds complexity—GLP-1s carry stigma from celebrity associations and shortage resentment that a new entrant inherits without the brand equity to weather criticism. The science is genuinely differentiated (dual agonism, metabolic benefits), but science doesn\'t sell itself. The $100B market opportunity is real; the question is whether Survodutide can build fast enough to capture any of it.',
    shortDefinition: 'Pre-launch brands building everything from zero in established categories with entrenched competitors.'
  },

  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 16.5,
      tier: 'Moderate',
      components: [
        { id: 'a1', name: 'Positioning White Space', score: 5.5, tier: 'Vulnerable', section: 'A' },
        { id: 'a2', name: 'Pricing Strategy', score: 4.0, tier: 'Critical Gap', section: 'A' },
        { id: 'a3', name: 'Market Opportunity', score: 7.0, tier: 'Strong', section: 'A' }
      ]
    },
    {
      id: 'B',
      name: 'Audience Connection',
      score: 13.0,
      tier: 'Critical Gap',
      components: [
        { id: 'b1', name: 'Emotional Territory', score: 4.0, tier: 'Critical Gap', section: 'B' },
        { id: 'b2', name: 'Cultural Landscape', score: 4.5, tier: 'Critical Gap', section: 'B' },
        { id: 'b3', name: 'Experience Design', score: 4.5, tier: 'Critical Gap', section: 'B' }
      ]
    },
    {
      id: 'C',
      name: 'Competitive Transformation',
      score: 15.5,
      tier: 'Vulnerable',
      components: [
        { id: 'c1', name: 'Asset Recognition', score: 3.0, tier: 'Critical Gap', section: 'C' },
        { id: 'c2', name: 'Innovation Platform', score: 7.0, tier: 'Strong', section: 'C' },
        { id: 'c3', name: 'Competitive Pressure', score: 5.5, tier: 'Vulnerable', section: 'C' }
      ]
    }
  ],

  // Growth Barrier
  growthBarrier: {
    headline: 'Nobody Knows Who You Are',
    description: 'Good science isn\'t enough. GLP-1s are famous—and infamous. Survodutide has to build a brand from nothing while swimming against a current of celebrity gossip, shortage resentment, and "Ozempic face" jokes.',
    items: [
      {
        constraint: 'Inheriting the Backlash',
        component: 'B2',
        score: 4.5,
        evidence: 'People are tired of hearing about Ozempic. The shortages made diabetics angry. The celebrity posts made it feel unserious. Survodutide walks into all of this without any brand goodwill to fall back on.'
      },
      {
        constraint: 'No Pricing Power',
        component: 'A2',
        score: 4.0,
        evidence: 'Wegovy and Zepbound already set the price expectations. Insurance companies already hate covering these drugs. And compounding pharmacies are undercutting everyone. Not a great time to show up asking for premium pricing.'
      },
      {
        constraint: 'Starting From Zero',
        component: 'C1',
        score: 3.0,
        evidence: 'Ozempic is a household name. Survodutide is a six-syllable word no one can pronounce. Building awareness takes money and time—and competitors aren\'t waiting.'
      }
    ]
  },

  // Growth Solution
  growthSolution: {
    headline: 'Own the Bigger Health Story',
    description: 'Don\'t fight for the "celebrity weight loss" space—let Wegovy and Zepbound have it. Survodutide can stand for something bigger: real metabolic health, not just a number on the scale. The dual agonist science actually supports this story.',
    actions: [
      'Own "metabolic health" before anyone else claims it—this is more than weight loss',
      'Get doctors talking. Endocrinologists and obesity specialists give you credibility celebrities can\'t',
      'Make starting and staying on treatment dead simple—better than anyone else',
      'Build a brand people can actually find and remember online',
      'Show insurance companies why the liver and heart benefits are worth paying for'
    ]
  },

  // Growth System
  growthSystem: {
    headline: 'Build → Legitimize → Scale',
    description: 'You can\'t skip steps. First, build what doesn\'t exist—the brand, the story, the relationships. Then, earn legitimacy through the right voices and proof points. Then, scale with confidence. Rush this and you\'re just another noise in the GLP-1 circus.',
    phases: [
      {
        phase: 'Position',
        description: 'Build the foundation. Define what Survodutide stands for and get the medical community to take it seriously.',
        outputs: [
          {
            name: 'Brand Story',
            score: 14.0,
            purpose: 'Define what Survodutide stands for—metabolic health, not vanity—and make it stick',
            componentsAddressed: ['A1 (5.5)', 'B1 (4.0)', 'B2 (4.5)'],
            deliverables: ['Core positioning', 'Key messages', 'How we\'re different from Wegovy/Zepbound', 'Visual identity']
          },
          {
            name: 'Medical Credibility',
            score: 12.5,
            purpose: 'Get the doctors and specialists who matter to understand and recommend the science',
            componentsAddressed: ['A1 (5.5)', 'C2 (7.0)'],
            deliverables: ['Doctor education materials', 'Key opinion leader partnerships', 'Conference strategy', 'Clinical story']
          }
        ]
      },
      {
        phase: 'Unlock',
        description: 'Earn legitimacy. Get the right people saying the right things—doctors, specialists, credible voices. Change how people think about what this drug is for.',
        outputs: [
          {
            name: 'Reputation Building',
            score: 8.5,
            purpose: 'Build credibility through the right voices—medical experts, not influencers',
            componentsAddressed: ['B2 (4.5)', 'B1 (4.0)'],
            deliverables: ['Who speaks for us', 'How to handle the backlash', 'Patient stories that matter', 'What we don\'t say']
          },
          {
            name: 'Getting Noticed',
            score: 12.5,
            purpose: 'Build awareness without the celebrity baggage—be famous for the right reasons',
            componentsAddressed: ['B2 (4.5)', 'C1 (3.0)', 'A1 (5.5)'],
            deliverables: ['PR strategy', 'Medical media focus', 'Digital presence', 'How to handle crisis']
          }
        ]
      },
      {
        phase: 'Connect',
        description: 'Scale with confidence. Launch to patients, lock in insurance coverage, and deliver an experience that keeps people on treatment.',
        outputs: [
          {
            name: 'Launch Plan',
            score: 15.5,
            purpose: 'Coordinate the actual launch—doctors, insurance, patients, all at once',
            componentsAddressed: ['A3 (7.0)', 'A2 (4.0)', 'B3 (4.5)'],
            deliverables: ['Launch timeline', 'Who to target first', 'Insurance strategy', 'Doctor outreach']
          },
          {
            name: 'Advertising',
            score: 12.5,
            purpose: 'Campaigns that drive awareness and get people to ask their doctors',
            componentsAddressed: ['A1 (5.5)', 'C1 (3.0)', 'B1 (4.0)'],
            deliverables: ['TV/digital ads', 'Doctor-facing campaigns', 'Social media', 'Media buying']
          },
          {
            name: 'Patient Understanding',
            score: 13.0,
            purpose: 'Figure out what actually makes people start treatment and stick with it',
            componentsAddressed: ['B1 (4.0)', 'B2 (4.5)', 'A2 (4.0)'],
            deliverables: ['Patient research', 'What stops people', 'What motivates people', 'Message testing']
          }
        ]
      }
    ],
    criticalPath: 'Build → Legitimize → Scale',
    implementationNotes: 'You can\'t advertise your way out of a credibility problem. If doctors don\'t believe in you, patient demand doesn\'t matter. If patients haven\'t heard of you, the best insurance coverage won\'t help. Each phase unlocks the next. The window is 18-24 months before 10+ more competitors show up.'
  },

  components: [
    {
      id: 'a1',
      name: 'Positioning White Space',
      section: 'A',
      score: 5.5,
      tier: 'Vulnerable',
      wsn: {
        headline: 'Third Entrant Advantage in a Two-Horse Race',
        subline: 'Wegovy and Zepbound dominate today. Survodutide can define tomorrow.',
        what: 'The GLP-1 market is structurally a duopoly: Novo Nordisk (Wegovy/Ozempic) vs. Eli Lilly (Zepbound/Mounjaro). Both have established clinical credentials, manufacturing scale, and cultural presence. Survodutide enters as the first glucagon dual agonist approved for obesity—a genuine mechanism differentiation that neither incumbent can claim.',
        evidence: 'Boehringer Ingelheim\'s Phase 3 showed 18.7% weight loss at 46 weeks—competitive with tirzepatide. The glucagon component offers potential metabolic advantages (improved liver fat reduction, better lipid profiles) that pure GLP-1 agonists don\'t provide. However, the brand lacks Novo\'s DTC presence or Lilly\'s manufacturing capacity.',
        soWhat: 'Survodutide\'s white space isn\'t "another weight loss drug"—it\'s the metabolic health positioning that transcends simple weight reduction. The clinical data supports a broader story; the question is whether BI can tell it before the narrative window closes.',
        nowWhat: 'Own the "metabolic health transformation" narrative before Lilly or Novo expand into it. Position dual agonism as the evolution of the category, not just another option.'
      },
      strengths: [
        'First-to-market glucagon dual agonist with genuine mechanism differentiation',
        'Strong metabolic health data beyond weight loss (liver fat, lipid profiles)',
        'Clean slate without incumbent baggage or supply crisis history'
      ],
      weaknesses: [
        'Third entrant in established Novo/Lilly duopoly with brand recognition disadvantage',
        'Limited DTC marketing experience compared to Novo\'s Ozempic machine',
        'Manufacturing scale uncertainty in a category defined by supply constraints'
      ],
      competitiveContext: 'Novo Nordisk and Eli Lilly have built category infrastructure—DTC awareness, payer relationships, manufacturing scale. Survodutide must compete on differentiation, not distribution, at least initially.'
    },
    {
      id: 'a2',
      name: 'Pricing Strategy',
      section: 'A',
      score: 4.0,
      tier: 'Critical Gap',
      wsn: {
        headline: 'Price War Positioning Without Price War Economics',
        subline: 'Wegovy and Zepbound set the ceiling. Survodutide must decide if it competes on value or premium.',
        what: 'GLP-1 pricing is brutally transparent: Wegovy lists at ~$1,350/month, Zepbound at ~$1,060/month. Both face PBM resistance, coverage exclusions, and compounding pharmacy competition. Survodutide enters this pricing pressure cooker without the manufacturing scale that gives Lilly its cost advantage.',
        evidence: 'Only 40% of commercial plans cover GLP-1s for obesity. CVS Caremark excluded Wegovy in 2024. The compounding pharmacy market exploded to $1B+ by exploiting shortage loopholes. BI\'s operational footprint in the US obesity market is minimal compared to Novo and Lilly.',
        soWhat: 'Pricing at parity signals "me too." Pricing below signals desperation. Pricing above requires justification Survodutide hasn\'t yet established. The dual agonist mechanism offers a premium story, but it needs to be told before the invoice arrives.',
        nowWhat: 'Build the value narrative before the price becomes the headline. Metabolic health benefits (liver, cardiovascular) justify premium positioning—but only if payers understand the differentiation before launch.'
      },
      strengths: [
        'Differentiated mechanism supports premium pricing narrative with metabolic health outcomes',
        'No prior pricing baggage or failed contract history',
        'Opportunity for outcomes-based contracts demonstrating total cost of care reduction'
      ],
      weaknesses: [
        'No established payer relationships for obesity indication',
        'Incumbent pricing pressure from Wegovy/Zepbound reference points',
        'Compounding pharmacy threat undermining all branded pricing'
      ],
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Wegovy', score: 7.2 },
        { name: 'Zepbound', score: 7.8 },
        { name: 'Saxenda', score: 5.5 }
      ]
    },
    {
      id: 'a3',
      name: 'Market Opportunity',
      section: 'A',
      score: 7.0,
      tier: 'Strong',
      wsn: {
        headline: 'A $100B Market Growing Into a $150B Market',
        subline: 'The opportunity is obvious. The path to capturing it is not.',
        what: 'US anti-obesity medication market projected to reach $50B by 2030, with GLP-1 class capturing 80%+. Global potential exceeds $100B. Current penetration is <5% of eligible patients—massive headroom exists.',
        evidence: '110M+ Americans meet obesity criteria. Only ~4M currently on GLP-1 therapy. Supply constraints artificially suppressed demand—as manufacturing scales, patient volume will surge. Employer coverage expanding as ROI data emerges (reduced comorbidity costs).',
        soWhat: 'The market isn\'t the constraint—access, awareness, and insurance coverage are. Survodutide\'s opportunity isn\'t stealing Wegovy/Zepbound patients; it\'s capturing the 95% of eligible patients who aren\'t yet on any GLP-1.',
        nowWhat: 'Focus on market expansion, not share theft. Build access infrastructure, patient support programs, and HCP education that bring new patients into the category—with Survodutide as their first treatment.'
      },
      strengths: [
        'Massive unmet demand with <5% category penetration',
        'Market still in early growth phase with expanding insurance coverage',
        'New patient acquisition strategy avoids direct incumbent competition'
      ],
      weaknesses: [
        'Dependent on manufacturing capacity to meet demand',
        'Incumbent manufacturing advantage from years of scale-up investment',
        'Regulatory approval timing uncertainty affecting launch window'
      ],
      categoryAverage: 7.0,
      competitorScores: [
        { name: 'Wegovy', score: 8.2 },
        { name: 'Zepbound', score: 8.5 },
        { name: 'Saxenda', score: 5.0 }
      ]
    },
    {
      id: 'b1',
      name: 'Emotional Territory',
      section: 'B',
      score: 4.0,
      tier: 'Critical Gap',
      wsn: {
        headline: 'Beyond Vanity: The Dignity of Health',
        subline: 'GLP-1s carry celebrity baggage. Survodutide can carry medical legitimacy.',
        what: 'The emotional landscape of obesity treatment is fraught: shame, hope, skepticism, and desperation coexist. Wegovy and Zepbound inherited both the promise and the stigma of their celebrity associations. Survodutide enters with a clean slate—no Elon Musk tweets, no Kim Kardashian rumors.',
        evidence: 'Patient qualitative research shows deep ambivalence: excitement about efficacy, fear of being seen as "taking the easy way out," anxiety about long-term unknowns. The "Ozempic face" discourse created real hesitation among potential patients.',
        soWhat: 'The emotional territory isn\'t about weight loss—it\'s about reclaiming agency over health. Patients don\'t want to feel like they\'re "cheating"; they want to feel like they\'re finally getting effective medical treatment for a medical condition.',
        nowWhat: 'Position Survodutide as the serious medical choice—not the celebrity shortcut. Lead with metabolic health outcomes (liver, heart) that frame this as comprehensive treatment, not vanity medication.'
      },
      strengths: [
        'No celebrity baggage or "vanity drug" associations',
        'Metabolic health story transcends weight loss stigma',
        'Opportunity to own medical legitimacy positioning'
      ],
      weaknesses: [
        'Category stigma transfer risk from GLP-1 backlash',
        'Emotional barriers to treatment initiation remain high',
        'Side effect anxiety from "Ozempic face" discourse'
      ],
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Wegovy', score: 7.0 },
        { name: 'Zepbound', score: 6.8 },
        { name: 'Saxenda', score: 5.5 }
      ]
    },
    {
      id: 'b2',
      name: 'Cultural Landscape',
      section: 'B',
      score: 4.5,
      tier: 'Critical Gap',
      wsn: {
        headline: 'GLP-1 Culture War: Shortages, Shame, and Celebrity',
        subline: 'The category\'s cultural moment is also its cultural liability.',
        what: 'GLP-1s became a cultural phenomenon in 2023-24, but not always positively. Supply shortages created resentment (diabetics vs. weight loss users). Celebrity associations trivialize medical need. Social media discourse oscillates between miracle drug and dangerous shortcut.',
        evidence: '"Ozempic face" generated 1.2B TikTok views. FDA shortage notices for semaglutide persisted 18+ months. Medical societies issued guidance defending GLP-1 prescribing for obesity. The cultural conversation is happening without Boehringer Ingelheim\'s participation.',
        soWhat: 'Survodutide launches into a culturally contested space. The brand can\'t ignore the existing narrative—it must actively reshape it. Third-entrant status means inheriting the category\'s cultural baggage without the brand recognition that Wegovy/Zepbound use to weather criticism.',
        nowWhat: 'Enter the cultural conversation strategically. Partner with medical voices (endocrinologists, obesity medicine specialists) to legitimize the category. Use the dual agonist mechanism to create distance from "celebrity GLP-1" associations.'
      },
      strengths: [
        'Category awareness is already high—no need to explain what GLP-1s are',
        'No existing brand baggage to overcome',
        'Opportunity to reframe narrative around medical legitimacy'
      ],
      weaknesses: [
        'Inherits category stigma without brand recognition defense',
        'Cultural backlash actively in progress',
        'Limited resources to counter competitor voice share'
      ],
      categoryAverage: 6.0,
      competitorScores: [
        { name: 'Wegovy', score: 7.2 },
        { name: 'Zepbound', score: 6.5 },
        { name: 'Saxenda', score: 4.8 }
      ]
    },
    {
      id: 'b3',
      name: 'Experience Design',
      section: 'B',
      score: 4.5,
      tier: 'Critical Gap',
      wsn: {
        headline: 'The Patient Journey That Could Define the Category',
        subline: 'Novo and Lilly built products. Survodutide can build an experience.',
        what: 'Current GLP-1 patient experience is fragmented: complex prior authorization, pharmacy roulette, dosing titration confusion, side effect management anxiety. No brand has optimized the end-to-end journey.',
        evidence: 'Average time from prescription to first fill: 3-4 weeks with prior auth. 40%+ of patients experience GI side effects requiring management. Titration schedules are confusing. Digital support programs are underutilized.',
        soWhat: 'Experience excellence is an uncontested arena. While Novo and Lilly compete on efficacy data, Survodutide can compete on patient support. The brand that makes GLP-1 therapy easiest to start and stay on wins the loyalty war.',
        nowWhat: 'Design the category\'s best patient experience from day one: streamlined access, proactive side effect management, digital titration support, HCP coordination. Make "easy to stay on" the brand\'s operational advantage.'
      },
      strengths: [
        'Clean slate for experience design without legacy system constraints',
        'Competitor experiences are mediocre—low bar to exceed',
        'Digital capability opportunity to differentiate'
      ],
      weaknesses: [
        'No existing patient services infrastructure to leverage',
        'HCP relationship building required from scratch',
        'Significant resource investment needed for best-in-class experience'
      ],
      categoryAverage: 6.0,
      competitorScores: [
        { name: 'Wegovy', score: 6.5 },
        { name: 'Zepbound', score: 6.8 },
        { name: 'Saxenda', score: 5.5 }
      ]
    },
    {
      id: 'c1',
      name: 'Asset Recognition',
      section: 'C',
      score: 3.0,
      tier: 'Critical Gap',
      wsn: {
        headline: 'Building a Brand From Scratch in a Branded Category',
        subline: 'Ozempic is a verb. Survodutide is a syllable count.',
        what: 'Survodutide enters with no brand assets: no logo recognition, no color ownership, no verbal identity. The compound name is challenging (6 syllables, unfamiliar phonemes). Competitors have years of brand-building head start.',
        evidence: 'Ozempic has 97% unaided awareness among weight loss seekers. Wegovy inherits Ozempic\'s recognizability. Zepbound/Mounjaro benefit from Lilly\'s diabetes franchise familiarity. Survodutide/Boehringer Ingelheim has minimal US consumer presence.',
        soWhat: 'The brand must be built from zero. But this also means no mistakes to overcome. The opportunity is to create the first truly digital-native GLP-1 brand—designed for social, TikTok-ready, built for the channels where weight loss conversations actually happen.',
        nowWhat: 'Invest in distinctive brand assets before launch. Consider brand name strategy carefully. Build visual and verbal identity that\'s immediately recognizable and shareable. Own a color, own a sound, own a shape.'
      },
      strengths: [
        'No brand baggage or negative associations to overcome',
        'Opportunity for modern, digital-first brand design',
        'Can build for channels where category conversation happens (TikTok, Instagram)'
      ],
      weaknesses: [
        'Zero existing awareness requires massive investment',
        'Challenging compound name (6 syllables, unfamiliar phonemes)',
        'Significant time and resources required for brand-building'
      ],
      categoryAverage: 6.5,
      competitorScores: [
        { name: 'Wegovy', score: 8.5 },
        { name: 'Zepbound', score: 7.2 },
        { name: 'Saxenda', score: 6.0 }
      ]
    },
    {
      id: 'c2',
      name: 'Innovation Platform',
      section: 'C',
      score: 7.0,
      tier: 'Strong',
      wsn: {
        headline: 'The Dual Agonist That Could Become a Platform',
        subline: 'Survodutide isn\'t just a molecule. It\'s a metabolic technology.',
        what: 'Glucagon/GLP-1 dual agonism represents a genuine mechanism innovation. The glucagon component adds metabolic benefits (liver fat reduction, lipid improvement) that pure GLP-1s don\'t provide. BI\'s pipeline includes oral formulation development and combination therapies.',
        evidence: 'Phase 3 data showed 44% reduction in liver fat (MASH/NAFLD relevant). Cardiovascular outcome trials planned. Oral formulation in development would eliminate injection barrier. Pipeline positions Survodutide as platform, not single product.',
        soWhat: 'The innovation story extends beyond weight loss. Survodutide can position as comprehensive metabolic health technology—relevant for NASH, cardiovascular risk, Type 2 diabetes beyond obesity indication. This is a differentiated narrative that competitors can\'t easily claim.',
        nowWhat: 'Build the platform narrative now. Don\'t launch as "another weight loss drug"—launch as "metabolic health transformation technology." Set up the franchise for indication expansion and formulation evolution.'
      },
      strengths: [
        'Genuine mechanism differentiation with glucagon/GLP-1 dual agonism',
        'Platform potential beyond obesity (NASH, cardiovascular, diabetes)',
        'Strong pipeline with oral formulation and combination therapies'
      ],
      weaknesses: [
        'Clinical data still emerging—not all claims fully validated',
        'Competitor pipeline response will erode differentiation over time',
        'Execution complexity of platform positioning vs. product marketing'
      ],
      categoryAverage: 6.8,
      competitorScores: [
        { name: 'Wegovy', score: 7.0 },
        { name: 'Zepbound', score: 8.0 },
        { name: 'Saxenda', score: 5.0 }
      ]
    },
    {
      id: 'c3',
      name: 'Competitive Pressure',
      section: 'C',
      score: 5.5,
      tier: 'Vulnerable',
      wsn: {
        headline: 'The Window Before the Flood',
        subline: '2025-2027 is the last moment to establish position before 10+ competitors arrive.',
        what: 'The GLP-1 pipeline is crowded: Amgen, Pfizer, AstraZeneca, Viking, Structure, and others all have candidates in Phase 2/3. By 2027-2028, the market will fragment significantly. Survodutide\'s launch window is also its positioning window.',
        evidence: 'Amgen\'s MariTide (monthly injection) in Phase 3. Pfizer\'s danuglipron (oral) advancing. Viking\'s VK2735 showing strong Phase 2 results. 20+ GLP-1 related compounds in clinical development globally.',
        soWhat: 'First-mover among next-gen entrants creates durable advantage—but only if positioning is established before the crowd arrives. Survodutide must claim "dual agonist" and "metabolic health" positioning before competitors can contest it.',
        nowWhat: 'Move with urgency on brand building. The 18-24 month window post-launch is critical for establishing positioning. Don\'t wait for competitors to define the next-gen narrative—write it first.'
      },
      strengths: [
        'Clear differentiation vs. current products with dual agonism',
        'Window before major competitor launches (Amgen, Pfizer, Viking)',
        'First-mover opportunity in next-gen glucagon/GLP-1 class'
      ],
      weaknesses: [
        'Pipeline pressure is real—window is finite',
        'Deep-pocketed competitors (Pfizer, Amgen) in development',
        'Speed to market critical—delays cost positioning permanently'
      ],
      categoryAverage: 7.0,
      competitorScores: [
        { name: 'Wegovy', score: 7.5 },
        { name: 'Zepbound', score: 7.8 },
        { name: 'Saxenda', score: 6.0 }
      ]
    }
  ],

  // Growth Opportunities & Challenges
  growthFactors: {
    opportunities: [
      {
        component: 'C2',
        name: 'Innovation Platform',
        score: 7.0,
        headline: 'Breakthrough Innovation Pending',
        summary: 'Dual agonism could be a real differentiator—the glucagon piece helps with liver fat and cholesterol in ways Ozempic and Zepbound can\'t claim. Phase 3 data will tell the full story, but the science points to something genuinely new.'
      },
      {
        component: 'A3',
        name: 'Market Opportunity',
        score: 7.0,
        headline: 'Huge Market, Barely Touched',
        summary: '110 million Americans could benefit from these drugs. Less than 5% are on one. This isn\'t about stealing Wegovy patients—it\'s about the 95% who haven\'t started treatment yet.'
      },
      {
        component: 'A1',
        name: 'Positioning White Space',
        score: 5.5,
        headline: 'Room to Be Different',
        summary: 'Wegovy is the celebrity drug. Zepbound is the diabetes crossover. Nobody owns "serious metabolic medicine." Survodutide could—but the window won\'t stay open forever.'
      }
    ],
    challenges: [
      {
        component: 'C1',
        name: 'Asset Recognition',
        score: 3.0,
        headline: 'No One Knows You Exist',
        summary: 'Everyone knows Ozempic. No one knows Survodutide. Six syllables, weird spelling, parent company Americans haven\'t heard of. Everything needs to be built from scratch.'
      },
      {
        component: 'B1',
        name: 'Emotional Territory',
        score: 4.0,
        headline: 'No Trust Yet',
        summary: 'You can\'t have a relationship with something you\'ve never heard of. Competitors have been building patient trust for years. Survodutide is starting that conversation for the first time.'
      },
      {
        component: 'B2',
        name: 'Cultural Landscape',
        score: 4.5,
        headline: 'Walking Into a Fight',
        summary: 'GLP-1s are controversial. Celebrity drama, shortage anger, "cheating" accusations. Survodutide inherits all of it without any reputation to defend itself.'
      }
    ]
  }
};
