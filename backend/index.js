import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

// Routes
import authRoutes from "./routes/auth.js"
import placeRoutes from "./routes/places.js"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json()) // لقراءة JSON body

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/places", placeRoutes)

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => console.log(err))
