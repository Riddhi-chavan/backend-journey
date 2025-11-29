import express from "express"
import { Router } from "express"
import authMiddleware from "../middleware/auth.middleware.js"

const router = Router()


router.get("/dashboard" , authMiddleware, (req, res) => {
     res.status(200).send({
        message : `welcome to dashboard/private page ${req.user.name}`
    })
})

export default router