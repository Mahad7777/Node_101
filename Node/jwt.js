const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    const {token} = req.cookies 

    if (!token) {
        return res.status(401).json({ message: "Token not found!" });
    }
    jwt.verify(token,process.env.JWT_SECRET,{},(err, user)=>{
        if (err) throw err
        res.json(user)
    })
    // try {

    // } catch (err) {
    //     return res.status(401).json({ error: "Invalid token" });
    // }
};


// const generateToken = (userdata)=>{
//     jwt.sign(userdata,process.env.JWT_SECRET, {expiresIn: '1h'},(err,token)=>{
//         if(err) throw err

//     })
// }

module.exports = {jwtMiddleware}