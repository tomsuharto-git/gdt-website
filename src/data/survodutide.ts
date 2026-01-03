import { GDTAnalysis } from '@/lib/types';

/**
 * Survodutide (Boehringer Ingelheim) Pre-Launch GDT Analysis
 * Source: outputs/survo-usa-2025-01-02/
 * Analysis Type: Pre-Launch Opportunity Assessment
 *
 * SCORING LENS: Current reality, not potential. Challenges as challenges.
 * Pre-launch brands start from zero—"clean slate" is not a strength.
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

  totalScore: 46.0,

  // Growth Profile - Cultural Entry (adapted for pre-launch)
  growthProfile: {
    id: 'cultural-entry',
    name: 'Cultural Entry',
    sequence: 'Position → Unlock → Connect',
    definition: 'Survodutide enters a culturally contested market where GLP-1 medications carry both stigma and aspiration. The brand must build everything from scratch—awareness, positioning, relationships—while navigating active category backlash.',
    implications: 'B-section scores (13.0) reveal the core challenge: zero emotional connection, hostile cultural landscape, and no experience infrastructure. Strong C2 (7.0) indicates real scientific differentiation exists, but C1 (3.0) shows the brand has no assets to communicate it. A3 (7.0) confirms the market opportunity is real—the question is whether Survodutide can capture it before the window closes.',
    shortDefinition: 'Pre-launch brands entering culturally contested categories requiring legitimacy-building before commercial execution.'
  },

  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 17.5,
      tier: 'Moderate',
      components: [
        { id: 'a1', name: 'Positioning White Space', score: 5.5, tier: 'Moderate', section: 'A' },
        { id: 'a2', name: 'Pricing Strategy', score: 5.0, tier: 'Vulnerable', section: 'A' },
        { id: 'a3', name: 'Market Opportunity', score: 7.0, tier: 'Strong', section: 'A' }
      ]
    },
    {
      id: 'B',
      name: 'Audience Connection',
      score: 13.0,
      tier: 'Vulnerable',
      components: [
        { id: 'b1', name: 'Emotional Territory', score: 4.0, tier: 'Vulnerable', section: 'B' },
        { id: 'b2', name: 'Cultural Landscape', score: 4.5, tier: 'Vulnerable', section: 'B' },
        { id: 'b3', name: 'Experience Design', score: 4.5, tier: 'Vulnerable', section: 'B' }
      ]
    },
    {
      id: 'C',
      name: 'Competitive Transformation',
      score: 15.5,
      tier: 'Moderate',
      components: [
        { id: 'c1', name: 'Asset Strategy', score: 3.0, tier: 'Critical Gap', section: 'C' },
        { id: 'c2', name: 'Innovation Platform', score: 7.0, tier: 'Strong', section: 'C' },
        { id: 'c3', name: 'Competitive Pressure', score: 5.5, tier: 'Moderate', section: 'C' }
      ]
    }
  ],

  // Growth Barrier
  growthBarrier: {
    headline: 'Building a Brand from Zero in Hostile Territory',
    description: 'Survodutide has real scientific differentiation but literally nothing else. No awareness, no assets, no emotional connection, no experience infrastructure—entering a category with active cultural backlash and 18-24 months before the market floods with competitors.',
    items: [
      {
        constraint: 'Zero Brand Assets',
        component: 'C1',
        score: 3.0,
        evidence: 'Ozempic has 97% unaided awareness. Survodutide has 0%. No logo, no color ownership, no verbal identity. A 6-syllable unfamiliar name. Everything must be built from scratch against entrenched competitors.'
      },
      {
        constraint: 'No Audience Connection',
        component: 'B1',
        score: 4.0,
        evidence: 'Zero emotional relationship exists. "Clean slate" means no relationship at all. Must build trust and connection while inheriting category shame, skepticism, and Ozempic face anxiety.'
      },
      {
        constraint: 'Cultural Headwinds',
        component: 'B2',
        score: 4.5,
        evidence: 'GLP-1 backlash in full swing—shortage resentment, celebrity associations, medical legitimacy questions. Third entrant inherits all category baggage without brand recognition to counter it.'
      }
    ]
  },

  // Growth Solution
  growthSolution: {
    headline: 'Lead with Science, Build Everything Else',
    description: 'The only real asset is clinical differentiation (C2: 7.0). Every dollar and hour must work twice: building brand infrastructure while establishing cultural legitimacy. No shortcuts—this is a ground-up build in a time-limited window.',
    actions: [
      'Build distinctive brand assets immediately—the brand needs to exist before it can compete',
      'Establish medical legitimacy through KOL partnerships before DTC awareness campaigns',
      'Design patient experience infrastructure from day one—can\'t afford to retrofit later',
      'Enter cultural conversation through medical voices, not celebrity adjacency',
      'Secure payer relationships with outcomes-based value narrative tied to dual agonist differentiation'
    ]
  },

  // Growth System
  growthSystem: {
    headline: 'Build → Legitimize → Scale',
    description: 'Unlike established brands optimizing existing assets, Survodutide must construct everything simultaneously. Phase 1 builds the brand that doesn\'t exist. Phase 2 earns the cultural permission to compete. Phase 3 scales before the window closes.',
    phases: [
      {
        phase: 'Position',
        description: 'Build the brand infrastructure that doesn\'t exist. Create assets, establish positioning, develop experience architecture. Nothing can scale until the foundation exists.',
        outputs: [
          {
            name: 'Brand Infrastructure Build',
            score: 14.0,
            purpose: 'Create the distinctive assets, visual identity, and verbal framework required before any market activity can begin',
            componentsAddressed: ['C1 (3.0)', 'A1 (5.5)'],
            deliverables: ['Brand identity system', 'Name/naming architecture strategy', 'Visual asset library', 'Verbal identity guidelines', 'Digital asset templates']
          },
          {
            name: 'Positioning Architecture',
            score: 16.5,
            purpose: 'Claim "metabolic health transformation" positioning before competitors can contest it—the mechanism differentiation needs a narrative',
            componentsAddressed: ['A1 (5.5)', 'C2 (7.0)', 'B1 (4.0)'],
            deliverables: ['Brand positioning platform', 'Messaging hierarchy', 'Claim substantiation framework', 'Competitive differentiation map']
          }
        ]
      },
      {
        phase: 'Unlock',
        description: 'Earn cultural permission to compete. Build legitimacy through medical authority, not celebrity adjacency. Address category stigma head-on.',
        outputs: [
          {
            name: 'Medical Legitimacy Campaign',
            score: 15.5,
            purpose: 'Establish credibility through HCP partnerships and medical authority before consumer awareness',
            componentsAddressed: ['B2 (4.5)', 'C2 (7.0)', 'B1 (4.0)'],
            deliverables: ['KOL partnership strategy', 'Medical education program', 'Conference presence plan', 'Peer-reviewed publication support']
          },
          {
            name: 'Cultural Navigation Strategy',
            score: 13.0,
            purpose: 'Enter the GLP-1 cultural conversation strategically—acknowledge backlash, reframe narrative, build trust',
            componentsAddressed: ['B2 (4.5)', 'B1 (4.0)', 'A1 (5.5)'],
            deliverables: ['Cultural landscape mapping', 'Stigma response framework', 'Patient advocacy partnerships', 'Social listening + response protocols']
          }
        ]
      },
      {
        phase: 'Connect',
        description: 'Scale market presence with infrastructure and legitimacy in place. Build experience, drive awareness, secure access—all within the competitive window.',
        outputs: [
          {
            name: 'Experience Infrastructure',
            score: 14.0,
            purpose: 'Build the patient experience that doesn\'t exist—from first touchpoint through ongoing therapy management',
            componentsAddressed: ['B3 (4.5)', 'B1 (4.0)', 'A2 (5.0)'],
            deliverables: ['Patient journey design', 'Access/prior auth support program', 'Titration management tools', 'Side effect support protocols', 'Digital patient platform']
          },
          {
            name: 'Market Launch Execution',
            score: 17.5,
            purpose: 'Coordinated launch across HCP, payer, and patient channels—racing the competitive clock',
            componentsAddressed: ['A3 (7.0)', 'C3 (5.5)', 'A2 (5.0)'],
            deliverables: ['Launch sequencing plan', 'Payer negotiation playbook', 'HCP targeting + messaging', 'DTC campaign creative', 'Media plan']
          }
        ]
      }
    ],
    criticalPath: 'Build (Create what doesn\'t exist) → Legitimize (Earn cultural permission) → Scale (Race the clock)',
    implementationNotes: 'The 18-24 month window is real. By 2027-2028, 10+ competitors enter. Everything in Phase 1-2 must complete fast enough to leave runway for Phase 3 scaling. Parallel workstreams required—sequential execution runs out of time.'
  },

  components: [
    {
      id: 'a1',
      name: 'Positioning White Space',
      section: 'A',
      score: 5.5,
      tier: 'Moderate',
      wsn: {
        headline: 'Differentiation Exists, Positioning Doesn\'t',
        subline: 'The science is real. The brand position is vapor.',
        what: 'Survodutide is the first glucagon/GLP-1 dual agonist—genuine mechanism differentiation. But positioning doesn\'t exist until you claim it, communicate it, and defend it. Today, Survodutide is a molecule with clinical data, not a brand with a position.',
        evidence: 'Phase 3 showed 18.7% weight loss, competitive with tirzepatide. Glucagon component offers metabolic advantages (liver fat, lipids) that pure GLP-1s don\'t provide. But no messaging exists. No positioning architecture. No claim framework. The differentiation lives in papers, not in market.',
        soWhat: 'The white space for "metabolic health transformation" is real and unclaimed. But white space is opportunity, not achievement. Novo and Lilly could pivot messaging to contest this territory before Survodutide establishes it.',
        nowWhat: 'Build positioning architecture immediately. The mechanism story needs a narrative framework before the first HCP conversation. Claim the territory in medical channels before attempting consumer awareness.'
      },
      strengths: [
        'First-to-market glucagon dual agonist with genuine mechanism differentiation',
        'Strong metabolic health data beyond weight loss (liver fat, lipid profiles)',
        'White space for "metabolic health transformation" positioning exists'
      ],
      weaknesses: [
        'Positioning is theoretical—nothing has been claimed or communicated',
        'No messaging framework, claim architecture, or narrative exists',
        'Competitors could pivot to contest the positioning before it\'s established'
      ],
      competitiveContext: 'Novo and Lilly own the current conversation. Survodutide has a differentiated story to tell but no voice to tell it with.'
    },
    {
      id: 'a2',
      name: 'Pricing Strategy',
      section: 'A',
      score: 5.0,
      tier: 'Vulnerable',
      wsn: {
        headline: 'Entering a Price War Without Weapons',
        subline: 'No payer relationships. No manufacturing scale. Established reference prices.',
        what: 'GLP-1 pricing is brutally transparent and under pressure. Wegovy ~$1,350/month, Zepbound ~$1,060/month. Both face PBM resistance and compounding pharmacy competition. Survodutide enters this pressure cooker with no payer relationships, no contract history, and uncertain manufacturing economics.',
        evidence: 'Only 40% of commercial plans cover GLP-1s for obesity. CVS Caremark excluded Wegovy in 2024. Compounding pharmacy market exploded to $1B+. BI\'s US obesity market infrastructure is minimal compared to Novo and Lilly.',
        soWhat: 'Premium pricing requires a value story that doesn\'t exist yet. Parity pricing signals "me too." Below-market signals desperation. Every pricing position has problems without the foundation work.',
        nowWhat: 'Build value narrative before price becomes the conversation. Outcomes-based contracting tied to metabolic health benefits (liver, cardiovascular) may be the only path to premium positioning.'
      },
      strengths: [
        'Differentiated mechanism could support premium positioning if value story is built',
        'No failed contract history or pricing baggage to overcome'
      ],
      weaknesses: [
        'Zero established payer relationships in obesity indication',
        'Incumbent reference prices already set expectations',
        'Compounding pharmacy threat undermines all branded pricing',
        'Manufacturing economics unclear—may not have Lilly\'s cost position'
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
        headline: 'The Market Is Real',
        subline: '$100B+ opportunity with <5% penetration. The headroom is genuine.',
        what: 'US anti-obesity medication market projected to reach $50B by 2030. 110M+ Americans meet obesity criteria, only ~4M currently on GLP-1 therapy. Supply constraints artificially suppressed demand—as manufacturing scales, patient volume will surge.',
        evidence: 'Current penetration <5% of eligible patients. Employer coverage expanding as ROI data emerges. Category growth driven by new patient acquisition, not just share theft. The opportunity is external market reality, not brand-dependent.',
        soWhat: 'This is the one genuinely strong score that\'s not about potential—the market opportunity exists independent of Survodutide\'s readiness to capture it. The question is execution, not opportunity.',
        nowWhat: 'Focus on market expansion strategy, not share theft. The 95% of eligible patients not on GLP-1s are the real target—with Survodutide as their first treatment, not a switch from Wegovy.'
      },
      strengths: [
        'Massive unmet demand with <5% category penetration',
        'Market still in early growth phase—not zero-sum competition yet',
        'New patient acquisition avoids direct incumbent competition'
      ],
      weaknesses: [
        'Capturing opportunity requires execution capabilities not yet built',
        'Manufacturing capacity uncertainty could limit ability to meet demand',
        'Regulatory timing affects launch window'
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
      tier: 'Vulnerable',
      wsn: {
        headline: 'Zero Emotional Connection',
        subline: '"Clean slate" means no relationship at all.',
        what: 'Survodutide has no emotional connection with any audience. No trust built, no affinity established, no relationship exists. The brand inherits the category\'s emotional complexity—shame, hope, skepticism, desperation—without any brand-specific equity to navigate it.',
        evidence: 'Patient qualitative research shows deep ambivalence about GLP-1s: excitement about efficacy, fear of "taking the easy way out," anxiety about unknowns. Survodutide has no voice in this emotional landscape. Zero awareness means zero relationship.',
        soWhat: '"No baggage" is not a strength—it\'s the absence of relationship. Wegovy and Zepbound have emotional equity, even if complicated. Survodutide has nothing. Building emotional connection from zero while navigating category stigma is a significant challenge.',
        nowWhat: 'Lead with medical legitimacy to build trust before attempting emotional connection. The "serious medical choice" positioning creates a foundation for relationship-building that "another weight loss drug" cannot.'
      },
      strengths: [
        'No negative brand-specific associations to overcome',
        'Can design emotional territory intentionally rather than inheriting it'
      ],
      weaknesses: [
        'Zero emotional connection exists—must build from nothing',
        'Inherits category emotional baggage (shame, skepticism, Ozempic face anxiety)',
        'No brand voice in the emotional conversation about GLP-1s',
        'Competitors have emotional equity, even if complicated'
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
      tier: 'Vulnerable',
      wsn: {
        headline: 'Entering a Culture War',
        subline: 'Active backlash. No brand voice. Third entrant inherits the mess.',
        what: 'GLP-1s became a cultural phenomenon but not always positively. Supply shortages created diabetic vs. weight loss resentment. Celebrity associations trivialize medical need. "Ozempic face" generated 1.2B TikTok views. The cultural conversation is contested and Survodutide has no voice in it.',
        evidence: 'FDA shortage notices persisted 18+ months. Medical societies issued defensive guidance. Social media oscillates between miracle drug and dangerous shortcut. BI has not participated in the cultural conversation—no assets, no voice, no presence.',
        soWhat: 'Third entrant status means inheriting category cultural baggage without brand recognition to counter criticism. Wegovy and Zepbound can weather backlash with brand equity. Survodutide cannot.',
        nowWhat: 'Enter through medical legitimacy channels, not consumer culture. Partner with endocrinologists and obesity medicine specialists to earn credibility. Use dual agonist mechanism to create distance from "celebrity GLP-1" narrative.'
      },
      strengths: [
        'Category awareness is high—no need to explain what GLP-1s are',
        'Can position distinctively against cultural narrative rather than within it'
      ],
      weaknesses: [
        'Active cultural backlash in progress',
        'No brand presence or voice in the conversation',
        'Third entrant inherits stigma without recognition to counter it',
        'Limited resources to compete with incumbent voice share'
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
      tier: 'Vulnerable',
      wsn: {
        headline: 'No Experience Exists',
        subline: 'Zero touchpoints. Everything must be built.',
        what: 'Survodutide has no patient experience because the brand doesn\'t exist in market. No access programs, no patient support, no digital tools, no HCP relationships, no touchpoint infrastructure. "Could build best-in-class" is not a score—it\'s a to-do list.',
        evidence: 'Current GLP-1 patient experience is fragmented: 3-4 week prior auth delays, pharmacy roulette, titration confusion, side effect anxiety. The opportunity to improve on this is real, but Survodutide starts with nothing built.',
        soWhat: 'Experience excellence requires infrastructure that doesn\'t exist. Building it takes time and resources. The gap between "opportunity" and "reality" is the entire distance from zero to competitive.',
        nowWhat: 'Design experience architecture now, before launch. Patient support programs, access solutions, digital tools, HCP coordination—all must be built in parallel with brand infrastructure. Cannot retrofit post-launch.'
      },
      strengths: [
        'No legacy systems to work around—can design optimally',
        'Competitor experiences are mediocre—bar to exceed is achievable'
      ],
      weaknesses: [
        'Zero experience infrastructure exists',
        'No patient services programs built',
        'No HCP relationships established',
        'Significant resource investment required to build from scratch'
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
      score: 3.0,
      tier: 'Critical Gap',
      wsn: {
        headline: 'Zero Assets Against 97% Awareness',
        subline: 'The brand doesn\'t exist. Literally.',
        what: 'Survodutide has no brand assets. No logo recognition, no color ownership, no verbal identity, no visual system. The compound name is 6 syllables with unfamiliar phonemes. Ozempic has 97% unaided awareness. Survodutide has effectively 0%.',
        evidence: 'Wegovy inherits Ozempic recognizability. Zepbound/Mounjaro benefit from Lilly\'s diabetes franchise. Survodutide/Boehringer Ingelheim has minimal US consumer presence. No DTC history. No existing brand platform to leverage.',
        soWhat: 'This is a critical gap, not an opportunity. "No baggage" doesn\'t help when you have no presence. Building brand awareness from zero against entrenched competitors with massive DTC spending requires significant investment and time the competitive window may not allow.',
        nowWhat: 'Brand identity build is foundational—must happen first. Consider trade name strategy carefully. Build for digital/social channels where category conversation happens. Distinctive assets required before any awareness investment makes sense.'
      },
      strengths: [
        'No negative brand associations to overcome',
        'Can build digital-native identity for modern channels'
      ],
      weaknesses: [
        'Zero awareness—literally starting from nothing',
        'Challenging compound name (6 syllables, unfamiliar phonemes)',
        'No existing brand platform or DTC infrastructure',
        'Competitors have years of brand-building head start',
        'Massive investment required with uncertain time for ROI'
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
        headline: 'Real Differentiation Lives Here',
        subline: 'The molecule is genuinely different. This is the one real asset.',
        what: 'Glucagon/GLP-1 dual agonism is genuine mechanism innovation. The glucagon component adds metabolic benefits that pure GLP-1s don\'t provide. This isn\'t marketing positioning—it\'s clinical reality. The innovation exists in the science.',
        evidence: 'Phase 3 showed 44% liver fat reduction (MASH/NAFLD relevant). Cardiovascular outcome trials planned. Oral formulation in development. Pipeline positions Survodutide as platform, not single product. The clinical story is real and differentiated.',
        soWhat: 'This is the foundation everything else must be built on. The only current asset is scientific differentiation. Every brand, positioning, and communication decision should ladder to this genuine difference.',
        nowWhat: 'Protect and amplify the innovation story. Build positioning architecture around metabolic health transformation. Ensure clinical differentiation translates into market differentiation before competitors can muddy the waters.'
      },
      strengths: [
        'Genuine mechanism differentiation—not just marketing claims',
        'Platform potential beyond obesity (NASH, cardiovascular, diabetes)',
        'Strong pipeline with oral formulation development',
        'Clinical data supports broader metabolic health story'
      ],
      weaknesses: [
        'Some clinical claims still emerging—not all fully validated',
        'Competitor pipeline will erode differentiation over time',
        'Innovation story needs translation into market positioning'
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
      tier: 'Moderate',
      wsn: {
        headline: 'Racing a Closing Window',
        subline: '18-24 months before the flood. Pressure, not comfort.',
        what: 'The GLP-1 pipeline is crowded. Amgen, Pfizer, AstraZeneca, Viking, Structure—all have candidates in Phase 2/3. By 2027-2028, 10+ new entrants will fragment the market. Survodutide\'s launch window is also its positioning window, and it\'s finite.',
        evidence: 'Amgen\'s MariTide (monthly injection) in Phase 3. Pfizer\'s danuglipron (oral) advancing. Viking\'s VK2735 showing strong Phase 2 results. 20+ GLP-1 related compounds in global development.',
        soWhat: 'This is pressure, not opportunity. First-mover among next-gen entrants only matters if positioning is established before the crowd arrives. Every month of delay costs positioning permanently.',
        nowWhat: 'Move with urgency on all fronts. Parallel workstreams required—sequential execution runs out of time. Claim dual agonist and metabolic health positioning before competitors can contest it.'
      },
      strengths: [
        'Clear differentiation vs. current products with dual agonism',
        'Window exists before major competitor launches',
        'First-mover opportunity among next-gen glucagon/GLP-1 class'
      ],
      weaknesses: [
        'Window is finite—18-24 months maximum',
        'Deep-pocketed competitors (Pfizer, Amgen) in development',
        'Any launch delay costs positioning permanently',
        'Must build brand infrastructure AND establish positioning within window'
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
