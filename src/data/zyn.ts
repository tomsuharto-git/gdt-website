import { GDTAnalysis } from '@/lib/types';

/**
 * Zyn (USA) GDT Analysis Data
 * Generated: 2025-12-30 (Full Automation)
 * Source: 9 GDT Agent JSON outputs + GDT Summary
 * Competitors: On! (Altria), Velo (BAT), Rogue (Swisher)
 */
export const zynAnalysis: GDTAnalysis = {
  brand: {
    id: 'zyn',
    name: 'Zyn',
    market: 'USA',
    category: 'Nicotine Pouches',
    date: '2025-12-30',
    accentColor: '#6B46C1',
    password: 'zyn2026'
  },
  totalScore: 67.1,
  growthProfile: {
    id: 'foundation-reinforcement',
    name: 'Foundation Reinforcement',
    sequence: 'Position \u2192 Unlock \u2192 Connect',
    definition: 'Zyn created the nicotine pouch category and owns 74% of it. The brand has genuine cultural momentum—memes, influencers, organic word-of-mouth. But it never established a clear reason to choose Zyn over the alternatives. "Tobacco-free" was the position, but now every competitor claims it too. Without a distinctive story, market share becomes a game of distribution and discounts.',
    implications: 'The paradox: Zyn is everywhere but stands for nothing specific. On!, Velo, and Rogue are attacking from every direction—price, flavors, convenience. The FDA regulatory moat is closing—On! now has authorization too, and Velo is in the fast-track queue. The question isn\'t whether Zyn can maintain share—it\'s whether they can give people a reason to care beyond habit.',
    shortDefinition: 'Brands with strong cultural momentum but weak positioning clarity—requiring strategic foundation work to sustain growth.'
  },
  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 22.1,
      tier: 'Synergistic',
      components: [
        { id: 'a1', name: 'Brand Positioning', score: 6.2, tier: 'Distinctive', section: 'A' },
        { id: 'a2', name: 'Pricing Power', score: 7.7, tier: 'Premium-Command', section: 'A' },
        { id: 'a3', name: 'Business Growth', score: 8.2, tier: 'Accelerating', section: 'A' }
      ]
    },
    {
      id: 'B',
      name: 'Customer Connection',
      score: 21.8,
      tier: 'Resonant',
      components: [
        { id: 'b1', name: 'Emotional Connection', score: 7.3, tier: 'Strong', section: 'B' },
        { id: 'b2', name: 'Cultural Relevance', score: 8.3, tier: 'Leading', section: 'B' },
        { id: 'b3', name: 'Experience Excellence', score: 6.2, tier: 'Enhanced', section: 'B' }
      ]
    },
    {
      id: 'C',
      name: 'Competitive Advantage',
      score: 23.2,
      tier: 'Progressive',
      components: [
        { id: 'c1', name: 'Distinctive Assets', score: 7.8, tier: 'Highly Distinctive', section: 'C' },
        { id: 'c2', name: 'Brand Innovation', score: 8.2, tier: 'Pioneering', section: 'C' },
        { id: 'c3', name: 'Market Disruption', score: 7.2, tier: 'Transforming', section: 'C' }
      ]
    }
  ],
  growthBarrier: {
    headline: 'The category creator risks losing its narrative',
    description: 'Zyn built 74% market share, but the "tobacco-free" claim that got them here is now used by everyone. Worse, viral TikTok fame attracted regulators before Zyn could shape the narrative - and now Tucker Carlson and Senator Schumer are defining the brand more than PMI is.',
    items: [
      {
        constraint: '"Tobacco-free" is now table stakes',
        component: 'Positioning, Assets',
        score: 5.8,
        evidence: 'Every competitor claims tobacco-free. 96.8% of category ads use this message. Zyn\'s founding claim is now generic. No distinctive verbal assets to replace it.'
      },
      {
        constraint: 'Tucker Carlson controls Zyn\'s brand story',
        component: 'Culture, Positioning',
        score: 6.0,
        evidence: 'Brand narrative shaped by external voices (Carlson, Rogan, TikTok memes) not company. When Carlson disagreed with PMI, he launched competing brand ALP. Zero owned media infrastructure.'
      },
      {
        constraint: 'Cultural success became a political liability',
        component: 'Culture, Disruption',
        score: 7.2,
        evidence: 'Youth usage doubled to 400k (2021-2023). Schumer investigation. 119 FDA warning letters. California flavor bans. The same virality that built the brand now fuels regulatory backlash.'
      }
    ]
  },
  growthSolution: {
    headline: 'Use FDA authorization to reframe Zyn and grow the category',
    description: 'Zyn was first to FDA authorization, but On! has followed and Velo is close behind. The regulatory moat is closing. The opportunity now is to use first-mover credibility to shift how America thinks about nicotine pouches—from "TikTok trend for finance bros" to "FDA-recognized harm reduction."',
    actions: [
      'Lead the legitimacy conversation - Zyn was first to FDA authorization and can still own the "responsible choice" narrative. But the window to establish this is shrinking as competitors gain parity.',
      'Take back the narrative from external voices - Tucker Carlson and TikTok memes shouldn\'t define a $2B brand. Build owned media infrastructure.',
      'Expand cultural permission beyond the base - 67% male, 25-34 is a ceiling. FDA legitimacy opens doors to older adults and health-conscious consumers.'
    ]
  },
  growthSystem: {
    headline: 'Legitimize the category, then expand who it\'s for',
    description: 'Use FDA authorization to shift nicotine pouches from viral fad to credible choice. The more legitimate the category, the bigger the audience you can unlock.',
    phases: [
      {
        phase: 'Position',
        description: 'Use FDA authorization to reframe nicotine pouches as a legitimate choice',
        outputs: [
          {
            name: 'Strategic Brand Platform',
            score: 9.2,
            purpose: 'Lead the category legitimacy conversation - reframe pouches from viral fad to FDA-recognized harm reduction',
            componentsAddressed: ['Brand Positioning', 'Cultural Relevance'],
            deliverables: ['FDA-authorization as category legitimizer (not just a claim)', 'Harm reduction positioning framework', 'Regulatory proactive messaging strategy']
          },
          {
            name: 'Portfolio Strategy',
            score: 8.8,
            purpose: 'Expand product line to support broader audience and usage occasions',
            componentsAddressed: ['Pricing Power', 'Brand Innovation'],
            deliverables: ['Entry-level 2mg strength for new users', 'Premium 9mg for heavy users trading up', 'Unflavored variants for ban markets']
          }
        ]
      },
      {
        phase: 'Unlock',
        description: 'Meet consumers where they are - FDA legitimacy opens new audiences',
        outputs: [
          {
            name: 'Customer Journey Optimization',
            score: 9.0,
            purpose: 'Make it easier for new audiences to discover and try Zyn now that the category is credible',
            componentsAddressed: ['Experience Excellence', 'Business Growth'],
            deliverables: ['Retail expansion beyond convenience stores', 'Trial-friendly pack sizes for new users', 'Education-first onboarding for switchers']
          },
          {
            name: 'Category Entry Points',
            score: 8.4,
            purpose: 'Identify new usage occasions that legitimacy unlocks',
            componentsAddressed: ['Business Growth', 'Experience Excellence'],
            deliverables: ['Health-conscious positioning for older adults', 'Cessation support messaging', 'Professional/workplace usage occasions']
          }
        ]
      },
      {
        phase: 'Connect',
        description: 'Expand cultural permission beyond young male finance bros',
        outputs: [
          {
            name: 'Audience Growth Strategy',
            score: 8.2,
            purpose: 'Broaden appeal without alienating the base that built the brand',
            componentsAddressed: ['Emotional Connection', 'Cultural Relevance'],
            deliverables: ['Demographic expansion campaign targeting 35-54', 'Female user acquisition strategy', 'Health-conscious consumer messaging']
          },
          {
            name: 'Community Over-service',
            score: 7.8,
            purpose: 'Build direct relationships that don\'t depend on social media virality',
            componentsAddressed: ['Emotional Connection', 'Experience Excellence'],
            deliverables: ['Enhanced ZYN Rewards with legitimacy messaging', 'Direct customer communication channels', 'Brand ambassador program beyond influencers']
          }
        ]
      }
    ],
    criticalPath: 'Position (Legitimize category) → Unlock (Reach new audiences) → Connect (Build relationships)',
    implementationNotes: 'This is urgent. Competitors are attacking on all fronts: Velo is running $2.99 promotions, On! has reached 120k stores, and Zyn\'s original inventor just raised $40M for a competing product called Sesh. Every month of delay eats away at the 74% market share that first-mover advantage created.'
  },
  components: [
    {
      id: 'a1',
      name: 'Brand Positioning',
      section: 'A',
      score: 6.2,
      tier: 'Distinctive',
      categoryAverage: 4.5,
      competitorScores: [
        { name: 'On!', score: 3.3 },
        { name: 'Velo', score: 3.9 },
        { name: 'Rogue', score: 3.3 }
      ],
      wsn: {
        headline: 'Zyn is everywhere, but it doesn\'t stand for anything specific anymore.',
        subline: 'Zyn created the modern nicotine pouch category in 2016 and maintains 74%+ market share, but \'tobacco-free\' positioning is now table stakes.',
        what: 'Here\'s the tension: Zyn clearly matters to consumers - it delivers real functional benefits. But it doesn\'t feel distinctively positioned versus competitors who all claim the same things: \'tobacco-free, discreet, convenient.\'',
        evidence: 'Consumer research shows Zyn delivers strong functional benefits but doesn\'t feel meaningfully different from competitors. The whole category is undifferentiated - everyone claims the same things.',
        soWhat: 'The 2024 supply shortage proved Zyn\'s market share is partially availability-driven - when alternatives were easier to find, consumers switched to On! (+77%), Velo, and Rogue. PMI ownership creates cognitive dissonance with \'tobacco-free\' claims (96.8% of ads).',
        nowWhat: 'Transition from copyable \'tobacco-free\' to \'first FDA-authorized\' positioning while that distinction still matters. On! now has authorization; Velo is close. The regulatory moat is closing—move fast. Address youth perception risk proactively before regulators mandate restrictions.'
      },
      strengths: [
        'Category Pioneer Advantage - Created modern nicotine pouch category, near-synonymous brand-category association',
        'FDA Authorization as Trust Signal - First nicotine pouch with FDA marketing authorization (January 2025, 20 products)',
        '\'Freedom\' Positioning with Lifestyle Integration - \'Anywhere, anytime\' messaging expands beyond tobacco replacement'
      ],
      weaknesses: [
        'PMI Ownership Undermines Tobacco-Free Credibility - Cognitive dissonance from Philip Morris ownership',
        'Youth Association Risk from Uncontrolled Viral Culture - 700M TikTok views contradict adult cessation positioning',
        'Limited Functional Differentiation as Category Matures - Core attributes now table stakes, premium pricing lacks justification'
      ],
      competitiveContext: 'On! has smaller scale and uses similar messaging - not much differentiation. Velo\'s \'Weird but Wonderful\' counter-positioning actually stands out more. Rogue\'s \'Bolder Flavor\' value positioning gives them a clearer identity than Zyn\'s generic claims.',
      scoreBreakdown: {
        meaningfulScore: 7.4,
        differentScore: 5.8,
        mdiScore: 4.3
      }
    },
    {
      id: 'a2',
      name: 'Pricing Power',
      section: 'A',
      score: 7.7,
      tier: 'Premium-Command',
      categoryAverage: 5.5,
      competitorScores: [
        { name: 'On!', score: 5.5 },
        { name: 'Velo', score: 4.5 },
        { name: 'Rogue', score: 5.5 }
      ],
      wsn: {
        headline: 'Zyn raised prices 50 cents during a shortage and customers kept buying - that\'s real pricing power.',
        subline: 'At $5.64 MSRP for 15 pouches ($0.38/pouch), Zyn prices at 15-20% premium versus competitors offering 20 pouches per can.',
        what: 'PMI reports \'best-in-class gross margins\' with smoke-free products achieving 66.6% gross margin - 270 basis points above combustibles. 2024 delivered $1.88B US revenue at $3.2 net revenue per can.',
        evidence: '10% price increases correlate with only 2.3% sales decline in convenience stores (92% of volume), indicating strong inelasticity.',
        soWhat: 'State tax exposure creates vulnerability: $5.50 base vs $9.92 in Illinois, $8-10 in Minnesota. Lower pouch count (15 vs 20) makes per-unit premium visibly apparent, creating substitution incentive.',
        nowWhat: 'Implement 2-3% annual MSRP increases in stable-tax states. Launch premium product extensions at $7-8 price points rather than continuous base price increases facing elasticity constraints around $6.50-7.00 threshold.'
      },
      strengths: [
        'Successfully raised MSRP by 50 cents during 2024 shortage while demand remained inelastic',
        'Superior unit economics with 66.6% smoke-free gross margins versus 63.9% combustibles',
        'Market dominance (74%+ share) creates category price leadership that competitors must follow'
      ],
      weaknesses: [
        'Measurable price elasticity: 10% price increase = 2.3% sales decline in convenience stores',
        'State tax vulnerability creates inconsistent pricing - $5.50 base vs $9.92 in Illinois',
        'Lower pouch count (15 vs 20) makes per-pouch premium visibly apparent'
      ],
      competitiveContext: 'On! 5.5 - mid-tier at $4.39, modest price increases, limited pricing leverage. Velo 4.5 - heavy promotional dependence ($2.99 vs $5.59 = 46% discount for trial). Rogue 5.5 - value leader with 20 pouches, solid resistance to erosion.',
      scoreBreakdown: {
        pricePremiumScore: 8.5,
        elasticityScore: 7.0,
        valuePerceptionScore: 7.5
      }
    },
    {
      id: 'a3',
      name: 'Business Growth',
      section: 'A',
      score: 8.2,
      tier: 'Accelerating',
      categoryAverage: 6.0,
      competitorScores: [
        { name: 'On!', score: 6.5 },
        { name: 'Velo', score: 6.0 },
        { name: 'Rogue', score: 5.5 }
      ],
      wsn: {
        headline: 'From 13 million cans to 580 million in 6 years - now a $2B+ business.',
        subline: 'PMI sold 580 million cans in 2024 (up from 385 million in 2023), contributing 20% and 25% of PMI\'s total revenue and operating profit growth respectively.',
        what: 'Q1 2025 shipments reached 202 million cans versus 132 million in Q1 2024, representing 53% growth. Distribution scaled to 156,000+ retail locations with ubiquitous convenience store presence.',
        evidence: '$800M+ manufacturing investment ($600M Colorado facility, $230M Kentucky expansion). 74%+ market share in category growing 30%+ annually.',
        soWhat: 'Hypergrowth exposed operational vulnerabilities - 2024 supply shortages created consumer frustration and opened competitive windows. All three competitors (On!, Velo, Rogue) are growing faster from smaller bases.',
        nowWhat: 'Treat supply chain reliability as #1 strategic priority. Accelerate Colorado facility timeline if possible. Market share erosion from 77% toward 55-65% over 3-5 years appears likely as competitors scale.'
      },
      strengths: [
        'Dominant category leadership (75% share) enabling pricing power and distribution priority',
        'Massive manufacturing investment creating long-term supply moat - $800M+ in US facilities',
        'Organic virality and cultural adoption driving cost-efficient growth - 715.6M TikTok views'
      ],
      weaknesses: [
        'Supply chain fragility exposed by 2024 shortage - full normalization not expected until Q3 2025',
        'Concentrated manufacturing risk in single Kentucky facility during shortage period',
        'Regulatory and legal exposure from youth marketing allegations'
      ],
      competitiveContext: 'On! 6.5 - 32-39% growth in 2024, 11-12% share, FDA authorization achieved. Velo 6.0 - 185-234% surge from low base, BAT $200M manufacturing investment. Rogue 5.5 - Claims faster growth than all, $135M Swisher expansion.',
      scoreBreakdown: {
        growthPerformance: 9.2,
        strategyExecution: 7.0,
        competitivePosition: 8.5
      }
    },
    {
      id: 'b1',
      name: 'Emotional Connection',
      section: 'B',
      score: 7.3,
      tier: 'Strong',
      categoryAverage: 5.0,
      competitorScores: [
        { name: 'On!', score: 5.2 },
        { name: 'Velo', score: 5.6 },
        { name: 'Rogue', score: 4.5 }
      ],
      wsn: {
        headline: 'People don\'t just use Zyn - it\'s become part of their identity.',
        subline: 'The organic emergence of \'Zynfluencers,\' user-created vocabulary (\'zynnies,\' \'zynner\'), and 700+ million TikTok views demonstrate genuine emotional resonance.',
        what: 'FDA authorization (January 2025) provides a unique trust advantage no competitor can match. Brand personality is modern, discreet, sophisticated - more tech startup than tobacco company.',
        evidence: 'Consumers have positive gut-level associations with Zyn (FDA trust, cultural excitement). The organic community shows authentic brand love. Behavioral loyalty is strong - 74%+ market share and active ZYN Rewards participation.',
        soWhat: 'Connection skews heavily toward younger male demographics. Cultural bond built on meme culture and social trend rather than enduring brand values - vulnerable to cultural shifts.',
        nowWhat: 'Expand emotional resonance beyond young male demographic. Leverage FDA authorization more explicitly in emotional messaging. Protect organic community authenticity while scaling.'
      },
      strengths: [
        'Organic cultural movement - Zynfluencer community created without paid brand involvement',
        'FDA authorization trust advantage - First FDA-authorized nicotine pouch (On! has since followed)',
        'Lifestyle integration and discretion - Seamless integration into gym, work, social contexts'
      ],
      weaknesses: [
        'Demographic emotional concentration - skewed toward younger males',
        'Shallow cultural foundation - built on meme culture, vulnerable to cultural shifts',
        'Health anxiety undercurrent - underlying concerns create emotional dissonance'
      ],
      competitiveContext: 'On! 5.2 - positioned as practical/accessible, no cultural identity or community, loyalty driven by habit not love. Velo 5.6 - \'Weird but Wonderful\' positioning attempts emotional differentiation but lacks authentic traction. Rogue 4.5 - value-conscious position with minimal emotional resonance.',
      scoreBreakdown: {
        iatScore: 6.8,
        affinityScore: 7.4,
        loyaltyScore: 7.6
      }
    },
    {
      id: 'b2',
      name: 'Cultural Relevance',
      section: 'B',
      score: 8.3,
      tier: 'Leading',
      categoryAverage: 3.5,
      competitorScores: [
        { name: 'On!', score: 2.7 },
        { name: 'Velo', score: 3.4 },
        { name: 'Rogue', score: 2.4 }
      ],
      wsn: {
        headline: 'Zyn became a genuine cultural phenomenon - Tucker Carlson, Joe Rogan, 700M TikTok views.',
        subline: 'Organic adoption by \'manosphere\' - finance bros, gym culture, right-wing media figures - created the \'Zynfluencer\' movement without any paid endorsements.',
        what: 'Tucker Carlson\'s unpaid advocacy (\'I use it every second I\'m awake\'), Joe Rogan podcast discussions, and 2024 \'Zynsurrection\' political controversy cemented Zyn as culture war flashpoint. Brand spawned new vocabulary: \'Zynternet,\' \'Zynbabwe,\' \'Monica Lewzynskys.\'',
        evidence: '715 million+ TikTok views. 67% of nicotine pouch users are men 25-34. Strong association with conservative media figures. Zero paid influencer spend.',
        soWhat: 'Cultural identity skews heavily male, young, and politically right-leaning. Company cannot shape messaging while \'not using influencers.\' Tucker Carlson launched competing \'ALP\' brand after disagreement.',
        nowWhat: 'Protect organic cultural equity while quietly broadening appeal beyond \'finance bro\' stereotype. Prepare defensive positioning for regulatory battles - cultural success is now a liability in policy discussions.'
      },
      strengths: [
        'Organic influencer ecosystem with zero paid endorsements - Tucker Carlson, Joe Rogan, Nelk Boys',
        'Created entirely new cultural vocabulary and subculture',
        'Became political identity marker generating massive earned media'
      ],
      weaknesses: [
        'Cultural identity skews heavily male, young, and politically right-leaning',
        'Cultural buzz creates regulatory and political scrutiny - Schumer investigation',
        'Brand narrative controlled by external voices, not company'
      ],
      competitiveContext: 'On! 2.7 - corporate marketing via Altria, no cultural conversation, golf partnerships. Velo 3.4 - McLaren F1 sponsorship provides visibility but limited US cultural impact, paid influencer campaigns criticized as inauthentic. Rogue 2.4 - product-focused positioning is culturally invisible.',
      scoreBreakdown: {
        presence: 9.0,
        impact: 8.5,
        authenticity: 8.0,
        timing: 8.5,
        resonance: 7.5
      }
    },
    {
      id: 'b3',
      name: 'Experience Excellence',
      section: 'B',
      score: 6.2,
      tier: 'Enhanced',
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'On!', score: 6.0 },
        { name: 'Velo', score: 5.6 },
        { name: 'Rogue', score: 5.4 }
      ],
      wsn: {
        headline: 'Great product that\'s been hard to actually buy - 2024 shortages sent customers to competitors.',
        subline: 'The product itself is excellent - FDA-authorized pharmaceutical-grade quality - but actually buying it was a nightmare during the 2024 supply crisis.',
        what: '77% market share reflects genuine product superiority - consistent nicotine delivery, premium pouch quality, smooth flavor profiles. ZYN Rewards program (15 points/can, up to 900 monthly) drives retention with high-value tech redemptions.',
        evidence: 'The actual product experience is excellent - but finding it, buying it, and engaging with the brand online have all been pain points. Usage satisfaction is high; everything before that moment is frustrating.',
        soWhat: '80% Q1 2024 volume surge caused nationwide stockouts across New York, New Jersey, and Florida. Retailers implemented purchase limits (10 cans/30 days). Zyn.com suspended online sales following DC regulatory issues.',
        nowWhat: 'Immediate priority: Restore direct-to-consumer sales capability. Build owned digital engagement infrastructure. Leverage ZYN Rewards as crisis management tool - consider bonus points during shortage periods.'
      },
      strengths: [
        'FDA-authorized product quality with pharmaceutical-grade nicotine and consistent delivery',
        'Organic cultural penetration via Zynfluencer ecosystem - 700M TikTok views',
        'Industry-leading rewards program with high-value tech redemptions'
      ],
      weaknesses: [
        'Catastrophic supply chain failure during peak demand growth',
        'Suspended online direct-to-consumer sales channel',
        'Underdeveloped owned digital engagement infrastructure'
      ],
      competitiveContext: 'On! is easier to find in stores but product quality isn\'t as good. Velo has quality control issues (ripped pouches, weak flavors critics call \'LaCroix of nicotine\'). Rogue has limited distribution and maxes out at 6mg which doesn\'t satisfy heavy users.',
      scoreBreakdown: {
        communication: 6.5,
        engagement: 4.5,
        purchase: 4.0,
        usage: 8.5,
        loyalty: 7.5
      }
    },
    {
      id: 'c1',
      name: 'Distinctive Assets',
      section: 'C',
      score: 7.8,
      tier: 'Highly Distinctive',
      categoryAverage: 5.2,
      competitorScores: [
        { name: 'On!', score: 4.8 },
        { name: 'Velo', score: 5.4 },
        { name: 'Rogue', score: 5.0 }
      ],
      wsn: {
        headline: 'The purple can is iconic - but that\'s mostly because Zyn got there first.',
        subline: 'Three-letter \'ZYN\' wordmark achieves exceptional cognitive simplicity. Purple color scheme has become synonymous with the category itself.',
        what: 'The strongest brand assets are the purple color scheme and three-letter ZYN wordmark - both highly distinctive and famous. The minimalist can design and user-created slang (\'zynnies\') also help. The click-open mechanism and flavor color coding are less distinctive.',
        evidence: 'The purple can is highly recognizable and strongly associated with the brand. But recognition comes mostly from being first and ubiquitous, not from inherently distinctive design.',
        soWhat: 'Purple color not trademark-protected - replicable by competitors. No ownable, consistent tagline despite $13M+ annual digital ad spend. 2025 rebrand (\'ZYN 3.0\') introduces complexity that may dilute recognition.',
        nowWhat: 'Commission trademark study for purple color protection before category commoditizes. Develop unifying verbal device - current messaging is fragmented. Leverage organic cultural assets (Zynner vocabulary) in marketing.'
      },
      strengths: [
        'Category-defining purple identity that signals \'nicotine pouch\' to US consumers',
        'Three-letter wordmark achieves exceptional cognitive simplicity',
        'First-mover distribution creates ubiquitous point-of-purchase presence in 140k+ stores'
      ],
      weaknesses: [
        'No ownable, consistent tagline or verbal mnemonic',
        'Purple color not trademark-protected; replicable by competitors',
        '2025 rebrand introduces complexity that may dilute recognition'
      ],
      competitiveContext: 'On! 4.8 - yellow/gold blends with tobacco imagery, exclamation point dated, 120k stores but no memorable assets. Velo 5.4 - 2024 rebrand with \'V\' device shows strategic intent, blue differentiates but limited US distribution (95k stores). Rogue 5.0 - matte black \'rebellious\' positioning distinct but 8-9.5% share limits recognition.',
      scoreBreakdown: {
        uniqueness: 6.8,
        fame: 8.5,
        attribution: 7.5,
        entryPoint: 8.2
      }
    },
    {
      id: 'c2',
      name: 'Brand Innovation',
      section: 'C',
      score: 8.2,
      tier: 'Pioneering',
      categoryAverage: 7.0,
      competitorScores: [
        { name: 'On!', score: 7.1 },
        { name: 'Velo', score: 7.4 },
        { name: 'Rogue', score: 6.5 }
      ],
      wsn: {
        headline: 'Zyn invented the tobacco-free nicotine pouch category - but hasn\'t innovated much since.',
        subline: 'From 12.7 million cans in 2018 to 581 million in 2024 - 45x growth in 6 years. Now benefits from PMI\'s $14B+ cumulative R&D investment.',
        what: 'Innovation highlights: Created US tobacco-free nicotine pouch category (2014-2016), First FDA-authorized nicotine pouch (20 SKUs), Catalyzed organic \'Zynfluencer\' movement, $800M+ manufacturing investment for 900M annual capacity by 2025.',
        evidence: 'Category creation track record is unmatched - Zyn literally invented this market. PMI provides massive infrastructure, but the 2024 supply crisis exposed execution gaps. Distribution is excellent but the product line is too narrow.',
        soWhat: 'Product-level innovation has been modest post-launch. Core line (10 flavors, 2 strengths) largely static. Competitors now bring genuine product innovations: On! 8 strength levels, Velo Plus synthetic nicotine, Rogue multiple formats.',
        nowWhat: 'Introduce additional nicotine strengths (2mg entry, 9mg premium). Develop synthetic nicotine variant. Expand format portfolio beyond pouches. Consider premium/craft line extensions.'
      },
      strengths: [
        'Category creation and market dominance - invented US tobacco-free nicotine pouch category, 74%+ share',
        'PMI R&D infrastructure and scale investment - $14B cumulative R&D, 1400+ scientists, $800M manufacturing',
        'Execution excellence and distribution mastery - scaled to 100,000+ stores with organic viral culture'
      ],
      weaknesses: [
        'Limited product innovation post-launch - core 10 flavors/2 strengths unchanged, competitors now innovate faster',
        'Supply chain vulnerability exposed by 2024 shortage - production capacity not matching demand',
        'Regulatory innovation exposure - synthetic nicotine (Velo Plus) may circumvent tobacco-derived regulations'
      ],
      competitiveContext: 'On! 7.1 - strong product innovation with 8 strength levels and On! Plus larger pouches, FDA authorization secured. Velo 7.4 - Velo Plus represents most significant 2024 innovation (synthetic nicotine, improved pouch design), BAT global #1 pouches. Rogue 6.5 - only brand offering pouches, gum, lozenges, AND tablets, but #3 share limits investment.',
      scoreBreakdown: {
        trackRecord: 9.2,
        capability: 7.5,
        businessModel: 8.0
      }
    },
    {
      id: 'c3',
      name: 'Market Disruption',
      section: 'C',
      score: 7.2,
      tier: 'Transforming',
      categoryAverage: 6.4,
      competitorScores: [
        { name: 'On!', score: 6.5 },
        { name: 'Velo', score: 6.8 },
        { name: 'Rogue', score: 5.8 }
      ],
      wsn: {
        headline: 'Zyn has 74% market share, but competitors are attacking from every direction.',
        subline: 'State flavor bans could wipe out 30-40% of revenue. Meanwhile, tobacco giants and well-funded startups are coordinating attacks on Zyn\'s market share.',
        what: 'Key disruptions: State flavor ban proliferation (CA January 2025, MA complete ban, NY/NJ emerging), FDA regulatory pathway acceleration enabling competitor parity, Synthetic nicotine emergence (Velo Plus), Youth marketing scrutiny (usage doubled to 480,000).',
        evidence: 'Zyn faces the most disruption pressure as the leader everyone is targeting. On! benefits from being the challenger. Velo is betting on synthetic nicotine which carries regulatory uncertainty. Rogue\'s value positioning partly insulates it from premium segment attacks.',
        soWhat: '2024 supply shortage proved ZYN\'s 75% share is not sticky - Rogue (+136%) and On! (+77%) permanently captured switching customers. Tucker Carlson launched competing \'ALP\' brand. Sesh raised $40M from ZYN\'s own inventor.',
        nowWhat: 'Three-horizon strategy: (1) Immediate - accelerate Colorado facility, stockpile inventory, develop unflavored variants for ban markets. (2) Near-term - leverage FDA for modified risk claims, match Velo pricing. (3) Medium-term - build compliance infrastructure, acquire DTC brands, prepare for flavor restrictions.'
      },
      strengths: [
        'First-mover FDA advantage - 20 products authorized January 2025, though On! has now achieved parity',
        'Market dominance creates pricing and distribution leverage',
        'Organic cultural momentum via Zynfluencers creates brand equity competitors cannot buy'
      ],
      weaknesses: [
        'State flavor ban proliferation threatens 30-40% of revenue - CA, MA, DC already enacted (Category Disruption)',
        'Multi-front competitive attack: Altria ($250M On! acquisition), BAT (Velo +233%), Sesh ($40M from ZYN inventor) (Competitive Threat)',
        'Youth marketing scrutiny - usage doubled, Schumer investigation, 119 FDA warning letters (Consumer Behavior)'
      ],
      competitiveContext: 'On! 6.5 disruption - benefits from challenger positioning, FDA authorization achieved, Altria distribution muscle but tobacco legacy scrutiny. Velo 6.8 - Velo Plus synthetic nicotine bet, aggressive $3.99 pricing drove 7% category price decline. Rogue 5.8 - value positioning provides relative insulation, Swisher $135M expansion signals commitment.',
      scoreBreakdown: {
        categoryDisruption: 7.8,
        competitiveThreat: 7.5,
        consumerBehavior: 6.2
      }
    }
  ]
};
