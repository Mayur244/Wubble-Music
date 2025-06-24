import Header from "../components/layout/Header"
import MusicGenerator from "../components/music/MusicGenerator"
import Sidebar from "../components/layout/Sidebar"

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header />

      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <MusicGenerator />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default HomePage
