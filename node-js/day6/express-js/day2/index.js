import express from "express"
import userRouter from "./routers/user.routes.js"
const app = express()
const port = 3003

app.use("/api/v1/users",userRouter)


app.get("/" , (req, res)=> {
    res.send("hellow worled")
})



app.listen(port , (req , res)=> {
    console.log("port is working")
})




