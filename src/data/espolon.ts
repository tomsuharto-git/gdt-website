import { GDTAnalysis } from '@/lib/types';

/**
 * Espolon Tequila GDT Analysis
 * Source: outputs/espolon-tequila-usa-2025-12-22/
 */
export const espolonAnalysis: GDTAnalysis = {
  brand: {
    id: 'espolon',
    name: 'Espolon Tequila',
    market: 'USA',
    category: 'Premium Tequila',
    date: '2025-12-22',
    accentColor: '#C8102E', // Espolon Red
    password: 'espolon2026'
  },
  totalScore: 53.6,
  growthSummary: {
    headline: 'Innovation Paralysis Meets Category Acceleration',
    sequence: 'Position → Create → Connect',
    strategicNarrative: 'Espolon transforms from innovation-averse traditionalist to culturally-grounded disruptor that leverages authentic Mexican heritage to pioneer category innovation and premium cultural relevance.',
    keyInsight: 'The brand\'s authentic Mexican heritage and quality delivery provide strong foundations, but innovation avoidance and positioning ambiguity create dangerous vulnerabilities in a rapidly transforming category.',
    strategicImperative: 'Foundation Reinforcement requires sequential capability building that establishes positioning clarity before innovation development, then leverages both for cultural breakthrough and sustainable premium growth.',
    timelineContext: '18-24 month sequential execution starting with positioning clarity before innovation development. Resource allocation should prioritize internal capability building over marketing spend initially.'
  },
  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      totalScore: 17.4,
      descriptor: 'Functional',
      headline: 'Pretty Bottle, Fuzzy Story, Modest Ambition',
      summary: 'Espolon functions competently across business fundamentals but lacks the positioning clarity and commercial momentum needed to break through in a celebrity-dominated premium tequila landscape.'
    },
    {
      id: 'B',
      name: 'Customer Connection',
      totalScore: 18.1,
      descriptor: 'Functional',
      headline: 'Party Friend, Not Status Symbol',
      summary: 'Espolon succeeds as a reliable celebration companion with authentic Mexican appeal but fails to create the aspirational depth and cultural magnetism that drives premium loyalty and pricing power.'
    },
    {
      id: 'C',
      name: 'Competitive Advantage',
      totalScore: 18.1,
      descriptor: 'Stable',
      headline: 'Sitting Still In A Speeding Category',
      summary: 'Espolon maintains stable positioning with authentic assets while the premium tequila category undergoes radical transformation, creating urgent pressure to innovate or risk displacement by more adaptive competitors.'
    }
  ],
  components: [
    {
      code: 'A1',
      name: 'Brand Positioning',
      rating: 5.4,
      descriptor: 'Average',
      headline: 'Instagram Gold Wrapped In Premium Confusion',
      summaryBullets: [
        'Aesthetic strength drives differentiation (6.6 meaningful, 6.5 different) but consumers doubt premium credentials with 52% expressing skepticism about belonging in the premium tier.',
        'Personal significance scores collapse at 5.33, indicating superficial relationships where consumers appreciate the "Instagram gold" visuals but view the brand as emotionally disposable.',
        'Premium space importance of 4.8 reveals positioning vulnerability against Patron\'s luxury authority and Casamigos\' celebrity magnetism in a polarizing category.'
      ]
    },
    {
      code: 'A2',
      name: 'Pricing Power',
      rating: 6.4,
      descriptor: 'Average',
      headline: 'Cultural Premium Meets Price Ceiling Reality',
      summaryBullets: [
        'Strong value perception (7.8) driven by cultural authenticity and design differentiation justifies $25-40 retail positioning in the premium-accessible sweet spot.',
        'High price sensitivity (8.85/10) and limited willingness to pay more (4.5/10) indicate pricing power ceiling already reached in current market position.',
        'Cultural narrative creates conversation-starting collectibility that transcends typical tequila decisions, but fragile differentiation faces pressure from competitors adopting similar strategies.'
      ]
    },
    {
      code: 'A3',
      name: 'Business Growth',
      rating: 5.6,
      descriptor: 'Average',
      headline: 'Steady Growth In A Rocket Ship Category',
      summaryBullets: [
        'Growth performance at 6.0 trails category average by 1.8 points, suggesting market share erosion in a rapidly expanding premium tequila landscape.',
        'Strategy execution scores 5.5 reflect competent but uninspired execution lacking the boldness required to capture disproportionate share of category growth.',
        'Competitive position at 5.2 indicates vulnerability to celebrity brands\' marketing firepower and craft tequilas\' authenticity claims in an increasingly crowded field.'
      ]
    },
    {
      code: 'B1',
      name: 'Emotional Connection',
      rating: 6.0,
      descriptor: 'Average',
      headline: 'Celebration Reliable, Emotionally Disposable',
      summaryBullets: [
        'Celebration association runs high with consumers trusting Espolon for gatherings, but loyalty scores collapse at 5.3 indicating functional rather than emotional relationships.',
        'Trails premium leaders significantly with Patron at 8.3 and Casamigos at 7.9 in emotional connection, positioning as accessible alternative rather than aspirational choice.',
        'Pride association deficit limits pricing power as consumers view Espolon as party-appropriate but switch to Patron or Casamigos when they want to impress someone.'
      ]
    },
    {
      code: 'B2',
      name: 'Cultural Relevance',
      rating: 5.5,
      descriptor: 'Average',
      headline: 'Bartender Darling, Mainstream Stranger',
      summaryBullets: [
        'Deep credibility within bartender community as quality-driven craft brand creates professional advocacy but limited mainstream cultural visibility compared to celebrity-backed competitors.',
        'Distinctive Day of the Dead skull artwork and unapologetic Mexican authenticity appeal to cultural purists while potentially alienating mainstream premium seekers.',
        'Minimal pop culture penetration or influencer organic advocacy constrains cultural momentum while competitors dominate celebrity culture and luxury positioning territories.'
      ]
    },
    {
      code: 'B3',
      name: 'Experience Excellence',
      rating: 6.6,
      descriptor: 'Average',
      headline: 'Strong Usage, Weak Loyalty Loop',
      summaryBullets: [
        'Usage experience excels at 7.4 with consumers praising liquid quality and authentic taste profile that over-delivers against price expectations.',
        'Purchase experience scores strong 7.1 through effective packaging design and shelf presence that drives trial in premium-accessible segment.',
        'Loyalty experience collapses at 5.6, indicating failure to maintain engagement post-purchase and convert satisfied users into brand advocates and repeat buyers.'
      ]
    },
    {
      code: 'C1',
      name: 'Distinctive Assets',
      rating: 6.0,
      descriptor: 'Average',
      headline: 'Rooster Authenticity Versus Celebrity Fame Machine',
      summaryBullets: [
        'Rooster logo and Mexican artistic heritage provide high distinctiveness and medium recognition, creating category-unique visual language in the artisanal segment.',
        'Limited mainstream awareness compared to Patron\'s bottle distinctiveness and Casamigos\' celebrity power constrains premium occasion penetration and status-driven purchases.',
        'Asset portfolio effectively links to authentic Mexican memory structures but struggles to activate premium gifting and status occasions dominated by better-invested competitors.'
      ]
    },
    {
      code: 'C2',
      name: 'Brand Innovation',
      rating: 4.3,
      descriptor: 'Critical Gap',
      headline: 'Tradition Keeper In Innovation Age',
      summaryBullets: [
        'Innovation capability scores 4.3, trailing category average by 3.0 points with no major new expressions, flavor innovations, or premium extensions in recent memory.',
        'Reactive product strategy follows rather than leads category trends, particularly concerning around premium tier development where category growth concentrates.',
        'Innovation culture emphasizes craft heritage and traditional methods rather than forward-looking development, creating brand consistency but limiting growth potential against adaptive competitors.'
      ]
    },
    {
      code: 'C3',
      name: 'Market Disruption',
      rating: 7.8,
      descriptor: 'Strong',
      headline: 'Category Earthquake Demands Rapid Response',
      summaryBullets: [
        'Explosive 15-20% annual category growth attracts disruptive new entrants while celebrity brands fragment traditional premium positioning through superior marketing firepower.',
        'Agave sustainability crisis threatens supply chain stability while Gen Z sustainability demands revolutionize expectations for transparency and environmental responsibility.',
        'Social media influence replaces traditional advertising effectiveness while direct-to-consumer models bypass traditional retail channels, demanding new capabilities and approaches.'
      ]
    }
  ],
  growthBarrier: {
    headline: 'Innovation Paralysis Meets Category Acceleration',
    problemStatement: 'Espolon\'s innovation avoidance creates dangerous vulnerability as premium tequila undergoes radical transformation demanding immediate adaptation capabilities.',
    constraints: [
      {
        constraint: 'Innovation laggard status with no major product development in five years while competitors drive category evolution',
        componentCode: 'C2',
        score: 4.3,
        evidence: 'Trails category average by 3.0 points'
      },
      {
        constraint: 'Positioning confusion undermines premium credibility and growth potential in celebrity-dominated landscape',
        componentCode: 'A1',
        score: 5.4,
        evidence: '52% consumer skepticism about premium credentials'
      },
      {
        constraint: 'Cultural relevance deficit limits mainstream breakthrough despite authentic differentiation assets',
        componentCode: 'B2',
        score: 5.5,
        evidence: 'Minimal pop culture penetration versus competitors'
      }
    ]
  },
  growthSolution: {
    headline: 'Mexican Heritage Meets Innovation Boldness',
    solutionStatement: 'Espolon transforms from innovation-averse traditionalist to culturally-grounded disruptor that leverages authentic Mexican heritage to pioneer category innovation and premium cultural relevance.',
    unlocks: [
      {
        name: 'Innovation Pipeline Development',
        description: 'Build dedicated innovation capabilities and processes to launch premium extensions and category-defining products that maintain authenticity while driving growth.'
      },
      {
        name: 'Cultural Relevance Engine',
        description: 'Develop systematic approach to mainstream cultural penetration that leverages authentic Mexican heritage without sacrificing bartender credibility and professional advocacy.'
      },
      {
        name: 'Positioning Authority Platform',
        description: 'Establish clear premium positioning that transforms aesthetic appeal into authentic brand authority and eliminates consumer skepticism about category belonging.'
      },
      {
        name: 'Emotional Connection Architecture',
        description: 'Convert celebration associations and functional relationships into deeper emotional connections that drive loyalty, pride, and willingness to pay premium prices.'
      }
    ]
  },
  growthSystem: {
    headline: 'Foundation First, Innovation Second, Culture Third',
    systemDescription: 'Sequential capability building that establishes positioning clarity before innovation development, then leverages both for cultural breakthrough and sustainable premium growth.',
    phases: [
      {
        phase: 'Position',
        focus: 'Establish clear premium positioning and innovation capabilities',
        products: [
          {
            name: 'Strategic Brand Platform',
            relevanceScore: 4.7,
            purpose: 'Define clear positioning that eliminates premium credibility skepticism and establishes innovation direction',
            criticalComponents: ['A1', 'C2'],
            keyDeliverables: ['Brand positioning framework', 'Innovation pipeline roadmap', 'Premium credibility proof points', 'Competitive differentiation strategy']
          },
          {
            name: 'Employee Engagement',
            relevanceScore: 4.7,
            purpose: 'Align internal teams around innovation priorities and positioning clarity to execute transformation',
            criticalComponents: ['C2', 'A1'],
            keyDeliverables: ['Innovation culture development', 'Brand positioning training', 'Employee advocacy programs']
          }
        ]
      },
      {
        phase: 'Create',
        focus: 'Build innovation capabilities and develop premium extensions',
        products: [
          {
            name: 'Product Development & Prototyping',
            relevanceScore: 4.6,
            purpose: 'Develop innovation capabilities and launch category-defining products that maintain authenticity',
            criticalComponents: ['C2', 'A3'],
            keyDeliverables: ['Premium extension development', 'Innovation process design', 'Product pipeline creation', 'Authenticity guidelines']
          }
        ]
      },
      {
        phase: 'Connect',
        focus: 'Build mainstream cultural relevance while maintaining authenticity',
        products: [
          {
            name: 'Audience Growth Strategy',
            relevanceScore: 4.6,
            purpose: 'Expand beyond bartender community to mainstream premium consumers without losing authentic credibility',
            criticalComponents: ['B2', 'B1'],
            keyDeliverables: ['Mainstream penetration strategy', 'Cultural relevance roadmap', 'Influencer engagement plan']
          }
        ]
      }
    ]
  },
  growthFactors: {
    strengths: [
      {
        factor: 'Authentic Mexican Heritage',
        componentCode: 'C1',
        evidence: 'Rooster logo and Day of the Dead artwork create category-unique visual language in the artisanal segment'
      },
      {
        factor: 'Strong Value Perception',
        componentCode: 'A2',
        evidence: 'Value perception of 7.8 driven by cultural authenticity and design differentiation'
      },
      {
        factor: 'Product Quality Delivery',
        componentCode: 'B3',
        evidence: 'Usage experience excels at 7.4 with consumers praising liquid quality'
      }
    ],
    opportunities: [
      {
        factor: 'Category Explosive Growth',
        componentCode: 'C3',
        evidence: '15-20% annual growth creates massive opportunity for brands that can adapt quickly'
      },
      {
        factor: 'Bartender Professional Advocacy',
        componentCode: 'B2',
        evidence: 'Deep credibility within bartender community provides authentic foundation for cultural expansion'
      }
    ],
    challenges: [
      {
        factor: 'Innovation Deficit',
        componentCode: 'C2',
        evidence: 'Trails category average by 3.0 points with no major product development in five years'
      },
      {
        factor: 'Positioning Ambiguity',
        componentCode: 'A1',
        evidence: '52% consumer skepticism about premium credentials'
      },
      {
        factor: 'Loyalty Loop Failure',
        componentCode: 'B3',
        evidence: 'Loyalty experience collapses at 5.6, failing to convert satisfied users into repeat buyers'
      }
    ]
  }
};
