import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Cloud, Server, Shield, Zap, Database, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Cloud Services | TechMaster Solutions",
  description:
    "Cloud infrastructure, migration services, scalable hosting solutions, and cloud security for modern businesses.",
}

export default function CloudPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/cloud-computing-servers.png"
          alt="Cloud services infrastructure"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Cloud Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mb-6 md:mb-8">
            Scalable cloud infrastructure, seamless migration services, and enterprise-grade security solutions to power
            your digital transformation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8">
              Migrate to Cloud
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Cloud Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Comprehensive Cloud Services</h2>
            <p className="text-base md:text-lg text-gray-700">
              From cloud migration to ongoing management, we provide end-to-end cloud solutions that scale with your
              business needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {cloudServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Cloud Platforms
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Multi-Cloud Expertise</h2>
            <p className="text-base md:text-lg text-gray-700">
              We work with leading cloud providers to deliver the best solutions for your specific requirements and
              budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudPlatforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <h3 className="text-xl font-bold mb-4 text-blue-600">{platform.name}</h3>
                <p className="text-gray-700 text-sm mb-4">{platform.description}</p>
                <div className="space-y-2">
                  {platform.services.map((service, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-2 text-sm">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Cloud Benefits
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Why Choose Cloud?</h2>
              <p className="text-base md:text-lg text-gray-700 mb-8">
                Cloud computing offers unparalleled flexibility, scalability, and cost-effectiveness for modern
                businesses of all sizes.
              </p>
              <div className="space-y-4">
                {cloudBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/cloud-infrastructure-diagram.png"
                alt="Cloud infrastructure diagram"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Migration Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Seamless Cloud Migration</h2>
            <p className="text-base md:text-lg text-gray-700">
              Our proven migration methodology ensures minimal downtime and maximum security during your transition to
              the cloud.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-4">
              {migrationProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-blue-700 font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Security & Compliance
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade Security</h2>
            <p className="text-base md:text-lg text-gray-700">
              We implement comprehensive security measures and ensure compliance with industry standards to protect your
              data and applications.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-bold mb-3 text-blue-600">{feature.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{feature.description}</p>
                <div className="space-y-1">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-2 text-xs">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Start your cloud journey with a free assessment and discover how cloud services can transform your business
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 w-full sm:w-auto">
                Get Cloud Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto bg-transparent"
              >
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const cloudServices = [
  {
    title: "Cloud Migration",
    description: "Seamless migration of your applications and data to the cloud with minimal downtime.",
    icon: Cloud,
  },
  {
    title: "Infrastructure Management",
    description: "Complete cloud infrastructure setup, monitoring, and ongoing management services.",
    icon: Server,
  },
  {
    title: "Cloud Security",
    description: "Advanced security measures including encryption, access controls, and compliance management.",
    icon: Shield,
  },
  {
    title: "Performance Optimization",
    description: "Continuous monitoring and optimization to ensure peak performance and cost efficiency.",
    icon: Zap,
  },
  {
    title: "Data Management",
    description: "Secure data storage, backup solutions, and disaster recovery planning in the cloud.",
    icon: Database,
  },
  {
    title: "DevOps & Automation",
    description: "CI/CD pipelines, automated deployments, and infrastructure as code implementation.",
    icon: Settings,
  },
]

const cloudPlatforms = [
  {
    name: "Amazon Web Services",
    description: "Comprehensive cloud platform with extensive service offerings and global infrastructure.",
    services: ["EC2", "S3", "RDS", "Lambda", "CloudFront"],
  },
  {
    name: "Microsoft Azure",
    description: "Enterprise-focused cloud platform with strong integration with Microsoft ecosystem.",
    services: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions", "CDN"],
  },
  {
    name: "Google Cloud Platform",
    description: "Data and analytics-focused cloud platform with advanced AI and machine learning capabilities.",
    services: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions", "Firebase"],
  },
]

const cloudBenefits = [
  {
    title: "Cost Optimization",
    description: "Reduce infrastructure costs with pay-as-you-use pricing and eliminate hardware maintenance.",
  },
  {
    title: "Scalability",
    description: "Instantly scale resources up or down based on demand without hardware limitations.",
  },
  {
    title: "Reliability",
    description: "99.9% uptime guarantee with built-in redundancy and disaster recovery capabilities.",
  },
  {
    title: "Global Reach",
    description: "Deploy applications globally with content delivery networks and edge locations.",
  },
  {
    title: "Enhanced Security",
    description: "Enterprise-grade security with encryption, compliance certifications, and regular updates.",
  },
]

const migrationProcess = [
  {
    title: "Assessment",
    description: "Evaluate current infrastructure and applications.",
  },
  {
    title: "Planning",
    description: "Develop migration strategy and timeline.",
  },
  {
    title: "Design",
    description: "Architect cloud infrastructure and services.",
  },
  {
    title: "Migration",
    description: "Execute phased migration with minimal downtime.",
  },
  {
    title: "Testing",
    description: "Comprehensive testing and validation.",
  },
  {
    title: "Optimization",
    description: "Fine-tune performance and costs.",
  },
]

const securityFeatures = [
  {
    title: "Data Protection",
    description: "Comprehensive data security measures",
    items: ["Encryption at Rest", "Encryption in Transit", "Key Management", "Data Loss Prevention"],
  },
  {
    title: "Access Control",
    description: "Identity and access management",
    items: ["Multi-Factor Auth", "Role-Based Access", "Single Sign-On", "Identity Federation"],
  },
  {
    title: "Compliance",
    description: "Industry standard compliance",
    items: ["SOC 2", "HIPAA", "GDPR", "PCI DSS"],
  },
  {
    title: "Monitoring",
    description: "24/7 security monitoring",
    items: ["Threat Detection", "Security Logs", "Incident Response", "Vulnerability Scanning"],
  },
]
