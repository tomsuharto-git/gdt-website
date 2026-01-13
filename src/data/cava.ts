import { GDTAnalysis } from '@/lib/types';

/**
 * CAVA (Fast Casual Mediterranean) GDT Analysis
 * Source: outputs/cava-usa-2025-01-07/
 * Analysis Type: Growth Diagnosis
 */
export const cavaAnalysis: GDTAnalysis = {
  brand: {
    id: 'cava',
    name: 'CAVA',
    market: 'USA',
    category: 'Fast Casual Mediterranean',
    date: '2026-01-07',
    accentColor: '#FFD700', // CAVA Yellow
    password: 'cava2026'
  },

  totalScore: 63.7,

  // Growth Summary - The Mediterranean Chipotle that needs to own more than cuisine
  growthSummary: {
    headline: 'Chipotle Built a Cult. CAVA Built a Better Bowl.',
    summary: 'CAVA dominates Mediterranean fast-casual with no scaled competitor. Unit economics are exceptional—$2.9M AUV, 25% restaurant margins, 33% revenue growth. The "Chipotle of Mediterranean" positioning delivers instant comprehension. But this tight focus creates a double-edged sword: CAVA owns a cuisine category, not a brand meaning.',
    paradox: 'CAVA\'s biggest strength is its biggest vulnerability. "Mediterranean" does most of the differentiation work—not "CAVA" itself. Brand awareness sits at 67% even in mature DC markets, 20-30% in new markets. No iconic tagline, no sonic identity, no viral moment. Chipotle built a cult; CAVA built a better bowl.',
    path: 'The path forward is transforming from "Mediterranean restaurant" to "Mediterranean-inspired wellness brand." The health positioning is underleveraged—7 years as #1 ranked diet is an emotional territory no competitor owns. Build distinctive assets that travel beyond cuisine before the window closes.',
    sequence: 'Position → Unlock → Connect',
    image: 'cava-growth-profile.png'
  },

  sections: [
    {
      id: 'A',
      name: 'Brand & Business Alignment',
      score: 24.0,
      tier: 'Strong',
      components: [
        { id: 'a1', name: 'Brand Positioning', score: 7.5, tier: 'Strong', section: 'A' },
        { id: 'a2', name: 'Pricing Power', score: 7.8, tier: 'Strong', section: 'A' },
        { id: 'a3', name: 'Business Growth', score: 8.7, tier: 'Strong', section: 'A' }
      ]
    },
    {
      id: 'B',
      name: 'Customer Connection',
      score: 19.3,
      tier: 'Moderate',
      components: [
        { id: 'b1', name: 'Emotional Connection', score: 6.0, tier: 'Moderate', section: 'B' },
        { id: 'b2', name: 'Cultural Relevance', score: 6.4, tier: 'Moderate', section: 'B' },
        { id: 'b3', name: 'Experience Excellence', score: 6.9, tier: 'Moderate', section: 'B' }
      ]
    },
    {
      id: 'C',
      name: 'Degree of Transformation',
      score: 20.4,
      tier: 'Moderate',
      components: [
        { id: 'c1', name: 'Distinctive Assets', score: 5.8, tier: 'Vulnerable', section: 'C' },
        { id: 'c2', name: 'Brand Innovation', score: 7.8, tier: 'Strong', section: 'C' },
        { id: 'c3', name: 'Market Disruption', score: 6.8, tier: 'Moderate', section: 'C' }
      ]
    }
  ],

  // Growth Barrier
  growthBarrier: {
    headline: 'CAVA Owns a Cuisine, Not a Culture',
    description: 'The brand has built exceptional business fundamentals—but brand equity that lives beyond "Mediterranean food" is missing. As CAVA scales from 415 to 1,000+ locations, what travels isn\'t always what built the original success.',
    items: [
      {
        constraint: 'Asset Gap at Scale',
        component: 'C1',
        score: 5.8,
        evidence: 'CAVA Yellow is emerging but awareness lags Chipotle by 50%+. No tagline, no sonic identity, no mascot. The brand name does work, but "Mediterranean" does more. In new markets at 20-30% awareness, customers don\'t know what CAVA is.'
      },
      {
        constraint: 'Emotional Ceiling',
        component: 'B1',
        score: 6.0,
        evidence: 'Enthusiastic fans exist ("I LOVE CAVA!!!!") but represent a minority. 40% awareness in new markets vs 90% for competitors. No cult following comparable to Chipotle\'s ordering hack culture. Fast-casual\'s transactional nature limits emotional depth.'
      },
      {
        constraint: 'Cultural Beneficiary, Not Creator',
        component: 'B2',
        score: 6.4,
        evidence: 'CAVA rides Mediterranean wellness tailwind (ranked #1 diet 8 years running) but hasn\'t created cultural moments. 156K TikTok followers vs Chipotle\'s 4.6M. No viral campaign, no celebrity partnership, no breakthrough cultural programming.'
      }
    ]
  },

  // Growth Solution
  growthSolution: {
    headline: 'Build Brand Meaning Beyond the Bowl',
    description: 'CAVA\'s Mediterranean positioning is a floor, not a ceiling. The health-halo, Greek heritage, and wellness associations are underleveraged emotional territory. Transform from "best Mediterranean restaurant" to "Mediterranean-inspired wellness brand" while the positioning window remains open.',
    actions: [
      'Claim Mediterranean wellness as emotional territory—"7 years as #1 diet" is an asset no competitor owns',
      'Build distinctive brand assets: a tagline that captures values, sonic identity, visual language beyond yellow',
      'Create a signature cultural moment—CAVA\'s equivalent of Chipotle\'s GuacDance challenge',
      'Leverage Greek immigrant founder story as authentic heritage differentiator',
      'Scale the "Love Button" hospitality program to make emotional connection systematic, not sporadic',
      'Fix digital experience fundamentals before app issues erode the brand promise'
    ]
  },

  // Growth System
  growthSystem: {
    headline: 'Position → Unlock → Connect',
    description: 'CAVA has strong business fundamentals but underdeveloped brand infrastructure. The system starts with expanding positioning beyond cuisine, unlocks through building distinctive assets, and connects by scaling cultural relevance.',
    phases: [
      {
        phase: 'Position',
        description: 'Expand from "Mediterranean restaurant" to "Mediterranean-inspired wellness brand" that owns health, authenticity, and transformation.',
        outputs: [
          {
            name: 'Strategic Brand Platform',
            score: 8.2,
            purpose: 'Define brand meaning beyond cuisine category—capture wellness, Mediterranean lifestyle, and authentic transformation',
            componentsAddressed: ['Brand Positioning', 'Emotional Connection'],
            deliverables: ['Brand architecture refresh', 'Wellness positioning framework', 'Heritage storytelling strategy', 'Competitive differentiation map']
          },
          {
            name: 'Category Leadership',
            score: 8.5,
            purpose: 'Establish CAVA as the Mediterranean category definer, not just leader',
            componentsAddressed: ['Brand Positioning', 'Business Growth'],
            deliverables: ['Category narrative ownership', 'TAM expansion strategy', 'Mediterranean wellness thought leadership', 'Investor story refinement']
          }
        ]
      },
      {
        phase: 'Unlock',
        description: 'Build distinctive brand assets that create recognition and loyalty beyond the product experience.',
        outputs: [
          {
            name: 'Distinctive Assets System',
            score: 9.0,
            purpose: 'Create ownable brand elements that build mental availability as CAVA scales nationally',
            componentsAddressed: ['Distinctive Assets', 'Emotional Connection'],
            deliverables: ['Verbal identity (tagline, brand language)', 'Sonic branding development', 'Visual system evolution', 'App/digital experience redesign']
          },
          {
            name: 'Innovation Acceleration',
            score: 8.0,
            purpose: 'Leverage Connected Kitchen and menu innovation to reinforce brand differentiation',
            componentsAddressed: ['Brand Innovation', 'Experience Excellence'],
            deliverables: ['Menu innovation roadmap', 'Technology experience strategy', 'Project Soul store rollout', 'Digital experience fixes']
          }
        ]
      },
      {
        phase: 'Connect',
        description: 'Scale emotional and cultural connections that transform customers into advocates.',
        outputs: [
          {
            name: 'Culture Strategy',
            score: 8.8,
            purpose: 'Create breakthrough cultural moments that establish CAVA as cultural force, not trend beneficiary',
            componentsAddressed: ['Cultural Relevance', 'Emotional Connection'],
            deliverables: ['Signature campaign development', 'Creator/influencer strategy', 'Cultural programming calendar', 'Heritage activation playbook']
          },
          {
            name: 'Experience Excellence',
            score: 8.3,
            purpose: 'Systematize the hospitality that drives loyalty across all channels and markets',
            componentsAddressed: ['Experience Excellence', 'Emotional Connection'],
            deliverables: ['Love Button program scale', 'Digital experience remediation', 'Service consistency standards', 'Loyalty program optimization']
          }
        ]
      }
    ],
    criticalPath: 'Position → Unlock → Connect',
    implementationNotes: 'Position phase defines what CAVA means beyond Mediterranean cuisine. Unlock phase builds the brand assets needed for national recognition. Connect phase scales emotional resonance. Without distinctive assets (Unlock), cultural investment (Connect) won\'t build CAVA equity—it will build Mediterranean category equity.'
  },

  components: [
    {
      id: 'a1',
      name: 'Brand Positioning',
      section: 'A',
      score: 7.5,
      tier: 'Strong',
      wsn: {
        headline: 'CAVA Owns Mediterranean With Near-Monopoly Clarity',
        subline: 'Uncontested category leadership creates growth runway, but "Mediterranean" may limit total addressable market',
        what: 'CAVA has achieved what few fast-casual brands accomplish: singular ownership of a cuisine category. While Chipotle owns Mexican and Sweetgreen owns salads, CAVA dominates Mediterranean with no scaled competitor. The brand\'s "Chipotle of Mediterranean food" positioning delivers instant comprehension and clear differentiation. With 352+ locations and aggressive expansion (targeting 1,000+ restaurants), CAVA is building the category it will define.',
        evidence: 'CAVA operates 352+ restaurants with plans to reach 1,000+ locations, essentially building Mediterranean fast-casual as a category. No other scaled Mediterranean competitor exists nationally—Chipotle\'s Mediterranean experiment (failed Pizzeria Locale) and Sweetgreen\'s salad focus leave the space open. Brand positioning research shows CAVA scores highest on "healthy," "fresh," and "customizable" attributes versus fast-casual peers. Q3 2024 same-store sales grew 18.1% driven by new customer acquisition.',
        soWhat: 'CAVA\'s positioning clarity is a genuine competitive advantage: consumers immediately understand what CAVA is and why it\'s different. The "Chipotle of Mediterranean" framing provides borrowed credibility. However, this tight positioning creates a double-edged sword: Mediterranean cuisine has inherent ceiling concerns (smaller TAM than Mexican or American casual) and may limit occasion breadth.',
        nowWhat: 'Continue aggressive geographic expansion while Mediterranean space remains uncontested. Expand positioning from "Mediterranean restaurant" to "Mediterranean-inspired wellness brand" to increase occasion breadth. Build distinctive brand assets that transcend cuisine.'
      },
      strengths: [
        'Uncontested category ownership—no scaled national Mediterranean fast-casual competitor exists',
        'Clear positioning shorthand ("Chipotle of Mediterranean") delivers instant comprehension and borrowed credibility',
        'Strong attribute ownership on "healthy," "fresh," and "customizable"—meaningful differentiation versus Chipotle\'s indulgence positioning'
      ],
      weaknesses: [
        'Mediterranean cuisine ceiling concerns—smaller inherent TAM than Mexican or American casual dining',
        'Positioning relies heavily on cuisine category rather than distinctive brand meaning—"Mediterranean" does most of the work',
        'No clear answer to "What is CAVA beyond Mediterranean?"—tight focus limits occasion expansion'
      ],
      categoryAverage: 6.0,
      competitorScores: [
        { name: 'Chipotle', score: 8.5 },
        { name: 'Sweetgreen', score: 6.5 },
        { name: 'Panera', score: 5.5 }
      ],
      scoreBreakdown: {
        meaningfulScore: 7.8,
        differentScore: 7.2,
        mdiScore: 5.6
      }
    },
    {
      id: 'a2',
      name: 'Pricing Power',
      section: 'A',
      score: 7.8,
      tier: 'Strong',
      wsn: {
        headline: 'Disciplined Pricing Creates Sustainable Value Leadership',
        subline: 'Below-inflation price increases and traffic-driven growth prove CAVA\'s price-value equation works',
        what: 'CAVA has raised prices only 12-15% since 2019 while CPI increased 23% and fast food prices jumped 30%. Despite being priced 30% above Chipotle at $13.47 average entree vs $10.31, CAVA achieved 9.5% traffic growth in Q2 2024 and leads the fast-casual segment in customer value perception. The successful launch of premium grilled steak at lamb-equivalent pricing (8.5% of orders) proves customers willingly pay more for quality.',
        evidence: 'BTIG analysis shows CAVA entrees average $13.47 vs Chipotle $10.31 (30% premium), yet CAVA traffic grew 9.5% YoY in Q2 2024 while maintaining 25% restaurant margins. TD Cowen notes CAVA\'s 15% price increase since 2019 "significantly trails" the 25-30% hikes by fast-casual peers. Customer surveys rank CAVA highest in absolute value perception among restaurant brands.',
        soWhat: 'CAVA has earned the rarest asset in competitive fast-casual: permission to charge more. The gap between Chipotle\'s $10.31 base price and CAVA\'s $13.47 represents ~$3 of untapped pricing headroom that customers already accept. CAVA\'s disciplined restraint creates a "pricing reserve" for future flexibility.',
        nowWhat: 'Continue disciplined pricing restraint to widen value perception gap. Pursue menu innovation at premium price points. Consider selective 2-3% increases only after competitor value perception further deteriorates.'
      },
      strengths: [
        'Below-inflation pricing discipline (12-15% vs 23% CPI since 2019) creates future pricing headroom',
        'Traffic-driven growth (9.5% in Q2 2024) proves price-value equation works at premium positioning',
        'Premium menu innovation success (grilled steak at 8.5% order share) demonstrates pricing power'
      ],
      weaknesses: [
        'Absolute price point ($13.47) creates ceiling sensitivity—younger customers showing check management behavior',
        'Price gap vs Chipotle narrows significantly when guac added ($13.12 vs $13.47)',
        'Limited pricing power during cost spikes—absorbed California $20 minimum wage without price increases'
      ],
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Chipotle', score: 7.5 },
        { name: 'Sweetgreen', score: 5.5 },
        { name: 'Panera', score: 5.0 }
      ],
      scoreBreakdown: {
        pricePremiumScore: 8.2,
        elasticityScore: 7.5,
        valuePerceptionScore: 7.8
      }
    },
    {
      id: 'a3',
      name: 'Business Growth',
      section: 'A',
      score: 8.7,
      tier: 'Strong',
      wsn: {
        headline: 'Exceptional Growth Story With Clear Runway to 1,000+ Locations',
        subline: 'Category-defining unit economics and untapped whitespace position CAVA for multi-decade expansion',
        what: 'CAVA delivered $954M revenue in FY2024 (+33% YoY), with same-store sales growth of 13.4% driven primarily by traffic (+9%). The company operates 415 locations (Q3 2025), opened 58 net new restaurants in 2024, and is on track for 64-68 openings in 2025. Unit economics are best-in-class: $2.9M AUV, 25% restaurant-level profit margin, and 50% cash-on-cash returns on new units.',
        evidence: 'FY2024: $954M revenue (+33%), 13.4% SSS with 9% traffic growth, 25% restaurant-level margin, $2.9M AUV. Store growth: 58 net new in 2024, 64-68 planned for 2025, 1,000 target by 2032. William Blair saturation analysis suggests 2,000 domestic location potential based on DC per-capita density. Mediterranean fast-casual TAM: $7.2B in 2024 growing to $16.4B by 2033 (9.5% CAGR).',
        soWhat: 'CAVA has proven it can replicate Chipotle\'s early playbook in a less penetrated, faster-growing segment. The 9% traffic-driven SSS growth demonstrates genuine consumer demand, not just price increases. With only 415 locations vs Chipotle\'s 3,726, CAVA has 5-10x runway remaining.',
        nowWhat: 'Maintain 15-18% unit growth through 2026. Prioritize new market entry over infill to establish geographic presence. Monitor SSS deceleration closely—any sustained drop below 3-4% would signal demand ceiling.'
      },
      strengths: [
        'Exceptional revenue growth: 33% YoY in FY2024 with traffic-driven same-store sales',
        'Best-in-class unit economics: $2.9M AUV, 25% restaurant-level margins, 50% Year-1 cash-on-cash returns',
        'Massive whitespace: 415 locations with credible path to 1,000 by 2032 and 2,000 potential'
      ],
      weaknesses: [
        'SSS deceleration: dropped from 14.4% (Q2 2023) to 2.1% (Q2 2025)—post-IPO normalization',
        'Geographic concentration risk: East Coast/DC heavy, Midwest and West Coast expansion unproven at scale',
        'Premium valuation dependency: 116x forward P/E requires near-perfect execution'
      ],
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'Chipotle', score: 7.5 },
        { name: 'Sweetgreen', score: 6.2 },
        { name: 'Panera', score: 4.3 }
      ],
      scoreBreakdown: {
        growthPerformance: 9.0,
        strategyExecution: 8.5,
        competitivePosition: 8.5
      }
    },
    {
      id: 'b1',
      name: 'Emotional Connection',
      section: 'B',
      score: 6.0,
      tier: 'Moderate',
      wsn: {
        headline: 'Enthusiastic Early Adopters But Lacks Deep Bonds at Scale',
        subline: 'Passionate fans exist in concentrated markets, but 40% awareness in new markets limits emotional resonance',
        what: 'CAVA generates genuine emotional moments through its "Love Button" hospitality feature and Mediterranean wellness positioning, with 8 million loyalty members adding 50,000 weekly. Passionate testimonials ("I LOVE CAVA!!!!", "CHANGED MY ENTIRE LIFE") demonstrate potential for deep connection. However, these enthusiastic fans represent a minority concentrated in established markets. Brand awareness remains at 40% in new markets versus 90% for competitors.',
        evidence: '8M loyalty members growing 50K/week with 230 bps sales lift post-relaunch. Customer testimonials show passion: "I go there to feel happy and excited!" TikTok presence of 156K followers indicates social resonance. However, brand awareness gap is significant: 40% in new markets vs 90% for established competitors. Chipotle leads MBLM brand intimacy rankings at #2 in fast food with 40M+ loyalty members.',
        soWhat: 'CAVA occupies an advantageous but underexploited emotional territory. Mediterranean cuisine\'s inherent health/wellness associations give consumers a "smart choice" feeling. But these advantages aren\'t yet translating into scalable emotional bonds. As CAVA expands to 1,000+ locations, the emotional connection in D.C. won\'t automatically travel.',
        nowWhat: 'Scale the "Love Button" program with employee training to make emotional connection systematic. Leverage Mediterranean wellness positioning more aggressively—"7 years as #1 ranked diet" is underleveraged territory. Create signature rituals that generate organic social advocacy.'
      },
      strengths: [
        'Love Button hospitality creates genuine emotional moments that competitors cannot replicate',
        'Mediterranean wellness positioning aligns with consumer desire to feel healthy and make "smart choices"',
        'Strong social media resonance with younger consumers through self-deprecating humor and creator partnerships'
      ],
      weaknesses: [
        '40% brand awareness in new markets vs 90% for competitors creates emotional connection deficit at scale',
        'No cult following comparable to Chipotle\'s ordering hack culture—passionate fans are a minority',
        'Fast casual\'s transactional nature creates structural barriers to deep emotional bonds'
      ],
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'Chipotle', score: 7.8 },
        { name: 'Sweetgreen', score: 6.4 },
        { name: 'Panera', score: 5.2 }
      ],
      scoreBreakdown: {
        iatScore: 5.5,
        affinityScore: 6.5,
        loyaltyScore: 6.0
      }
    },
    {
      id: 'b2',
      name: 'Cultural Relevance',
      section: 'B',
      score: 6.4,
      tier: 'Moderate',
      wsn: {
        headline: 'CAVA Rides Mediterranean Tailwind But Lacks Cultural Ownership',
        subline: 'Strong category momentum masks underdeveloped cultural identity',
        what: 'CAVA benefits from being positioned at the intersection of two powerful cultural currents—the Mediterranean diet\'s wellness credibility (ranked #1 diet by U.S. News for 8 consecutive years) and Gen Z\'s demand for health-forward customizable dining. The brand\'s authentic Greek immigrant founder story provides genuine heritage credentials. However, CAVA\'s cultural presence remains largely transactional rather than transformational.',
        evidence: '73% of Gen Z consumers express preference for Mediterranean food. YouTube searches for Mediterranean recipes increased 50% since March 2025. CAVA\'s Gen Z app downloads grew 18% YoY. However, Chipotle\'s GuacDance TikTok challenge generated over 1 billion views. CAVA has no equivalent breakthrough cultural moment.',
        soWhat: 'CAVA occupies a favorable but vulnerable cultural position. The Mediterranean cuisine category is ascending culturally, but CAVA hasn\'t established the kind of cultural ownership that Chipotle achieved. Without distinctive cultural programming, CAVA risks commoditization as competitors enter the Mediterranean space.',
        nowWhat: 'Develop signature cultural campaign that establishes Mediterranean dining as CAVA\'s territory. Strategic celebrity/influencer partnership that embodies Mediterranean lifestyle values. Leverage authentic founder heritage story more prominently in cultural storytelling.'
      },
      strengths: [
        'Authentic Greek immigrant founder heritage provides genuine cultural credentials',
        'Positioned at confluence of Mediterranean diet wellness credibility and Gen Z health-conscious demands',
        'Emerging Gen Z traction with 18% YoY growth in app downloads'
      ],
      weaknesses: [
        'No viral/breakthrough cultural moments compared to Chipotle (billion-view campaigns)',
        'Cultural identity derived from category trends rather than self-generated brand movements',
        'Social media following (156K TikTok) significantly trails competitors'
      ],
      categoryAverage: 6.2,
      competitorScores: [
        { name: 'Chipotle', score: 8.7 },
        { name: 'Sweetgreen', score: 7.4 },
        { name: 'Panera', score: 5.8 }
      ],
      scoreBreakdown: {
        presence: 6.0,
        impact: 6.0,
        authenticity: 7.5,
        timing: 7.0,
        resonance: 5.5
      }
    },
    {
      id: 'b3',
      name: 'Experience Excellence',
      section: 'B',
      score: 6.9,
      tier: 'Moderate',
      wsn: {
        headline: 'Solid Fast-Casual Experience With Digital Growing Pains',
        subline: 'Strong in-store fundamentals undermined by inconsistent app execution',
        what: 'CAVA\'s customer experience scores 6.9/10—solid but unremarkable. The brand excels at in-store atmosphere and food quality (scoring 7.4 and 7.6 respectively), but struggles with digital fulfillment and delivery consistency. With 37% of revenue coming through digital channels, these pain points affect a significant portion of transactions.',
        evidence: 'Customer reviews consistently praise fresh ingredients and friendly in-store staff, with 60%+ choosing dine-in. However, app store reviews reveal persistent issues: order accuracy problems, app bugs where "graphics cover up text," delivery portions notably smaller than in-store. Employee reviews (3.6/5 Glassdoor) cite understaffing.',
        soWhat: 'CAVA occupies a vulnerable middle ground—better than Panera\'s deteriorating experience and on par with Chipotle\'s functional execution, but lagging Sweetgreen\'s digital sophistication. At 6.9, CAVA isn\'t creating a competitive moat through experience—it\'s table stakes execution.',
        nowWhat: 'Fix digital fundamentals before expanding further. The app needs immediate UX remediation. Establish delivery portion standards that match in-store experience. Address staffing levels that create inconsistent service quality.'
      },
      strengths: [
        'Fresh, high-quality food consistently outperforms Chipotle on perceived freshness',
        'Warm, attentive in-store service with staff praised for patience and friendliness',
        'Innovative loyalty program with industry-first status matching driving 50K new members weekly'
      ],
      weaknesses: [
        'App plagued by UX issues—tiny icons, checkout bugs, lost orders when changing pickup times',
        'Delivery experience significantly inferior to in-store with smaller portions and missing items',
        'Order accuracy problems persist across locations'
      ],
      categoryAverage: 6.3,
      competitorScores: [
        { name: 'Chipotle', score: 6.8 },
        { name: 'Sweetgreen', score: 7.2 },
        { name: 'Panera', score: 5.4 }
      ],
      scoreBreakdown: {
        communication: 6.5,
        engagement: 7.2,
        purchase: 6.5,
        usage: 7.4,
        loyalty: 7.0
      }
    },
    {
      id: 'c1',
      name: 'Distinctive Assets',
      section: 'C',
      score: 5.8,
      tier: 'Vulnerable',
      wsn: {
        headline: 'CAVA Yellow Emerging But Brand Recognition Lags 50%+',
        subline: 'Strong design foundation undercut by limited national awareness and immature asset ecosystem',
        what: 'CAVA has invested significantly in distinctive brand assets through its 2023 IPO-era rebrand, developed with agency Mythology. The "CAVA Yellow" color serves as the primary visual identifier across restaurants, packaging, uniforms, and digital touchpoints. However, brand awareness sits at only 67% in CAVA\'s most mature market (DC) and drops to 20-30% in newer markets—compared to Chipotle\'s near-universal recognition.',
        evidence: 'William Blair analyst notes CAVA now enters new markets with 20-30% brand awareness versus 10-20% at IPO—progress, but still critically low. CAVA lacks sonic branding entirely, has no iconic mascot or character, and the verbal identity beyond "CAVA" itself lacks memorable taglines. Digital users reached 3.3M in Q1 2024 (+22% YoY) but this is a fraction of Chipotle\'s 40M+ loyalty program.',
        soWhat: 'CAVA\'s distinctive asset portfolio is professionally designed but critically underdeveloped relative to competitors. Byron Sharp\'s research shows brands with strong assets are 52% more salient than rivals—CAVA\'s awareness gap directly impacts mental availability. Without significant asset-building investment, CAVA risks being outspent as it expands nationally.',
        nowWhat: 'Accelerate national advertising to build CAVA Yellow recognition. Develop verbal distinctive assets: a memorable tagline that captures "heart, health, humanity." Consider sonic branding as differentiator. Leverage CPG presence in 650+ grocery stores as brand awareness builder.'
      },
      strengths: [
        'CAVA Yellow is genuinely distinctive in fast-casual where browns, greens, and reds dominate',
        'Professional brand architecture developed by Mythology with sophisticated design language',
        'Digital experience innovation: Work & Co-designed app creates experiential consistency'
      ],
      weaknesses: [
        'Critical awareness gap: 67% in DC, 20-30% in new markets vs near-universal Chipotle recognition',
        'Incomplete asset ecosystem: no sonic branding, no memorable tagline, no iconic character',
        'Asset maturity deficit: 2023 rebrand means only ~2 years of consistent asset deployment'
      ],
      categoryAverage: 6.5,
      competitorScores: [
        { name: 'Chipotle', score: 8.5 },
        { name: 'Sweetgreen', score: 7.2 },
        { name: 'Panera', score: 7.8 }
      ],
      scoreBreakdown: {
        uniqueness: 7.0,
        fame: 4.8,
        attribution: 5.5,
        entryPoint: 5.8
      }
    },
    {
      id: 'c2',
      name: 'Brand Innovation',
      section: 'C',
      score: 7.8,
      tier: 'Strong',
      wsn: {
        headline: 'Fast Company #13 Most Innovative Company 2025',
        subline: 'Multi-pronged innovation balances culinary authenticity with technology investment',
        what: 'CAVA operates a dedicated Innovation Kitchen in Washington DC for real-time menu testing (28-day cycles), has rolled out Connected Kitchen AI systems to 350+ restaurants, invested $10M in Hyphen robotic technology, redesigned stores via "Project Soul" initiative, and launched its largest menu ever in 2026. Digital mix reached 35-40% of sales with 200 basis point loyalty-driven sales increase.',
        evidence: 'Fast Company ranked CAVA #13 on World\'s 50 Most Innovative Companies 2025 list. The chain achieved 16 consecutive quarters of growth with 33% revenue increase in 2024. Connected Kitchen uses AI-powered cameras, predictive analytics, and IoT temperature monitoring. Innovation Kitchen launched Harissa Honey Chicken (first new protein in 5 years).',
        soWhat: 'CAVA\'s innovation strength lies in its balanced approach—maintaining Mediterranean culinary authenticity while investing in operational technology. Unlike Sweetgreen\'s troubled full-automation bet, CAVA innovates incrementally with customer-validated menu items. However, the $10M Hyphen investment trails Chipotle\'s $25M commitment and more advanced deployments.',
        nowWhat: 'Accelerate Connected Kitchen rollout to achieve parity with Chipotle\'s automation advantage. Expand Innovation Kitchen model to additional markets. Consider venture fund similar to Chipotle\'s Cultivate Next to institutionalize innovation pipeline.'
      },
      strengths: [
        'Dedicated Innovation Kitchen enables rapid 28-day test cycles with real consumer feedback',
        'Connected Kitchen AI integrates predictive analytics and IoT sensors across 350+ restaurants',
        'Fast Company #13 Most Innovative Company 2025 validates innovation culture'
      ],
      weaknesses: [
        'Innovation investment trails Chipotle\'s $100M Cultivate Next venture fund',
        'Menu innovation remains incremental rather than category-defining',
        'Digital innovation focused on operational efficiency rather than customer-facing differentiation'
      ],
      categoryAverage: 6.8,
      competitorScores: [
        { name: 'Chipotle', score: 9.0 },
        { name: 'Sweetgreen', score: 6.5 },
        { name: 'Panera', score: 5.5 }
      ],
      scoreBreakdown: {
        trackRecord: 8.0,
        capability: 7.8,
        businessModel: 7.5
      }
    },
    {
      id: 'c3',
      name: 'Market Disruption',
      section: 'C',
      score: 6.8,
      tier: 'Moderate',
      wsn: {
        headline: 'Category Leader with Fragile Moat',
        subline: 'CAVA dominates a small pond while facing existential scale disparity with Chipotle',
        what: 'CAVA has established clear Mediterranean fast-casual category leadership with 415 locations and $2.9M AUV, roughly 4x the size of its nearest Mediterranean competitor. The brand captured 52% unit growth since IPO while 15 largest competitors combined added only 5 net new units. However, this dominance exists within a niche segment ($14.2B Mediterranean) representing less than 8% of the $179B fast-casual market.',
        evidence: 'Market share metrics show CAVA as segment leader: 415 units vs combined 5-unit net growth from 15 competitors. Revenue surpassed $1B for first time in 2025. However, ROIC of 7.4% vs Chipotle\'s 44.7% indicates immature economic moat. Chipotle\'s $100M investment in Mediterranean concept Brassica signals potential competitive encroachment.',
        soWhat: 'CAVA occupies an enviable but precarious position: undisputed leader of a fast-growing niche facing asymmetric competitive risk. The brand lacks scale economics to match Chipotle\'s operational efficiency. If Chipotle accelerates Mediterranean investment, CAVA\'s category leadership becomes a target.',
        nowWhat: 'Accelerate unit growth to 1,000+ locations by 2030 to build scale economics before Chipotle\'s potential Mediterranean expansion. Deepen real estate exclusivity moats. Diversify customer base beyond 18-34 demographic. Monitor Brassica\'s growth trajectory as leading indicator of Chipotle\'s Mediterranean intent.'
      },
      strengths: [
        'Undisputed Mediterranean category leadership: 4x larger than nearest competitor',
        'Superior unit economics: 26.3% restaurant-level margins vs industry 6-9%',
        'Structural cost advantages through centralized production and debt-free balance sheet ($386M cash)'
      ],
      weaknesses: [
        'Massive scale disparity with Chipotle (415 units vs 3,530) and inferior ROIC (7.4% vs 44.7%)',
        'Dangerous demographic concentration: 19% from 18-24 age group facing economic headwinds',
        'Fragile category moat: Mediterranean represents only 8% of fast-casual with low barriers to entry'
      ],
      categoryAverage: 5.8,
      competitorScores: [
        { name: 'Chipotle', score: 9.2 },
        { name: 'Sweetgreen', score: 4.5 },
        { name: 'Panera', score: 5.2 }
      ],
      scoreBreakdown: {
        categoryDisruption: 7.5,
        competitiveThreat: 6.5,
        consumerBehavior: 6.5
      }
    }
  ]
};
