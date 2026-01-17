import express from "express"
import dotenv from "dotenv"
import mongoose  from "mongoose"

import authRoutes from "./routes/auth.routes.js"

dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3003

mongoose.connect(process.env.MONGO_URI).then(() => (console.log("mongodb connected"))).catch((err) => console.log("mongodb connection error : " , err))

app.use("/auth" , authRoutes)

app.listen(PORT , () => {
    console.log("server is running")
})