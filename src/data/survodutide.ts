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
    accentColor: '#1B3D36'
  },

  totalScore: 59.7,

  // Growth Profile - Cultural Entry (adapted for pre-launch)
  growthProfile: {
    id: 'cultural-entry',
    name: 'Cultural Entry',
    sequence: 'Position → Unlock → Connect',
    definition: 'Survodutide enters a culturally complex market where GLP-1 medications carry both stigma (celebrity shortcuts, supply shortages) and aspiration (transformative weight loss). The brand must establish cultural legitimacy before it can compete on clinical credentials.',
    implications: 'B2=5.4 represents significant cultural barriers: GLP-1 backlash from shortage-driven resentment, "Ozempic face" concerns, and the perception that these drugs are for celebrities, not patients. Strong C-section scores (7.4) indicate competitive opportunity exists—the category is growing but no brand owns the cultural conversation for next-gen dual agonists. A2=5.8 signals pricing strategy must address value perception in a market where Wegovy/Zepbound have established reference prices.',
    shortDefinition: 'Pre-launch brands entering culturally contested categories requiring legitimacy-building before commercial execution.'
  },

  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 19.4,
      tier: 'Moderate',
      components: [
        { id: 'a1', name: 'Positioning White Space', score: 6.8, tier: 'Moderate', section: 'A' },
        { id: 'a2', name: 'Pricing Strategy', score: 5.8, tier: 'Vulnerable', section: 'A' },
        { id: 'a3', name: 'Market Opportunity', score: 6.8, tier: 'Moderate', section: 'A' }
      ]
    },
    {
      id: 'B',
      name: 'Audience Connection',
      score: 19.1,
      tier: 'Moderate',
      components: [
        { id: 'b1', name: 'Emotional Territory', score: 6.5, tier: 'Moderate', section: 'B' },
        { id: 'b2', name: 'Cultural Landscape', score: 5.4, tier: 'Critical Gap', section: 'B' },
        { id: 'b3', name: 'Experience Design', score: 7.2, tier: 'Strong', section: 'B' }
      ]
    },
    {
      id: 'C',
      name: 'Competitive Transformation',
      score: 22.2,
      tier: 'Strong',
      components: [
        { id: 'c1', name: 'Asset Strategy', score: 7.4, tier: 'Strong', section: 'C' },
        { id: 'c2', name: 'Innovation Platform', score: 7.4, tier: 'Strong', section: 'C' },
        { id: 'c3', name: 'Competitive Pressure', score: 7.4, tier: 'Strong', section: 'C' }
      ]
    }
  ],

  // Growth Barrier
  growthBarrier: {
    headline: 'The Cultural Legitimacy Paradox',
    description: 'Survodutide has strong clinical credentials but enters a culturally contested category where GLP-1s are simultaneously miracle drugs and celebrity shortcuts. Without cultural legitimacy, even superior data doesn\'t translate to brand preference.',
    items: [
      {
        constraint: 'Category Stigma Transfer',
        component: 'B2',
        score: 5.4,
        evidence: 'GLP-1 backlash created by supply shortages, celebrity associations, and "Ozempic face" discourse. Third entrant inherits category baggage without brand recognition to counter it.'
      },
      {
        constraint: 'Value Perception Gap',
        component: 'A2',
        score: 5.8,
        evidence: 'No established payer relationships, incumbent pricing pressure from Wegovy/Zepbound, and compounding pharmacy competition undermining branded pricing.'
      },
      {
        constraint: 'Zero Brand Awareness',
        component: 'C1',
        score: 7.4,
        evidence: 'Ozempic has 97% unaided awareness. Survodutide has effectively 0%. Building from scratch requires significant investment and time the competitive window may not allow.'
      }
    ]
  },

  // Growth Solution
  growthSolution: {
    headline: 'Own the Metabolic Health Revolution',
    description: 'Reframe the category from "weight loss drugs" to "metabolic health transformation." Position Survodutide not as the third GLP-1 but as the first true metabolic health platform. Lead with medical legitimacy, not celebrity culture.',
    actions: [
      'Claim "metabolic health transformation" positioning before competitors can contest it',
      'Build medical legitimacy through endocrinologist and obesity medicine KOL partnerships',
      'Design category-best patient experience that makes Survodutide easiest to start and stay on',
      'Create distinctive brand assets that work in digital/social channels where category conversation happens',
      'Develop value narrative connecting liver/cardiovascular benefits to payer outcomes'
    ]
  },

  // Growth System
  growthSystem: {
    headline: 'Legitimize → Differentiate → Scale',
    description: 'The brand that owns the next-gen narrative wins the next-gen market. Survodutide must establish cultural legitimacy first, then leverage mechanism differentiation, then scale access and awareness.',
    phases: [
      {
        phase: 'Position',
        description: 'Establish Survodutide as the serious medical choice—the metabolic health transformation platform, not another celebrity weight loss drug.',
        outputs: [
          {
            name: 'Strategic Brand Platform',
            score: 19.08,
            purpose: 'Define the "metabolic health transformation" positioning that transcends weight loss and creates distance from GLP-1 cultural baggage',
            componentsAddressed: ['A1 (6.8)', 'B1 (6.5)', 'B2 (5.4)'],
            deliverables: ['Brand positioning architecture', 'Metabolic health messaging framework', 'Medical legitimacy narrative', 'Competitive differentiation map']
          },
          {
            name: 'Category Leadership',
            score: 21.13,
            purpose: 'Establish Survodutide as category thought leader in dual agonist science and metabolic health outcomes',
            componentsAddressed: ['A1 (6.8)', 'C2 (7.4)'],
            deliverables: ['Medical education program', 'KOL partnership strategy', 'Scientific communication platform', 'Conference presence strategy']
          }
        ]
      },
      {
        phase: 'Unlock',
        description: 'Enter and reshape the cultural conversation. Navigate GLP-1 cultural complexity by establishing medical legitimacy and reframing category narrative.',
        outputs: [
          {
            name: 'Culture Strategy',
            score: 19.49,
            purpose: 'Navigate GLP-1 cultural complexity by establishing medical legitimacy and reframing category conversation',
            componentsAddressed: ['B2 (5.4)', 'B1 (6.5)'],
            deliverables: ['Cultural landscape mapping', 'Medical voice activation strategy', 'Anti-stigma messaging', 'Patient advocacy partnerships']
          },
          {
            name: 'Fame Orchestration',
            score: 20.67,
            purpose: 'Build brand awareness and recognition through earned media and strategic visibility without celebrity baggage',
            componentsAddressed: ['B2 (5.4)', 'C1 (7.4)', 'A1 (6.8)'],
            deliverables: ['Media relations strategy', 'Medical media partnerships', 'Brand visibility playbook', 'Crisis communication protocols']
          }
        ]
      },
      {
        phase: 'Connect',
        description: 'Execute market entry with category-best patient experience, clear value narrative for payers, and scalable access infrastructure.',
        outputs: [
          {
            name: 'Go-To-Market Strategy',
            score: 21.04,
            purpose: 'Orchestrate launch execution across HCP, payer, and patient stakeholders with integrated channel strategy',
            componentsAddressed: ['A3 (6.8)', 'A2 (5.8)', 'B3 (7.2)'],
            deliverables: ['Launch sequencing plan', 'Channel strategy', 'Payer engagement playbook', 'HCP targeting and messaging']
          },
          {
            name: 'Launch Campaigns',
            score: 21.34,
            purpose: 'Drive awareness and trial through coordinated DTC and HCP campaigns that reinforce metabolic health positioning',
            componentsAddressed: ['A1 (6.8)', 'C1 (7.4)', 'B1 (6.5)'],
            deliverables: ['DTC campaign creative', 'HCP campaign creative', 'Digital/social strategy', 'Media plan']
          },
          {
            name: 'Hidden Consumer Truths',
            score: 19.82,
            purpose: 'Uncover and address the emotional barriers and motivations that determine treatment initiation and persistence',
            componentsAddressed: ['B1 (6.5)', 'B2 (5.4)', 'A2 (5.8)'],
            deliverables: ['Patient journey research', 'Barrier mapping', 'Motivation framework', 'Message testing protocol']
          }
        ]
      }
    ],
    criticalPath: 'Position (Establish legitimacy) → Unlock (Reshape culture) → Connect (Execute market entry)',
    implementationNotes: 'Phase 1 establishes the positioning foundation that makes Phase 2 cultural work credible. Phase 2 creates the cultural conditions that make Phase 3 launch execution effective. Without cultural legitimacy (Phase 2), even superior launch execution (Phase 3) will face headwinds from category stigma and competitor narratives. The 18-24 month window post-launch is critical for establishing positioning before 10+ competitors enter the market by 2027-2028.'
  },

  components: [
    {
      id: 'a1',
      name: 'Positioning White Space',
      section: 'A',
      score: 6.8,
      tier: 'Moderate',
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
      score: 5.8,
      tier: 'Vulnerable',
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
      score: 6.8,
      tier: 'Moderate',
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
      score: 6.5,
      tier: 'Moderate',
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
      score: 5.4,
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
      score: 7.2,
      tier: 'Strong',
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
      name: 'Asset Strategy',
      section: 'C',
      score: 7.4,
      tier: 'Strong',
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
      score: 7.4,
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
      score: 7.4,
      tier: 'Strong',
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
  ]
};
