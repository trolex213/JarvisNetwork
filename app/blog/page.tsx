"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
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
    <div className="min-h-screen overflow-hidden relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.2 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-tr from-red-500 transform -rotate-6 scale-150"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: -6 }}
          transition={{ duration: 1.5, delay: 0.2 }}
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

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Featured Article Card - Updated with How JarvisNetwork Works */}
        <motion.div
          className="bg-white rounded-xl shadow-xl overflow-hidden max-w-6xl mx-auto my-12 grid md:grid-cols-[1fr_auto] gap-8 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="space-y-6">
            <motion.div
              className="text-blue-600 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Product
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              How JarvisNetwork Works
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/images/sunglyoung-kim.jpeg"
                  alt="Sunglyoung Kim"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-slate-900">Sunglyoung Kim</div>
                <div className="text-slate-600 text-sm">Co-Founder, JarvisNetwork</div>
              </div>
            </motion.div>

            <motion.p
              className="text-slate-700 text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              JarvisNetwork uses advanced AI to match you with professionals who align with your background, goals, and
              career aspirations. Our matching algorithm goes beyond simple keyword matching to understand the nuances
              of professional compatibility.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
              <Link
                href="/blog/how-jarvisnetwork-works"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="bg-slate-900 rounded-lg p-4 flex items-center justify-center max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Image
              src="/images/jarvis-network-algorithm.png"
              alt="JarvisNetwork Algorithm"
              width={500}
              height={400}
              className="rounded"
            />
          </motion.div>
        </motion.div>

        {/* More Blog Posts */}
        <div className="max-w-6xl mx-auto mt-24">
          <motion.h2
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Latest Articles
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "How AI is transforming professional networking",
                excerpt: "Discover how artificial intelligence is changing the way professionals connect and network.",
                author: "Alex Chen",
                date: "May 1, 2025",
                category: "Technology",
              },
              {
                title: "5 tips for more effective cold outreach",
                excerpt:
                  "Learn how to craft messages that get responses and build meaningful professional relationships.",
                author: "Sarah Johnson",
                date: "April 28, 2025",
                category: "Networking",
              },
              {
                title: "The future of AI-assisted communication",
                excerpt: "Explore how AI tools are evolving to help professionals communicate more effectively.",
                author: "Michael Brown",
                date: "April 22, 2025",
                category: "AI",
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 bg-gray-200">
                  <Image
                    src={`/placeholder.svg?key=r53no&key=glttv&key=b117f&key=aj109&key=w7epm&key=jymvs&height=200&width=400&text=Article+${i + 1}`}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{post.title}</h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">{post.date}</span>
                    <Link
                      href={`/blog/post-${i + 1}`}
                      className="text-blue-600 font-medium hover:text-blue-700 text-sm"
                    >
                      Read article
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <motion.footer
        className="w-full py-6 md:py-8 bg-white/10 backdrop-blur-sm mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        <div className="container mx-auto px-4 text-center text-sm text-white">
          © {new Date().getFullYear()} JarvisNetwork. All rights reserved.
        </div>
      </motion.footer>
    </div>
  )
}
