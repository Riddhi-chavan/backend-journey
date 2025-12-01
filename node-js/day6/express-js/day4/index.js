import cookieParser from "cookie-parser"
import express from "express"  
import session from "express-session" 
const app = express()
const port = 3003

app.use(session({
    secret : "mysecretriddhi",
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24
    }
}))

app.use(cookieParser("riddhiworking"))

app.get("/" , (req ,  res) => {
    console.log(req.session)
    console.log(req.session.id);
    console.log("hello world");
    
    res.send("port is running")
})

app.get("/login" , (req , res) => {
    req.session.user = {
        name : "riddhi",
        email : "riddhi13$",
        age : 30
    }

    res.send(`${req.session.user.name} User logged in `)
})

app.get("/logout" , (req , res) => {
    req.session.destroy()
    res.send("User logged out")
})
app.listen(port , ()=> {
    console.log("working")
})