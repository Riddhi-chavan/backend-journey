import { Router } from "express";

const userRouter = Router()

userRouter.get("/create-user" , (req, res)=> {
    res.send("creating user")
})
userRouter.get("/getAllUser" , (req, res)=> {
    res.send("get all user")
})
userRouter.get("/getAllUserById" , (req, res)=> {
    res.send("get all user by id")
})

export default userRouter