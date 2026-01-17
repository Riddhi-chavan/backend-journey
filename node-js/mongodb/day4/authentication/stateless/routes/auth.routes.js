import express from "express"
import User from "../model/user.model.js"
import jwt from "jsonwebtoken"

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

router.post("/login" , async(req , res)=> {
    const {username , password} = req.body
    try {
        //find the user
        const user =  await User.findOne({username})
        //if not found return the error as response
        if(!user) return res.status(401).json({
            message : "Invalid username or password"
        })
        //if found then compare the password  
        const isMatch  = await user.comparePassword(password)
        //if not match then return the error  
        if(!isMatch) return res.status(400).json({
            message : "Invalid username or password"
        })
        // create a toke using jwt 
        const token = jwt.sign({id : user._id , username : user.username } , process.env.JWT_SECRET , {expiresIn : "1h"})

        res.status(200).json({
            message : "User login successfully",
            token
        })
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong",
            error : error.message 
        })
    }
})



export default router