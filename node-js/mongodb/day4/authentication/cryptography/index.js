import express from "express"
import crypto from "crypto"

const PORT = 3003
const app = express()

app.use(express.json())

const generateKeys = () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
        privateKeyEncoding: {   
            type: "pkcs1",
            format: "pem",
        },
    })

    return { publicKey, privateKey }
}

const encrypt  = (publickey ,  message) => {
    const encrypted = crypto.publicEncrypt(publicKey , Buffer.from(message))
    return encrypted.toString("base64")
}

const decrypt = (privateKey , encryptedData) => {
    const decrypted = crypto.privateDecrypt(privateKey , Buffer.from(encryptedData , "base64"))
    return decrypted.toString("utf-8")
}



const keys = generateKeys()
const publicKey = keys.publicKey
const privateKey = keys.privateKey

app.post("/encrypt" , (req , res) => {
    const { message } = req.body
    const encryptedData = encrypt(publicKey , message)
    res.status(200).json({
        encryptedData :  encryptedData
    })

})

app.post("/decrypt" , (req , res) => {
    const { encryptedMessage } = req.body
    const decryptedData = decrypt(privateKey , encryptedMessage)
    res.status(200).json({
        decryptedData : decryptedData
    })

})

app.get("/", (req, res) => {
    res.status(200).json({
        message: "server connected",
    })
})

app.listen(PORT, () => {
    console.log("running on port", PORT)
    // console.log("public key:\n", publicKey)
    // console.log("private key:\n", privateKey)
})
