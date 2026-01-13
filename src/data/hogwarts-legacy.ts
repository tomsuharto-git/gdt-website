import { GDTAnalysis } from '@/lib/types';

/**
 * Hogwarts Legacy GDT Analysis Data
 * Generated: 2026-01-13T10:24:04.151415
 * Source: JSON output files (primary), markdown (fallback)
 * Converter: gdt_converter_v3.py
 */
export const hogwartsLegacyAnalysis: GDTAnalysis = {
  brand: {
    id: 'hogwarts-legacy',
    name: 'Hogwarts Legacy',
    market: 'Global',
    category: 'AAA Video Games',
    date: '2026-01-13',
    accentColor: '#7C3AED',
    password: 'hogwarts2026'
  },
  totalScore: 63.7,
  growthProfile: {
    id: 'market-acceleration',
    name: 'Market Acceleration',
    sequence: 'Strategic Brand Platform → Community Over-service → Market Growth Roadmap',
    definition: 'Strong business fundamentals with exceptional short-term performance require strategic direction and business model evolution to sustain growth momentum and establish long-term franchise viability in rapidly changing market conditions.',
    implications: 'Hogwarts Legacy\'s $1.3 billion success proves the foundation works, but growth ceiling emerges from single-player limitations (A3: 6.8) and post-completion engagement gaps (B3 loyalty: 4.6). The brand needs hybrid positioning combining story-driven excellence with ongoing social features to capture sustained value from its proven market appeal.',
    shortDefinition: 'Strong fundamentals need business model evolution to sustain momentum'
  },
  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 22.1,
      tier: 'Integrated',
      components: [
        {
          id: 'a1',
          name: 'Brand Positioning',
          score: 6.3,
          tier: 'Distinctive',
          section: 'A'
        },
        {
          id: 'a2',
          name: 'Pricing Power',
          score: 7.9,
          tier: 'Premium-Command',
          section: 'A'
        },
        {
          id: 'a3',
          name: 'Business Growth',
          score: 6.8,
          tier: 'Above-Category',
          section: 'A'
        }
      ]
    },
    {
      id: 'B',
      name: 'Customer Connection',
      score: 20.2,
      tier: 'Engaging',
      components: [
        {
          id: 'b1',
          name: 'Emotional Connection',
          score: 6.8,
          tier: 'Meaningful',
          section: 'B'
        },
        {
          id: 'b2',
          name: 'Cultural Relevance',
          score: 6.9,
          tier: 'Influential',
          section: 'B'
        },
        {
          id: 'b3',
          name: 'Brand Experience',
          score: 7.8,
          tier: 'Enhanced',
          section: 'B'
        }
      ]
    },
    {
      id: 'C',
      name: 'Degree of Transformation',
      score: 21.4,
      tier: 'Evolving',
      components: [
        {
          id: 'c1',
          name: 'Brand Distinctiveness',
          score: 6.5,
          tier: 'Distinctive',
          section: 'C'
        },
        {
          id: 'c2',
          name: 'Brand Innovation',
          score: 7.1,
          tier: 'Progressive',
          section: 'C'
        },
        {
          id: 'c3',
          name: 'Disruption Urgency',
          score: 7.8,
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
      score: 0,
      tier: '',
      wsn: {
        headline: '',
        subline: '',
        what: '',
        evidence: 'Score: 73%',
        soWhat: '',
        nowWhat: ''
      },
      strengths: ['{\'description\': \'Unmatched IP emotional connection drives purchase intent across demographics\', \'priority\': \'high\'}', '{\'description\': \'Unique magical gameplay mechanics differentiate from combat-focused AAA competitors\', \'priority\': \'high\'}', '{\'description\': \'Cross-generational appeal bridges casual and dedicated gaming audiences\', \'priority\': \'medium\'}'],
      weaknesses: ['{\'description\': \'Heavy IP dependence creates vulnerability if Potter cultural relevance wanes\', \'priority\': \'high\'}', '{\'description\': \'Limited replayability compared to multiplayer-focused competitors reduces long-term engagement\', \'priority\': \'high\'}', '{\'description\': \'Open-world structure follows predictable conventions, limiting gameplay innovation\', \'priority\': \'medium\'}']
    },
    {
      id: 'a2',
      name: 'Pricing Power',
      section: 'A',
      score: 0,
      tier: '',
      wsn: {
        headline: '',
        subline: '',
        what: '',
        evidence: '',
        soWhat: '',
        nowWhat: ''
      }
    },
    {
      id: 'a3',
      name: 'Business Growth',
      section: 'A',
      score: 0,
      tier: '',
      wsn: {
        headline: '',
        subline: '',
        what: '',
        evidence: '',
        soWhat: '',
        nowWhat: 'While proving single-player viability, the game needs franchise evolution—multiplayer elements, expanded content pipeline, or platform transformation—to sustain growth momentum.'
      }
    },
    {
      id: 'b1',
      name: 'Emotional Connection',
      section: 'B',
      score: 6.8,
      tier: '',
      wsn: {
        headline: 'Hogwarts Legacy generates deep nostalgia-driven affection but lacks sustained emotional momentum.',
        subline: 'Consumers form intense initial bonds through childhood Harry Potter memories, yet these connections weaken as gameplay novelty fades.',
        what: 'The brand operates more as a beloved artifact than a living relationship.',
        evidence: '',
        soWhat: 'Hogwarts Legacy creates deeper initial emotional impact than typical AAA games but fails to match the sustained engagement of service-based competitors. While Call of Duty builds habitual connection and Elden Ring creates mastery-driven bonds, Hogwarts Legacy delivers a beautiful but finite emotional journey.',
        nowWhat: 'Transform finite storytelling into ongoing relationship through seasonal content updates, expanded social features, and community-driven experiences. Leverage nostalgic foundation to build habitual engagement patterns that match emotional affection levels.'
      },
      strengths: ['Nostalgic Brand Heritage (high impact)', 'Immersive World Design (high impact)', 'Achievement Satisfaction (medium impact)'],
      weaknesses: ['Post-Campaign Engagement (high priority)', 'Community Building (high priority)', 'Ongoing Content Pipeline (medium priority)'],
      competitiveContext: 'Hogwarts Legacy creates deeper initial emotional impact than typical AAA games but fails to match the sustained engagement of service-based competitors. While Call of Duty builds habitual connection and Elden Ring creates mastery-driven bonds, Hogwarts Legacy delivers a beautiful but finite emotional journey.',
      scoreBreakdown: {
        iatScore: 7.2,
        affinityScore: 8.1,
        loyaltyScore: 5.8,
        socialListeningScore: 6.4,
        qualitativeScore: 7.3,
        researchValidationScore: 6.8
      }
    },
    {
      id: 'b2',
      name: 'Cultural Relevance',
      section: 'B',
      score: 0,
      tier: '',
      wsn: {
        headline: '',
        subline: '',
        what: '',
        evidence: '',
        soWhat: '',
        nowWhat: ''
      }
    },
    {
      id: 'b3',
      name: 'Brand Experience',
      section: 'B',
      score: 0,
      tier: '',
      wsn: {
        headline: '',
        subline: '',
        what: '',
        evidence: '',
        soWhat: '',
        nowWhat: ''
      }
    },
    {
      id: 'c1',
      name: 'Brand Distinctiveness',
      section: 'C',
      score: 0,
      tier: '',
      wsn: {
        headline: '',
        subline: '',
        what: '',
        evidence: 'Score: scores 6.6',
        soWhat: '',
        nowWhat: ''
      }
    },
    {
      id: 'c2',
      name: 'Brand Innovation',
      section: 'C',
      score: 0,
      tier: '',
      wsn: {
        headline: '',
        subline: '',
        what: '',
        evidence: '',
        soWhat: '',
        nowWhat: ''
      }
    },
    {
      id: 'c3',
      name: 'Disruption Urgency',
      section: 'C',
      score: 0,
      tier: '',
      wsn: {
        headline: '',
        subline: '',
        what: '',
        evidence: '',
        soWhat: '',
        nowWhat: ''
      }
    }
  ],
  growthBarrier: {
    headline: 'The Nostalgia Trap: Great Memories Don\'t Pay Forever',
    description: 'Hogwarts Legacy created a magical moment but lacks the ongoing content and community features needed to transform nostalgic affection into sustained business growth.',
    items: [
      {
        constraint: 'Post-completion engagement collapse drives player abandonment without live-service elements',
        component: 'B3',
        score: 7.8,
        evidence: 'Loyalty stage performance crashes to 4.6 after 40-60 hours'
      },
      {
        constraint: 'Single-purchase model limits recurring revenue against subscription competitors',
        component: 'A3',
        score: 6.8,
        evidence: 'No recurring streams vs Call of Duty\'s $3B annual revenue'
      },
      {
        constraint: 'Genre identity crisis prevents franchise independence from Potter IP',
        component: 'C1',
        score: 6.5,
        evidence: 'Generic \'Legacy\' naming provides no gaming-specific differentiation'
      }
    ]
  },
  growthSolution: {
    headline: 'From One-Time Magic To Ongoing Wizarding World',
    description: 'Transform the finite Potter experience into a persistent magical platform where nostalgic connection becomes ongoing community engagement through live content and social features.',
    actions: ['Hybrid Service Model: Combine premium story campaigns with ongoing seasonal content and social features to bridge single-player excellence with live-service sustainability.', 'Community Magical Hub: Develop persistent Hogwarts social spaces where players build ongoing relationships through guild systems, seasonal events, and collaborative magical challenges.', 'Franchise Identity System: Establish game-specific assets and characters that build independent recognition while leveraging Potter foundation for expanded universe potential.']
  },
  growthSystem: {
    headline: 'Build The Platform Before The Magic Fades',
    description: 'Transform single-player excellence into persistent magical platform through hybrid content model, community features, and franchise identity development that sustains engagement beyond nostalgic peaks.',
    phases: [
      {
        phase: 'Position',
        description: 'Establish hybrid positioning bridging story and service',
        outputs: [
          {
            name: 'Strategic Brand Platform',
            score: 8.2,
            purpose: 'Redefine positioning from finite Potter experience to ongoing magical platform combining premium storytelling with live service engagement',
            componentsAddressed: ['A1R'],
            deliverables: ['Hybrid positioning architecture', 'Service model definition', 'Potter-to-platform evolution roadmap']
          }
        ]
      },
      {
        phase: 'Expand',
        description: 'Scale proven success through market expansion',
        outputs: [
          {
            name: 'Market Growth Roadmap',
            score: 7.8,
            purpose: 'Capitalize on proven Potter appeal through geographic expansion and platform diversification before momentum dissipates',
            componentsAddressed: ['A3R', 'C3R'],
            deliverables: ['Platform expansion strategy', 'Mobile integration plan', 'Regional rollout priorities']
          }
        ]
      },
      {
        phase: 'Connect',
        description: 'Build sustainable community engagement',
        outputs: [
          {
            name: 'Community Over-service',
            score: 7.4,
            purpose: 'Transform nostalgic affection into ongoing community engagement through persistent social features and collaborative content',
            componentsAddressed: ['B1R', 'B2R'],
            deliverables: ['Guild system architecture', 'Seasonal event framework', 'Social progression mechanics']
          },
          {
            name: 'Brand Communications',
            score: 6.9,
            purpose: 'Maintain cultural relevance beyond launch hype through ongoing narrative that bridges Potter nostalgia with gaming community',
            componentsAddressed: ['A1R', 'B1R', 'B2R'],
            deliverables: ['Community communication strategy', 'Cultural moment activation', 'Ongoing narrative framework']
          }
        ]
      }
    ],
    criticalPath: 'Strategic Brand Platform → Community Over-service → Market Growth Roadmap',
    implementationNotes: 'Phase 1 repositioning unlocks Phase 2 expansion - hybrid positioning makes platform scaling credible to stakeholders and sustainable for players. Community development parallels expansion to ensure new audiences find engaged ecosystems rather than empty servers. Critical timing: implement within 6 months before next major Potter property launch creates competitive pressure. Resource focus: technical infrastructure for live services requires significant backend investment, but proven revenue model ($1.3B) justifies platform evolution costs. Success metrics: monthly active user retention over 50% and recurring revenue capturing 25% of player base within 12 months.'
  }
};
