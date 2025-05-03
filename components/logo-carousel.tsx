"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  {
    name: "NYU Stern",
    path: "/logos/nyu-stern.png",
    width: 300,
    height: 80,
  },
  {
    name: "Wharton",
    path: "/logos/wharton.png",
    width: 300,
    height: 80,
  },
  {
    name: "Goldman Sachs",
    path: "/logos/goldman-sachs.png",
    width: 200,
    height: 80,
  },
  {
    name: "NYU",
    path: "/logos/nyu.png",
    width: 150,
    height: 80,
  },
  {
    name: "Slack",
    path: "/logos/slack.png",
    width: 300,
    height: 80,
  },
]

// Duplicate the logos to create a seamless loop
const duplicatedLogos = [...logos, ...logos, ...logos]

export function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 3)
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth / 3)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="overflow-hidden w-full py-8" ref={containerRef}>
      <motion.div
        className="flex items-center"
        animate={{
          x: -containerWidth,
        }}
        transition={{
          x: {
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        }}
      >
        {duplicatedLogos.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex-shrink-0 mx-12 flex items-center justify-center h-24">
            <Image
              src={logo.path || "/placeholder.svg"}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="object-contain max-h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
