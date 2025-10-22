import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Megaphone,
  TrendingUp,
  Target,
  Users,
  BarChart,
  Camera,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Media Marketing | TechMaster Solutions",
  description:
    "Digital marketing strategies, social media management, content creation, and brand promotion to boost your online presence and drive growth.",
}

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/digital-marketing-campaign.png"
          alt="Media marketing services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Media Marketing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mb-6 md:mb-8">
            Strategic digital marketing campaigns, social media management, and content creation
            to amplify your brand and drive measurable results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8">
              Boost Your Brand
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About / Overview Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Marketing Services
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Ready to take your brand to the next level? <strong>Dexter Trade Ltd</strong> is your
            dedicated partner for full-service media marketing. We specialize in dramatically
            boosting your social presence and ensuring your brand captures attention where it
            matters most. This includes strategically running powerful Meta and Google Ads
            campaigns to drive conversions, crafting engaging graphics for your website and social
            channels, and providing swift, professional handling of all social media queries. We
            provide the complete digital toolkit to grow your brand and deliver measurable results.
          </p>
        </div>
      </section>

      {/* Marketing Strategy Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Our Approach
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Data-Driven Marketing Strategy
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                We combine creativity with analytics to develop marketing strategies that resonate
                with your audience and deliver measurable ROI.
              </p>
              <div className="space-y-4">
                {strategyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/marketing-analytics-dashboard.png"
                alt="Marketing analytics dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Proven Results
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Marketing That Delivers
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Our marketing campaigns consistently deliver impressive results across various
              industries and business sizes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {marketingResults.map((result, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-sm border">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {result.metric}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {result.description}
                </div>
                <div className="text-xs text-muted-foreground/70">{result.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Subscription Plans
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Choose Your Marketing Plan
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Select the perfect marketing package that fits your business needs and budget. All
              plans include dedicated support and monthly reporting.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-500 relative"
                    : "bg-card border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                      £{plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Need a custom solution?{" "}
              <Link
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Contact us
              </Link>{" "}
              for enterprise pricing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Amplify Your Brand?
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Let's create a marketing strategy that drives real results and grows your business.
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 w-full sm:w-auto">
                Get Marketing Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto bg-transparent"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const strategyFeatures = [
  { title: "Audience Research", description: "Deep analysis of your target audience demographics, behaviors, and preferences." },
  { title: "Competitive Analysis", description: "Comprehensive review of competitor strategies to identify opportunities and advantages." },
  { title: "Brand Positioning", description: "Strategic brand positioning to differentiate your business in the marketplace." },
  { title: "Campaign Optimization", description: "Continuous testing and optimization to improve performance and maximize ROI." },
  { title: "Performance Tracking", description: "Real-time monitoring and detailed analytics to measure success and guide decisions." },
]

const marketingResults = [
  { metric: "150%", description: "Average ROI Increase", timeframe: "Within 6 months" },
  { metric: "300%", description: "Social Media Growth", timeframe: "Average campaign" },
  { metric: "85%", description: "Lead Quality Improvement", timeframe: "First quarter" },
  { metric: "200%", description: "Website Traffic Boost", timeframe: "3-month period" },
]

const subscriptionPlans = [
  {
    name: "Starter",
    price: "250",
    description: "Perfect for small businesses getting started with digital marketing",
    popular: false,
    features: [
      "Social media management (2 platforms)",
      "5 posts per week",
      "Basic content creation",
      "Monthly performance report",
      "Email support",
      "Basic SEO optimization",
    ],
  },
  {
    name: "Growth",
    price: "500",
    description: "Ideal for growing businesses looking to expand their reach",
    popular: true,
    features: [
      "Social media management (4 platforms)",
      "10 posts per week",
      "Professional content creation",
      "Google Ads management ($500 ad spend)",
      "Bi-weekly performance reports",
      "Priority email & phone support",
      "Advanced SEO optimization",
      "Basic influencer outreach",
    ],
  },
  {
    name: "Professional",
    price: "750",
    description: "Comprehensive marketing for established businesses",
    popular: false,
    features: [
      "Social media management (all platforms)",
      "15 posts per week",
      "Premium content & video creation",
      "Google & Facebook Ads ($1000 ad spend)",
      "Weekly performance reports",
      "Dedicated account manager",
      "Advanced SEO & SEM",
      "Influencer partnerships",
      "Email marketing campaigns",
    ],
  },
  {
    name: "Enterprise",
    price: "1000",
    description: "Full-scale marketing solutions for large organizations",
    popular: false,
    features: [
      "Complete social media management",
      "Daily content creation",
      "Professional video production",
      "Multi-platform advertising ($2500 ad spend)",
      "Real-time analytics dashboard",
      "24/7 dedicated support team",
      "Complete SEO/SEM management",
      "Celebrity influencer access",
      "Advanced email automation",
      "Custom landing pages",
      "Conversion rate optimization",
    ],
  },
]
