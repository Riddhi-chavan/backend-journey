import http from "http"
import WebSocket , {WebSocketServer} from "ws"


const server = http.createServer((req , res) => {
    console.log((new Date()) + "Received request for " + req.url)
    res.end("hii there")
})

// its a step one to initialize the connection with http request 
const wss = new WebSocketServer({server})

wss.on("connection" , function connection(ws) {
    ws.on("error" , console.error);
    ws.on("message" , function message(data , isBinary){
        wss.clients.forEach(function each(client){
            if(client.readyState === WebSocket.OPEN){
                client.send(data , {binary : isBinary})
            }
        })
    })
    ws.send("hello! connection message  from ws server")

})

server.listen(8080 , (req , res) => {
    console.log((new Date()) + "Server is running on port " + 8080)
})