"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeatureVisualization } from "@/components/feature-visualization"
import { LogoCarousel } from "@/components/logo-carousel"
import { CTASection } from "@/components/cta-section"
import { VideoPlayer } from "@/components/video-player"
import { SignUpFormButton } from "@/components/sign-up-form-button"

export default function LandingPage() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-r from-blue-500/80 via-purple-600/80 to-orange-400/80">
      {/* Header */}
      <motion.header
        className="w-full z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6 flex h-16 items-center">
          {/* Logo aligned with content below */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">JarvisNetwork</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex gap-8 mx-auto">
            <Link href="/about" className="text-base font-medium text-white hover:text-white/80">
              About Us
            </Link>
            <Link href="/blog" className="text-base font-medium text-white hover:text-white/80">
              Blog
            </Link>
            <Link href="/pricing" className="text-base font-medium text-white hover:text-white/80">
              Pricing
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <motion.div
                className="flex flex-col justify-center space-y-4 py-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-5 max-w-[550px]">
                  <motion.h1
                    className="text-6xl font-bold tracking-tighter text-white sm:text-7xl xl:text-8xl/none flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    >
                      Reserve
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.7 }}
                    >
                      Your Access
                    </motion.span>
                  </motion.h1>
                  <motion.p
                    className="max-w-[500px] text-white/90 md:text-xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                  >
                    Tired of cold emails that go nowhere? We help you find qualified leads and send authentic, tailored
                    messages in seconds — no guesswork, no effort.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1.1 }}
                >
                  <SignUpFormButton />
                </motion.div>
              </motion.div>
              <motion.div
                className="relative mx-auto flex items-center justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <VideoPlayer videoSrc="/demo.mp4" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section - Updated with Stripe-like animation */}
        <motion.section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                className="flex flex-col justify-center space-y-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Updated text format to match Stripe's layout */}
                <div className="space-y-6">
                  <motion.div
                    className="text-purple-600 font-medium text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Modular AI Workflow
                  </motion.div>
                  <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                  >
                    A fully integrated
                    <br />
                    flow for networking
                    <br />
                    smarter - not harder
                  </motion.h2>
                  <motion.p
                    className="text-slate-600 text-lg md:text-xl max-w-[600px] leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1 }}
                  >
                    Stop guessing who to reach out to. Our system
                    <br />
                    parses your resume, understands your goals,
                    <br />
                    and instantly finds aligned professionals — then writes personalized emails in your tone.
                    <br />
                    Upload, search, connect — all in one seamless flow.
                  </motion.p>
                </div>
              </motion.div>

              {/* Stripe-like animated visualization */}
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <FeatureVisualization />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section - Updated with new text and logos */}
        <motion.section
          id="testimonials"
          className="w-full py-24 md:py-32 lg:py-40 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                Trusted by top students and professionals across the country
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                From elite universities to world-class companies, people are using JARVIS to network smarter and unlock
                new opportunities.
              </motion.p>

              {/* Scrolling Logo Carousel */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1 }}>
                <LogoCarousel />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section - Updated to match screenshot */}
        <CTASection />
      </main>

      {/* Footer */}
      <motion.footer
        className="w-full border-t py-12 md:py-16 lg:py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">JarvisNetwork</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Turn your resume into real connections with AI-driven matching and personalized outreach.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Licenses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Settings
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            © {new Date().getFullYear()} JarvisNetwork. All rights reserved.
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
