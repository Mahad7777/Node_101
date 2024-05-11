const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{ 
    const authenctication = req.headers.authorization
    if (!authenctication) res.status(404).json({message: "Token not found! "})

    const token = req.headers.authorization.split(" ")[1]
    if (!token) return res.status(401).json({error: "Token not found"})

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(err){
        res.status(401).json({error: "Invalid Token! "})
    }
}

const generateToken = (userdata)=>{
    return jwt.sign(userdata,process.env.JWT_SECRET)
}

module.exports = {jwtMiddleware, generateToken}