
import { useMusicContext } from "../../context/MusicContext"

const RecentTracks = () => {
  const { recentTracks, setCurrentTrack } = useMusicContext()

  if (recentTracks.length === 0) {
    return null
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recent Tracks</h3>
      <div className="space-y-3">
        {recentTracks.slice(0, 3).map((track) => (
          <div key={track.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{track.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {track.mood} • {track.genre}
              </p>
            </div>
            <button
              onClick={() => setCurrentTrack(track)}
              className="p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900 rounded-lg transition-colors duration-200"
            >
              <span className="text-lg">▶️</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTracks
