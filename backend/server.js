const express = require("express")
const cors = require("cors")
const path = require("path")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

// Import routes
const moodsRouter = require("./routes/moods")
const genresRouter = require("./routes/genres")
const tracksRouter = require("./routes/tracks")
const generateRouter = require("./routes/generate")

// Use routes
app.use("/api/moods", moodsRouter)
app.use("/api/genres", genresRouter)
app.use("/api/tracks", tracksRouter)
app.use("/api/generate", generateRouter)

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Wubble QuickTune Backend is running!" })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: "Something went wrong!" })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" })
})

app.listen(PORT, () => {
  console.log(`🚀 Wubble QuickTune Backend running on port ${PORT}`)
  console.log(`📡 API available at http://localhost:${PORT}/api`)
})
