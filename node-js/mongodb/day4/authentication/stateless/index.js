import express from "express"
import dotenv from "dotenv"
import mongoose  from "mongoose"

dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3003

mongoose.connect(process.env.MONGO_URI).then(() => (console.log("mongodb connected"))).catch((err) => console.log("mongodb connection error : " , err))

app.get("/" , (req , res) => {
    res.send("hello world")
})

app.listen(PORT , () => {
    console.log("server is running")
})