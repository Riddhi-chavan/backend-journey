import jwt from "jsonwebtoken"


export const authencationToken  = (req , res , next) => {
    const token = req.header("Authorization");
    if(!token) return res.status(401).json({ message : "Access denied"})
    
    try {
        const decode = jwt.verify(token , process.env.JWT_SECRET)
        req.user = decode
        next()
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong",
            error : error.message 
        })
    }

}