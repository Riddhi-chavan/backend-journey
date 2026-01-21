import express from "express" 
import { protectedRoute } from "../middleware/auth.middleware.js"
import {sendMessages , getMessages, getUserforSideBar} from "../controller/message.controller.js"

const router = express.Router()

router.get("/user" , protectedRoute , getUserforSideBar)
router.get("/:id" , protectedRoute , getMessages)
router.post("/send/:id" , protectedRoute , sendMessages)

export default router