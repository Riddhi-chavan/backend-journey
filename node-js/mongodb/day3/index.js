import express from "express"
import connectDB from "./config/db.js"
import userRouter from "./routes/user.routes.js"

const PORT = 3003
const app  = express()



//connect to db
app.use(express.json())
connectDB()

app.use("/api/v1/", userRouter)

app.get("/" , (req , res) => {
    res.send("hello world")
})

app.listen(PORT , () => {
    console.log("server is running yayayy")
})



