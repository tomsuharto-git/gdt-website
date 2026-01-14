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
  growthSummary: {
    headline: 'The Billion-Dollar Memory That Needs to Become a Living World',
    summary: 'Hogwarts Legacy delivered $1.3 billion in its first year—proof that 25 years of Harry Potter nostalgia translates into massive purchase intent. The game nailed the core fantasy: wand combat, spell-casting, Hogwarts exploration. But after 40-60 hours, players finish and leave. The brand created a beautiful moment, not an ongoing relationship.',
    paradox: 'Hogwarts Legacy proved players will pay premium prices for authentic wizarding world experiences, yet the single-player model means revenue stops when the story ends. Competitors like Fortnite and Call of Duty generate billions annually from ongoing engagement. The magic fades because there\'s no reason to return.',
    path: 'Transform from finite Potter experience to persistent magical platform. Combine premium story campaigns with live service elements—seasonal content, social features, community challenges. The nostalgia foundation is proven; now build the engagement systems that turn one-time buyers into ongoing participants.',
    sequence: 'Position → Connect → Expand',
    image: 'hogwarts-legacy-growth-summary.png'
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
      score: 6.3,
      tier: 'Distinctive',
      categoryAverage: 5.5,
      competitorScores: [
        { name: 'Call of Duty', score: 3.0 },
        { name: 'Grand Theft Auto V', score: 6.8 },
        { name: 'Elden Ring', score: 7.0 }
      ],
      wsn: {
        headline: 'Strong emotional connection through Harry Potter IP, but gameplay differentiation lags behind category leaders.',
        subline: 'The brand leverages unmatched nostalgia while following conventional open-world mechanics.',
        what: 'Exceptional meaningful connection driven by Harry Potter emotional resonance, but differentiation suffers from conventional open-world execution.',
        evidence: '73% of respondents cite emotional connection as primary appeal; meaningful score 8.2 vs differentiation score 6.4',
        soWhat: 'Success depends heavily on Potter cultural currency rather than standalone gaming merit, creating both opportunity and vulnerability.',
        nowWhat: 'Develop standalone gaming differentiation through innovative mechanics while continuing to leverage the powerful IP emotional connection.'
      },
      strengths: [
        'Unmatched IP emotional connection drives purchase intent across demographics',
        'Unique magical gameplay mechanics differentiate from combat-focused AAA competitors',
        'Cross-generational appeal bridges casual and dedicated gaming audiences'
      ],
      weaknesses: [
        'Heavy IP dependence creates vulnerability if Potter cultural relevance wanes',
        'Limited replayability compared to multiplayer-focused competitors reduces long-term engagement',
        'Open-world structure follows predictable conventions, limiting gameplay innovation'
      ],
      scoreBreakdown: {
        meaningfulScore: 8.2,
        differentScore: 6.4,
        mdiScore: 5.2
      }
    },
    {
      id: 'a2',
      name: 'Pricing Power',
      section: 'A',
      score: 7.9,
      tier: 'Premium-Command',
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Call of Duty', score: 8.5 },
        { name: 'Grand Theft Auto V', score: 9.2 },
        { name: 'Elden Ring', score: 7.8 }
      ],
      wsn: {
        headline: 'Commanding launch pricing through exceptional IP leverage, but faces standard industry depreciation.',
        subline: 'Harry Potter brand equity enabled full $70 premium with sustained sales, yet long-term pricing follows typical patterns.',
        what: 'Strong short-term pricing power anchored by IP strength, with consumers showing high willingness to pay for authentic magical experiences.',
        evidence: 'Optimal price point of $65, with consumers accepting prices up to $80; maintained $70 pricing for months post-launch',
        soWhat: 'Performs above category average but below franchise juggernauts like GTA V—strong but not revolutionary pricing command.',
        nowWhat: 'Develop premium content tiers and ongoing value propositions to sustain pricing power beyond the initial launch window.'
      },
      strengths: [
        'Commands full $70 AAA price point with sustained sales',
        'High willingness to pay premium prices for authentic magical experiences',
        'Van Westendorp optimal price $65 with acceptable range $45-$80'
      ],
      weaknesses: [
        'Typical video game depreciation curves reduce long-term premium sustainability',
        'Gradual price reduction over time follows standard industry patterns',
        'New AAA competitive pressure limits premium positioning beyond initial enthusiasm'
      ],
      scoreBreakdown: {
        pricePremiumScore: 8.2,
        elasticityScore: 7.4,
        valuePerceptionScore: 8.1
      }
    },
    {
      id: 'a3',
      name: 'Business Growth',
      section: 'A',
      score: 6.8,
      tier: 'Above-Category',
      categoryAverage: 5.5,
      competitorScores: [
        { name: 'Call of Duty', score: 8.4 },
        { name: 'Grand Theft Auto V', score: 9.1 },
        { name: 'Elden Ring', score: 7.8 }
      ],
      wsn: {
        headline: 'Record-breaking launch success masks concerning sustainability challenges.',
        subline: 'Over 22 million copies and $1.3 billion revenue, but growth momentum shows dramatic deceleration after month three.',
        what: 'Explosive initial sales with sharp post-launch decline and no recurring revenue streams to sustain long-term growth.',
        evidence: '22 million copies sold, $1.3B revenue in first year—but sales dropped dramatically after month three with no DLC or live-service revenue',
        soWhat: 'Strong IP foundation but insufficient business model innovation for sustained competitive advantage against live-service competitors.',
        nowWhat: 'Evolve from single-purchase to hybrid model with multiplayer elements, expanded content pipeline, or platform transformation to sustain growth momentum.'
      },
      strengths: [
        '22 million copies sold in first year becoming Warner Bros biggest launch ever',
        '$1.3 billion revenue globally outpacing established franchises',
        'Proves massive appetite for quality single-player experiences'
      ],
      weaknesses: [
        'Sharp post-launch sales decline after month three typical for single-player but problematic for franchise building',
        'No multiplayer, limited DLC, minimal live-service elements',
        'Player retention drops sharply post-completion limiting long-term engagement'
      ],
      scoreBreakdown: {
        growthPerformance: 7.2,
        strategyExecution: 6.4,
        competitivePosition: 6.8
      }
    },
    {
      id: 'b1',
      name: 'Emotional Connection',
      section: 'B',
      score: 6.8,
      tier: 'Meaningful',
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Call of Duty', score: 7.4 },
        { name: 'Grand Theft Auto V', score: 7.8 },
        { name: 'Elden Ring', score: 8.2 }
      ],
      wsn: {
        headline: 'Hogwarts Legacy generates deep nostalgia-driven affection but lacks sustained emotional momentum.',
        subline: 'Consumers form intense initial bonds through childhood Harry Potter memories, yet these connections weaken as gameplay novelty fades.',
        what: 'The brand operates more as a beloved artifact than a living relationship.',
        evidence: 'High affinity scores (8.1) but loyalty collapses to 5.8 post-completion; joy (8.3) and trust (7.8) strong initially',
        soWhat: 'Hogwarts Legacy creates deeper initial emotional impact than typical AAA games but fails to match the sustained engagement of service-based competitors. While Call of Duty builds habitual connection and Elden Ring creates mastery-driven bonds, Hogwarts Legacy delivers a beautiful but finite emotional journey.',
        nowWhat: 'Transform finite storytelling into ongoing relationship through seasonal content updates, expanded social features, and community-driven experiences. Leverage nostalgic foundation to build habitual engagement patterns that match emotional affection levels.'
      },
      strengths: [
        'Generates deep nostalgic affection through childhood Harry Potter memories',
        'High affinity scores (8.1) reflect genuine love for universe and world-building',
        'Strong joy (8.3) and trust (7.8) dimensions indicate successful emotional onboarding'
      ],
      weaknesses: [
        'Connections weaken as gameplay novelty fades becoming beloved artifact rather than living relationship',
        'Loyalty scores collapse to 5.8 revealing core weakness after completion',
        'Players describe feeling "complete" rather than wanting more limiting long-term engagement'
      ],
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
      score: 6.9,
      tier: 'Influential',
      categoryAverage: 5.2,
      competitorScores: [
        { name: 'Call of Duty', score: 5.8 },
        { name: 'Grand Theft Auto V', score: 7.4 },
        { name: 'Elden Ring', score: 7.9 }
      ],
      wsn: {
        headline: 'Unprecedented mainstream cultural crossover, but declining relevance after launch hype.',
        subline: 'Achieved rare cultural penetration beyond gaming audiences, yet lacks sustained engagement mechanisms.',
        what: 'Gaming phenomenon that transcended its medium to become a cultural touchstone, shadowed by creator controversies and declining post-launch conversation.',
        evidence: '12+ million launch copies, weeks of Twitch dominance, mainstream media coverage; timing score 8.2 reflecting perfect nostalgia alignment',
        soWhat: 'Superior cultural penetration compared to traditional AAA games, but impact was event-driven rather than sustained.',
        nowWhat: 'Build sustained cultural engagement through regular content drops and community building while strategically navigating IP controversies.'
      },
      strengths: [
        'Achieved rare mainstream cultural penetration breaking beyond gaming audiences into traditional media',
        'Masterful timing capturing peak millennial Harry Potter nostalgia perfectly',
        'Weeks of Twitch dominance and TikTok character creator virality driving cross-platform engagement'
      ],
      weaknesses: [
        'Cultural baggage from J.K. Rowling controversies affecting progressive gaming communities',
        'Limited cultural innovation beyond leveraging existing IP nostalgia',
        'Declining cultural conversation after initial launch hype cycle as novelty wore off'
      ],
      scoreBreakdown: {
        presence: 8.4,
        impact: 7.2,
        authenticity: 6.1,
        timing: 8.2,
        resonance: 5.6
      }
    },
    {
      id: 'b3',
      name: 'Brand Experience',
      section: 'B',
      score: 7.8,
      tier: 'Enhanced',
      categoryAverage: 6.8,
      competitorScores: [
        { name: 'Call of Duty', score: 8.4 },
        { name: 'Grand Theft Auto V', score: 8.1 },
        { name: 'Elden Ring', score: 7.6 }
      ],
      wsn: {
        headline: 'Exceptional single-player excellence with catastrophic loyalty stage collapse.',
        subline: 'World-class gameplay execution through immersive spell-casting and exploration, undermined by post-completion engagement failure.',
        what: 'Masterful core gameplay with intuitive spell-casting and immersive world exploration, but minimal meaningful content after completing the main story.',
        evidence: 'Usage stage scores 9.3/10, but loyalty stage crashes to 4.6/10 after 40-60 hours of play',
        soWhat: 'Excellence in core gameplay cannot compensate for loyalty-stage deficiencies in modern gaming where competitors maintain 7.5+ through continuous updates.',
        nowWhat: 'Launch immediate post-game content roadmap including seasonal events, house competitions, and cooperative multiplayer modes to address loyalty collapse.'
      },
      strengths: [
        'Intuitive spell-casting system with seamless wand controls',
        'Immersive Hogwarts exploration with hidden secrets and detailed environments',
        'Clear progression systems and achievement tracking'
      ],
      weaknesses: [
        'No post-launch content or seasonal updates to maintain engagement past campaign completion',
        'Complex purchasing options with confusing deluxe edition tiers',
        'Limited multiplayer integration despite significant fan demand'
      ],
      scoreBreakdown: {
        communication: 7.4,
        engagement: 8.2,
        purchase: 6.8,
        usage: 9.3,
        loyalty: 4.6
      }
    },
    {
      id: 'c1',
      name: 'Distinctive Assets',
      section: 'C',
      score: 6.5,
      tier: 'Distinctive',
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'Call of Duty', score: 7.2 },
        { name: 'Grand Theft Auto V', score: 8.1 },
        { name: 'Elden Ring', score: 6.9 }
      ],
      wsn: {
        headline: 'Universal Harry Potter recognition masks weak game-specific identity.',
        subline: 'Instant fame through borrowed IP assets, but generic naming and lack of unique gaming signatures limit franchise potential.',
        what: 'Strong foundational recognition through Hogwarts castle and magical creatures, but the brand lacks unique gaming assets that differentiate from other Potter properties.',
        evidence: 'Fame score 8.1/10 through IP recognition, but uniqueness only 6.2/10 due to reliance on borrowed assets; generic "Legacy" naming provides no differentiation',
        soWhat: 'The brand rents distinctiveness from external IP rather than building independent gaming franchise assets.',
        nowWhat: 'Develop game-specific distinctive assets—unique characters, visual signatures, and experiential innovations—that complement rather than depend on Harry Potter.'
      },
      strengths: [
        'Instant brand recognition through Harry Potter IP delivers unmatched awareness',
        'Hogwarts castle and magical creatures provide iconic visual anchors',
        'Cross-generational nostalgia creates emotional entry point advantage'
      ],
      weaknesses: [
        'Generic "Legacy" naming provides no game-specific differentiation',
        'Reliance on borrowed IP assets limits independent franchise identity',
        'No unique gaming signatures or characters to build owned distinctiveness'
      ],
      scoreBreakdown: {
        uniqueness: 6.2,
        fame: 8.1,
        attribution: 5.8,
        entryPoint: 6.0
      }
    },
    {
      id: 'c2',
      name: 'Brand Innovation',
      section: 'C',
      score: 7.1,
      tier: 'Progressive',
      categoryAverage: 6.8,
      competitorScores: [
        { name: 'Call of Duty', score: 7.4 },
        { name: 'Grand Theft Auto V', score: 8.1 },
        { name: 'Elden Ring', score: 8.6 }
      ],
      wsn: {
        headline: 'Exceptional technical innovation within conservative business model constraints.',
        subline: 'Breakthrough world-building and immersive magic systems, limited by traditional single-purchase approach.',
        what: 'Outstanding technical execution with unprecedented Hogwarts recreation and seamless magic systems, but minimal post-launch innovation or live service evolution.',
        evidence: '30 million copies through innovative magic systems; track record score 7.2 but business model innovation only 4.8',
        soWhat: 'Strong technical innovator within traditional AAA framework, but lags behind service-model innovators like Fortnite and category-defining experiences like Elden Ring.',
        nowWhat: 'Transform technical excellence into business model innovation through live service experimentation and ongoing content development.'
      },
      strengths: [
        'Unprecedented Hogwarts recreation demonstrates AAA world-building excellence',
        'Seamless spell-casting mechanics create gameplay innovation',
        'Technical execution proves capability for ambitious projects'
      ],
      weaknesses: [
        'Single-purchase business model limits recurring revenue innovation',
        'No post-launch content updates despite live service industry standard',
        'Conservative approach to monetization leaves growth opportunities unexplored'
      ],
      scoreBreakdown: {
        trackRecord: 7.2,
        capability: 8.4,
        businessModel: 4.8
      }
    },
    {
      id: 'c3',
      name: 'Market Disruption',
      section: 'C',
      score: 7.8,
      tier: 'Transforming',
      categoryAverage: 7.2,
      competitorScores: [
        { name: 'Call of Duty', score: 6.8 },
        { name: 'Grand Theft Auto V', score: 8.5 },
        { name: 'Elden Ring', score: 7.2 }
      ],
      wsn: {
        headline: 'AAA gaming faces radical transformation requiring urgent adaptation.',
        subline: 'Cloud gaming, mobile dominance, and live service expectations fundamentally reshape competitive landscape.',
        what: 'Traditional $70 single-player experiences compete against infinite free-to-play content, subscription libraries, and persistent virtual worlds.',
        evidence: 'Subscription services like Game Pass challenge purchase models; mobile gaming revenue exceeds console and PC combined; Gen Z expects continuous content updates',
        soWhat: 'Single-player success proves narrative demand exists, but future growth requires hybrid models combining story-driven content with social features.',
        nowWhat: 'Integrate live service elements, develop cross-platform accessibility, and establish content pipeline within 3-6 months before competitive gap widens.'
      },
      strengths: [
        'Premium single-player model validated with $1.3B first-year revenue',
        'Harry Potter IP creates defensive moat against category disruption',
        'Narrative demand proves enduring appetite for story-driven experiences'
      ],
      weaknesses: [
        'Traditional $70 model vulnerable to subscription and F2P competition',
        'No live service infrastructure to adapt to evolving player expectations',
        'Gen Z preference for continuous updates threatens relevance without adaptation'
      ],
      scoreBreakdown: {
        categoryDisruption: 8.2,
        competitiveThreat: 7.6,
        consumerBehavior: 7.4
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
            deliverables: ['Brand platform strategy', 'Service model definition', 'Platform evolution roadmap']
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
            name: 'Community Engagement Platform',
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
            deliverables: ['Community communication strategy', 'Cultural moment calendar', 'Content narrative plan']
          }
        ]
      }
    ],
    criticalPath: 'Strategic Brand Platform → Community Engagement Platform → Market Growth Roadmap',
    implementationNotes: 'Phase 1 repositioning unlocks Phase 2 expansion - hybrid positioning makes platform scaling credible to stakeholders and sustainable for players. Community development parallels expansion to ensure new audiences find engaged ecosystems rather than empty servers. Critical timing: implement within 6 months before next major Potter property launch creates competitive pressure. Resource focus: technical infrastructure for live services requires significant backend investment, but proven revenue model ($1.3B) justifies platform evolution costs. Success metrics: monthly active user retention over 50% and recurring revenue capturing 25% of player base within 12 months.'
  }
};
