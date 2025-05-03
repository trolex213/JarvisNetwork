"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignUpForm } from "@/components/sign-up-form"

export function CTASection() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <motion.section
        className="w-full py-24 md:py-32 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[100px] -mb-10 -ml-10 transform rotate-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute w-full h-[30px] bg-blue-400 opacity-70"></div>
          <div className="absolute w-full h-[30px] bg-indigo-600 opacity-90 translate-y-[20px]"></div>
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[100px] -mt-10 -mr-10 transform -rotate-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute w-full h-[30px] bg-blue-400 opacity-70"></div>
          <div className="absolute w-full h-[30px] bg-indigo-600 opacity-90 translate-y-[20px]"></div>
        </motion.div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12 md:gap-0 place-items-center text-center">
              {/* Left column */}
              <motion.div
                className="space-y-8 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="space-y-4 max-w-md mx-auto text-center">
                  <motion.h2
                    className="text-3xl font-bold tracking-tight text-slate-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    Ready to level up your networking?
                  </motion.h2>
                  <motion.p
                    className="text-slate-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                  >
                    Join our early access list and let JarvisNetwork
                    <br />
                    handle the hard part for you.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-wrap gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <Button
                    onClick={() => setIsFormOpen(true)}
                    className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                  >
                    Join now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-slate-200 mx-auto"></div>

              {/* Right column removed */}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sign Up Form Modal */}
      <SignUpForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
