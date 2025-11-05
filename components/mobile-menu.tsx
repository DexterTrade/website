"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/ui/animated-button"
import Logo from "./svg/logo"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  // Close on route change
  useEffect(() => {
    const handleRouteChange = () => {
      if (isOpen) onClose()
    }
    window.addEventListener("popstate", handleRouteChange)
    return () => window.removeEventListener("popstate", handleRouteChange)
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay with fade animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel (no slide animation, just appears) */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 bottom-0 w-[85vw] sm:w-[350px] bg-background border-l border-blue-200 dark:border-blue-800 z-50 md:hidden overflow-y-auto"
        >
          <div className="flex flex-col h-full p-4 sm:p-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b py-3 sm:py-4">
              <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                {/* <div className="bg-blue-500 text-white p-1.5 sm:p-2 rounded-lg pointer-events-none">
                  <Logo className="h-10 w-20 text-white" />
                </div> */}
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Dexter</span>
                  <span className="text-xs text-muted-foreground">Trade</span>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-9 w-9 bg-blue-50 dark:bg-blue-900/20"
                type="button"
              >
                <X className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-6 py-8">
              <MobileNavItem href="/" label="Home" isActive={pathname === "/"} onClick={onClose} />
              <div className="space-y-4">
                <p className="text-lg font-medium text-center">Services</p>
                <div className="space-y-2">
                  <MobileSubNavItem href="/services/ecommerce" label="E-commerce Solutions" isActive={pathname === "/services/ecommerce"} onClick={onClose} />
                  <MobileSubNavItem href="/services/software" label="Software Development" isActive={pathname === "/services/software"} onClick={onClose} />
                  <MobileSubNavItem href="/services/marketing" label="Media Marketing" isActive={pathname === "/services/marketing"} onClick={onClose} />
                  <MobileSubNavItem href="/services/cloud" label="Cloud Services" isActive={pathname === "/services/cloud"} onClick={onClose} />
                  <MobileSubNavItem href="/services/ai-integration" label="AI Integration" isActive={pathname === "/services/ai-integration"} onClick={onClose} />
                  <MobileSubNavItem href="/services/logistics" label="Logistics" isActive={pathname === "/services/logistics"} onClick={onClose} />
                </div>
              </div>
              <MobileNavItem href="/projects" label="Projects" isActive={pathname === "/projects"} onClick={onClose} />
              <MobileNavItem href="/about" label="About Us" isActive={pathname === "/about"} onClick={onClose} />
              <MobileNavItem href="/blogs" label="Blogs" isActive={pathname === "/blogs"} onClick={onClose} />
              <MobileNavItem href="/contact" label="Contact" isActive={pathname === "/contact"} onClick={onClose} />
            </nav>

            {/* CTA Button */}
            <div className="mt-auto border-t py-6 text-center">
              <Link href="/contact#quote-form" onClick={onClose}>
                <AnimatedButton className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium text-base py-6" hoverEffect="shine" iconAnimation>
                  Get Started Today
                  <ChevronRight className="ml-1 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Clean Mobile Nav Item (no motion)
function MobileNavItem({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className={`text-lg font-medium block text-center py-3 px-4 rounded-lg transition-colors duration-200 ${
        isActive ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20" : "hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

// Clean Mobile Sub Nav Item (no motion)
function MobileSubNavItem({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className={`block text-base py-2 px-4 rounded-lg transition-colors duration-200 text-center ${
        isActive ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20" : "hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}
