const express = require("express")
const router = express.Router()

const moods = [
  {
    id: "happy",
    name: "Happy",
    description: "Uplifting and joyful music to brighten your day",
  },
  {
    id: "sad",
    name: "Sad",
    description: "Melancholic and emotional tracks for reflective moments",
  },
  {
    id: "energetic",
    name: "Energetic",
    description: "High-energy music to pump you up and motivate",
  },
  {
    id: "chill",
    name: "Chill",
    description: "Relaxed and laid-back vibes for unwinding",
  },
]

// GET /api/moods
router.get("/", (req, res) => {
  res.json(moods)
})

// GET /api/moods/:id
router.get("/:id", (req, res) => {
  const mood = moods.find((m) => m.id === req.params.id)
  if (!mood) {
    return res.status(404).json({ error: "Mood not found" })
  }
  res.json(mood)
})

module.exports = router
