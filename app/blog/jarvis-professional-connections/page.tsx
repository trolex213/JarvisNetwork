import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogPostPage() {
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
              JARVIS now protects your professional connections
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                <Image src="/placeholder.svg?height=40&width=40&text=JD" alt="Author" width={40} height={40} />
              </div>
              <div>
                <div className="font-medium text-slate-900">Jamie Davidson</div>
                <div className="text-slate-600 text-sm">Product, JARVIS • May 3, 2025</div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 mb-8 mx-auto max-w-2xl">
              <Image
                src="/placeholder.svg?height=400&width=700&text=JARVIS+Dashboard"
                alt="JARVIS Dashboard"
                width={700}
                height={400}
                className="rounded w-full"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                To help you adapt your networking strategy to the changing set of professional preferences, we're
                extending JARVIS's AI protection to cover your professional connections and outreach efforts.
              </p>

              <p>
                In today's fast-paced professional environment, making meaningful connections is more important than
                ever. However, the landscape of professional networking is constantly evolving, with changing
                preferences and expectations around how people connect and communicate.
              </p>

              <h2>Why we built this</h2>

              <p>
                Our customers have been asking for better ways to protect their professional networks and ensure their
                outreach efforts are effective and appropriate. With the rise of AI-powered networking tools, we saw an
                opportunity to leverage our expertise in AI to help professionals connect more effectively.
              </p>

              <p>
                JARVIS now analyzes your professional connections and outreach patterns to identify potential risks and
                opportunities. This includes:
              </p>

              <ul>
                <li>Identifying optimal times to reach out to connections</li>
                <li>Suggesting personalized messaging based on the recipient's preferences</li>
                <li>Flagging potential issues with outreach messages before they're sent</li>
                <li>Monitoring response rates and suggesting improvements</li>
              </ul>

              <h2>How it works</h2>

              <p>
                Our system uses a combination of natural language processing, pattern recognition, and behavioral
                analysis to understand how your connections prefer to communicate. This allows JARVIS to provide
                personalized recommendations for each interaction.
              </p>

              <p>
                The dashboard provides a comprehensive view of your networking efforts, allowing you to track key
                metrics such as response rates, connection growth, and engagement levels. You can easily identify which
                approaches are working best and adjust your strategy accordingly.
              </p>

              <p>
                We've also integrated advanced analytics to help you understand the quality of your connections, not
                just the quantity. This includes insights into industry distribution, seniority levels, and potential
                value alignment based on shared interests and goals.
              </p>

              <h2>Getting started</h2>

              <p>
                If you're already a JARVIS user, this new feature is available in your dashboard today. Simply navigate
                to the "Connections" tab to start exploring your network insights.
              </p>

              <p>
                For new users, you can sign up for a free trial to experience how JARVIS can transform your professional
                networking strategy. Our onboarding process will guide you through connecting your professional accounts
                and importing your existing network.
              </p>

              <h2>What's next</h2>

              <p>
                This is just the beginning of our journey to revolutionize professional networking. In the coming
                months, we'll be adding more features to help you:
              </p>

              <ul>
                <li>Automatically generate personalized follow-up messages</li>
                <li>Identify potential connections based on your career goals</li>
                <li>Schedule optimal times for outreach based on recipient behavior</li>
                <li>Integrate with more professional platforms and communication tools</li>
              </ul>

              <p>
                We're excited to see how JARVIS helps you build stronger, more meaningful professional connections. As
                always, we welcome your feedback as we continue to improve and expand our offerings.
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
