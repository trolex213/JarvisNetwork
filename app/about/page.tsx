"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

// Team member data
const teamMembers = [
  {
    name: "Ethan Yu",
    role: "Co-Founder & CEO",
    image: "/images/team/ethan.jpeg",
    bio: "Former product lead at Google AI. Ethan brings deep expertise in AI systems and product development, with a focus on creating intuitive user experiences that leverage cutting-edge technology.",
    links: {
      twitter: "https://twitter.com/ethanyu",
      linkedin: "https://linkedin.com/in/ethanyu",
      github: "https://github.com/ethanyu",
    },
  },
  {
    name: "Troy Zhang",
    role: "Co-Founder & CTO",
    image: "/images/team/troy.jpeg",
    bio: "Previously engineering lead at OpenAI. Troy has built AI systems at scale and specializes in natural language processing and machine learning algorithms that power JarvisNetwork's matching engine.",
    links: {
      twitter: "https://twitter.com/troyzhang",
      linkedin: "https://linkedin.com/in/troyzhang",
      github: "https://github.com/troyzhang",
    },
  },
  {
    name: "Sunglyoung Kim",
    role: "Co-Founder & COO",
    image: "/images/team/sunglyoung.jpeg",
    bio: "Former operations director at LinkedIn. Sunglyoung brings extensive experience in scaling operations and building professional networks, with a passion for connecting people in meaningful ways.",
    links: {
      twitter: "https://twitter.com/sunglyoungkim",
      linkedin: "https://linkedin.com/in/sunglyoungkim",
      github: "https://github.com/sunglyoungkim",
    },
  },
  {
    name: "Aswin Prakash",
    role: "Head of AI Research",
    image: "/images/team/aswin.jpeg",
    bio: "PhD in Computer Science from MIT. Aswin leads our AI research initiatives, focusing on developing advanced algorithms for professional compatibility matching and personalized communication.",
    links: {
      twitter: "https://twitter.com/aswinprakash",
      linkedin: "https://linkedin.com/in/aswinprakash",
      github: "https://github.com/aswinprakash",
    },
  },
]

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  return (
    <div className="min-h-screen bg-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-lavender-300/20 blur-[100px]"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-200/30 blur-[100px]"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-blue-100/30 blur-[100px]"
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Header */}
      <header className="w-full z-50 bg-transparent">
        <div className="container flex h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-700">JarvisNetwork</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex gap-8 mx-auto">
            <Link href="/#about" className="text-base font-medium text-purple-700 hover:text-purple-900">
              About Us
            </Link>
            <Link href="/blog" className="text-base font-medium text-purple-700 hover:text-purple-900">
              Blog
            </Link>
            <Link href="/pricing" className="text-base font-medium text-purple-700 hover:text-purple-900">
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
      </header>

      <main>
        {/* Hero Section */}
        <motion.section
          className="relative py-20 md:py-32 overflow-hidden"
          style={{
            opacity: headerOpacity,
            scale: headerScale,
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start text-left space-y-4 max-w-3xl">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-purple-900 tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                About Us
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-purple-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Meet the Founding Team
              </motion.h2>
              <motion.p
                className="text-slate-600 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Driven by a passion for meaningful connection, we're a product-first team of entrepreneurs with
                backgrounds in AI, engineering, and professional networking — united by a mission to make career growth
                effortless.
              </motion.p>
            </div>
          </div>

          {/* Animated dots pattern */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(124, 58, 237, 0.1)" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>
        </motion.section>

        {/* Team Members Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:gap-16">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <MissionSection />
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-100/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-lavender-100/50 to-transparent" />
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-gradient-to-r from-lavender-50 via-purple-100/30 to-lavender-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-purple-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Join us in transforming professional networking
              </motion.h2>
              <motion.p
                className="text-slate-600 md:text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We're always looking for talented individuals who are passionate about AI, networking, and creating
                meaningful connections.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-8">
                  View open positions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-transparent border-t border-purple-100">
        <div className="container px-4 md:px-6">
          <div className="text-center text-sm text-slate-500">© JarvisNetwork 2025. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

// Team Member Card Component
function TeamMemberCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {/* Image */}
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 to-lavender-300/40 mix-blend-overlay z-10" />
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 256px, 320px"
        />
      </motion.div>

      {/* Content */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-purple-900">{member.name}</h3>
          <p className="text-purple-600 font-medium">{member.role}</p>
        </motion.div>

        <motion.p
          className="text-slate-600 md:text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {member.bio}
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          <Link href={member.links.twitter} className="text-purple-400 hover:text-purple-700 transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href={member.links.linkedin} className="text-purple-400 hover:text-purple-700 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href={member.links.github} className="text-purple-400 hover:text-purple-700 transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Mission Section Component
function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const values = [
    {
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible with AI and networking technology.",
      icon: (
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
          className="h-6 w-6"
        >
          <path d="M12 2v8"></path>
          <path d="m4.93 10.93 1.41 1.41"></path>
          <path d="M2 18h2"></path>
          <path d="M20 18h2"></path>
          <path d="m19.07 10.93-1.41 1.41"></path>
          <path d="M22 22H2"></path>
          <path d="m16 6-4 4-4-4"></path>
          <path d="M16 18a4 4 0 0 0-8 0"></path>
        </svg>
      ),
    },
    {
      title: "Connection",
      description: "We believe in the power of meaningful professional relationships to transform careers and lives.",
      icon: (
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
          className="h-6 w-6"
        >
          <path d="M16 16h6"></path>
          <path d="M12 16H8"></path>
          <path d="M16 16a4 4 0 0 0-8 0"></path>
          <path d="M2 16h2"></path>
          <path d="M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0"></path>
          <path d="M22 8a2 2 0 1 0-4 0"></path>
          <path d="M6 8a2 2 0 1 0-4 0 2 2 0 1 0 4 0"></path>
        </svg>
      ),
    },
    {
      title: "Authenticity",
      description: "We help professionals connect in ways that are genuine, personalized, and meaningful.",
      icon: (
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
          className="h-6 w-6"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
    },
  ]

  return (
    <div ref={containerRef} className="space-y-16">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-purple-900"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-slate-600 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We're on a mission to transform professional networking from a numbers game into a meaningful, personalized
          experience that creates genuine connections and opportunities.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(124, 58, 237, 0.2)" }}
          >
            <div className="h-12 w-12 rounded-full bg-lavender-100 flex items-center justify-center text-purple-600 mb-4">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">{value.title}</h3>
            <p className="text-slate-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
