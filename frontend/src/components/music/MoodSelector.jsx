"use client"
import { useMusicContext } from "../../context/MusicContext"

const moods = [
  { id: "happy", name: "Happy", emoji: "😊", color: "bg-yellow-500" },
  { id: "sad", name: "Sad", emoji: "😢", color: "bg-blue-500" },
  { id: "energetic", name: "Energetic", emoji: "⚡", color: "bg-red-500" },
  { id: "chill", name: "Chill", emoji: "😌", color: "bg-green-500" },
]

const MoodSelector = () => {
  const { selectedMood, setSelectedMood } = useMusicContext()

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Choose Your Mood</label>
      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => setSelectedMood(mood.id)}
            className={`h-20 flex flex-col items-center justify-center gap-2 rounded-lg border-2 transition-all duration-200 ${
              selectedMood === mood.id
                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                : "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"
            }`}
          >
            <div className={`p-2 rounded-full ${mood.color} bg-opacity-20`}>
              <span className="text-lg">{mood.emoji}</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{mood.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default MoodSelector
