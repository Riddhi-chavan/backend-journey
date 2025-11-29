import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const logMiddleware = (req , res , next) => {
    const Log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`
    const Logfile = path.join(__dirname , "../logs/request.log")

    fs.appendFile(Logfile ,  Log , (err) => {
        if(err) console.log(`failed to log a request : ${err}`);
        
    })
    next()
}

export default logMiddleware
