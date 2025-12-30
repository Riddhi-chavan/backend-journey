import express from "express"
import User from "../model/user.model.js"

const userRouter = express.Router()

userRouter.post("/users" , async(req , res) => {
    try {
        const {name  , age , weight} = req.body
        const newUser = new User({name , age , weight})
        await newUser.save()

        res.status(201).json({
            success : true,
            data :  newUser ,
            message : "User created Successfully"
        })

    } catch (error) {
        res.status(500).json({
            success : false , 
            message : error.message
        })
    }
})

userRouter.get("/users" , async(req , res) => {
    try {
        const user = await User.find()
        res.status(200).json({
            success : true ,
            data : user ,
            message : "All User retrived successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false , 
            message : error.message
        })
    }
})

userRouter.put("/users/:id" , async(req , res) => {
    const {id} = req.params
    const {name , age , weight} = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(id , {name , age , weight} , {new : true , runValidators : true})
        if(!updatedUser){
           return res.status(401).json({
                success : false ,
                message : "User not found"
            })
        }

        res.json({
            success : true ,
            user : updatedUser ,
            message : "User updated succesfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false , 
            message : error.message
        })
    }
})


export default userRouter