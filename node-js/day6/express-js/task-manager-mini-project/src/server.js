import express from "express"
import session from "express-session"
import authRoute from "./routes/auth.routes.js"
import taskRoute from "./routes/task.routes.js"
import cookieParser from "cookie-parser"

const app = express()
const port = 3003

app.use(express.json())
app.use(session({
    secret : "riddhiSecret",
    resave : false,
    saveUninitialized : false ,
    cookie : {
        httpOnly : true ,
        secure : false ,
        maxAge : 1000 *60*60*24 //day
    }
}))
app.use("/auth" , authRoute)
app.use("/task" , taskRoute)
app.use(cookieParser())
app.listen(port , (req , res)=>{
    console.log("working")
})


app.get("/" , (req , res) => {
    res.send("Welcome to task manager api")
})