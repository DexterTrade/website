import Link from "next/link"
import { HardHat, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
// import Logo from "@/public/dexterlogo.svg"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
              <HardHat className="h-7 w-7 text-amber-500" />
              <span className="text-xl font-bold text-white">Dexter Trade</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Your trusted partner for innovative construction solutions. Building excellence and delivering quality
              since 2000.
            </p>
            {/* <div className="flex space-x-4 justify-center sm:justify-start">
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div> */}
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/services/ecommerce"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-integration"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  AI Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/logistics"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm sm:text-base hover:text-amber-500 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base text-left">
                  555 beechdale road , nottingham
                </span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+447404654725</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">Dextertradeltd@gmail.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact#quote-form">
                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium w-full transition-all duration-300">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-6 text-center text-gray-400 text-sm max-w-6xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Dexter Trade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
