// const crypto = require("crypto")
// const key = crypto.randomBytes(32)
// const iv = crypto.randomBytes(16) 

//1. random bytes
// const randomvalues = crypto.randomBytes(8)
// console.log("randomValues : " ,  randomvalues.toString("hex"))



// 2. create hash

// const hashValue = crypto.createHash("sha256").update("Riddhi").digest("hex")
// const inputValue = "riddhi"
// const matchedValue = crypto.createHash("sha256").update(inputValue).digest("hex")


// console.log(hashValue === matchedValue)

// if(hashValue === matchedValue){
//     console.log("You can login ... password match")
// }else {
//     console.log("Sorry... password does not match")
// }


//* assignment  
// learn about encyption and decryption

const crypto = require("crypto")
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv("aes-256-cbc" ,  key ,  iv)
let encyptionData = cipher.update("my data" , "utf-8" , "hex")
encyptionData += cipher.final("hex")

console.log(encyptionData)

const decipher = crypto.createDecipheriv("aes-256-cbc" ,  key ,  iv)
let decryptionData = decipher.update(encyptionData , "hex" , "utf-8")
decryptionData += decipher.final("utf-8") 
console.log(decryptionData)

