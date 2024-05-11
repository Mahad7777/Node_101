const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{ 
    const authenctication = req.headers.authorization
    if (!authenctication) res.status(404).json({message: "Token not found! "})

    const token = req.headers.authorization.split(" ")[1]   // because token is stored on the second index, first index is the name bearer
    if (!token) return res.status(401).json({error: "Invalid token"})

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(err){
        res.status(401).json({error: "Error in request! "})
    }
}

const generateToken = (userdata)=>{
    return jwt.sign(userdata,process.env.JWT_SECRET)
}

module.exports = {jwtMiddleware, generateToken}