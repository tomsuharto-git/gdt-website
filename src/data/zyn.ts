import { GDTAnalysis } from '@/lib/types';

/**
 * ZYN Nicotine Pouches GDT Analysis
 * Source: outputs/zyn-usa-2025-12-30/
 */
export const zynAnalysis: GDTAnalysis = {
  brand: {
    id: 'zyn',
    name: 'ZYN',
    market: 'USA',
    category: 'Nicotine Pouches',
    date: '2025-12-30',
    accentColor: '#7C3AED', // ZYN Purple
    password: 'zyn2026'
  },
  totalScore: 67.1,
  growthSummary: {
    headline: 'The Capacity-Credibility Paradox',
    sequence: 'Stabilize → Differentiate → Defend',
    strategicNarrative: 'Zyn must execute a three-horizon transformation: immediately resolve supply constraints while protecting cultural equity, transition positioning from "tobacco-free" to "FDA-authorized" differentiation, and build genuine product innovation before competitors close the gap.',
    keyInsight: 'Zyn has achieved the rare feat of creating an entirely new consumer category while building extraordinary cultural momentum - but this very success has created vulnerabilities. The brand\'s 74%+ market share and "Zynfluencer" phenomenon represent category-defining success, yet the supply shortage of 2024 exposed operational fragility.',
    strategicImperative: 'The brand that created an industry must now learn to protect it. Transition from category creator to category defender.',
    timelineContext: 'Multi-phase transformation: Stabilize (0-6 months), Differentiate (6-18 months), Defend (18-36 months).'
  },
  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      totalScore: 22.1,
      descriptor: 'Strong',
      headline: 'Category Pioneer with Positioning Gap',
      summary: 'Exceptional business growth (8.2) and pricing power (7.7) offset by undifferentiated positioning (6.2). The category creator advantage is real but "tobacco-free" messaging is copied by all competitors.'
    },
    {
      id: 'B',
      name: 'Customer Connection',
      totalScore: 21.8,
      descriptor: 'Strong',
      headline: 'Cultural Phenomenon with Execution Gap',
      summary: 'Unprecedented cultural relevance (8.3) and genuine emotional connection (7.3) undermined by catastrophic experience failures (6.2) during supply shortages. Product quality is exceptional; availability is not.'
    },
    {
      id: 'C',
      name: 'Competitive Advantage',
      totalScore: 23.2,
      descriptor: 'Strong',
      headline: 'Innovation Leader Under Attack',
      summary: 'Category-defining distinctive assets (7.8) and innovation leadership (8.2) face high disruption pressure (7.2) from tobacco giants and venture-backed startups coordinating multi-front attacks.'
    }
  ],
  components: [
    {
      code: 'A1',
      name: 'Brand Positioning',
      rating: 6.2,
      descriptor: 'Average',
      headline: 'Category Pioneer with Copyable Message',
      summaryBullets: [
        '"Tobacco-free" messaging is used by all competitors - 96.8% of ads make this claim, offering zero differentiation.',
        'Youth perception problem creates positioning vulnerability: usage doubled from 200k to 400k between 2021-2023.',
        'PMI ownership creates credibility tension that undermines "healthier alternative" positioning narrative.'
      ]
    },
    {
      code: 'A2',
      name: 'Pricing Power',
      rating: 7.7,
      descriptor: 'Strong',
      headline: 'Premium Margins with Format Disadvantage',
      summaryBullets: [
        '66.6% gross margins and successful 50-cent price increase during shortage demonstrate genuine pricing power.',
        '15-pouch format vs competitors\' 20-pouch creates visible per-unit price disadvantage at shelf level.',
        'Customers pay premium during shortage - price elasticity proven, but format rationalization needed.'
      ]
    },
    {
      code: 'A3',
      name: 'Business Growth',
      rating: 8.2,
      descriptor: 'Strong',
      headline: 'Explosive Growth Meets Capacity Ceiling',
      summaryBullets: [
        '45x volume growth in 6 years, $2B+ annual revenue, 74%+ market share - category-defining performance.',
        '2024 nationwide shortage exposed single-facility vulnerability in Kentucky; Colorado facility not operational until 2026.',
        'Lost customers may not return - On! gained +77% during shortage, demonstrating switching risk.'
      ]
    },
    {
      code: 'B1',
      name: 'Emotional Connection',
      rating: 7.3,
      descriptor: 'Strong',
      headline: 'Organic Brand Love with Demographic Limits',
      summaryBullets: [
        'Organic "Zynfluencer" movement created genuine emotional resonance without marketing investment.',
        'Heavy skew toward young male demographic limits emotional breadth across consumer segments.',
        'Company cannot shape cultural meaning while officially disclaiming influencer relationships.'
      ]
    },
    {
      code: 'B2',
      name: 'Cultural Relevance',
      rating: 8.3,
      descriptor: 'Exceptional',
      headline: 'TikTok Phenomenon Meets Political Flashpoint',
      summaryBullets: [
        '715M+ TikTok views, user-created vocabulary, and "Zynfluencer" phenomenon - unprecedented for nicotine product.',
        'Cultural success attracts regulatory scrutiny: Schumer investigation, 119 FDA warning letters, suspended online sales.',
        'Tucker Carlson launched competing ALP brand after disagreement - cultural influence creates competitive threats.'
      ]
    },
    {
      code: 'B3',
      name: 'Experience Excellence',
      rating: 6.2,
      descriptor: 'Average',
      headline: 'Exceptional Product, Catastrophic Availability',
      summaryBullets: [
        'Product usage experience scores 8.5 - exceptional quality that drives genuine consumer preference.',
        'Purchase accessibility collapsed to 4.0 during 2024 shortage - customers physically could not buy the product.',
        'Single-facility supply chain creates ongoing vulnerability that undermines brand promise.'
      ]
    },
    {
      code: 'C1',
      name: 'Distinctive Assets',
      rating: 7.8,
      descriptor: 'Strong',
      headline: 'Category-Defining Purple Without Legal Protection',
      summaryBullets: [
        'Purple color scheme is category-defining with high fame and instant recognition in retail environments.',
        'No trademark protection for purple identity - competitors can adopt similar visual language without legal recourse.',
        'Lacking ownable verbal assets beyond category creation; "tobacco-free" is copied by all competitors.'
      ]
    },
    {
      code: 'C2',
      name: 'Brand Innovation',
      rating: 8.2,
      descriptor: 'Exceptional',
      headline: 'Category Creator with Stagnating Product Line',
      summaryBullets: [
        'Category creation represents exceptional innovation - Zyn invented the US nicotine pouch market.',
        'Product-level innovation has stagnated: still only 10 flavors and 2 strength levels vs On! 8 strengths.',
        'Competitors advancing faster: Velo Plus synthetic nicotine, Rogue multiple formats, On! strength variety.'
      ]
    },
    {
      code: 'C3',
      name: 'Market Disruption',
      rating: 7.2,
      descriptor: 'Strong',
      headline: 'Multi-Vector Siege from All Directions',
      summaryBullets: [
        'Tobacco giants (Altria On!, BAT Velo) bring $500M+ annual investment and distribution muscle.',
        'State flavor bans in California, Massachusetts, DC threaten 30-40% of revenue with fragmentation risk.',
        'Venture-backed startups including brand founded by Zyn\'s own inventor attacking from innovation angle.'
      ]
    }
  ],
  growthBarrier: {
    headline: 'The Capacity-Credibility Paradox',
    problemStatement: 'Zyn faces a fundamental tension: its explosive demand growth has outpaced manufacturing capacity, while its organic cultural success has attracted regulatory scrutiny that constrains marketing response.',
    constraints: [
      {
        constraint: 'Supply Chain Fragility',
        componentCode: 'A3',
        score: 8.2,
        evidence: '2024 nationwide shortages pushed customers to On! (+77% during shortage). Colorado facility not operational until 2026. Single Kentucky facility remains vulnerability.'
      },
      {
        constraint: 'Undifferentiated Positioning',
        componentCode: 'A1',
        score: 6.2,
        evidence: '"Tobacco-free" messaging used by all competitors. 96.8% of ads claim tobacco-free despite PMI ownership creating credibility tension.'
      },
      {
        constraint: 'Regulatory and Political Exposure',
        componentCode: 'B2',
        score: 8.3,
        evidence: 'Youth usage doubled from 200k to 400k (2021-2023). Schumer investigation. 119 FDA warning letters. California flavor bans.'
      }
    ]
  },
  growthSolution: {
    headline: 'From Category Creator to Category Defender',
    solutionStatement: 'Zyn must execute a three-horizon transformation: immediately resolve supply constraints while protecting cultural equity, transition positioning from "tobacco-free" to "FDA-authorized" differentiation, and build genuine product innovation.',
    unlocks: [
      {
        name: 'Accelerate Manufacturing Capacity',
        description: 'PMI\'s $600M Colorado facility must deliver ahead of schedule. Build inventory buffer to prevent repeat stockouts that drive permanent customer switching.'
      },
      {
        name: 'FDA Authorization Advantage',
        description: 'Zyn is the first and only FDA-authorized nicotine pouch (January 2025). This 12-18 month window of genuine differentiation must replace copyable "tobacco-free" messaging.'
      },
      {
        name: 'Next-Generation Product Innovation',
        description: 'Expand beyond static 10-flavor, 2-strength lineup. Competitors offer 8 strength levels (On!), synthetic nicotine (Velo Plus), and multiple formats (Rogue).'
      },
      {
        name: 'Protect Distinctive Assets',
        description: 'Purple color scheme is category-defining but not trademark-protected. Commission legal study for color protection before competitors adopt similar visual identity.'
      }
    ]
  },
  growthSystem: {
    headline: 'Stabilize → Differentiate → Defend',
    systemDescription: 'Three-horizon transformation from category creator to category defender with immediate supply stabilization, medium-term positioning differentiation, and long-term competitive moat building.',
    phases: [
      {
        phase: 'Stabilize',
        focus: 'Resolve supply constraints, protect market share (0-6 months)',
        products: [
          {
            name: 'Manufacturing Acceleration',
            relevanceScore: 4.9,
            purpose: 'Eliminate supply vulnerability that enabled competitor gains during 2024 shortage',
            criticalComponents: ['A3', 'B3'],
            keyDeliverables: ['Accelerate Colorado facility', 'Build inventory buffer', 'Restore Zyn.com DTC sales']
          }
        ]
      },
      {
        phase: 'Differentiate',
        focus: 'Transition positioning, expand product innovation (6-18 months)',
        products: [
          {
            name: 'FDA Authorization Campaign',
            relevanceScore: 4.8,
            purpose: 'Transition from copyable "tobacco-free" to ownable "FDA-authorized" positioning',
            criticalComponents: ['A1', 'B1', 'C1'],
            keyDeliverables: ['FDA-authorization messaging', 'Additional strength levels', 'Premium extensions']
          }
        ]
      },
      {
        phase: 'Defend',
        focus: 'Build sustainable competitive moats (18-36 months)',
        products: [
          {
            name: 'Competitive Moat Infrastructure',
            relevanceScore: 4.6,
            purpose: 'Build defensible advantages before competitors close the gap',
            criticalComponents: ['C1', 'C2', 'C3'],
            keyDeliverables: ['900M+ annual capacity', 'Trademark purple identity', 'New product formats']
          }
        ]
      }
    ]
  },
  growthFactors: {
    strengths: [
      {
        factor: 'Cultural Phenomenon',
        componentCode: 'B2',
        evidence: '715M+ TikTok views, organic "Zynfluencer" movement, unprecedented cultural penetration for nicotine product'
      },
      {
        factor: 'Category Creation',
        componentCode: 'C2',
        evidence: 'Created US nicotine pouch market, 74%+ market share, $2B+ revenue, 45x growth in 6 years'
      },
      {
        factor: 'Premium Pricing Power',
        componentCode: 'A2',
        evidence: '66.6% gross margins, successful 50-cent price increase during shortage demonstrates brand strength'
      }
    ],
    opportunities: [
      {
        factor: 'FDA Authorization Window',
        componentCode: 'A1',
        evidence: 'First and only FDA-authorized nicotine pouch (January 2025) - 12-18 month differentiation opportunity'
      },
      {
        factor: 'Product Innovation Gap',
        componentCode: 'C2',
        evidence: 'Competitors advancing on strength variety (On!), synthetic nicotine (Velo), formats (Rogue) - room to lead again'
      }
    ],
    challenges: [
      {
        factor: 'Supply Chain Fragility',
        componentCode: 'A3',
        evidence: '2024 shortage drove +77% gain for On!; single Kentucky facility until Colorado opens 2026'
      },
      {
        factor: 'Regulatory Pressure',
        componentCode: 'C3',
        evidence: 'Youth usage doubled, Schumer investigation, 119 FDA warnings, state flavor bans threaten 30-40% revenue'
      },
      {
        factor: 'Competitive Siege',
        componentCode: 'C3',
        evidence: 'Altria (On!), BAT (Velo), and startup (ALP by Zyn inventor) coordinating multi-front attacks'
      }
    ]
  }
};
