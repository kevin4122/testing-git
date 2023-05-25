require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workouts")

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use("/api/workouts", workoutRoutes)

app.listen(process.env.PORT, (req, res) => {
  console.log("listening on port 4000 ~")
})

process.env
