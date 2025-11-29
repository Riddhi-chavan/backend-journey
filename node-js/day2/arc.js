// const fs = require('fs');

// setImmediate(()=> {console.log("hellow")} , 0)

// setTimeout(()=> {
//     console.log("hellow from settimeoout")
// }, 0)

// console.log("hellow world - 1 ")

process.env.UV_THREADPOOL_SIZE = 4

// let start = Date.now()
// const crypto = require("crypto")

// crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=> {
//     console.log(`${Date.now() -  start}ms Done `)
// })
// crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=> {
//     console.log(`${Date.now() -  start}ms Done `)
// })
// crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=> {
//     console.log(`${Date.now() -  start}ms Done `)
// })
// crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=> {
//     console.log(`${Date.now() -  start}ms Done `)
// })
// crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=> {
//     console.log(`${Date.now() -  start}ms Done `)
// })
// crypto.pbkdf2("password-1" , "salt1" , 100000 , 1024 , "sha512" , ()=> {
//     console.log(`${Date.now() -  start}ms Done `)
// })

console.log("process.env.UV_THREADPOOL_SIZE" , process.env.UV_THREADPOOL_SIZE)


