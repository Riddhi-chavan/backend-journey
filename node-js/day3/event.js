const EventEmitter = require("events")
 
const events = new EventEmitter()


//keymothods
//*on(eventname , Listner) --- create

events.on("GREET",  (args)=> {
    console.log(`hello world ${args.username} ${args.lastname}`)
})

//*emit(eventname , [args]) --- execute

events.emit("GREET" , {
    username : "Riddhi",
    lastname : "Chavan"
})