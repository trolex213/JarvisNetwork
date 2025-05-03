"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col relative">
      {/* Gradient Background - Extended to cover entire page */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-orange-500 opacity-30"></div>
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-[500px] bg-gradient-to-r from-blue-400/40 via-purple-500/40 to-pink-500/40 blur-3xl transform -rotate-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-r from-emerald-400/30 via-blue-500/30 to-purple-600/30 blur-3xl transform rotate-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        ></motion.div>
      </div>

      {/* Header */}
      <motion.header
        className="w-full z-50 bg-transparent"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-slate-900">JarvisNetwork</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex gap-8 mx-auto">
            <Link href="/about" className="text-base font-medium text-slate-900 hover:text-slate-700">
              About Us
            </Link>
            <Link href="/blog" className="text-base font-medium text-slate-900 hover:text-slate-700">
              Blog
            </Link>
            <Link href="/pricing" className="text-base font-medium text-slate-900 hover:text-slate-700">
              Pricing
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-slate-900 ml-auto">
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
        {/* Pricing Hero Section - Updated text */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-slate-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Pricing designed for professionals at every stage.
                </motion.h1>
                <motion.p
                  className="mx-auto max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Choose the plan that fits your goals and start connecting with the right people — faster, smarter, and
                  effortlessly.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards Section - Updated colors and price */}
        <section className="w-full pb-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              {/* Starter Plan - Updated border color and price */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Card className="relative flex flex-col border-2 border-[#9d7aa5] shadow-lg h-full">
                  <motion.div
                    className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-[#9d7aa5] to-[#8a6992] px-3 py-1 text-xs font-medium text-white"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    Most Popular
                  </motion.div>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$10</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <CardDescription>Limited daily outreach. Ideal for testing the waters.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>50 emails and search per day (to avoid email blacklist)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>Unlimited resume upload</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>Unlimited customization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>24/7 support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-[#9d7aa5] to-[#8a6992] hover:from-[#8a6992] hover:to-[#7a5c82]">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Search Plan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                <Card className="relative flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>Search Plan</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$25</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <CardDescription>Unlimited search without email sends.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>Unlimited search</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>Unlimited resume upload</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>24/7 support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>

              {/* Unlimited Plan */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                <Card className="relative flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>Unlimited</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">$50</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <CardDescription>Full access with no limits on search or outreach.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>Unlimited search</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>Unlimited emails</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>Unlimited resume upload</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>Unlimited customization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#9d7aa5]" />
                        <span>24/7 support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        className="w-full py-6 md:py-8 bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center text-sm text-slate-600">© JarvisNetwork 2025</div>
        </div>
      </motion.footer>
    </div>
  )
}
