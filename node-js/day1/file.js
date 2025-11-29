const fs = require("fs") //it's a build in module
const os = require("os")

// sync aka blocking code , async aka non blocking code 

// write

// fs.writeFileSync("./text.txt" , "hey this is riddhi and am writting here")
// fs.writeFile("./text.txt", "here am writting async code" , (err)=> {
//     console.log(err)
// })


// read


// console.log("res here" ,  res)


//update / append
// fs.appendFileSync("./text.txt", new Date().toDateString() )

// fs.appendFile("./log.txt" , `hello world this is async text and am loging in at  ${new Date().toDateString()}\n` , (err , res)=> {
//     if(err) {
//         console.log("err :" , err)
//     }else {
//         console.log("res : " , res)
//     }
// })

// console.log(os.cpus().length)


// delete

// fs.cpSync("./text.txt" , "./texts.txt") 
// fs.unlinkSync("./texts.txt" , "this is being deleted")
//  fs.mkdirSync("./my-new-directory")

// const state = fs.statSync("./text.txt")
// console.log("is file" , state.isFile())
