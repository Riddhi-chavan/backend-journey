import express from "express"
import publicRoutes from "./routers/public.routes.js"
import privateRoutes from "./routers/private.routes.js"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import logMiddleware from "./middleware/log.middleware.js"


const port = 3003
const app = express()


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

if(!fs.existsSync(path.join(__dirname , "logs"))){
    fs.mkdirSync(path.join(__dirname , "logs"))
}

//inbuild middleware
app.use(express.json())

//!global custom middlewares
app.use(logMiddleware)


//middleware to routes
app.use("/public" , publicRoutes)
app.use("/private" ,  privateRoutes)

app.listen(port , (req , res) => {
    console.log("working")
})

