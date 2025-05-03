"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SignUpForm } from "@/components/sign-up-form"

export function SignUpFormButton() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <Button
        size="lg"
        className="bg-purple-600 hover:bg-purple-700 text-white rounded-md group relative overflow-hidden transition-all duration-300"
        onClick={() => setIsFormOpen(true)}
      >
        <span className="relative z-10">Save Your Spot</span>
        <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0"></span>
        <span className="absolute -inset-full top-0 block bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 opacity-30 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></span>
      </Button>

      <SignUpForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
