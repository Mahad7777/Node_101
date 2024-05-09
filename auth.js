const passport = require('passport') 
const LocalStrategy = require('passport-local').Strategy
const Person = require('./models/person')


passport.use(new LocalStrategy( async (username,password,done)=>{
    try{
        console.log("Credentials: ", username, password)
        const user = await Person.findOne({name:username}) 

        if(!user){
            return done(null,false,{message: "No such user Exists! "})
        }

        const checkpassword = await user.comparePassword(password)
        if(checkpassword){
            done(null, user)
        }else{
            return done(null,false,{message: "Incorrect password"})
        } 
    }catch(err){
        return done(err)
    }
}))

module.exports = passport