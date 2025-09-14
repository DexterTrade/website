import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, Database, Cog, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Software Development | TechMaster Solutions",
  description:
    "Custom software development, web applications, mobile apps, and enterprise solutions built with cutting-edge technologies.",
}

export default function SoftwarePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/developers-modern-tech.png"
          alt="Software development"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Software Development</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mb-6 md:mb-8">
            Custom software solutions, web applications, and mobile apps built with cutting-edge technologies to drive
            your business forward.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Development Services
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Comprehensive Software Solutions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              From web applications to enterprise software, we deliver scalable solutions that meet your unique business
              requirements.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {softwareServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group text-center border"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Agile Development Methodology
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We follow industry best practices with agile development to ensure quality, transparency, and timely
              delivery.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {developmentProcess.map((step, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-sm text-center border">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-blue-700 dark:text-blue-300 font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Technology Stack
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Modern Development Technologies
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We use the latest frameworks, languages, and tools to build robust, scalable, and maintainable software
              solutions.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, techs]) => (
                <div key={category} className="text-center">
                  <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
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

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/software-development-team.png"
                alt="Software development team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Quality-Driven Development
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Our experienced development team delivers high-quality software solutions with a focus on performance,
                security, and scalability.
              </p>
              <div className="space-y-4">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Software Solution?</h2>
          <p className="text-gray-300 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Let's discuss your project requirements and create a custom software solution that drives your business
            success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto bg-transparent"
              >
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const softwareServices = [
  {
    title: "Web Applications",
    description: "Custom web applications built with modern frameworks for optimal performance and user experience.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless functionality.",
    icon: Smartphone,
  },
  {
    title: "Enterprise Software",
    description: "Scalable enterprise solutions including CRM, ERP, and custom business management systems.",
    icon: Cog,
  },
  {
    title: "API Development",
    description: "RESTful APIs and microservices architecture for seamless system integration and data exchange.",
    icon: Code,
  },
  {
    title: "Database Solutions",
    description: "Database design, optimization, and management for efficient data storage and retrieval.",
    icon: Database,
  },
  {
    title: "Team Augmentation",
    description: "Skilled developers to extend your team and accelerate project delivery with expertise.",
    icon: Users,
  },
]

const developmentProcess = [
  {
    title: "Requirements Analysis",
    description: "Detailed analysis of your business needs and technical requirements.",
  },
  {
    title: "Design & Planning",
    description: "System architecture design and project planning with clear milestones.",
  },
  {
    title: "Development",
    description: "Agile development with regular updates and continuous integration.",
  },
  {
    title: "Testing & Deployment",
    description: "Comprehensive testing and smooth deployment to production environment.",
  },
]

const techStack = {
  Frontend: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript"],
  Backend: ["Node.js", "Python", "Java", "C#", ".NET Core"],
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
}

const qualityFeatures = [
  {
    title: "Clean Code Standards",
    description: "We follow industry best practices and coding standards for maintainable and scalable code.",
  },
  {
    title: "Comprehensive Testing",
    description: "Unit testing, integration testing, and automated testing to ensure software reliability.",
  },
  {
    title: "Security First",
    description: "Built-in security measures and regular security audits to protect your data and users.",
  },
  {
    title: "Performance Optimization",
    description: "Optimized code and architecture for fast loading times and efficient resource usage.",
  },
  {
    title: "Ongoing Support",
    description: "Continuous maintenance, updates, and technical support after project delivery.",
  },
]
