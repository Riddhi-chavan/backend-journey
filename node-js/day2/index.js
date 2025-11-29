const http = require("http")
const PORT  = 3035
const fs = require("fs")
const server = http.createServer((request , response)=>{

    const log = `${Date.now()} New request received  & from ${request.url}\n`

    fs.appendFile("./log.txt" , log , (err)=> {
        if(err) {
            console.error("error writting to the log file")
            response.statusCode = 500
            response.end("Internal server error")
            return
        }

        response.end("entry done on log file")
    })
    // response.end("hello from riddhi's server")
})

server.listen(PORT , ()=>{
    console.log(`server is running at ${PORT}`)
})