import Image from "next/image"
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us | BuildMaster Construction",
  description:
    "Get in touch with BuildMaster Construction for inquiries, quotes, or to discuss your construction project needs.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/contact-hero.png" alt="Contact us" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Get in touch with our team to discuss your project needs or request a quote.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">We'd Love to Hear From You</h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Whether you have a question about our services, want to request a quote, or are ready to start your
                project, we're here to help.
              </p>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Our Location</h3>
                    <p className="text-muted-foreground">555 beechdale road , nottingham</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Phone Number</h3>
                    <p className="text-muted-foreground">+447404654725</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Email Address</h3>
                    <p className="text-muted-foreground">Dextertradeltd@gmail.con</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div>
              <div id="quote-form" className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Request a Free Quote</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out this form to get a detailed, no-obligation quote for your construction project. Our team will
                  analyze your requirements and provide a comprehensive estimate.
                </p>
                <form className="bg-muted/50 p-10 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div> */}
            <div id="quote-form" className="scroll-mt-24">
  <h3 className="text-2xl font-bold mb-4 text-foreground">Connect with Us on WhatsApp</h3>
  <p className="text-muted-foreground mb-6">
    Scan the QR code below to start a direct conversation with our team on WhatsApp. We're available to discuss your
    project, provide quotes, or answer any questions you may have.
  </p>
  <div className="bg-muted/50 p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center">
    <Image
      src="/images/whatsapp-qr.png" // replace with your actual QR image path
      alt="WhatsApp QR Code"
      width={220}
      height={220}
      className="rounded-lg mb-6 border border-border"
    />
    <p className="text-muted-foreground mb-6 text-lg">
      Or click the button below to chat directly on WhatsApp.
    </p>
    <Button
      asChild
      className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg"
    >
      <a
        href="https://wa.me/447404654725"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat on WhatsApp
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </Button>
  </div>
</div>


          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-muted h-[400px] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground text-lg font-medium">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-muted/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const faqs = [
  {
    question: "What types of projects do you handle?",
    answer:
      "We handle a wide range of construction projects including residential homes, commercial buildings, industrial facilities, renovations, and architectural design services. No project is too big or too small for our team.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "You can request a quote by filling out our contact form, calling our office, or sending us an email. We'll schedule a consultation to discuss your project needs and provide a detailed estimate.",
  },
  {
    question: "How long does a typical construction project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. A small renovation might take a few weeks, while a large commercial building could take several months. During our initial consultation, we'll provide an estimated timeline for your specific project.",
  },
  {
    question: "Do you handle permits and approvals?",
    answer:
      "Yes, we handle all necessary permits and regulatory approvals as part of our comprehensive service. Our team is familiar with local building codes and regulations to ensure a smooth approval process.",
  },
  {
    question: "What sets BuildMaster apart from other construction companies?",
    answer:
      "BuildMaster stands out for our commitment to quality, transparent communication, innovative solutions, and on-time delivery. We combine traditional craftsmanship with modern technologies to deliver exceptional results that exceed client expectations.",
  },
]
