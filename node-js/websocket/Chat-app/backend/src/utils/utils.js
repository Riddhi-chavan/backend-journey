import jwt from "jsonwebtoken"

export const generateToken = (id , res) => {
    const token = jwt.sign({id } , process.env.JWT_SECRET , {expiresIn : "7d"})

    res.cookie("jwt" , token , {
        maxAge : 7*24*60*68*1000,
        httpOnly : true,
        sameSite : "Strict",
        secure : process.env.NODE_ENV !== "development"
    })

    return token
}