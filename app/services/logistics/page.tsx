import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Truck, Package, MapPin, Clock, BarChart, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Logistics Services | TechMaster Solutions",
  description:
    "Comprehensive logistics solutions including supply chain management, transportation, warehousing, and delivery optimization.",
}

export default function LogisticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/modern-logistics-warehouse-with-trucks-and-shippin.jpg"
          alt="Logistics services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Logistics Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mb-6 md:mb-8">
            Streamline your supply chain with our comprehensive logistics solutions including transportation,
            warehousing, and delivery optimization services.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8">
              Optimize Your Supply Chain
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-4">
              Logistics Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              End-to-End Supply Chain Management
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              From warehousing to last-mile delivery, we provide comprehensive logistics solutions that optimize your
              supply chain and reduce operational costs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {logisticsServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group text-center border"
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                  <service.icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Process */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Streamlined Logistics Operations
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We follow a systematic approach to optimize your logistics operations with real-time tracking and
              data-driven insights.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {logisticsProcess.map((step, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-sm text-center border">
                  <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-orange-700 dark:text-orange-300 font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-4">
              Technology Stack
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Advanced Logistics Technology
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We leverage cutting-edge technology including IoT, GPS tracking, and AI-powered route optimization to
              enhance logistics efficiency.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(logisticsTech).map(([category, techs]) => (
                <div key={category} className="text-center">
                  <h3 className="text-lg font-bold mb-4 text-orange-600 dark:text-orange-400">{category}</h3>
                  <div className="space-y-2">
                    {techs.map((tech, index) => (
                      <div key={index} className="bg-card rounded-lg p-3 text-sm font-medium border text-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/logistics-control-center-with-multiple-screens-sho.jpg"
                alt="Logistics control center"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Efficient Logistics Solutions
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Our comprehensive logistics services help businesses reduce costs, improve delivery times, and enhance
                customer satisfaction through optimized supply chain management.
              </p>
              <div className="space-y-4">
                {logisticsBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 dark:text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Logistics?</h2>
          <p className="text-gray-300 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Let's discuss your logistics challenges and create a customized solution that streamlines your supply chain
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 w-full sm:w-auto"
              >
                Get Logistics Consultation
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

const logisticsServices = [
  {
    title: "Transportation Management",
    description: "Efficient transportation solutions with route optimization and real-time tracking capabilities.",
    icon: Truck,
  },
  {
    title: "Warehousing Solutions",
    description: "Modern warehouse management with inventory control and automated storage systems.",
    icon: Package,
  },
  {
    title: "Supply Chain Optimization",
    description: "End-to-end supply chain analysis and optimization for maximum efficiency and cost reduction.",
    icon: BarChart,
  },
  {
    title: "Last-Mile Delivery",
    description: "Fast and reliable last-mile delivery solutions with customer tracking and notifications.",
    icon: MapPin,
  },
  {
    title: "Real-Time Tracking",
    description: "Advanced GPS tracking and monitoring systems for complete shipment visibility.",
    icon: Clock,
  },
  {
    title: "Secure Logistics",
    description: "Secure handling and transportation of sensitive and high-value goods with full compliance.",
    icon: Shield,
  },
]

const logisticsProcess = [
  {
    title: "Assessment & Planning",
    description: "Analyze your current logistics operations and identify optimization opportunities.",
  },
  {
    title: "Solution Design",
    description: "Design customized logistics solutions tailored to your specific business needs.",
  },
  {
    title: "Implementation",
    description: "Deploy logistics systems and processes with minimal disruption to operations.",
  },
  {
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and optimization for improved performance and efficiency.",
  },
]

const logisticsTech = {
  "Tracking Systems": ["GPS Tracking", "RFID", "IoT Sensors", "Barcode Scanning"],
  "Management Software": ["WMS", "TMS", "ERP Integration", "Route Planning"],
  Analytics: ["Predictive Analytics", "Performance Dashboards", "Cost Analysis", "KPI Monitoring"],
  Communication: ["API Integration", "EDI", "Mobile Apps", "Customer Portals"],
}

const logisticsBenefits = [
  {
    title: "Cost Reduction",
    description: "Reduce logistics costs by up to 30% through optimized routes and efficient operations.",
  },
  {
    title: "Faster Delivery",
    description: "Improve delivery times with smart routing and real-time tracking capabilities.",
  },
  {
    title: "Enhanced Visibility",
    description: "Complete supply chain visibility with real-time tracking and detailed reporting.",
  },
  {
    title: "Scalable Solutions",
    description: "Flexible logistics solutions that scale with your business growth and changing needs.",
  },
  {
    title: "Customer Satisfaction",
    description: "Improve customer satisfaction with reliable delivery and transparent communication.",
  },
]
