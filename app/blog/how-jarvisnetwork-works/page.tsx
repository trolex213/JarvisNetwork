import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HowJarvisNetworkWorksPage() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-tr from-red-500 transform -rotate-6 scale-150"></div>
      </div>

      {/* Header */}
      <header className="w-full z-50 bg-transparent">
        <div className="container flex h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">JARVIS-Foundation AI Assistant</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex gap-8 mx-auto">
            <Link href="/#about" className="text-base font-medium text-white hover:text-white/80">
              About Us
            </Link>
            <Link href="/blog" className="text-base font-medium text-white hover:text-white/80">
              Blog
            </Link>
            <Link href="/pricing" className="text-base font-medium text-white hover:text-white/80">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden my-12">
          <Link href="/blog" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 p-6">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to blog
          </Link>

          <div className="px-6 pb-8">
            <div className="text-blue-600 font-medium mb-2">Product</div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              How JarvisNetwork Works
            </h1>

            <div className="flex items-center gap-3 mb-8">
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
                <div className="text-slate-600 text-sm">Co-Founder, JarvisNetwork • May 3, 2025</div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 mb-8 mx-auto max-w-2xl">
              <Image
                src="/images/jarvis-network-algorithm.png"
                alt="JarvisNetwork Matching Algorithm"
                width={700}
                height={400}
                className="rounded w-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                JarvisNetwork uses advanced AI to match you with professionals who align with your background, goals,
                and career aspirations. Our matching algorithm goes beyond simple keyword matching to understand the
                nuances of professional compatibility.
              </p>

              <h2>The Science Behind Our Matching</h2>

              <p>
                Our matching algorithm analyzes multiple dimensions of compatibility to ensure you connect with
                professionals who can truly help advance your career:
              </p>

              <ul>
                <li>
                  <strong>Background Alignment:</strong> We analyze your educational and professional history to find
                  connections with similar trajectories
                </li>
                <li>
                  <strong>Goal Compatibility:</strong> We match you with professionals who have achieved the goals
                  you're working toward
                </li>
                <li>
                  <strong>Industry Expertise:</strong> We prioritize connections within your target industry or those
                  who have successfully transitioned into it
                </li>
                <li>
                  <strong>Communication Style:</strong> We analyze communication preferences to ensure productive
                  interactions
                </li>
              </ul>

              <h2>How We're Different</h2>

              <p>
                Unlike traditional networking platforms that rely on existing connections or cold outreach,
                JarvisNetwork proactively identifies potential matches based on mutual benefit. We only suggest
                connections where both parties stand to gain from the relationship.
              </p>

              <p>
                Our system continuously learns from successful matches and refines its recommendations over time. This
                means the longer you use JarvisNetwork, the more precise your matches become.
              </p>

              <h2>The Matching Process</h2>

              <ol>
                <li>
                  <strong>Profile Analysis:</strong> We analyze your resume, LinkedIn profile, and stated goals
                </li>
                <li>
                  <strong>Pattern Recognition:</strong> Our AI identifies patterns in successful career trajectories
                  similar to yours
                </li>
                <li>
                  <strong>Match Scoring:</strong> Potential connections are scored on multiple compatibility factors
                </li>
                <li>
                  <strong>Outreach Optimization:</strong> We help craft personalized outreach messages based on shared
                  interests and goals
                </li>
                <li>
                  <strong>Feedback Loop:</strong> The system learns from your interactions to improve future matches
                </li>
              </ol>

              <h2>Getting Started</h2>

              <p>To experience the power of JarvisNetwork's matching algorithm:</p>

              <ol>
                <li>Join our early access list</li>
                <li>Upload your resume and LinkedIn profile</li>
                <li>Define your career goals and networking objectives</li>
                <li>Receive your first batch of curated matches within 24 hours</li>
              </ol>

              <p>
                Ready to transform your professional network with connections that truly matter? Join our early access
                list today and let JarvisNetwork handle the hard part of networking for you.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-8 bg-white/10 backdrop-blur-sm mt-24">
        <div className="container mx-auto px-4 text-center text-sm text-white">
          © {new Date().getFullYear()} JARVIS-Foundation AI Assistant. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
