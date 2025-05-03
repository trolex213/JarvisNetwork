"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SignUpFormProps {
  isOpen: boolean
  onClose: () => void
}

export function SignUpForm({ isOpen, onClose }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // Show success message
    alert("Thanks for signing up! We'll be in touch soon.")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative top bar with gradient */}
            <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-orange-400"></div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <motion.h2
                  className="text-3xl font-bold text-slate-900"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  You're Almost In!
                </motion.h2>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-5"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Your name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  <Label htmlFor="organization" className="text-sm font-medium text-slate-700">
                    University or company
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="Enter your university or company"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  className="pt-2"
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-orange-400 hover:from-blue-600 hover:via-purple-700 hover:to-orange-500 text-white font-medium py-2 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Submit
                  </Button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
