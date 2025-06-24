const express = require("express")
const router = express.Router()

const genres = [
  {
    id: "pop",
    name: "Pop",
    description: "Catchy and mainstream music with broad appeal",
  },
  {
    id: "lofi",
    name: "Lo-fi",
    description: "Low-fidelity hip hop with a relaxed, nostalgic feel",
  },
  {
    id: "cinematic",
    name: "Cinematic",
    description: "Epic and dramatic music perfect for storytelling",
  },
  {
    id: "edm",
    name: "EDM",
    description: "Electronic dance music with driving beats and synths",
  },
]

// GET /api/genres
router.get("/", (req, res) => {
  res.json(genres)
})

// GET /api/genres/:id
router.get("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === req.params.id)
  if (!genre) {
    return res.status(404).json({ error: "Genre not found" })
  }
  res.json(genre)
})

module.exports = router
