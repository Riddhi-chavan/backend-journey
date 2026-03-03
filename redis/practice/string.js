const client = require("./client")

async function init() {
    const result = await client.get("greeting")
    // await client.set("msg:6" , "hey from nodejs")
    // const msg = await client.get("msg:6")
    console.log("Result" , result)
    // console.log("Message" , msg)
}

init()