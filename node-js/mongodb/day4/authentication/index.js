import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import session from "express-session"


dotenv.config()
const PORT = process.env.PORT || 3003
const app = express()
app.use(express.json())

app.use(
    session({
        secret :  process.env.SESSION_SECRET,
        resave : false, 
        saveUninitialized : true,
        cookie : {maxAge : 6000000}
    })
)

connectDB().then(() => {
    app.listen(PORT, (req, res) => {
        console.log("server is running")
    })
}).catch((error) => {
    console.error('Error connecting  to the database : ' , error.message)
})

app.get("/", (req, res) => {
    res.status(200).send("hello world")
})

