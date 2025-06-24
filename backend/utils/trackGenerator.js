const PLACEHOLDER_AUDIO = "/audio/sample.mp3"

// Mock music data with real royalty-free URLs
const mockTracks = {
  happy: {
    pop: [
      {
        title: "Sunny Day Vibes",
        url: PLACEHOLDER_AUDIO,
        duration: 180,
      },
      {
        title: "Feel Good Moments",
        url: PLACEHOLDER_AUDIO,
        duration: 165,
      },
    ],
    lofi: [
      {
        title: "Happy Cafe",
        url: PLACEHOLDER_AUDIO,
        duration: 200,
      },
    ],
    cinematic: [
      {
        title: "Triumphant Journey",
        url: PLACEHOLDER_AUDIO,
        duration: 240,
      },
    ],
    edm: [
      {
        title: "Euphoric Beats",
        url: PLACEHOLDER_AUDIO,
        duration: 210,
      },
    ],
  },
  sad: {
    pop: [
      {
        title: "Melancholy Memories",
        url: PLACEHOLDER_AUDIO,
        duration: 195,
      },
    ],
    lofi: [
      {
        title: "Rainy Window",
        url: PLACEHOLDER_AUDIO,
        duration: 220,
      },
    ],
    cinematic: [
      {
        title: "Lost in Thought",
        url: PLACEHOLDER_AUDIO,
        duration: 280,
      },
    ],
    edm: [
      {
        title: "Emotional Drop",
        url: PLACEHOLDER_AUDIO,
        duration: 190,
      },
    ],
  },
  energetic: {
    pop: [
      {
        title: "Power Up",
        url: PLACEHOLDER_AUDIO,
        duration: 175,
      },
    ],
    lofi: [
      {
        title: "Study Boost",
        url: PLACEHOLDER_AUDIO,
        duration: 160,
      },
    ],
    cinematic: [
      {
        title: "Epic Adventure",
        url: PLACEHOLDER_AUDIO,
        duration: 300,
      },
    ],
    edm: [
      {
        title: "High Energy Rush",
        url: PLACEHOLDER_AUDIO,
        duration: 185,
      },
    ],
  },
  chill: {
    pop: [
      {
        title: "Laid Back Groove",
        url: PLACEHOLDER_AUDIO,
        duration: 205,
      },
    ],
    lofi: [
      {
        title: "Peaceful Moments",
        url: PLACEHOLDER_AUDIO,
        duration: 250,
      },
    ],
    cinematic: [
      {
        title: "Serene Landscape",
        url: PLACEHOLDER_AUDIO,
        duration: 320,
      },
    ],
    edm: [
      {
        title: "Ambient Waves",
        url: PLACEHOLDER_AUDIO,
        duration: 230,
      },
    ],
  },
}

function generateRandomTrack(mood, genre) {
  const tracks = mockTracks[mood]?.[genre] || []
  const randomTrack = tracks[Math.floor(Math.random() * tracks.length)] || tracks[0]

  if (!randomTrack) {
    // Fallback track
    return {
      id: Math.random().toString(36).substr(2, 9),
      title: `${mood.charAt(0).toUpperCase() + mood.slice(1)} ${genre.charAt(0).toUpperCase() + genre.slice(1)} Track`,
      url: PLACEHOLDER_AUDIO,
      mood: mood.charAt(0).toUpperCase() + mood.slice(1),
      genre: genre.charAt(0).toUpperCase() + genre.slice(1),
      duration: 180,
      createdAt: new Date().toISOString(),
    }
  }

  return {
    id: Math.random().toString(36).substr(2, 9),
    title: randomTrack.title,
    url: randomTrack.url,
    mood: mood.charAt(0).toUpperCase() + mood.slice(1),
    genre: genre.charAt(0).toUpperCase() + genre.slice(1),
    duration: randomTrack.duration,
    createdAt: new Date().toISOString(),
  }
}

module.exports = { generateRandomTrack }
