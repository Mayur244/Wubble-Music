const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

class MusicService {
  async fetchApi(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async getMoods() {
    return this.fetchApi("/moods")
  }

  async getGenres() {
    return this.fetchApi("/genres")
  }

  async generateTrack(mood, genre) {
    return this.fetchApi(`/generate?mood=${mood}&genre=${genre}`)
  }

  async getTracks(filters = {}) {
    const params = new URLSearchParams()
    if (filters.mood) params.append("mood", filters.mood)
    if (filters.genre) params.append("genre", filters.genre)
    if (filters.limit) params.append("limit", filters.limit.toString())

    const query = params.toString() ? `?${params.toString()}` : ""
    return this.fetchApi(`/tracks${query}`)
  }
}

export const musicService = new MusicService()
