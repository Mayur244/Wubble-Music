const express = require("express")
const router = express.Router()
const { generateRandomTrack } = require("../utils/trackGenerator")

// GET /api/generate?mood=happy&genre=pop
router.get("/", async (req, res) => {
  const { mood, genre } = req.query

  if (!mood || !genre) {
    return res.status(400).json({
      error: "Both mood and genre parameters are required",
    })
  }

  try {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const track = generateRandomTrack(mood, genre)
    res.json(track)
  } catch (error) {
    console.error("Error generating track:", error)
    res.status(500).json({ error: "Failed to generate track" })
  }
})

// POST /api/generate
router.post("/", async (req, res) => {
  const { mood, genre } = req.body

  if (!mood || !genre) {
    return res.status(400).json({
      error: "Both mood and genre are required in request body",
    })
  }

  try {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const track = generateRandomTrack(mood, genre)
    res.status(201).json(track)
  } catch (error) {
    console.error("Error generating track:", error)
    res.status(500).json({ error: "Failed to generate track" })
  }
})

module.exports = router
