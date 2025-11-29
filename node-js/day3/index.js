const EventEmitter = require("events")
const fs = require("fs")

const event = new EventEmitter()


event.on("LOGIN", (args) => {
    let res = fs.readFileSync("./login.txt", "utf8")
    let intValue = parseInt(res);
    fs.writeFileSync("./login.txt", `${intValue + 1}`)
    console.log(`user logged in successfully ${args.username}`)
})
event.on("LOGOUT", (args) => {
    let res = fs.readFileSync("./logout.txt", "utf8")
    let intValue = parseInt(res);
    fs.writeFileSync("./logout.txt", `${intValue + 1}`)
    console.log(`user logged out successfully ${args.username}`)
})
event.on("PURCHASE", (args) => {
    let res = fs.readFileSync("./purchase.txt", "utf8")
    let intValue = parseInt(res);
    fs.writeFileSync("./purchase.txt", `${intValue + 1}`)
    console.log(`user purchase our product :  ${args.productname}`)
})
event.on("PROFILEUPDATE", (args) => {
    let res = fs.readFileSync("./profileUpdate.txt", "utf8")
    let intValue = parseInt(res);
    fs.writeFileSync("./profileUpdate.txt", `${intValue + 1}`)
    console.log(`user updated their profile  :  ${args.update}`)
})

event.emit("LOGIN", {
    username: "Riddhi chavan"
})
event.emit("LOGOUT", {
    username: "Riddhi chavan"
})
event.emit("PURCHASE", {
    productname: "suger"
})
event.emit("PROFILEUPDATE", {
    update: "changed profile picture"
})



//special summery event

event.on("SUMMERY", (args) => {
    let login = fs.readFileSync("./login.txt", "utf8")
    let logout = fs.readFileSync("./logout.txt", "utf8")
    let purchase = fs.readFileSync("./purchase.txt", "utf8")
    let update = fs.readFileSync("./profileUpdate.txt", "utf8")

    console.log(`Summery of the application traffic \n 
        user login for ${login} times
        user logout form ${logout} times
        user purchase item count : ${purchase}
        user updated thier profile for ${update} times
    `)
})


event.emit("SUMMERY")

