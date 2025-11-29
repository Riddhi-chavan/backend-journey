import express from "express"
import { Router } from "express"
import { generateToken } from "../utils/token-utlis.js"

const router = Router()

router.get("/generate-token" , (req , res) => {
    const token = generateToken()
    res.status(200).send({
        message : "Token generated please save it for further use",
        token : token
    })
})

router.get("/" , (req , res) => {
    res.status(200).send({
        message : "welcome to home/public page"
    })
})


export default router