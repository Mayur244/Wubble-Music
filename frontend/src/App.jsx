import { MusicProvider } from "./context/MusicContext"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <MusicProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <HomePage />
      </div>
    </MusicProvider>
  )
}

export default App
