import express from "express"
import { authencationToken } from "../middleware/authencationToken.middleware.js"

const router = express.Router()

router.get("/" , authencationToken  , (req , res) => {
    res.status(200).json({
        message : "welcome to private routes" ,
        user : req.user
    })
})




export default router