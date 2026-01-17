import express from "express"
import User from "../model/user.model.js"

const router = express.Router()

router.post("/signup" , async (req , res) => {
    const {username , password} = req.body
    try {
        const existingUser = await User.findOne({username})
        if(existingUser) return res.status(400).json({
            message : "Username already exists."
        })
        const newUser = new User({username , password})
        await newUser.save()
        res.status(201).json({
            message : "User registered successfully"
        })
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong",
            error : error.message 
        })
    }
})

export default router