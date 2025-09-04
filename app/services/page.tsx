import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Our Services | TechMaster Solutions",
  description:
    "Explore TechMaster's comprehensive technology services including e-commerce, software development, media marketing, and cloud solutions.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/modern-tech-office-developers.png"
          alt="Technology services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl">
            Comprehensive technology solutions tailored to your business needs and digital transformation goals.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              What We Offer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              From concept to deployment, we provide end-to-end technology services to accelerate your digital
              transformation with innovation and excellence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-5 md:mb-6 text-sm sm:text-base">{service.description}</p>
                  <Link href={service.link}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3 md:mb-4">
              Our Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">How We Work</h2>
            <p className="text-base md:text-lg text-gray-700">
              Our agile development process ensures a smooth experience from initial consultation to deployment and
              ongoing support.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line - hidden on mobile, visible on larger screens */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

              {/* Process steps - mobile optimized */}
              <div className="space-y-8 md:space-y-12 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 relative w-full">
                      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md relative z-10">
                        <div className="bg-blue-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4">
                          <span className="text-blue-700 font-bold text-lg md:text-xl">{index + 1}</span>
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">{step.title}</h3>
                        <p className="text-gray-700 text-sm sm:text-base">{step.description}</p>
                      </div>
                      {/* Circle on the timeline - hidden on mobile */}
                      <div className="absolute top-1/2 left-0 md:left-auto md:right-0 transform translate-y-[-50%] translate-x-[-50%] md:translate-x-[50%] w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-20 hidden md:block"></div>
                    </div>
                    <div className="md:w-1/2 hidden md:block">{/* This div is just for spacing in the timeline */}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/developers-modern-tech.png"
                alt="Technology quality"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3 md:mb-4">
                Why Choose Us
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">The TechMaster Difference</h2>
              <p className="text-base md:text-lg text-gray-700 mb-5 md:mb-8">
                When you choose TechMaster, you're choosing a partner committed to innovation, reliability, and your
                digital success.
              </p>
              <div className="space-y-4 md:space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10">
            Contact us today for a free consultation and discover how TechMaster can accelerate your digital
            transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 md:px-8 w-full sm:w-auto"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "E-commerce Solutions",
    description:
      "Custom online stores, payment integration, and e-commerce platforms designed to maximize sales and user experience.",
    image: "/modern-ecommerce-devices.png",
    link: "/services/ecommerce",
  },
  {
    title: "Software Development",
    description:
      "Custom web applications, mobile apps, and enterprise software solutions built with cutting-edge technologies.",
    image: "/placeholder-pelw2.png",
    link: "/services/software",
  },
  {
    title: "Media Marketing",
    description:
      "Digital marketing strategies, social media management, and content creation to boost your online presence.",
    image: "/placeholder-3zj9i.png",
    link: "/services/marketing",
  },
  {
    title: "Cloud Services",
    description: "Cloud infrastructure, migration services, and scalable hosting solutions for modern businesses.",
    image: "/cloud-computing-servers.png",
    link: "/services/cloud",
  },
]

const processSteps = [
  {
    title: "Discovery & Planning",
    description: "We begin with a thorough analysis of your business needs, technical requirements, and project goals.",
  },
  {
    title: "Design & Architecture",
    description:
      "Our design team creates user-friendly interfaces and robust system architecture, incorporating your feedback at every stage.",
  },
  {
    title: "Development & Testing",
    description: "We build your solution using agile methodologies with continuous testing and quality assurance.",
  },
  {
    title: "Deployment & Launch",
    description:
      "Our team handles the deployment process, ensuring smooth launch and optimal performance across all platforms.",
  },
  {
    title: "Monitoring & Support",
    description:
      "Continuous monitoring, performance optimization, and ongoing technical support to ensure long-term success.",
  },
  {
    title: "Maintenance & Updates",
    description:
      "Regular updates, security patches, and feature enhancements to keep your solution current and secure.",
  },
]

const benefits = [
  {
    title: "Experienced Team",
    description:
      "Our team brings decades of combined experience in software development, digital marketing, and cloud technologies.",
  },
  {
    title: "Cutting-edge Technology",
    description:
      "We use the latest frameworks, tools, and methodologies to ensure scalable and future-proof solutions.",
  },
  {
    title: "Agile Methodology",
    description: "Iterative development process with regular updates and feedback loops to ensure project success.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring to ensure your systems run smoothly.",
  },
  {
    title: "Competitive Pricing",
    description: "Transparent, value-driven pricing with flexible packages to suit businesses of all sizes.",
  },
]
