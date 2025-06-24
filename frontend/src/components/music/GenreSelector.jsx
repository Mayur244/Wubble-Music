
import { useMusicContext } from "../../context/MusicContext"

const genres = [
  { id: "pop", name: "Pop", emoji: "🎵", color: "bg-pink-500" },
  { id: "lofi", name: "Lo-fi", emoji: "🎧", color: "bg-purple-500" },
  { id: "cinematic", name: "Cinematic", emoji: "🎬", color: "bg-indigo-500" },
  { id: "edm", name: "EDM", emoji: "🎛️", color: "bg-orange-500" },
]

const GenreSelector = () => {
  const { selectedGenre, setSelectedGenre } = useMusicContext()

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Select Genre</label>
      <div className="grid grid-cols-2 gap-3">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
            className={`h-20 flex flex-col items-center justify-center gap-2 rounded-lg border-2 transition-all duration-200 ${
              selectedGenre === genre.id
                ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                : "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500"
            }`}
          >
            <div className={`p-2 rounded-full ${genre.color} bg-opacity-20`}>
              <span className="text-lg">{genre.emoji}</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{genre.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default GenreSelector
