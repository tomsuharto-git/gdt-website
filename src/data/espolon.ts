import { GDTAnalysis } from '@/lib/types';

/**
 * Espolón Tequila GDT Analysis Data
 * Source: outputs/espolon-tequila-usa-2025-12-22/
 */
export const espolonAnalysis: GDTAnalysis = {
  brand: {
    id: 'espolon',
    name: 'Espolón Tequila',
    market: 'USA',
    category: 'Premium Tequila',
    date: '2025-12-22',
    accentColor: '#E54B7B',
    password: 'espolon2026'
  },

  totalScore: 53.6,

  // Growth Profile - Top of page narrative
  growthProfile: {
    id: 'foundation-reinforcement',
    name: 'Foundation Reinforcement',
    sequence: 'Position → Unlock → Connect',
    definition: 'Espolón has built something real—authentic craft credentials, bartender credibility, and a product that consistently over-delivers (B3: 6.6). But the brand is hitting a ceiling. Strong product experience is being undermined by weak positioning clarity (A1: 5.4) and limited cultural presence (B2: 5.5).',
    implications: 'The problem isn\'t what Espolón makes—it\'s what Espolón means. Brand confusion prevents the tequila from capturing value proportional to its quality advantages. Espolón needs to reinforce its foundation: clarify positioning, unlock deeper consumer understanding, and build cultural connections that match its product truth. Without this, Espolón remains the bartender\'s secret that never breaks mainstream.',
    shortDefinition: 'Brands hitting growth ceilings due to positioning ambiguity and cultural limitations—requiring strategic clarity and cultural engagement to unlock expansion.'
  },

  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 17.4,
      tier: 'Functional',
      components: [
        { id: 'a1', name: 'Brand Positioning', score: 5.4, tier: 'Established', section: 'A' },
        { id: 'a2', name: 'Pricing Power', score: 6.4, tier: 'Value-Justified', section: 'A' },
        { id: 'a3', name: 'Business Growth', score: 5.6, tier: 'At-Category', section: 'A' }
      ]
    },
    {
      id: 'B',
      name: 'Audience Connection',
      score: 18.1,
      tier: 'Functional',
      components: [
        { id: 'b1', name: 'Emotional Connection', score: 6.0, tier: 'Moderate', section: 'B' },
        { id: 'b2', name: 'Cultural Relevance', score: 5.5, tier: 'Present', section: 'B' },
        { id: 'b3', name: 'Experience Excellence', score: 6.6, tier: 'Enhanced', section: 'B' }
      ]
    },
    {
      id: 'C',
      name: 'Degree of Transformation',
      score: 18.1,
      tier: 'Stable',
      components: [
        { id: 'c1', name: 'Distinctive Assets', score: 6.0, tier: 'Recognizable', section: 'C' },
        { id: 'c2', name: 'Brand Innovation', score: 4.3, tier: 'Incremental', section: 'C' },
        { id: 'c3', name: 'Market Disruption', score: 7.8, tier: 'Transforming', section: 'C' }
      ]
    }
  ],

  // Growth Barrier
  growthBarrier: {
    headline: 'Artistic Identity Without Strategic Clarity',
    description: 'Espolón\'s distinctive Day of the Dead artwork creates instant recognition but masks a deeper problem: nobody knows what the brand actually stands for beyond looking cool on a shelf.',
    items: [
      {
        constraint: 'No product evolution',
        component: 'C2',
        score: 4.3,
        evidence: 'since 2020—no limited editions, no premium tiers, nothing to spark conversation beyond the original lineup.'
      },
      {
        constraint: 'Positioning void',
        component: 'A1',
        score: 5.4,
        evidence: 'leaves consumers without a story beyond the artwork—when asked what makes Espolón special, most shrug.'
      },
      {
        constraint: 'Cultural invisibility',
        component: 'B2',
        score: 5.5,
        evidence: 'with zero celebrity moments, zero influencer buzz, and zero pop culture presence while competitors dominate social feeds.'
      }
    ]
  },

  // Growth Solution
  growthSolution: {
    headline: 'Define the Story Behind the Art',
    description: 'Espolón transforms from the tequila insiders love to discover into the premium brand everyone wants to be seen choosing.',
    actions: [
      'Clarify positioning: Define what makes Espolón different in one sentence everyone can repeat. Own something beyond the artwork.',
      'Expand cultural reach: Move beyond niche bartender credibility to mainstream cultural relevance through strategic partnerships.',
      'Launch innovation: Stop waiting and ship something new—a premium tier, limited edition, or aged expression that gives people a reason to talk.'
    ]
  },

  // Growth System
  growthSystem: {
    headline: 'Accelerate Through Strategic Clarity',
    description: 'Espolón leverages authentic craft credentials and bartender advocacy to build mainstream premium positioning.',
    phases: [
      {
        phase: 'Position',
        description: 'Establish clarity on Espolón\'s premium tequila role',
        outputs: [
          {
            name: 'Strategic Brand Platform',
            score: 8.4,
            purpose: 'Define Espolón\'s positioning beyond visual aesthetics',
            componentsAddressed: ['A1 (5.4)', 'B2 (5.5)'],
            deliverables: ['Positioning statement', 'Value proposition', 'Cultural narrative']
          },
          {
            name: 'Portfolio Strategy',
            score: 7.8,
            purpose: 'Create premium tier to break pricing ceiling',
            componentsAddressed: ['A2 (6.4)', 'C2 (4.3)'],
            deliverables: ['Premium SKU roadmap', 'Limited edition strategy', 'Price architecture']
          }
        ]
      },
      {
        phase: 'Unlock',
        description: 'Decode barriers to Espolón preference and loyalty',
        outputs: [
          {
            name: 'Unconscious Drivers',
            score: 8.1,
            purpose: 'Understand why people like but don\'t love Espolón',
            componentsAddressed: ['B1 (6.0)', 'A1 (5.4)'],
            deliverables: ['Psychological insight mapping', 'Preference drivers', 'Loyalty barriers']
          },
          {
            name: 'Category Entry Points',
            score: 7.6,
            purpose: 'Identify occasions beyond bartender recommendations',
            componentsAddressed: ['C1 (6.0)', 'B2 (5.5)'],
            deliverables: ['Usage occasion expansion', 'Mental availability strategy', 'Consideration triggers']
          }
        ]
      },
      {
        phase: 'Connect',
        description: 'Build emotional resonance and cultural relevance',
        outputs: [
          {
            name: 'Brand Communications',
            score: 7.9,
            purpose: 'Shift perception from insider secret to mainstream choice',
            componentsAddressed: ['A1 (5.4)', 'B2 (5.5)', 'B1 (6.0)'],
            deliverables: ['Brand campaign', 'Cultural conversation strategy', 'Perception shift metrics']
          },
          {
            name: 'Community Over-service',
            score: 7.4,
            purpose: 'Transform bartender advocacy into consumer community',
            componentsAddressed: ['B1 (6.0)', 'B3 (6.6)'],
            deliverables: ['Bartender ambassador program', 'Consumer community platform', 'Loyalty program']
          }
        ]
      }
    ],
    criticalPath: 'Position (Strategic Brand Platform) → Unlock (Unconscious Drivers) → Connect (Brand Communications)',
    implementationNotes: 'The high market disruption urgency (C3: 7.8) demands action within 3-6 months as celebrity-backed competitors claim market share. Strong brand experience (B3: 6.6) provides foundation, but weak innovation (C2: 4.3) requires immediate product development. Success depends on translating bartender credibility into consumer preference before the window closes.'
  },

  components: [
    {
      id: 'a1',
      name: 'Brand Positioning',
      section: 'A',
      score: 5.4,
      tier: 'Established',
      wsn: {
        headline: 'Espolón is stuck in the middle',
        subline: 'Artistically distinctive but commercially undefined.',
        what: 'When asked what makes Espolón special beyond the bottle, most consumers shrug—there\'s no compelling story beyond aesthetics.',
        evidence: 'Consumer research shows 50%+ of premium tequila buyers cannot articulate what Espolón stands for. The brand ranks last among major competitors in positioning clarity.',
        soWhat: 'The brand sits uncomfortably between craft authenticity and mass premium, lacking Patron\'s luxury credibility or Casamigos\' celebrity magnetism.',
        nowWhat: 'Define what Espolón owns that competitors can\'t claim—a single compelling statement people can repeat.'
      },
      strengths: [
        'Day of the Dead artwork creates instant shelf recognition—you can spot an Espolón bottle from across the store',
        'Price-to-quality ratio hits a sweet spot that attracts premium-curious beginners and value-seeking cocktail enthusiasts',
        'Cultural authenticity resonates with Hispanic consumers and design-conscious buyers'
      ],
      weaknesses: [
        'When asked what makes Espolón special beyond the bottle, most consumers shrug',
        'Half of tequila buyers doubt Espolón belongs in the premium tier at all',
        'Patron owns luxury, Casamigos owns celebrity cool, but Espolón doesn\'t own anything'
      ],
      competitiveContext: 'Espolón sits uncomfortably between craft authenticity and mass premium, lacking Patron\'s luxury credibility or Casamigos\' celebrity magnetism. People buy it when they see it, not because they came looking for it.',
      scoreBreakdown: {
        meaningful: 6.6,
        different: 6.5,
        mdiComposite: 4.3,
        positioningStrength: 5.2
      }
    },
    {
      id: 'a2',
      name: 'Pricing Power',
      section: 'A',
      score: 6.4,
      tier: 'Value-Justified',
      wsn: {
        headline: 'Espolón has found a comfortable home in the $25-40 range',
        subline: 'People feel like they\'re getting premium tequila without overpaying.',
        what: 'People already feel they\'re paying fair price—ask them to pay more and they\'ll switch to something else without hesitation.',
        evidence: 'Espolón is stuck—beloved at $30, abandoned at $40.',
        soWhat: 'Espolón carved out a value-premium position between craft and luxury, but this creates a pricing ceiling rather than a pricing platform.',
        nowWhat: 'Create premium tier to break price ceiling.'
      },
      strengths: [
        'The $25-40 sweet spot attracts premium-curious buyers who want authenticity without luxury pricing',
        'Authentic Mexican craftsmanship and Day of the Dead artwork create emotional justification for premium pricing',
        'Bartender credibility translates to consumer confidence'
      ],
      weaknesses: [
        'People already feel they\'re paying fair price—ask them to pay more and they\'ll switch',
        'When money gets tight, Espolón is one of the first premium purchases people trade down from',
        'Casamigos commands celebrity premiums, Patron commands luxury premiums, but Espolón has no premium lever'
      ]
    },
    {
      id: 'a3',
      name: 'Business Growth',
      section: 'A',
      score: 5.6,
      tier: 'At-Category',
      categoryAverage: 5.5,
      competitorScores: [
        { name: 'Patron', score: 6.2 },
        { name: 'Casamigos', score: 8.5 },
        { name: 'Don Julio', score: 7.0 }
      ],
      wsn: {
        headline: 'Keeping pace with the pack while leaders pull away',
        subline: 'Growing at category average, but celebrity-backed competitors are posting 25-40% gains.',
        what: 'Marketing investment is practically invisible compared to Casamigos ($100M+ George Clooney sale) or Teremana (The Rock\'s social media machine).',
        evidence: 'Growth performance gets a 6—tracking category but not outpacing it.',
        soWhat: 'Espolón is being squeezed from above by premium storytellers (Clase Azul, Don Julio) and from below by celebrity disruptors (Casamigos, Teremana).',
        nowWhat: 'Focus on fastest-growing segments.'
      },
      strengths: [
        'Campari Group distribution network provides solid retail availability',
        'On-premise presence through bartender relationships creates steady volume',
        'Healthy margins at current price point support sustainable operations'
      ],
      weaknesses: [
        'Growing at category average while celebrity brands grow 3-4x faster',
        'Marketing spend is a fraction of Casamigos, Patron, and Teremana',
        'No breakout moments or viral growth—just steady, unremarkable progress'
      ]
    },
    {
      id: 'b1',
      name: 'Emotional Connection',
      section: 'B',
      score: 6.0,
      tier: 'Moderate',
      wsn: {
        headline: 'People like Espolón, but they don\'t love it',
        subline: 'It\'s the tequila you grab for a party and forget about afterward.',
        what: 'When someone switches to Patron or Casamigos, there\'s no emotional loss—just a shrug and "that works too."',
        evidence: 'Espolón earns a Moderate rating because consumers have generally positive feelings without any depth or commitment.',
        soWhat: 'Without stronger emotional connection, Espolón remains permanently vulnerable to any competitor that offers the same value or shows up with a better story.',
        nowWhat: 'Build pride-driving initiatives that make people feel special for choosing Espolón.'
      },
      strengths: [
        'Celebration Association (high impact)',
        'Authenticity Perception (medium impact)',
        'Value Satisfaction (medium impact)'
      ],
      weaknesses: [
        'Status Symbol Deficit (high priority)',
        'Limited Pride Association (high priority)',
        'Behavioral Loyalty Gap (medium priority)'
      ],
      competitorScores: [
        { name: 'Patron', score: 8.3 },
        { name: 'Casamigos', score: 7.9 },
        { name: 'Don Julio', score: 5.7 }
      ],
      categoryAverage: 6.8
    },
    {
      id: 'b2',
      name: 'Cultural Relevance',
      section: 'B',
      score: 5.5,
      tier: 'Present',
      categoryAverage: 6.0,
      competitorScores: [
        { name: 'Patron', score: 7.8 },
        { name: 'Casamigos', score: 8.5 },
        { name: 'Don Julio', score: 6.5 }
      ],
      wsn: {
        headline: 'Espolón is the tequila bartenders love but regular people don\'t know exists',
        subline: 'The Day of the Dead skull bottles are instantly recognizable in the industry, but the brand barely registers in pop culture.',
        what: 'Zero celebrity endorsements, zero pop culture moments, zero influencer buzz—while Casamigos rides George Clooney and Kendall Jenner posts.',
        evidence: 'Espolón is culturally present but not culturally powerful. Social listening shows near-zero brand mentions in mainstream culture discussions.',
        soWhat: 'Trails badly behind Patron and Casamigos in mainstream cultural awareness.',
        nowWhat: 'Expand cultural presence beyond current niche.'
      },
      strengths: [
        'Strong credibility within bartender and mixology community',
        'Day of the Dead aesthetic resonates with design-forward consumers',
        'Authentic Mexican heritage story provides cultural depth'
      ],
      weaknesses: [
        'Zero celebrity endorsements in a celebrity-driven category',
        'No presence in pop culture conversations, social media trends, or influencer content',
        'Brand awareness drops precipitously outside industry and design circles'
      ]
    },
    {
      id: 'b3',
      name: 'Experience Excellence',
      section: 'B',
      score: 6.6,
      tier: 'Enhanced',
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'Patron', score: 7.8 },
        { name: 'Casamigos', score: 7.2 },
        { name: 'Don Julio', score: 7.5 }
      ],
      wsn: {
        headline: 'Espolón delivers an experience that gets better the closer you get to the liquid',
        subline: 'People discover it more than they seek it out.',
        what: 'The product experience is excellent—smooth agave character, clean finish, bartender-approved quality. But discovery relies on bartender recommendations, not brand awareness.',
        evidence: 'Espolón earns an Enhanced rating because it delivers a functionally strong experience where it matters most—the product itself consistently impresses.',
        soWhat: 'Espolón has built a trial machine but not a loyalty engine.',
        nowWhat: 'Build loyalty infrastructure without killing the scrappy authenticity.'
      },
      strengths: [
        'Bartender credibility creates authentic trial experiences at the point of consumption',
        'Product quality consistently exceeds expectations for the price point',
        'Day of the Dead artwork creates memorable unboxing and shelf presence'
      ],
      weaknesses: [
        'Discovery is passive—people find Espolón, they don\'t seek it out',
        'No direct customer relationship or loyalty program',
        'Zero owned retail experiences or brand activations'
      ]
    },
    {
      id: 'c1',
      name: 'Distinctive Assets',
      section: 'C',
      score: 6.0,
      tier: 'Recognizable',
      categoryAverage: 5.5,
      competitorScores: [
        { name: 'Patron', score: 8.2 },
        { name: 'Casamigos', score: 7.5 },
        { name: 'Don Julio', score: 6.8 }
      ],
      wsn: {
        headline: 'Espolón has genuinely distinctive brand assets',
        subline: 'The rooster logo and Day of the Dead artwork are instantly recognizable IF you see them.',
        what: 'Limited mainstream awareness compared to Patron\'s iconic bottle shape or Casamigos\' George Clooney celebrity power.',
        evidence: 'Espolón scores 6—recognizable but not famous. The artwork is distinctive, but it\'s only seen by those who already encounter the brand.',
        soWhat: 'Espolón operates in the authentic artisanal tier below premium leaders.',
        nowWhat: 'Invest in making distinctive assets famous.'
      },
      strengths: [
        'Day of the Dead artwork creates instant visual distinction on shelf and in bars',
        'Rooster logo and Mexican craftsmanship story provide authentic heritage assets',
        'Hand-illustrated bottle design stands out in a sea of minimalist tequila bottles'
      ],
      weaknesses: [
        'Assets are distinctive but not famous—recognition requires seeing the bottle first',
        'No ownable verbal assets or tagline that lives beyond the visual identity',
        'Artwork complexity doesn\'t translate well to small-format digital placements'
      ]
    },
    {
      id: 'c2',
      name: 'Brand Innovation',
      section: 'C',
      score: 4.3,
      tier: 'Incremental',
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Patron', score: 7.5 },
        { name: 'Casamigos', score: 6.8 },
        { name: 'Don Julio', score: 7.2 }
      ],
      wsn: {
        headline: 'Espolón hasn\'t launched a major new product in five years',
        subline: 'While competitors roll out premium extensions and limited editions, Espolón just keeps selling the same three SKUs.',
        what: 'Zero new products since 2020—no limited editions, no premium tiers, no experimental aging, nothing.',
        evidence: 'Competitors have launched 15+ new expressions in the same period. Patron 1942, Don Julio Primavera, Casamigos Mezcal—all conversation starters. Espolón has none.',
        soWhat: 'The category average is much higher because Patron, Don Julio, and Casamigos are all actively innovating.',
        nowWhat: 'Launch innovation initiative within 6 months.'
      },
      strengths: [
        'Core product quality is proven and consistent—a foundation to build on',
        'Campari Group resources available for product development investment',
        'Authentic Mexican production credentials support credible line extensions'
      ],
      weaknesses: [
        'Five years without a major new product launch—stagnant in a dynamic category',
        'No premium tier to capture trading-up consumers or command higher margins',
        'Competitors dominate innovation conversation while Espolón stays silent'
      ]
    },
    {
      id: 'c3',
      name: 'Market Disruption',
      section: 'C',
      score: 7.8,
      tier: 'Transforming',
      categoryAverage: 6.5,
      competitorScores: [
        { name: 'Patron', score: 6.8 },
        { name: 'Casamigos', score: 8.2 },
        { name: 'Don Julio', score: 7.0 }
      ],
      wsn: {
        headline: 'Premium tequila is being completely reshaped right now',
        subline: 'The category is growing 15-20% annually, attracting everyone from The Rock to George Clooney.',
        what: 'Celebrity brands are claiming share at an accelerating rate. Teremana (The Rock), Casamigos (Clooney), Lobos 1707 (LeBron)—each launch captures a slice of the premium pie.',
        evidence: 'The 3-6 month timeline isn\'t arbitrary—every month that passes, more celebrity brands launch and more market share gets claimed.',
        soWhat: 'Every month that passes, more Gen Z consumers develop loyalty to transparency-focused brands.',
        nowWhat: 'Develop response plans for top 3 disruption threats.'
      },
      strengths: [
        'Authentic craft credentials provide differentiation from celebrity-backed competitors',
        'Bartender credibility insulates against social media-driven brand switching',
        'Price point positions Espolón as accessible alternative when premium fatigue hits'
      ],
      weaknesses: [
        'No response strategy for celebrity brand proliferation—playing defense while others attack',
        'Cultural conversation happening without Espolón—brand is invisible in trend discussions',
        'Slow decision-making risks missing the window before market positions solidify'
      ]
    }
  ]
};
