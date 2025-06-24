

import { useState, useRef, useEffect } from "react"
import { useMusicContext } from "../../context/MusicContext"

const TrackPreview = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const { toggleLikeTrack, likedTracks } = useMusicContext()

  const isLiked = likedTracks.some((t) => t.id === track.id)
  const audioUrl = track.url.startsWith("http")
    ? track.url
    : `${import.meta.env.VITE_API_URL?.replace("/api", "") || "http://localhost:5000"}${track.url}`

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = audioUrl
    link.download = `${track.title}.mp3`
    link.click()
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-purple-200 dark:border-gray-600">
      <audio ref={audioRef} src={audioUrl} preload="none" crossOrigin="anonymous" />

      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{track.title}</h3>
          <div className="flex gap-2 mt-2">
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
              {track.mood}
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              {track.genre}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => toggleLikeTrack(track)}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isLiked
                ? "bg-red-50 border border-red-200 text-red-600"
                : "bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
            }`}
          >
            <span className="text-lg">{isLiked ? "❤️" : "🤍"}</span>
          </button>
          <button
            onClick={handleDownload}
            className="p-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <span className="text-lg">⬇️</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition-colors duration-200"
        >
          <span className="text-lg">{isPlaying ? "⏸️" : "▶️"}</span>
        </button>

        <div className="flex-1">
          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-100"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackPreview
