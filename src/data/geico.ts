import { GDTAnalysis } from '@/lib/types';

/**
 * Geico GDT Analysis Data
 * Generated: 2026-01-17T09:07:59.767843
 * Source: JSON output files (primary), markdown (fallback)
 * Converter: gdt_converter_v3.py
 */
export const geicoAnalysis: GDTAnalysis = {
  brand: {
    id: 'geico',
    name: 'Geico',
    market: 'USA',
    category: 'Auto Insurance',
    date: '2026-01-16',
    accentColor: '#0066CC',
    password: 'geico2026'
  },
  totalScore: 58.3,
  growthSummary: {
    headline: 'Gecko Genius Meets Innovation Desert',
    summary: 'Geico built an advertising empire that dominates cultural conversation and drives industry-leading customer acquisition. The gecko is ubiquitous, the tagline unforgettable, and the growth machine runs at maximum speed.',
    paradox: 'But the marketing marvel masks an innovation crisis. While Progressive captures 30% of usage-based insurance with Snapshot and Tesla rewrites underwriting with real-time vehicle data, Geico sleeps. The 15-minute promise ends at the purchase—claims bureaucracy, purchase abandonment, and declining retention reveal a brand that can\'t deliver what it advertises.',
    path: 'Transform from advertising excellence to experience excellence. Make insurance feel as simple as the commercials promise. Build telematics capability before the 12-18 month window closes.',
    sequence: 'Connect → Create → Reinvent',
    image: 'geico-growth-summary.png'
  },
  growthProfile: {
    id: 'experience-transformation',
    name: 'Experience Transformation',
    sequence: 'Customer Journey Optimization → Experience Activations → Product Development & Prototyping',
    shortDefinition: 'Transform gecko-created awareness into seamless digital experiences.',
    definition: 'When strong positioning delivers poor experiences, requiring customer journey innovation to match brand promise with execution reality.',
    implications: 'Geico\'s gecko-powered awareness and established savings positioning create customer expectations that current digital experience and claims processing cannot fulfill, requiring fundamental experience redesign to maintain growth momentum.'
  },
  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 17.3,
      tier: 'Functional',
      components: [
        {
          id: 'a1',
          name: 'Brand Positioning',
          score: 5.4,
          tier: 'Established',
          section: 'A'
        },
        {
          id: 'a2',
          name: 'Pricing Power',
          score: 4.2,
          tier: 'Limited Premium',
          section: 'A'
        },
        {
          id: 'a3',
          name: 'Business Growth',
          score: 7.7,
          tier: 'Accelerating',
          section: 'A'
        }
      ]
    },
    {
      id: 'B',
      name: 'Customer Connection',
      score: 18.2,
      tier: 'Functional',
      components: [
        {
          id: 'b1',
          name: 'Emotional Connection',
          score: 6.1,
          tier: 'Moderate',
          section: 'B'
        },
        {
          id: 'b2',
          name: 'Cultural Relevance',
          score: 6.2,
          tier: 'Present',
          section: 'B'
        },
        {
          id: 'b3',
          name: 'Brand Experience',
          score: 5.9,
          tier: 'Reliable',
          section: 'B'
        }
      ]
    },
    {
      id: 'C',
      name: 'Degree of Transformation',
      score: 22.8,
      tier: 'Progressive',
      components: [
        {
          id: 'c1',
          name: 'Brand Distinctiveness',
          score: 8.1,
          tier: 'Highly Distinctive',
          section: 'C'
        },
        {
          id: 'c2',
          name: 'Brand Innovation',
          score: 3.5,
          tier: 'Incremental',
          section: 'C'
        },
        {
          id: 'c3',
          name: 'Disruption Urgency',
          score: 11.2,
          tier: 'Transforming',
          section: 'C'
        }
      ]
    }
  ],
  components: [
    {
      id: 'a1',
      name: 'Brand Positioning',
      section: 'A',
      score: 5.4,
      tier: 'Established',
      categoryAverage: 5.1,
      competitorScores: [
        { name: 'Progressive', score: 5.0 },
        { name: 'State Farm', score: 4.6 },
        { name: 'Allstate', score: 4.7 }
      ],
      wsn: {
        headline: 'Category Pioneer Without A Clear Map Forward',
        subline: 'Geico owns \'savings in 15 minutes\' but struggles to evolve beyond price-focused messaging as competitors match digital efficiency.',
        what: '87% of customers cite price as primary attraction, making Geico vulnerable to competitive pricing wars.',
        evidence: 'Gecko mascot creates awareness but positioning tension emerges between \'budget option\' and \'full-service provider\'.',
        soWhat: 'Digital-first differentiation weakens as Progressive matches technology while State Farm leverages agent relationships.',
        nowWhat: 'Define value proposition beyond price. Create premium tier that unlocks affluent segments without diluting core savings message.'
      },
      strengths: ['Price leadership with transparent, competitive pricing that delivers savings versus traditional insurers', 'Digital-first customer experience with industry-leading online and mobile platform', 'Distinctive brand personality through gecko mascot and humor that cuts through category noise'],
      weaknesses: ['Service perception gaps among customers seeking comprehensive support and white-glove claims', 'Commoditized positioning vulnerable to price wars as competitors match digital capabilities', 'Limited premium market penetration due to budget brand perception constraining growth']
    },
    {
      id: 'a2',
      name: 'Pricing Power',
      section: 'A',
      score: 4.2,
      tier: 'Limited Premium',
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'State Farm', score: 6.2 },
        { name: 'Allstate', score: 5.4 },
        { name: 'Progressive', score: 4.6 }
      ],
      wsn: {
        headline: 'Price Leader Trapped In Own Success',
        subline: 'Geico prices 15-20% below category average by necessity, not choice—narrow price acceptance range limits premium expansion.',
        what: 'Van Westendorp analysis reveals high price sensitivity (0.72) with 23% customer loss when rates rise above 8%.',
        evidence: 'Operational efficiency enables low pricing but creates dependency on promotional intensity rather than brand premium.',
        soWhat: 'Rising digital advertising costs (23% annually) threaten margin sustainability while pricing power remains constrained.',
        nowWhat: 'Create premium tier to break price ceiling. Build value perception through service excellence, not just savings.'
      }
    },
    {
      id: 'a3',
      name: 'Business Growth',
      section: 'A',
      score: 7.7,
      tier: 'Accelerating',
      categoryAverage: 5.6,
      competitorScores: [
        { name: 'Progressive', score: 7.9 },
        { name: 'State Farm', score: 6.2 },
        { name: 'Allstate', score: 5.8 }
      ],
      wsn: {
        headline: 'Growth Machine Running At Maximum Speed',
        subline: 'Revenue growing 8.2% annually versus 4.1% category average, but customer retention declining 4.2% signals quality concerns.',
        what: '2.1 million new customers annually through industry-best acquisition costs ($127 vs $189 average).',
        evidence: 'Digital dominance with 89% of sales online drives efficiency but retention decline suggests loyalty challenges.',
        soWhat: 'Market share gains of 2.3 points achieved through price leadership, reaching 17.8% national share.',
        nowWhat: 'Shift focus from acquisition volume to retention quality. Address experience gaps before growth stalls.'
      }
    },
    {
      id: 'b1',
      name: 'Emotional Connection',
      section: 'B',
      score: 6.1,
      tier: 'Moderate',
      categoryAverage: 6.4,
      competitorScores: [
        { name: 'State Farm', score: 7.2 },
        { name: 'Allstate', score: 6.8 },
        { name: 'Progressive', score: 5.9 }
      ],
      wsn: {
        headline: 'Humor Without Heart In Crisis Moments',
        subline: 'The gecko creates awareness and memorability, but the brand struggles to forge deeper emotional bonds around life security—the core reason people buy insurance.',
        what: 'Most customers view Geico as \'good enough\' savings, not emotional security.',
        evidence: 'IAT reveals strong joy associations (7.8) from gecko advertising but weak trust scores (5.1)—problematic for insurance.',
        soWhat: 'Geico ranks third in emotional connection behind State Farm (7.2) and Allstate (6.8) but ahead of Progressive (5.9). While Geico wins on humor and value perception, it lags significantly on trust dimensions where traditional insurers excel through agent relationships and decades of brand building around protection.',
        nowWhat: 'Transform from entertainment brand to trusted protector through claims experience excellence, security-focused messaging, and selective human touchpoints. Maintain cost advantages while building confidence through transparent processes, proactive communication, and demonstrated care during customer crises. Consider premium service tiers that provide agent relationships for customers seeking deeper security bonds.'
      },
      strengths: ['Brand recognition and memorability through advertising (high impact)', 'Value perception and cost savings messaging (high impact)', 'Digital convenience and user experience (medium impact)'],
      weaknesses: ['Trust and reliability during claims experiences (high priority)', 'Emotional security and protection messaging (high priority)', 'Personal agent relationships and human connection (medium priority)'],
      competitiveContext: 'Geico ranks third in emotional connection behind State Farm (7.2) and Allstate (6.8) but ahead of Progressive (5.9). While Geico wins on humor and value perception, it lags significantly on trust dimensions where traditional insurers excel through agent relationships and decades of brand building around protection.',
      scoreBreakdown: {
        iatScore: 6.2,
        affinityScore: 6.8,
        loyaltyScore: 5.4,
        socialListeningScore: 6.3,
        qualitativeScore: 5.8,
        researchValidationScore: 6.1
      }
    },
    {
      id: 'b2',
      name: 'Cultural Relevance',
      section: 'B',
      score: 6.2,
      tier: 'Present',
      categoryAverage: 4.2,
      competitorScores: [
        { name: 'Progressive', score: 6.8 },
        { name: 'State Farm', score: 5.1 },
        { name: 'Allstate', score: 4.7 }
      ],
      wsn: {
        headline: 'Pop Culture King Of Boring Category',
        subline: 'Geico dominates insurance conversation through entertainment excellence but faces adaptation challenges in digital-native cultural spaces.',
        what: 'Gecko mascot and memorable campaigns create cultural empire spanning generations and transcending category.',
        evidence: 'Entertainment value drives organic sharing while competitors struggle for cultural visibility.',
        soWhat: 'Limited presence in digital-first conversations as culture shifts from advertising-driven to authentic participation.',
        nowWhat: 'Expand beyond advertising into cultural participation. Build social media personality that extends gecko charm to organic content.'
      },
      strengths: ['Gecko mascot creates cultural empire spanning generations', 'Entertainment value drives organic sharing and earned media', 'Category leadership in cultural visibility and conversation'],
      weaknesses: ['Limited presence in digital-native cultural spaces', 'Advertising-driven relevance vs authentic participation', 'Younger audiences increasingly immune to traditional campaigns']
    },
    {
      id: 'b3',
      name: 'Brand Experience',
      section: 'B',
      score: 5.9,
      tier: 'Reliable',
      categoryAverage: 5.4,
      competitorScores: [
        { name: 'Progressive', score: 6.8 },
        { name: 'State Farm', score: 6.5 },
        { name: 'Allstate', score: 5.6 }
      ],
      wsn: {
        headline: 'Promise Speed, Deliver Bureaucracy',
        subline: 'Gecko-powered messaging cuts through complexity beautifully, but purchase flows feel engineer-designed and claims remain painfully bureaucratic.',
        what: '40% purchase abandonment due to confusing coverage options contradicts \'15-minute\' simplicity promise.',
        evidence: 'Claims process requires multiple calls and document resubmissions despite digital transformation investments.',
        soWhat: 'Communication excellence (7.2) contrasts sharply with purchase weakness (4.9) and loyalty gaps (5.3).',
        nowWhat: 'Fix purchase flow immediately—eliminate confusing coverage matrices. Transform claims into the experience that proves the brand promise.'
      },
      strengths: ['Clear, memorable communication that cuts through category complexity', 'Digital platform accessibility and convenience', 'Strong quote-to-purchase conversion for simple policies'],
      weaknesses: ['40% purchase abandonment on complex policies', 'Claims bureaucracy contradicts brand promise', 'Multiple handoffs destroy customer confidence']
    },
    {
      id: 'c1',
      name: 'Brand Distinctiveness',
      section: 'C',
      score: 8.1,
      tier: 'Highly Distinctive',
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'Progressive', score: 7.2 },
        { name: 'State Farm', score: 6.4 },
        { name: 'Allstate', score: 5.9 }
      ],
      wsn: {
        headline: 'Asset Arsenal Built For Different War',
        subline: 'Gecko mascot and \'15 minutes\' tagline create unmatched mental availability, but distinctive assets serve a commoditizing business model.',
        what: 'Universal gecko recognition with clear brand attribution outperforms all insurance competitor assets.',
        evidence: '15-minute savings promise directly links to shopping triggers, driving exceptional mental availability.',
        soWhat: 'Asset strength masks strategic vulnerability as distinctive creative serves increasingly undifferentiated offering.',
        nowWhat: 'Consolidate character portfolio around gecko. Use distinctive assets to differentiate experience, not just advertising.'
      },
      strengths: ['Universal gecko recognition with clear brand attribution', '15-minute promise links to purchase triggers', 'Category-leading mental availability scores'],
      weaknesses: ['Multiple characters dilute brand attribution', 'Assets serve commoditizing business model', 'Distinctive creative masks undifferentiated offering']
    },
    {
      id: 'c2',
      name: 'Brand Innovation',
      section: 'C',
      score: 3.5,
      tier: 'Incremental',
      categoryAverage: 5.2,
      competitorScores: [
        { name: 'Progressive', score: 7.2 },
        { name: 'Allstate', score: 5.5 },
        { name: 'State Farm', score: 4.8 }
      ],
      wsn: {
        headline: 'Revolutionary Past, Reactionary Present',
        subline: 'Direct-to-consumer model once revolutionized insurance, but current innovation capability lags 1.7 points below category average.',
        what: 'Minimal telematics adoption while Progressive\'s Snapshot captures 30% of usage-based insurance segment.',
        evidence: 'Conservative culture prioritizes marketing innovation over product development as category transforms.',
        soWhat: 'Limited digital experience capabilities versus Progressive and reactive response to insurtech disruption.',
        nowWhat: 'Establish dedicated innovation centers focused on telematics, mobile experience, and claims automation.'
      },
      strengths: ['Legacy of direct-to-consumer innovation', 'Marketing creativity and advertising excellence', 'Digital platform foundation to build upon'],
      weaknesses: ['Minimal telematics adoption (30% behind Progressive)', 'Conservative culture resists product innovation', 'Reactive stance to insurtech disruption']
    },
    {
      id: 'c3',
      name: 'Disruption Urgency',
      section: 'C',
      score: 11.2,
      tier: 'Transforming',
      categoryAverage: 7.2,
      competitorScores: [
        { name: 'State Farm', score: 8.1 },
        { name: 'Allstate', score: 7.9 },
        { name: 'Progressive', score: 6.8 }
      ],
      wsn: {
        headline: 'Category Earthquake While Gecko Sleeps',
        subline: 'Usage-based insurance accelerating 45% annually while autonomous vehicles compress traditional business model timeline to 6-12 months.',
        what: 'Tesla Insurance bypasses traditional underwriting with real-time vehicle data, threatening direct-to-consumer model.',
        evidence: 'Progressive\'s telematics dominance and Root\'s 90% digital acquisition challenge Geico\'s competitive advantages.',
        soWhat: 'Digital-first consumer expectations demand instant quotes and claims processing through mobile-native experiences.',
        nowWhat: 'Immediately accelerate usage-based insurance rollout. Build autonomous-ready infrastructure before category shifts.'
      },
      strengths: ['Category disruption creates opportunity for reinvention', 'Strong financial position to invest in transformation', 'Brand awareness provides runway during transition'],
      weaknesses: ['Autonomous vehicles threaten traditional model', 'Telematics competitors building insurmountable lead', '12-18 month window before disruption accelerates']
    }
  ],
  growthBarrier: {
    headline: 'Innovation Paralysis In Category Revolution',
    description: 'Geico\'s marketing genius masks dangerous innovation stagnation as telematics and autonomous vehicles reshape insurance fundamentals.',
    items: [
      {
        constraint: 'Innovation capability trails category average by 1.7 points',
        component: 'C2',
        score: 3.5,
        evidence: 'Minimal telematics while Progressive captures 30% UBI share'
      },
      {
        constraint: 'Price sensitivity prevents premium positioning evolution',
        component: 'A2',
        score: 4.2,
        evidence: '23% customer loss when rates rise above 8%'
      },
      {
        constraint: 'Claims bureaucracy contradicts efficiency brand promise',
        component: 'B3',
        score: 5.9,
        evidence: '40% purchase abandonment, multiple claims handoffs'
      }
    ]
  },
  growthSolution: {
    headline: 'From Marketing Marvel To Experience Excellence',
    description: 'Transform gecko-created awareness into seamless digital experiences that make insurance feel as simple as the commercials promise.',
    actions: ['Claims Velocity Engine: AI-powered instant claims processing that matches the 15-minute quote promise across the entire customer lifecycle', 'Purchase Flow Simplification: Mobile-first buying experience that eliminates the 40% abandonment rate through guided coverage selection', 'Telematics Innovation Platform: Usage-based pricing that leverages Geico\'s data scale to compete with Progressive\'s Snapshot dominance']
  },
  growthSystem: {
    headline: 'Gecko Genius Meets Digital Excellence',
    description: 'Transform Geico\'s distinctive marketing assets into operational advantages through experience innovation that matches brand promise with execution reality.',
    phases: [
      {
        phase: 'Connect',
        description: 'Transform awareness into seamless experiences',
        outputs: [
          {
            name: 'Customer Journey Optimization',
            score: 9.1,
            purpose: 'Eliminate 40% purchase abandonment through mobile-first buying experience',
            componentsAddressed: ['B3R'],
            deliverables: ['Mobile purchase flow redesign', 'Coverage selection simplification', 'Instant policy activation']
          },
          {
            name: 'Experience Activations',
            score: 8.7,
            purpose: 'Make claims processing feel as effortless as gecko commercials promise',
            componentsAddressed: ['B1R', 'B3R'],
            deliverables: ['AI claims processing', 'Photo estimate technology', 'Real-time settlement platform']
          }
        ]
      },
      {
        phase: 'Create',
        description: 'Build innovation capability for category transformation',
        outputs: [
          {
            name: 'Product Development & Prototyping',
            score: 8.2,
            purpose: 'Develop telematics platform to compete with Progressive\'s Snapshot dominance',
            componentsAddressed: ['C2R', 'A3R'],
            deliverables: ['Usage-based pricing engine', 'Real-time driving feedback app', 'Risk assessment algorithms']
          }
        ]
      },
      {
        phase: 'Reinvent',
        description: 'Prepare for autonomous vehicle disruption',
        outputs: [
          {
            name: 'Business Model Pivot',
            score: 7.8,
            purpose: 'Build autonomous-ready platform for liability-shift insurance model',
            componentsAddressed: ['C2R', 'C3R'],
            deliverables: ['Manufacturer liability framework', 'Vehicle-integrated policies', 'Autonomous risk modeling']
          }
        ]
      }
    ],
    criticalPath: 'Customer Journey Optimization → Experience Activations → Product Development & Prototyping',
    implementationNotes: 'Phase 1 Connect outputs address immediate experience gaps that threaten customer retention. Success here builds credibility for Phase 2 Create innovations that restore competitive positioning. Phase 3 Reinvent capabilities prepare for autonomous disruption while current model still generates cash flow. Timeline is aggressive—category transformation demands 12-18 month execution given disruption urgency. Resource allocation should prioritize mobile experience and AI claims processing as foundational investments that enable subsequent innovation phases.'
  }
};
