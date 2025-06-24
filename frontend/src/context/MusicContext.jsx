"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { musicService } from "../services/musicService"

const MusicContext = createContext()

export const useMusicContext = () => {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error("useMusicContext must be used within a MusicProvider")
  }
  return context
}

export const MusicProvider = ({ children }) => {
  const [selectedMood, setSelectedMood] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [currentTrack, setCurrentTrack] = useState(null)
  const [recentTracks, setRecentTracks] = useState([])
  const [likedTracks, setLikedTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [moods, setMoods] = useState([])
  const [genres, setGenres] = useState([])

  // Load data from localStorage on mount
  useEffect(() => {
    const savedRecentTracks = localStorage.getItem("recentTracks")
    const savedLikedTracks = localStorage.getItem("likedTracks")

    if (savedRecentTracks) {
      setRecentTracks(JSON.parse(savedRecentTracks))
    }
    if (savedLikedTracks) {
      setLikedTracks(JSON.parse(savedLikedTracks))
    }
  }, [])

  // Save to localStorage when tracks change
  useEffect(() => {
    localStorage.setItem("recentTracks", JSON.stringify(recentTracks))
  }, [recentTracks])

  useEffect(() => {
    localStorage.setItem("likedTracks", JSON.stringify(likedTracks))
  }, [likedTracks])

  // Initialize data from API
  useEffect(() => {
    const initializeData = async () => {
      try {
        const [moodsData, genresData] = await Promise.all([musicService.getMoods(), musicService.getGenres()])
        setMoods(moodsData)
        setGenres(genresData)
      } catch (error) {
        console.error("Failed to initialize data:", error)
      }
    }

    initializeData()
  }, [])

  const generateTrack = async (mood, genre) => {
    setIsLoading(true)
    try {
      const track = await musicService.generateTrack(mood, genre)
      setCurrentTrack(track)

      // Add to recent tracks
      setRecentTracks((prev) => {
        const filtered = prev.filter((t) => t.id !== track.id)
        return [track, ...filtered].slice(0, 10)
      })
    } catch (error) {
      console.error("Failed to generate track:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleLikeTrack = (track) => {
    setLikedTracks((prev) => {
      const isLiked = prev.some((t) => t.id === track.id)
      if (isLiked) {
        return prev.filter((t) => t.id !== track.id)
      } else {
        return [...prev, track]
      }
    })
  }

  const value = {
    selectedMood,
    setSelectedMood,
    selectedGenre,
    setSelectedGenre,
    currentTrack,
    setCurrentTrack,
    recentTracks,
    likedTracks,
    isLoading,
    moods,
    genres,
    generateTrack,
    toggleLikeTrack,
  }

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
}
