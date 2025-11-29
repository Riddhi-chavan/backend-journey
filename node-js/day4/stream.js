//customizable streams 
const {Readable , Writable} = require("stream")

const readableStream  = new Readable(
    {
        highWaterMark : 8,
        read(){}
    }
)

const writableStream = new Writable({
    write (streamData){
        console.log("streamData" , streamData.toString())
    }
})

readableStream.on("data" , (chunks) => {
    console.log("CHUNKS : " , chunks.toString())
    writableStream.write(chunks)
})

console.log(readableStream.push("Hello"))
