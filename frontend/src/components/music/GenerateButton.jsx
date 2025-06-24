"use client"
import { useMusicContext } from "../../context/MusicContext"

const GenerateButton = () => {
  const { selectedMood, selectedGenre, isLoading, generateTrack } = useMusicContext()

  const handleGenerate = () => {
    if (selectedMood && selectedGenre) {
      generateTrack(selectedMood, selectedGenre)
    }
  }

  const isDisabled = !selectedMood || !selectedGenre || isLoading

  return (
    <button
      onClick={handleGenerate}
      disabled={isDisabled}
      className={`w-full h-14 text-lg font-semibold rounded-lg transition-all duration-200 ${
        isDisabled
          ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
      }`}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Generating Your Track...
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <span>✨</span>
          Generate Track
        </div>
      )}
    </button>
  )
}

export default GenerateButton
