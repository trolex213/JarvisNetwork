"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

// Update feature names to match the AI workflow context
const features = [
  {
    id: "resume",
    name: "Resume Parsing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="8" height="8" x="3" y="3" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect width="8" height="8" x="13" y="3" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect width="8" height="8" x="3" y="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect width="8" height="8" x="13" y="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: "#8B5CF6",
    position: { x: 0, y: 0 },
  },
  {
    id: "goals",
    name: "Goal Analysis",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="m19 9-5 5-4-4-3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "#EC4899",
    position: { x: 1, y: 1 },
  },
  {
    id: "matching",
    name: "Professional Matching",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 21v-2a4 4 0 0 0-3-3.87"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "#3B82F6",
    position: { x: 2, y: 0 },
  },
  {
    id: "email",
    name: "Email Generation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    color: "#10B981",
    position: { x: 0, y: 2 },
  },
  {
    id: "tone",
    name: "Tone Matching",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14s1.5 2 4 2 4-2 4-2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 9h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#F59E0B",
    position: { x: 2, y: 2 },
  },
  {
    id: "connect",
    name: "Connection",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "#6366F1",
    position: { x: 1, y: 3 },
  },
]

// Additional feature boxes for visual effect
const emptyFeatures = [
  { position: { x: 3, y: 0 } },
  { position: { x: 3, y: 1 } },
  { position: { x: 0, y: 3 } },
  { position: { x: 2, y: 3 } },
  { position: { x: 3, y: 2 } },
  { position: { x: 3, y: 3 } },
]

// Update connections to match new feature IDs
const connections = [
  { from: "resume", to: "goals", color: "#8B5CF6" },
  { from: "goals", to: "matching", color: "#EC4899" },
  { from: "matching", to: "email", color: "#3B82F6" },
  { from: "email", to: "tone", color: "#10B981" },
  { from: "tone", to: "connect", color: "#F59E0B" },
  { from: "connect", to: "resume", color: "#6366F1" },
]

export function FeatureVisualization() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)
  const [sequence, setSequence] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [pulsatingConnection, setPulsatingConnection] = useState<number | null>(null)

  // Automatically cycle through features
  useEffect(() => {
    const cycleFeatures = () => {
      setActiveFeature(features[sequence % features.length].id)
      setPulsatingConnection(sequence % connections.length)
      setSequence((prev) => prev + 1)

      timeoutRef.current = setTimeout(cycleFeatures, 3000)
    }

    timeoutRef.current = setTimeout(cycleFeatures, 1000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [sequence])

  // Get active connections
  const activeConnections = connections.filter((conn) => conn.from === activeFeature || conn.to === activeFeature)

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4">
        {/* Empty feature boxes */}
        {emptyFeatures.map((feature, i) => (
          <div
            key={`empty-${i}`}
            className="relative"
            style={{
              gridColumn: feature.position.x + 1,
              gridRow: feature.position.y + 1,
            }}
          >
            <div className="absolute inset-0 border border-gray-200 rounded-lg"></div>
          </div>
        ))}

        {/* Feature boxes */}
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative"
            style={{
              gridColumn: feature.position.x + 1,
              gridRow: feature.position.y + 1,
            }}
          >
            <motion.div
              className={`absolute inset-0 flex flex-col items-center justify-center border rounded-lg p-4 ${
                activeFeature === feature.id ? "border-2 shadow-lg" : "border-gray-200"
              }`}
              animate={{
                borderColor: activeFeature === feature.id ? feature.color : "#e5e7eb",
                backgroundColor: activeFeature === feature.id ? `${feature.color}10` : "white",
                scale: activeFeature === feature.id ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 rounded-full mb-2"
                animate={{
                  backgroundColor: activeFeature === feature.id ? `${feature.color}20` : "transparent",
                  color: activeFeature === feature.id ? feature.color : "#6b7280",
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.span
                className="text-sm font-medium text-center"
                animate={{
                  color: activeFeature === feature.id ? feature.color : "#374151",
                }}
              >
                {feature.name}
              </motion.span>
            </motion.div>
          </div>
        ))}

        {/* Connection lines with pulsating effect */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            {/* Gradient definitions for each connection */}
            {connections.map((conn, i) => (
              <linearGradient
                key={`gradient-${i}`}
                id={`gradient-${conn.from}-${conn.to}`}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor={features.find((f) => f.id === conn.from)?.color || "#8B5CF6"} />
                <stop offset="100%" stopColor={features.find((f) => f.id === conn.to)?.color || "#8B5CF6"} />
              </linearGradient>

              /* Add glow filter for pulsating effect */
            ))}
            {connections.map((conn, i) => (
              <filter
                key={`glow-${i}`}
                id={`glow-${conn.from}-${conn.to}`}
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            ))}
          </defs>

          {connections.map((conn, i) => {
            const fromFeature = features.find((f) => f.id === conn.from)
            const toFeature = features.find((f) => f.id === conn.to)

            if (!fromFeature || !toFeature) return null

            // Calculate positions
            const fromX = (fromFeature.position.x + 0.5) * 25
            const fromY = (fromFeature.position.y + 0.5) * 25
            const toX = (toFeature.position.x + 0.5) * 25
            const toY = (toFeature.position.y + 0.5) * 25

            const isActive = activeConnections.some((ac) => ac.from === conn.from && ac.to === conn.to)

            const isPulsating = pulsatingConnection === i

            return (
              <g key={`connection-${i}`}>
                {/* Background line for glow effect */}
                <motion.path
                  d={`M ${fromX}% ${fromY}% Q ${(fromX + toX) / 2 + 10}% ${(fromY + toY) / 2}%, ${toX}% ${toY}%`}
                  fill="none"
                  strokeWidth="4"
                  strokeLinecap="round"
                  stroke={`url(#gradient-${conn.from}-${conn.to})`}
                  animate={{
                    opacity: isPulsating ? [0.2, 0.5, 0.2] : 0,
                    filter: isPulsating ? `url(#glow-${conn.from}-${conn.to})` : "none",
                  }}
                  transition={{
                    opacity: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    filter: { duration: 0.3 },
                  }}
                />

                {/* Main connection line */}
                <motion.path
                  d={`M ${fromX}% ${fromY}% Q ${(fromX + toX) / 2 + 10}% ${(fromY + toY) / 2}%, ${toX}% ${toY}%`}
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    stroke: isPulsating ? `url(#gradient-${conn.from}-${conn.to})` : isActive ? conn.color : "#e5e7eb",
                    strokeDasharray: isActive || isPulsating ? "0" : "5,5",
                    opacity: isPulsating ? 1 : isActive ? 0.8 : 0.4,
                    strokeWidth: isPulsating ? 3 : 2,
                  }}
                  transition={{
                    duration: 0.3,
                    strokeWidth: {
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Animated particles along the path */}
                {isPulsating && (
                  <motion.circle
                    r="4"
                    fill={conn.color}
                    animate={{
                      offsetDistance: ["0%", "100%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    style={{
                      offsetPath: `path("M ${fromX}% ${fromY}% Q ${(fromX + toX) / 2 + 10}% ${(fromY + toY) / 2}%, ${toX}% ${toY}%")`,
                    }}
                  />
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
