"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Eye,
  Lightbulb,
  Code,
  Smartphone,
  Cloud,
  Target,
  Star,
  Quote,
  ChevronLeft,
  Calendar,
  User,
  ArrowUpRight,
} from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { HoverButton } from "@/components/ui/hover-button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import { ScaleIn } from "@/components/animations/scale-in"
import { HoverCard } from "@/components/animations/hover-card"
import { CountUp } from "@/components/animations/count-up"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { useState, useEffect } from "react"
import TextType from "@/components/animations/TextType"

// app/layout.js
export const metadata = {
  title: 'Dexter Trades',
  description:
    'Innovative technology solutions for e-commerce, software development, media marketing, and cloud services with unmatched quality and precision.',
  openGraph: {
    type: 'website',
    url: 'https://www.dextertrade.co.uk/',
    title: 'Dexter Trades',
    description:
      'Innovative technology solutions for e-commerce, software development, media marketing, and cloud services with unmatched quality and precision.',
    images: [
      {
        url: 'https://www.dextertrade.co.uk/favicon.ico', // replace with your real image
        width: 1200,
        height: 630,
        alt: 'Dexter Trades',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dexter Trades',
    description:
      'Innovative technology solutions for e-commerce, software development, media marketing, and cloud services with unmatched quality and precision.',
    images: ['https://www.dextertrade.co.uk/favicon.ico'], // replace with your image
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: "E-commerce Solutions",
      description: "Custom online stores with secure payment processing and inventory management",
      icon: <Smartphone className="h-8 w-8" />,
      image: "/modern-ecommerce-dashboard.png",
      link: "/services/ecommerce",
    },
    {
      title: "Software Development",
      description: "Web applications, mobile apps, and enterprise software solutions",
      icon: <Code className="h-8 w-8" />,
      image: "/software-development-team.png",
      link: "/services/software",
    },
    {
      title: "Media Marketing",
      description: "Digital marketing campaigns and social media management",
      icon: <Target className="h-8 w-8" />,
      image: "/digital-marketing-campaign.png",
      link: "/services/marketing",
    },
    {
      title: "Cloud Services",
      description: "Cloud migration, infrastructure management, and optimization",
      icon: <Cloud className="h-8 w-8" />,
      image: "/cloud-infrastructure-diagram.png",
      link: "/services/cloud",
    },
  ]

  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      rating: 5,
      review:
        "Outstanding service! They transformed our outdated e-commerce platform into a modern, high-performing solution that increased our sales by 150%.",
      avatar: "/professional-woman-diverse.png",
    },
    {
      name: "Michael Chen",
      company: "Digital Dynamics",
      rating: 5,
      review:
        "The team's expertise in cloud migration saved us thousands in infrastructure costs while improving our system performance dramatically.",
      avatar: "/professional-man.png",
    },
    {
      name: "Emily Rodriguez",
      company: "Growth Marketing Co.",
      rating: 5,
      review:
        "Their media marketing strategies helped us reach our target audience more effectively, resulting in a 200% increase in qualified leads.",
      avatar: "/marketing-professional.png",
    },
  ]

  const blogPosts = [
    {
      title: "The Future of E-commerce: AI-Powered Personalization",
      excerpt:
        "Discover how artificial intelligence is revolutionizing online shopping experiences and driving customer engagement.",
      image: "/blog-ai-ecommerce.png",
      date: "Dec 15, 2024",
      author: "Alex Thompson",
      slug: "future-ecommerce-ai-personalization",
    },
    {
      title: "Cloud Migration Best Practices for 2025",
      excerpt:
        "Essential strategies and considerations for successfully migrating your business infrastructure to the cloud.",
      image: "/blog-cloud-migration.png",
      date: "Dec 12, 2024",
      author: "Maria Garcia",
      slug: "cloud-migration-best-practices-2025",
    },
    {
      title: "Social Media Marketing Trends to Watch",
      excerpt:
        "Stay ahead of the curve with the latest social media marketing strategies and emerging platform features.",
      image: "/blog-social-media-trends.png",
      date: "Dec 10, 2024",
      author: "David Kim",
      slug: "social-media-marketing-trends-2025",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [services.length])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />

      {/* Hero Section with Static Background Image */}
      <section className="relative w-full overflow-hidden h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/digital-sector-new.png"
            alt="Technology services background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-500/90 text-white rounded-full text-sm font-medium mb-4 md:mb-4"
              >
                Premier Technology Services
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                Building Tomorrow's <span className="text-blue-400">Digital Solutions</span> Today
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-xl md:max-w-2xl mx-auto drop-shadow-md">
              <TextType
                  text={[`Innovative technology solutions for e-commerce, software development, media marketing, and cloud services with unmatched quality and precision.`]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                ></TextType>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/services" className="w-full sm:w-auto">
                  <AnimatedButton
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 w-full sm:w-auto"
                    hoverEffect="lift"
                    iconAnimation={true}
                  >
                    Explore Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
                <Link href="/projects" className="w-full sm:w-auto">
                  <HoverButton
                    size="lg"
                    variant="outline"
                    className="text-white border-white bg-gray-900/80 hover:bg-white hover:text-gray-900 font-semibold px-6 sm:px-8 w-full sm:w-auto backdrop-blur-sm"
                    hoverEffect="glow"
                    rippleColor="rgba(255, 255, 255, 0.3)"
                  >
                    View Projects
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </HoverButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                Our Purpose
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                Mission & Vision
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Guided by our core principles, we strive to transform businesses through innovative technology solutions
                and create lasting digital value for our clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-100 dark:bg-blue-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  To deliver exceptional technology services that exceed client expectations through innovation,
                  reliability, and cutting-edge solutions. We are committed to:
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Creating scalable, secure, and user-friendly digital solutions that drive business growth and
                      enhance user experiences
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Fostering a culture of innovation, continuous learning, and technical excellence among our
                      development team
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Building lasting partnerships with clients through transparent communication, agile methodologies,
                      and reliable support
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-100 dark:bg-blue-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                  >
                    <Eye className="h-6 w-6 md:h-7 md:w-7 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  To be the most trusted and innovative technology partner, recognized for:
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Setting new standards of excellence in software development, digital marketing, and cloud
                      solutions
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Pioneering cutting-edge technologies and methodologies that maximize efficiency, security, and
                      user satisfaction
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Creating positive digital transformation in businesses and communities through responsible
                      innovation and meaningful impact
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>
          </div>

          <ScaleIn delay={0.6}>
            <div className="mt-10 md:mt-16 text-center">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 md:p-8 rounded-2xl max-w-3xl mx-auto">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-blue-100 dark:bg-blue-900 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Lightbulb className="h-6 w-6 md:h-7 md:w-7 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
                  Our Approach
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-5 md:mb-6">
                  We believe that successful technology solutions are built on a foundation of collaboration,
                  innovation, and attention to detail. By combining proven methodologies with cutting-edge technologies,
                  we deliver digital solutions that drive lasting business success.
                </p>
                <Link href="/contact">
                  <AnimatedButton
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                    hoverEffect="shine"
                    iconRotate={true}
                  >
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Services Slider Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                Our Services
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                From e-commerce platforms to cloud infrastructure, we deliver cutting-edge solutions tailored to your
                business needs.
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg">
              <div className="relative h-[400px] md:h-[500px]">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                          {service.description}
                        </p>
                        <Link href={service.link}>
                          <AnimatedButton
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-fit"
                            hoverEffect="shine"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </AnimatedButton>
                        </Link>
                      </div>
                      <div className="relative hidden md:block">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-1.5">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-full shadow-md hover:shadow-lg transition-all text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % services.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-full shadow-md hover:shadow-lg transition-all text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <StaggerIn direction="up" staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <HoverCard>
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-100 dark:bg-blue-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Code className="h-7 w-7 md:h-8 md:w-8 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Quality Guaranteed
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Our solutions meet the highest standards of performance and security, backed by our satisfaction
                    guarantee.
                  </p>
                </div>
              </HoverCard>
              <HoverCard>
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-100 dark:bg-blue-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Smartphone className="h-7 w-7 md:h-8 md:w-8 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Expert Developers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Our team consists of skilled professionals with decades of combined experience in software
                    development.
                  </p>
                </div>
              </HoverCard>
              <HoverCard className="sm:col-span-2 md:col-span-1">
                <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-100 dark:bg-blue-900 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Cloud className="h-7 w-7 md:h-8 md:w-8 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                    Innovative Solutions
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    We implement cutting-edge technologies and methodologies to deliver scalable and efficient results.
                  </p>
                </div>
              </HoverCard>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                Client Testimonials
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                What Our Clients Say
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute -top-4 left-6">
                    <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  <div className="flex items-center mb-4 pt-4">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{review.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{review.company}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">"{review.review}"</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <ScaleIn delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/contact">
                <AnimatedButton className="bg-blue-500 hover:bg-blue-600 text-white font-semibold" hoverEffect="pulse">
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400 rounded-full text-sm font-medium mb-3 md:mb-4">
                Latest Insights
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                From Our Blog
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Stay updated with the latest trends, insights, and best practices in technology and digital
                transformation.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      Read More
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <ScaleIn delay={0.6}>
            <div className="text-center mt-12">
              <Link href="/blog">
                <AnimatedButton
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 font-semibold"
                  hoverEffect="shine"
                >
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-blue-500 dark:bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={200} suffix="+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">Projects Delivered</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={8} suffix="+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">Years Experience</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={50} suffix="+" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">Expert Developers</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={98} suffix="%" />
                </div>
                <p className="text-black dark:text-gray-100 font-medium text-sm md:text-base">Client Satisfaction</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 md:mb-10">
              Contact us today for a free consultation and discover how our technology solutions can accelerate your
              business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <HoverButton
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                  hoverEffect="ripple"
                >
                  Get a Free Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 font-semibold px-6 md:px-8 w-full sm:w-auto"
                  hoverEffect="pulse"
                  iconAnimation={true}
                >
                  Contact Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
