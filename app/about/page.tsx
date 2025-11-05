import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Clock, Target, Eye, Lightbulb, Compass, Code } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us | Dexter",
  description:
    "Learn about TechSolutions' history, values, and our expert team dedicated to excellence in technology services and digital innovation.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/modern-tech-office-developers.png" alt="Technology team" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About TechSolutions</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Driving digital transformation through innovative technology solutions, cutting-edge development, and
            strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Our Purpose
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Mission & Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Guided by our core principles, we strive to transform businesses through technology and create lasting
              digital value for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To deliver exceptional technology solutions that exceed client expectations through innovation,
                expertise, and digital excellence. We are committed to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Creating scalable, secure, and user-friendly digital solutions that drive business growth and
                    enhance user experiences
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Fostering a culture of innovation, continuous learning, and technical excellence among our
                    development team
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Building lasting partnerships with clients through transparent communication, agile methodologies,
                    and reliable delivery
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To be the most trusted and innovative technology partner, recognized for:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Setting new standards of excellence in software development, digital marketing, and cloud solutions
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Pioneering emerging technologies like AI, machine learning, and blockchain to create competitive
                    advantages for our clients
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Empowering businesses to thrive in the digital economy through transformative technology solutions
                    and strategic guidance
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-2xl max-w-3xl mx-auto">
              <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Approach</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                We believe that successful technology solutions are built on a foundation of collaboration, innovation,
                and user-centric design. By combining proven methodologies with cutting-edge technologies, we deliver
                solutions that drive real business results.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Building a Legacy of Innovation</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Founded in 2015, TechSolutions began as a forward-thinking technology startup with a vision to help
                businesses navigate the digital transformation landscape.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Over the past decade, we've evolved into a comprehensive technology partner, delivering over 200
                successful projects across e-commerce, software development, digital marketing, and cloud services. Our
                success is built on our commitment to innovation, technical excellence, and client success.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Today, TechSolutions continues to push the boundaries of what's possible, embracing emerging
                technologies like AI, blockchain, and IoT to deliver transformative solutions for our clients.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/developers-modern-tech.png" alt="Company history" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What Drives Us</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our core values guide everything we do, from how we architect solutions to how we collaborate with clients
              and team members.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We strive for technical excellence in every line of code, every design decision, and every client
                interaction.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We conduct our business with honesty, transparency, and ethical practices in all our technology
                solutions.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We embrace emerging technologies and creative problem-solving to deliver cutting-edge solutions for our
                clients.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Reliability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We deliver robust, scalable solutions on time and provide ongoing support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              Our Team
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Meet Our Leadership</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our experienced leadership team brings decades of technology industry expertise to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">{member.position}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    {member.social.map((social, idx) => (
                      <Link
                        key={idx}
                        href={social.url}
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-500 dark:bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <p className="text-black dark:text-gray-100 font-medium">Projects Delivered</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-black dark:text-gray-100 font-medium">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-black dark:text-gray-100 font-medium">Expert Developers</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <p className="text-black dark:text-gray-100 font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your technology needs and discover how TechSolutions can accelerate your digital
            transformation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 font-semibold px-8 bg-transparent"
              >
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
import { Linkedin, Twitter, Facebook } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Rodriguez",
    position: "CEO & Founder",
    bio: "With over 15 years in technology, Alex founded TechSolutions with a vision to help businesses thrive through digital innovation and cutting-edge solutions.",
    image: "/developers-modern-tech.png",
    social: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
      { icon: Facebook, url: "#" },
    ],
  },
  {
    name: "Sarah Kim",
    position: "Chief Technology Officer",
    bio: "Sarah leads our technical strategy and development teams, ensuring we deliver scalable, secure, and innovative solutions using the latest technologies.",
    image: "/modern-tech-office-developers.png",
    social: [
      { icon: Linkedin, url: "#" },
      { icon: Twitter, url: "#" },
    ],
  },
  {
    name: "Marcus Johnson",
    position: "Head of Digital Marketing",
    bio: "Marcus brings creative vision and data-driven strategies to our marketing solutions, specializing in growth hacking and performance optimization.",
    image: "/developers-modern-tech.png",
    social: [
      { icon: Linkedin, url: "#" },
      { icon: Facebook, url: "#" },
    ],
  },
]
