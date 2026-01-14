import { GDTAnalysis } from '@/lib/types';

/**
 * Adobe Creative Cloud (Global) GDT Analysis Data
 * Generated: 2026-01-14 (Full Automation)
 * Source: 9 GDT Agent JSON outputs + GDT Summary
 * Competitors: Canva, Apple (Final Cut Pro, Motion), CapCut (ByteDance)
 */
export const adobeCreativeCloudAnalysis: GDTAnalysis = {
  brand: {
    id: 'adobe-creative-cloud',
    name: 'Adobe Creative Cloud',
    market: 'Global',
    category: 'Creative Software / Digital Creative Tools',
    date: '2026-01-14',
    accentColor: '#FF0000',
    password: 'adobe2026'
  },
  totalScore: 60.26,
  growthSummary: {
    headline: 'Professional Fortress Under Siege',
    summary: 'Adobe commands 70% market share and $12.68B in Creative Cloud revenue, maintaining unassailable dominance among enterprise and professional creators. Yet this fortress masks accelerating erosion: Canva captures 240M users with 95% Fortune 500 penetration, CapCut owns 81% of mobile video editing, and subscription fatigue has triggered FTC intervention and #DitchAdobe movements.',
    paradox: 'Adobe\'s greatest strength—industry-standard complexity that justifies premium pricing—has become its core vulnerability as competitors prove \'good enough\' creative tools can be free, accessible, and mobile-first.',
    path: 'Transform from extractive subscription gatekeeper to creative partnership platform: simplify entry, defend enterprise, and recapture the emerging creator pipeline before Gen Z cements Adobe-free workflows.',
    sequence: 'Position → Unlock → Connect',
    image: 'adobe-creative-cloud-growth-summary.png'
  },
  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 20.0,
      tier: 'Aligned',
      components: [
        { id: 'a1', name: 'Brand Positioning', score: 6.4, tier: 'Distinctive', section: 'A' },
        { id: 'a2', name: 'Pricing Power', score: 7.4, tier: 'Strong Pricing Power', section: 'A' },
        { id: 'a3', name: 'Business Growth', score: 6.2, tier: 'Moderate Growth', section: 'A' }
      ]
    },
    {
      id: 'B',
      name: 'Customer Connection',
      score: 18.16,
      tier: 'Challenged',
      components: [
        { id: 'b1', name: 'Emotional Connection', score: 5.8, tier: 'Reluctant Loyalty', section: 'B' },
        { id: 'b2', name: 'Cultural Relevance', score: 6.2, tier: 'Strong Cultural Relevance', section: 'B' },
        { id: 'b3', name: 'Experience Excellence', score: 6.16, tier: 'Competitive Excellence', section: 'B' }
      ]
    },
    {
      id: 'C',
      name: 'Degree of Transformation',
      score: 22.1,
      tier: 'Progressive',
      components: [
        { id: 'c1', name: 'Brand Distinctiveness', score: 7.8, tier: 'Strong Assets', section: 'C' },
        { id: 'c2', name: 'Brand Innovation', score: 7.1, tier: 'Innovation Leader', section: 'C' },
        { id: 'c3', name: 'Disruption Urgency', score: 7.2, tier: 'High Pressure', section: 'C' }
      ]
    }
  ],
  growthBarrier: {
    headline: 'The Accessibility-Complexity Paradox',
    description: 'Adobe has optimized for professional power users while losing the pipeline of emerging creators to simpler, cheaper, mobile-first alternatives. The very complexity that creates switching costs for enterprises makes Adobe irrelevant to the generation that will define creative culture by 2030.',
    items: [
      {
        constraint: 'Subscription Fatigue & Trust Erosion',
        component: 'B1, B3, A2',
        score: 4.6,
        evidence: '50-68% Photography Plan price increases, FTC lawsuit for deceptive cancellation practices, Trustpilot 1.1/5 rating with 91% one-star reviews, #DitchAdobe trends. Users describe relationship as \'hostage\' rather than partnership.'
      },
      {
        constraint: 'Lost Creator Pipeline',
        component: 'A1, B2, C3',
        score: 5.4,
        evidence: 'CapCut captures 26% of beginner editors vs Adobe\'s 24%. Canva serves 70M students globally. Gen Z creators build workflows without Adobe, defaulting to free/mobile-first tools. Adobe is not where the next generation learns to create.'
      },
      {
        constraint: 'Collaborative Design Void',
        component: 'A3, C2',
        score: 5.3,
        evidence: 'Failed $20B Figma acquisition ($1B termination fee, $38B+ market cap erosion). Adobe XD abandoned. Figma now 77% of UI design market, valued at $57B post-IPO. Complete strategic surrender of fastest-growing design discipline.'
      }
    ]
  },
  growthSolution: {
    headline: 'From Subscription Gatekeeper to Creative Partner',
    description: 'Adobe must transform its relationship with creators from extraction to investment. This requires immediate trust repair through pricing transparency, medium-term accessibility through genuine entry-level products, and long-term pipeline capture through education and community.',
    actions: [
      'Repair Subscription Trust: Eliminate hidden fees, simplify cancellation, introduce flexible pricing tiers including usage-based options. The 50% Photography Plan increase destroyed more brand equity than it generated revenue.',
      'Launch Genuine Canva Competitor: Invest in Adobe Express as a standalone freemium platform with clear pathway to Creative Cloud. Canva\'s 240M users prove the market exists; Adobe\'s 37M subscribers prove the conversion potential.',
      'Capture Education Pipeline: Develop free education tier that builds Adobe habits before Canva habits solidify. Canva serves 70M students globally—lose the student, lose the professional.'
    ]
  },
  growthSystem: {
    headline: 'Trust Repair → Accessibility → Pipeline Capture',
    description: 'Use subscription transparency to repair trust, then develop accessible entry points that capture the next generation of creators before they default to alternatives.',
    phases: [
      {
        phase: 'Position',
        description: 'Repair trust, simplify pricing, address regulatory exposure',
        outputs: [
          {
            name: 'Subscription Transparency Initiative',
            score: 9.4,
            purpose: 'Eliminate hidden cancellation fees and early termination penalties to address FTC concerns and rebuild trust',
            componentsAddressed: ['Emotional Connection', 'Experience Excellence'],
            deliverables: ['Transparent monthly pricing without annual commitment traps', 'FTC-compliant cancellation process', 'Simplified 3-tier pricing structure (Express, Pro, Enterprise)']
          },
          {
            name: 'Pricing Architecture Reform',
            score: 8.8,
            purpose: 'Introduce flexible pricing options including usage-based tiers to compete with freemium alternatives',
            componentsAddressed: ['Pricing Power', 'Business Growth'],
            deliverables: ['Usage-based pricing option for occasional users', 'AI credit bundling demonstrating value exchange', 'Competitive prosumer tier at Canva price points']
          }
        ]
      },
      {
        phase: 'Unlock',
        description: 'Develop accessible entry points and mobile-first products',
        outputs: [
          {
            name: 'Adobe Express Transformation',
            score: 9.2,
            purpose: 'Transform Express into genuine Canva competitor with feature parity and clear upgrade pathway',
            componentsAddressed: ['Brand Positioning', 'Disruption Urgency'],
            deliverables: ['Feature parity with Canva Pro', 'Firefly AI integration for accessibility', 'Clear conversion funnel to Creative Cloud']
          },
          {
            name: 'Mobile-First Development',
            score: 8.6,
            purpose: 'Develop mobile-native workflows for Premiere Rush and Lightroom to capture creator economy shift',
            componentsAddressed: ['Business Growth', 'Cultural Relevance'],
            deliverables: ['Premiere Rush feature parity with CapCut', 'TikTok/Instagram native workflow integration', 'Mobile-first creation templates']
          }
        ]
      },
      {
        phase: 'Connect',
        description: 'Build emotional connection and capture next-generation creators',
        outputs: [
          {
            name: 'Education Pipeline Program',
            score: 8.4,
            purpose: 'Expand education program to compete with Canva\'s 70M student base and build Adobe habits early',
            componentsAddressed: ['Brand Positioning', 'Cultural Relevance'],
            deliverables: ['Free education tier for students', 'Curriculum partnerships with schools', 'Certification pathway for emerging creators']
          },
          {
            name: 'Community Partnership Initiative',
            score: 7.8,
            purpose: 'Transform customer support from cost center to relationship builder, evolve Adobe MAX beyond transactional',
            componentsAddressed: ['Emotional Connection', 'Experience Excellence'],
            deliverables: ['Creator fund for emerging talent', 'Mentorship program connecting professionals with students', 'Adobe MAX as genuine creative community platform']
          }
        ]
      }
    ],
    criticalPath: 'Trust Repair → Accessibility → Pipeline Capture → Emotional Connection',
    implementationNotes: 'This is urgent. Every month of delay allows Canva and CapCut to capture more of the emerging creator pipeline. The 50% Photography Plan price increase and FTC lawsuit have created a window where trust repair is possible—but only if Adobe acts decisively. The alternative is watching 70% market share erode to 50% as the next generation defaults to competitors.'
  },
  components: [
    {
      id: 'a1',
      name: 'Brand Positioning',
      section: 'A',
      score: 6.4,
      tier: 'Distinctive',
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'Canva', score: 6.2 },
        { name: 'Apple', score: 5.4 },
        { name: 'CapCut', score: 5.1 }
      ],
      wsn: {
        headline: 'Industry Standard Facing Generational Drift',
        subline: 'Adobe\'s professional dominance is eroding at the edges as accessible competitors capture emerging creators',
        what: 'Adobe maintains 70% market share with $12.68B Creative Cloud revenue and 37M subscribers. However, Canva (190M MAU) dominates prosumer segments, CapCut commands 81% mobile video editing, and the FTC lawsuit signals trust erosion.',
        evidence: 'CapCut captures 26% of beginner editors vs Adobe\'s 24%. Canva holds 46% presentation share. Growth decelerated from 17.3% (2021) to 10.9% (2024). #DitchAdobe trends and GitHub \'Adobe Alternatives\' repo document active defection.',
        soWhat: 'Adobe\'s \'professional creative standard\' positioning remains accurate but increasingly narrow. The enterprise moat is solid but finite—without capturing emerging creators, Adobe risks becoming the IBM of creative software.',
        nowWhat: 'Simplify entry-level pricing to defuse regulatory pressure. Reclaim UX design position post-Figma failure. Accelerate mobile and browser-based tools to compete where CapCut and Canva dominate.'
      },
      strengths: [
        '70% market share with near-universal Fortune 500 penetration and prohibitive switching costs',
        'Firefly AI first-mover advantage with 22B generated assets and commercially-safe training data',
        '20+ integrated applications creating unmatched workflow continuity competitors cannot replicate'
      ],
      weaknesses: [
        'FTC lawsuit over hidden cancellation fees and subscription friction damaging brand trust',
        'Complete failure in UX/UI design after blocked Figma acquisition and XD abandonment',
        'Losing creator pipeline as CapCut and Canva capture where next generation learns to create'
      ],
      competitiveContext: 'Canva dominates accessibility with 240M users and 95% Fortune 500 penetration. Apple maintains quality positioning with one-time purchase model. CapCut owns mobile-first with 300M MAU and free pricing.',
      scoreBreakdown: {
        meaningfulScore: 7.6,
        differentScore: 8.4,
        mdiScore: 6.4
      }
    },
    {
      id: 'a2',
      name: 'Pricing Power',
      section: 'A',
      score: 7.4,
      tier: 'Strong Pricing Power',
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Canva', score: 5.8 },
        { name: 'Apple', score: 7.8 },
        { name: 'CapCut', score: 4.2 }
      ],
      wsn: {
        headline: 'Premium Pricing Fortress Under Siege from Free Alternatives',
        subline: 'Adobe commands 89% gross margins but faces growing consumer backlash and freemium erosion',
        what: 'Adobe maintains exceptional pricing power in enterprise ($79.99/seat/month) and professional segments with 95% retention. However, the Photography plan 50% increase triggered significant backlash, and freemium competitors are capturing the beginner pipeline.',
        evidence: 'Gross margin 89.28% (95th percentile). $21.5B revenue. Yet Canva\'s 240M users and CapCut\'s 300M MAU operate on freemium, capturing 26% of beginners vs Adobe\'s 24%.',
        soWhat: 'Pricing power is bifurcated: fortress-like in enterprise, eroding in prosumer. Freemium competitors have eliminated price as a barrier, training the next generation on different tools.',
        nowWhat: 'Defend enterprise pricing while developing competitive prosumer tier. Consider strategic freemium entry point for beginners to protect professional pipeline.'
      },
      strengths: [
        '89.28% gross margin with proven ability to implement 16-18% price increases while maintaining 95% retention',
        'Entrenched enterprise position with high switching costs from workflow integration',
        'Tiered pricing architecture allows value segmentation with student/educator discounts'
      ],
      weaknesses: [
        'Freemium competition fundamentally undermining value proposition in prosumer segments',
        'Subscription fatigue manifesting in vocal backlash and \'greed\' accusations',
        'Failed Figma acquisition ($1B break fee) revealed inability to acquire competitive position'
      ],
      competitiveContext: 'Canva operates freemium with 22M paid of 240M users. Apple offers one-time $299 purchase plus new $13/month Creator Studio. CapCut is free with 300M MAU, subsidized by ByteDance.',
      scoreBreakdown: {
        pricePremiumScore: 8.2,
        elasticityScore: 6.8,
        valuePerceptionScore: 7.2
      }
    },
    {
      id: 'a3',
      name: 'Business Growth',
      section: 'A',
      score: 6.2,
      tier: 'Moderate Growth',
      categoryAverage: 6.5,
      competitorScores: [
        { name: 'Canva', score: 8.4 },
        { name: 'Apple', score: 5.8 },
        { name: 'CapCut', score: 7.9 }
      ],
      wsn: {
        headline: 'Revenue Fortress Masks Decelerating Growth Engine',
        subline: 'Record $23.8B revenue belies slowing Creative Cloud momentum and failed M&A strategy',
        what: 'Creative Cloud generated $12.68B in FY2024 (+10% YoY) with $13.85B ARR. However, growth is decelerating from mid-teens rates. Failed $20B Figma acquisition cost $1B in fees and $38B+ market cap erosion.',
        evidence: 'FY2025 revenue $23.77B (+11% YoY). Firefly AI-influenced ARR exceeds $5B. Yet Canva at $3.3B ARR (37% growth) and CapCut at 300M+ MAU are capturing faster-growing segments.',
        soWhat: 'Adobe has structurally downshifted from high-growth SaaS leader to mature cash cow. Enterprise remains strong but prosumer and individual segments are hemorrhaging to alternatives.',
        nowWhat: 'Execute strategic pivot from price extraction to platform expansion. Launch aggressive freemium tier, develop mobile-native video, and determine collaborative design strategy.'
      },
      strengths: [
        '70% creative software market share with 85%+ professional adoption and near-insurmountable enterprise switching costs',
        'Firefly AI platform generating $5B+ in AI-influenced ARR with 90% top-50 account adoption',
        '$23.77B annual revenue, $8.06B operating cash flow, and $6B+ cash reserves'
      ],
      weaknesses: [
        'Complete strategic void in collaborative design following Figma failure and XD abandonment',
        'Severe prosumer segment erosion to Canva (240M MAU, 8x growth) and CapCut (81% mobile video share)',
        'Extractive pricing strategy creating measurable customer backlash and brand damage'
      ],
      competitiveContext: 'Canva growing 37% to $3.3B ARR with 240M users. CapCut commands 300M+ MAU with 81% mobile video share. Apple maintains steady position with ecosystem lock-in.',
      scoreBreakdown: {
        growthPerformance: 6.8,
        strategyExecution: 5.3,
        competitivePosition: 6.5
      }
    },
    {
      id: 'b1',
      name: 'Emotional Connection',
      section: 'B',
      score: 5.8,
      tier: 'Reluctant Loyalty',
      categoryAverage: 6.4,
      competitorScores: [
        { name: 'Canva', score: 7.6 },
        { name: 'Apple', score: 7.2 },
        { name: 'CapCut', score: 6.1 }
      ],
      wsn: {
        headline: 'Hostage Loyalty: Professional Dependency Masquerades as Emotional Connection',
        subline: '95% retention conceals transactional relationship where users stay because switching costs are prohibitive, not because they love Adobe',
        what: 'Adobe exhibits paradoxical emotional profile: Trustpilot 1.1/5 (91% one-star) yet 37M subscribers and 95% retention. This reveals relationship built on professional dependency, not genuine affinity.',
        evidence: 'NPS score 24 (49th percentile). FTC lawsuit for \'trap\' subscription practices. ToS AI controversy sparked 5M+ view backlash. 75% of hiring managers cite Adobe certifications. Generational divide: veterans show loyalty, under-30s increasingly prefer alternatives.',
        soWhat: 'Adobe\'s emotional connection is fundamentally fragile. Users defend capabilities while resenting business practices, creating volatile state where viable alternatives could trigger mass defection.',
        nowWhat: 'Transition from extraction to partnership. Address FTC concerns, transform customer support, rebuild community beyond transactional Adobe MAX, shift narrative from \'industry standard you must use\' to \'creative partner invested in your success.\''
      },
      strengths: [
        'Professional identity fusion where Adobe mastery equals creative credibility',
        'Behavioral loyalty despite sentiment with 95% retention and 37M subscribers',
        'Nostalgic connection among veteran creatives with 40-year brand heritage'
      ],
      weaknesses: [
        'Trustpilot 1.1/5 with 91% one-star reviews indicates severe satisfaction crisis',
        'FTC lawsuit and ToS controversy have eroded trust with extractive perception',
        'Generational vulnerability as under-30 creators show minimal attachment'
      ],
      competitiveContext: 'Canva wins through democratization mission and community belonging. Apple wins through aspirational design and one-time purchase goodwill. CapCut benefits from free access and TikTok integration.',
      scoreBreakdown: {
        iatScore: 5.4,
        affinityScore: 5.6,
        loyaltyScore: 6.4
      }
    },
    {
      id: 'b2',
      name: 'Cultural Relevance',
      section: 'B',
      score: 6.2,
      tier: 'Strong Cultural Relevance',
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'Canva', score: 7.4 },
        { name: 'Apple', score: 6.8 },
        { name: 'CapCut', score: 7.1 }
      ],
      wsn: {
        headline: 'Industry Standard Struggling with Cultural Currency',
        subline: 'Adobe dominates professional infrastructure but loses cultural conversation to nimbler competitors',
        what: 'Adobe maintains cultural presence through industry-defining tools and Creative Trends report. However, Firefly training data scandal, ToS controversy, and failed Figma acquisition have positioned Adobe as incumbent to rebel against rather than innovator to emulate.',
        evidence: 'CapCut surpassed Premiere Pro among beginner editors. Designer community celebrated failed Figma acquisition. Penpot saw 5,600% growth as designers sought alternatives. Creative Trends respected but seen as market research dressed as thought leadership.',
        soWhat: 'Adobe\'s cultural relevance is bifurcated: revered as necessity, resented as gatekeeper. Younger creators who will define future creative culture are building workflows that bypass Adobe entirely.',
        nowWhat: 'Reclaim authenticity by addressing trust deficit directly. Invest in creator-first features. Evolve Adobe MAX from enterprise showcase to genuine creative community platform.'
      },
      strengths: [
        'Creative Trends report establishes thought leadership with 10 years of forecasting credibility',
        'Adobe MAX attracts 10,000+ professionals and generates significant industry coverage',
        'TikTok partnership via Adobe Express positions brand within creator economy infrastructure'
      ],
      weaknesses: [
        'Multiple 2024 authenticity failures damaged trust with creative community',
        'Perceived as corporate incumbent rather than creative innovator among Gen Z',
        'Failed Figma acquisition revealed Adobe as threat to innovation in designer perception'
      ],
      competitiveContext: 'Canva leads democratization narrative with 240M users. CapCut owns Gen Z with TikTok integration. Apple maintains premium innovation positioning.',
      scoreBreakdown: {
        presence: 7.2,
        impact: 6.5,
        authenticity: 5.1,
        timing: 5.8,
        resonance: 6.4
      }
    },
    {
      id: 'b3',
      name: 'Experience Excellence',
      section: 'B',
      score: 6.16,
      tier: 'Competitive Excellence',
      categoryAverage: 7.19,
      competitorScores: [
        { name: 'Canva', score: 7.68 },
        { name: 'Apple', score: 7.46 },
        { name: 'CapCut', score: 7.44 }
      ],
      wsn: {
        headline: 'Professional Power Undermined by Purchase Pain',
        subline: 'Adobe dominates usage excellence but hemorrhages trust through subscription friction',
        what: 'Adobe delivers exceptional usage excellence (7.8) with industry-standard tools. However, purchase experience (4.6) suffers from subscription lock-in, early termination fees, and cancellation difficulty.',
        evidence: 'Professional users rate usage at 8.2 while casual users rate engagement at 4.1. 47% cite subscription concerns, 31% mention cancellation difficulty. Canva outperforms by 3.1-3.2 points in engagement and purchase.',
        soWhat: 'Adobe\'s experience gap is existential vulnerability. Professional users tolerate friction because alternatives lack capability, but tolerance erodes as competitors close feature gap.',
        nowWhat: 'Eliminate early termination fees. Introduce transparent monthly pricing. Launch skill-based onboarding. Develop Adobe Express as genuine Canva competitor. Transform support to customer success.'
      },
      strengths: [
        'Usage excellence (7.8) delivers industry-standard capabilities competitors cannot match',
        'Communication excellence (7.2) leverages decades of professional brand equity',
        'Cross-application ecosystem creates workflow efficiency single-product competitors cannot replicate'
      ],
      weaknesses: [
        'Purchase excellence (4.6) reflects subscription friction and cancellation difficulty',
        'Engagement excellence (5.4) shows steep learning curves that competitors exploit',
        'Loyalty excellence (5.8) indicates mixed support and transactional relationship'
      ],
      competitiveContext: 'Canva leads with 7.68 through accessibility and frictionless purchase. Apple scores 7.46 with quality and one-time purchase. CapCut achieves 7.44 with free access and mobile optimization.',
      scoreBreakdown: {
        communication: 7.2,
        engagement: 5.4,
        purchase: 4.6,
        usage: 7.8,
        loyalty: 5.8
      }
    },
    {
      id: 'c1',
      name: 'Brand Distinctiveness',
      section: 'C',
      score: 7.8,
      tier: 'Strong Assets',
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Canva', score: 6.8 },
        { name: 'Apple', score: 5.9 },
        { name: 'CapCut', score: 5.4 }
      ],
      wsn: {
        headline: 'Creative Industry\'s Most Recognized Icons Face Genericization Threat',
        subline: 'Adobe\'s visual system dominates professional recognition but \'Photoshopped\' risks trademark erosion',
        what: 'Adobe possesses one of software\'s most distinctive visual identity systems. Two-letter icons (Ps, Ai, Pr) achieve near-universal recognition. Mother Design rebrand unified the \'A\' icon with streamlined Adobe Red palette.',
        evidence: 'Over 90% of creative professionals use Adobe products. 41M subscribers with 95%+ retention. \'Photoshopped\' has become generic verb appearing in Oxford English Dictionary contexts. Canva at 260M users eroding category entry points.',
        soWhat: 'Distinctive assets are double-edged sword. Iconic recognition among professionals, but genericization of \'Photoshopped\' represents brand dilution. Canva and CapCut capturing entry points Adobe historically owned.',
        nowWhat: 'Defend \'Photoshop\' trademark more aggressively. Leverage unified Adobe Lens visual system. Simplify product discovery for non-professional segments to reclaim category entry points.'
      },
      strengths: [
        'Two-letter icon system achieves near-universal recognition among creative professionals',
        'Adobe Red color creates 52% higher brand salience than competitors',
        'Product names like Photoshop and Illustrator are category-defining terms'
      ],
      weaknesses: [
        '\'Photoshopped\' as generic verb represents trademark genericization risk',
        '56-product portfolio complexity creates navigation confusion',
        'Firefly AI brand awareness lags behind Midjourney and DALL-E'
      ],
      competitiveContext: 'Canva at 6.8 with distinctive purple and design democratization message. Apple at 5.9 with premium design heritage. CapCut at 5.4 as newer entrant building recognition.',
      scoreBreakdown: {
        uniqueness: 8.5,
        fame: 8.8,
        attribution: 6.8,
        entryPoint: 7.2
      }
    },
    {
      id: 'c2',
      name: 'Brand Innovation',
      section: 'C',
      score: 7.1,
      tier: 'Innovation Leader',
      categoryAverage: 6.4,
      competitorScores: [
        { name: 'Canva', score: 7.8 },
        { name: 'Apple', score: 6.2 },
        { name: 'CapCut', score: 7.5 }
      ],
      wsn: {
        headline: 'AI-Powered Renaissance Masks Innovation Execution Failures',
        subline: 'Firefly\'s 22B assets demonstrate capability, but abandoned products reveal strategic dysfunction',
        what: 'Adobe maintains genuine innovation leadership through Firefly AI (29% market share, 72% Fortune 500 adoption) and $3.2B annual R&D investment. However, XD abandonment, failed Figma acquisition, and mobile gaps reveal inconsistent execution.',
        evidence: 'Firefly 22B+ generated assets, 34% plan upgrade rate for AI access. 1,500+ AI researchers, 2,000+ patents. Yet $20B Figma blocked, XD in maintenance mode, Premiere Rush lacks CapCut parity.',
        soWhat: 'Adobe\'s innovation profile reflects exceptional capability with strategic execution struggles. Firefly cannot compensate for failures in collaborative design, mobile video, and accessible entry-level tools.',
        nowWhat: 'Accelerate mobile-native development. Determine collaborative design strategy post-Figma. Develop Express as genuine innovation platform. Explore business model innovation beyond rigid subscription.'
      },
      strengths: [
        'Firefly AI leadership with 29% market share and commercially-safe training differentiation',
        '$3.2B annual R&D (13% of revenue) funding 1,500+ AI researchers',
        '40-year track record from Photoshop (1990) to Creative Cloud (2013) to Firefly (2023)'
      ],
      weaknesses: [
        'Failed $20B Figma acquisition and XD abandonment leave no collaborative design answer',
        'Mobile innovation gap with CapCut commanding 81% share while Premiere Rush lags',
        'Subscription-only business model creates friction competitors exploit'
      ],
      competitiveContext: 'Canva at 7.8 innovates faster in accessible design with Magic Studio AI. CapCut at 7.5 leads mobile video with features Adobe cannot match. Apple at 6.2 shows limited innovation ambition.',
      scoreBreakdown: {
        trackRecord: 8.2,
        capability: 7.4,
        businessModel: 5.7
      }
    },
    {
      id: 'c3',
      name: 'Disruption Urgency',
      section: 'C',
      score: 7.2,
      tier: 'High Pressure',
      categoryAverage: 6.0,
      competitorScores: [
        { name: 'Canva', score: 4.2 },
        { name: 'Apple', score: 5.5 },
        { name: 'CapCut', score: 4.8 }
      ],
      wsn: {
        headline: 'Adobe Faces Multi-Front Disruption but Maintains Defensive Moats',
        subline: 'Generative AI reshapes category while democratization challengers erode pricing power',
        what: 'Adobe confronts disruption from three vectors: generative AI commoditizing creative tasks, democratization platforms (Canva $3.3B ARR, CapCut 300M MAU) capturing prosumer segments, and mobile-first tools shifting creation away from desktop.',
        evidence: 'Canva 10.26% market share with 95% Fortune 500 penetration. CapCut 81% mobile video editing. Figma 77% UI design. Apple Creator Studio at $13/month vs Adobe CC at $60. Gen Z prefers TikTok over Google (51%).',
        soWhat: 'Disruption is significant but segment-differentiated. Enterprise defensible, professional stable but under pricing pressure, prosumer actively migrating to alternatives.',
        nowWhat: 'Immediate: Address subscription fatigue with flexible pricing. Short-term: Accelerate Express and mobile workflows. Medium-term: Redefine subscription around outcomes rather than seat access.'
      },
      strengths: [
        'Enterprise moat with 90% top-50 account AI adoption and high switching costs',
        'Firefly leads AI design at 29% share with unique commercial-safe positioning',
        'Professional standard status with 90% adoption and 57% Sundance films edited in Premiere'
      ],
      weaknesses: [
        'Subscription pricing backlash at critical mass with FTC intervention',
        'Lost collaborative design to Figma (77% share, $57B post-IPO)',
        'Prosumer capture failing as Canva and CapCut win accessibility narrative'
      ],
      competitiveContext: 'Canva at 4.2 is disruption beneficiary, not facing disruption. Apple at 5.5 disrupts Adobe more than faces disruption with Creator Studio. CapCut at 4.8 faces regulatory risk but otherwise benefits from video tailwinds.',
      scoreBreakdown: {
        categoryDisruption: 7.5,
        competitiveThreat: 7.0,
        consumerBehavior: 7.1
      }
    }
  ]
};
