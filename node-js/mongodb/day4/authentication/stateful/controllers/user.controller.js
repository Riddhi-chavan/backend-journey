import { loginUser , registerUser } from "../services/user.service.js"

export const Signup = async(req , res) => {
    const {username , password} = req.body
    try {
        const user = await registerUser(username , password)
        res.status(201).json({
            success : true ,
            message : "User registered Successfully",
            data : user
        })
    } catch (error) {
        console.log("Error :" ,  error.message)
        res.status(500).json({
            message : "Error signing up",
            error :  error.message
        })
    }
}
export const Login =  async(req , res) => {
    const {username , password} = req.body
    try {
        const user = await loginUser(username , password)
        req.session.userId  = user._id
        res.status(200).json({
            success : true ,
            message : "Login Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : true,
            message : "error Logging up",
            error : error.message
        })
    }
}

export const Logout = (req, res) => {
    if (!req.session) {
        return res.status(400).json({
            success: false,
            message: "No active session"
        });
    }

    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Failed to destroy session",
                error: err.message
            });
        }

        res.clearCookie("connect.sid");
        res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });
    });
};
