const express = require("express")
const router = express.Router()
const { generateRandomTrack } = require("../utils/trackGenerator")

// Mock database of tracks
const tracks = [
  generateRandomTrack("happy", "pop"),
  generateRandomTrack("sad", "lofi"),
  generateRandomTrack("energetic", "edm"),
  generateRandomTrack("chill", "cinematic"),
]

// GET /api/tracks
router.get("/", (req, res) => {
  const { mood, genre, limit } = req.query

  let filteredTracks = tracks

  if (mood) {
    filteredTracks = filteredTracks.filter((t) => t.mood.toLowerCase() === mood.toLowerCase())
  }

  if (genre) {
    filteredTracks = filteredTracks.filter((t) => t.genre.toLowerCase() === genre.toLowerCase())
  }

  if (limit) {
    filteredTracks = filteredTracks.slice(0, Number.parseInt(limit))
  }

  res.json(filteredTracks)
})

// GET /api/tracks/:id
router.get("/:id", (req, res) => {
  const track = tracks.find((t) => t.id === req.params.id)
  if (!track) {
    return res.status(404).json({ error: "Track not found" })
  }
  res.json(track)
})

// POST /api/tracks
router.post("/", (req, res) => {
  const { mood, genre } = req.body

  if (!mood || !genre) {
    return res.status(400).json({
      error: "Both mood and genre are required",
    })
  }

  const newTrack = generateRandomTrack(mood, genre)
  tracks.push(newTrack)

  res.status(201).json(newTrack)
})

// DELETE /api/tracks/:id
router.delete("/:id", (req, res) => {
  const trackIndex = tracks.findIndex((t) => t.id === req.params.id)
  if (trackIndex === -1) {
    return res.status(404).json({ error: "Track not found" })
  }

  tracks.splice(trackIndex, 1)
  res.status(204).send()
})

module.exports = router
