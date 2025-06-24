import RecentTracks from "../music/RecentTracks"
import LikedTracks from "../music/LikedTracks"

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <RecentTracks />
      <LikedTracks />
    </div>
  )
}

export default Sidebar
