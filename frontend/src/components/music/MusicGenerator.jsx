import { useMusicContext } from "../../context/MusicContext"
import MoodSelector from "./MoodSelector"
import GenreSelector from "./GenreSelector"
import GenerateButton from "./GenerateButton"
import TrackPreview from "./TrackPreview"

const MusicGenerator = () => {
  const { currentTrack } = useMusicContext()

  return (
    <div className="card p-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Create Your Perfect Track</h2>

      <div className="space-y-6">
        <MoodSelector />
        <GenreSelector />
        <GenerateButton />
      </div>

      {currentTrack && (
        <div className="mt-8">
          <TrackPreview track={currentTrack} />
        </div>
      )}
    </div>
  )
}

export default MusicGenerator
