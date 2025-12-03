import { Router } from "express";
import { Login, Logout } from "../controller/auth.controller.js";

const router = Router()


//login 
router.post("/login" , Login)


//logout
router.get("/logout" , Logout)

export default router