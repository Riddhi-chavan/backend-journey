import express from "express"
const app = express()
const port = 3003

// we have three types of middleware

// 1. global middleware
function sayHiiMiddleware (req, res , next){
    console.log("hellow am middleware");
    next()
    
}

// app.use(sayHiiMiddleware)

// app.get("/" , (req, res)=> {
//     res.send("hellow worled")
// })
app.get("/users" , (req, res)=> {
    res.send("Users page")
})

app.listen(port , (req , res)=> {
    console.log("port is working")
})


// 2. specific middleware

app.get("/" , sayHiiMiddleware ,  (req, res)=> {
    res.send("hellow worled")
})

// 3. inbuild middleware
// app.use(express.json())  example for inbuild middleware this parse the object 