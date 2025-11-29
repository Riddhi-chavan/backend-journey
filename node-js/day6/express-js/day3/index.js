import express from "express"
const app = express()
import cookieParser from "cookie-parser"

const port = 3003
app.use(cookieParser("secret"))

app.get("/", (req, res) => {
    //! how to set it
    res.cookie("riddhi", "99", {
        maxAge: 1000 * 60,
        signed : true
    })
    res.send("hello world");

})

app.get("/product", (req, res) => {

    //! how to get cookies
    console.log(req.cookies)
    console.log("signed cookie" , req.signedCookies);
    

    if (req.cookies.name && req.cookies.name === "express") {
        res.status(200).send({
            id: 1,
            name: "item 01",
            price: "$100"
        })
    }else {
        res.status(403).send("You are not authorized")
    }

    
})
app.listen(port, (req, res) => {
    console.log("working")
})

