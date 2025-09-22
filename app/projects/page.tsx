import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectsGrid } from "./ProjectsGrid"

export const metadata = {
  title: "Our Projects | TechSolutions",
  description:
    "Explore TechSolutions' portfolio of completed technology projects across e-commerce, software development, media marketing, and cloud services.",
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/modern-tech-office-developers.png"
          alt="Technology projects"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Our Projects</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl">
            Explore our portfolio of successful technology projects that showcase our expertise in digital innovation
            and cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3 md:mb-4">
              Our Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Browse through our diverse portfolio of completed technology projects across various digital sectors.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ProjectsGrid/>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3 md:mb-4">
                Our Approach
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground">
                How We Deliver Excellence
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Every technology project we undertake follows a rigorous development process to ensure quality,
                scalability, and client satisfaction.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-primary font-bold text-sm md:text-base">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-foreground">Strategic Planning</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      We begin with comprehensive analysis to establish clear objectives, technical requirements, and
                      project roadmaps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-primary font-bold text-sm md:text-base">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-foreground">Modern Technologies</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      We leverage cutting-edge technologies and frameworks to ensure scalability and future-proof
                      solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-primary font-bold text-sm md:text-base">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-foreground">Agile Development</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Our experienced development team follows agile methodologies with continuous integration and
                      testing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                    <span className="text-primary font-bold text-sm md:text-base">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg text-foreground">Quality Assurance</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      We conduct thorough testing and optimization at every stage to maintain our high performance
                      standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl mt-8 md:mt-0">
              <Image
                src="/developers-modern-tech.png"
                alt="Development process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-card text-card-foreground border-t">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10">
            Contact us today to discuss how we can bring your digital vision to life with the same excellence showcased
            in our technology portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}