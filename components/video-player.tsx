"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

interface VideoPlayerProps {
  videoSrc: string
}

export function VideoPlayer({ videoSrc }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const thumbnailRef = useRef<HTMLImageElement>(null)

  // Use the direct blob URL for the video
  const actualVideoSrc =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/demo-gkVB6dmJBuLDBIKTjF988RMLo1lSAZ.mp4"

  useEffect(() => {
    // Check if video can be loaded
    const checkVideo = async () => {
      try {
        const response = await fetch(actualVideoSrc, { method: "HEAD" })
        if (!response.ok) {
          console.error("Video file not accessible:", response.status)
          setVideoError(true)
        } else {
          setIsLoading(false)
        }
      } catch (err) {
        console.error("Error checking video:", err)
        setVideoError(true)
      }
    }

    checkVideo()
  }, [actualVideoSrc])

  // Create a thumbnail from the first frame of the video
  useEffect(() => {
    if (videoError) return

    const video = document.createElement("video")
    video.src = actualVideoSrc
    video.muted = true
    video.preload = "metadata"
    video.crossOrigin = "anonymous"

    video.onloadeddata = () => {
      // Video metadata is loaded, now we can seek to a specific time
      video.currentTime = 0.5 // Seek to 0.5 seconds to get a good thumbnail frame

      video.onseeked = () => {
        try {
          // Create a canvas to capture the frame
          const canvas = document.createElement("canvas")
          canvas.width = video.videoWidth
          canvas.height = video.videoHeight
          const ctx = canvas.getContext("2d")

          if (ctx) {
            // Draw the video frame to the canvas
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

            // Convert the canvas to a data URL
            const dataURL = canvas.toDataURL("image/jpeg")

            // Set the thumbnail image source
            if (thumbnailRef.current) {
              thumbnailRef.current.src = dataURL
              setThumbnailLoaded(true)
            }
          }
        } catch (err) {
          console.error("Error creating thumbnail:", err)
        }
      }
    }

    video.onerror = () => {
      console.error("Error loading video for thumbnail")
      setVideoError(true)
    }
  }, [actualVideoSrc, videoError])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch((err) => {
          console.error("Error playing video:", err)
          setVideoError(true)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (videoRef.current?.parentElement?.requestFullscreen) {
        videoRef.current.parentElement.requestFullscreen()
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  if (isLoading) {
    return (
      <div className="relative w-full max-w-[550px] overflow-hidden rounded-xl shadow-2xl bg-slate-800 aspect-video flex items-center justify-center">
        <div className="text-white text-center p-8">
          <div className="text-xl font-semibold mb-2">Loading Video...</div>
          <p className="text-white/70">Please wait while we prepare the demo</p>
        </div>
      </div>
    )
  }

  if (videoError) {
    return (
      <div className="relative w-full max-w-[550px] overflow-hidden rounded-xl shadow-2xl bg-slate-800 aspect-video flex items-center justify-center">
        <div className="text-white text-center p-8">
          <div className="text-xl font-semibold mb-2">Demo Video</div>
          <p className="text-white/70">Experience our AI-powered networking platform in action</p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative w-full max-w-[550px] overflow-hidden rounded-xl shadow-2xl bg-slate-100"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Thumbnail overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {thumbnailLoaded ? (
            <img ref={thumbnailRef} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 opacity-50"></div>
          )}
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm text-indigo-600 hover:bg-white transition-all z-20"
          >
            <Play className="h-8 w-8 ml-1" />
          </button>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-auto object-cover"
        preload="metadata"
        muted={isMuted}
        playsInline
        crossOrigin="anonymous"
        onError={() => setVideoError(true)}
      >
        <source src={actualVideoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${
          showControls || isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <button onClick={togglePlay} className="text-white hover:text-indigo-300 transition-colors">
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>

          <div className="flex items-center gap-4">
            <button onClick={toggleMute} className="text-white hover:text-indigo-300 transition-colors">
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
            <button onClick={toggleFullscreen} className="text-white hover:text-indigo-300 transition-colors">
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
