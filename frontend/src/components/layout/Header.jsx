

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-purple-600 rounded-xl">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Wubble QuickTune</h1>
          <p className="text-gray-600 dark:text-gray-300">AI Music Preview Generator</p>
        </div>
      </div>
    </div>
  )
}

export default Header
