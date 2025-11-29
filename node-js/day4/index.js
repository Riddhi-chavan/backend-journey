const http = require("http")
const port = 3003
const fs = require("fs")
const {Transform , pipeline} = require("stream")
const server = http.createServer((request, response) => {

    //! downloading file in a bad way
    // const file = fs.readFileSync("sample.txt")

    // response.end(file)

    //*2. downloading file in a good way (streams)
    // const readableStream = fs.createReadStream("sample.txt")
    // readableStream.pipe(response)
    // response.end()

    //?--- copying file data into another file
    //! copying file in a bad way
    // const file  = fs.readFileSync("sample.txt")
    // fs.writeFileSync("output.txt" , file)
    // response.end()
    //*2. Copying file in a good way (streams)
    // const readableStream = fs.createReadStream("sample.txt")
    // const writeStream = fs.createWriteStream("output.txt")
    // readableStream.on("data", (chunk) => {
    //     console.log("CHUNK: ", chunk)
    //     writeStream.write(chunk)
    // })
    //?--- string processing
    const readableStream = fs.createReadStream("sample.txt")
    const writableStream = fs.createWriteStream("output.txt")
    const transformStream = new Transform({  //transform streams are readable and writable
        transform(chunk , encoding , callback){
            const modifiedWord = chunk.toString().toUpperCase().replaceAll(/friend/gi, "Riddhi")
            callback(null , modifiedWord)
        }
    })
    //! stream proccessing in a bad way
    // readableStream.on("data", (chunk) => {
    //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/friend/gi, "Riddhi")
    //     writableStream.write(modifiedWord)
    // })
    // response.end()

    //**strem proccessing in a good way */
    readableStream.pipe(transformStream).pipe(writableStream)
    // pipeline(readableStream , transformStream , pipeline , (err) => {
    //     console.log(err)
    // })


})

server.listen(port, () => {
    console.log(`Your port is running at ${port}`)
})

