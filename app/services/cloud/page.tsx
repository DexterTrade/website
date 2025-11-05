import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Cloud Services | TechMaster Solutions",
  description:
    "Cloud infrastructure, migration services, scalable hosting solutions, and cloud security for modern businesses.",
  openGraph: {
    title: "Cloud Services | TechMaster Solutions",
    description: "Migrate to cloud with scalable, secure infrastructure.",
    url: "https://www.dextertrade.co.uk/services/cloud",
    images: ["/cloud-computing-servers.png"],
  },
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Cloud Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mb-6 md:mb-8">
            Scalable cloud infrastructure, seamless migration, and enterprise-grade security designed for performance
            and reliability.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8">
              Migrate to Cloud
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Why Move to the Cloud?
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Embrace the power of our cloud services to achieve unparalleled business agility and cost efficiency. Ditch
            the costly, complex hardware of traditional IT and switch to an on-demand, pay-as-you-go model that
            instantly scales resources—up or down—to meet your exact needs. With robust security, automatic data backups,
            and seamless accessibility from anywhere, your team can collaborate more effectively, reduce downtime risks,
            and focus on your core business instead of managing infrastructure. Move faster, save money, and ensure
            business continuity with a cloud solution designed for modern speed and reliability.
          </p>
        </div>
      </section>

      {/* Cloud Service Features (Bullet Points) */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Cloud Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Our Cloud Services Offer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end cloud solutions that combine flexibility, performance, and security — empowering your
              business to operate at scale with minimal overhead.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
            {cloudFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Cloud Platforms
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Multi-Cloud Expertise
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We work with leading cloud providers to deliver reliable, scalable, and secure cloud environments tailored
              to your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cloudPlatforms.map((platform, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-sm border text-center">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{platform.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{platform.description}</p>
                <div className="space-y-2">
                  {platform.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-muted rounded-lg p-2 text-sm text-foreground/80 dark:text-foreground/90"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Start your cloud journey with a free assessment and discover how cloud services can transform your business
            operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 w-full sm:w-auto"
              >
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

// Bullet points replacing grid
const cloudFeatures = [
  {
    title: "Cloud Migration & Deployment",
    description:
      "Seamlessly move your applications, databases, and workloads to the cloud with zero downtime and full data integrity.",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Automatically scale your computing resources based on demand, ensuring optimal performance and cost efficiency.",
  },
  {
    title: "Data Security & Compliance",
    description:
      "Advanced encryption, access control, and compliance management for secure and trusted cloud operations.",
  },
  {
    title: "Automation & DevOps",
    description:
      "Streamline deployment pipelines and manage infrastructure as code for faster delivery and greater agility.",
  },
  {
    title: "Disaster Recovery & Backups",
    description:
      "Ensure business continuity with automated backups, redundancy, and geo-distributed recovery systems.",
  },
  {
    title: "Monitoring & Optimization",
    description:
      "Real-time monitoring, performance tuning, and cost optimization to keep your cloud systems efficient.",
  },
]

const cloudPlatforms = [
  {
    name: "Amazon Web Services (AWS)",
    description:
      "Comprehensive global cloud platform offering powerful compute, storage, and machine learning capabilities.",
    services: ["EC2", "S3", "RDS", "Lambda", "CloudFront"],
  },
  {
    name: "Microsoft Azure",
    description:
      "Enterprise-grade platform with seamless integration across Microsoft tools, ideal for corporate ecosystems.",
    services: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions", "Azure DevOps"],
  },
  {
    name: "Google Cloud Platform (GCP)",
    description:
      "Data-driven platform with top-tier AI, analytics, and Kubernetes orchestration for smart scaling.",
    services: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions", "Firebase"],
  },
]
