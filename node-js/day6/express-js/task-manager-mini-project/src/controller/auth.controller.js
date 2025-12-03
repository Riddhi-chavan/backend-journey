
export const Login = (req , res) => {
    const {username} = req.body
    console.log("username" , username)

    if(!username){
        return res.status(400).json({error : "Username is required"})
    }

    req.session.user = {username}
    res.cookie("username" , username ,  {httpOnly : true , maxAge : 1000*60*60*12})
    res.json({message : "Login successfully" , username})
}

export const Logout = (req , res) => {
    res.clearCookie("username")
    req.session.destroy((error)=>{
        if(error){
            return res.status(500).json({error : "Something went wrong"})
        }
        res.json({message : "Logout Successfully"})
    });
}