import express from "express"
import dotenv from "dotenv"
import cookieparser from  "cookie-parser"
import cors from "cors"


dotenv.config()

const app = express()

const PORT = process.env.PORT || 5001;


app.use(express.json())
app.use(cookieparser())
app.use(
    cors({
        origin : ["http://localhost:5173/"],
        credentials : true
    })
)

app.listen(PORT , () => {
    console.log("Server is running on port" , PORT)
})

