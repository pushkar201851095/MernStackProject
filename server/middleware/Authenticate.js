const jwt =  require("jsonwebtoken");
const cookieParser = require('cookie-parser')
const User = require('../model/userSchema')

const Authenticate = async (req, res, next)=>{
    try{
        console.log("checked try 1")
        

        let token = "lense"
        token = req.cookies['jw-token'];
        console.log("token ::::: ",token);
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token" :token}); 
        console.log("checked try 2");

        if(!rootUser){ throw new Error("User not Found")}

        req.token = token
        req.rootUser  = rootUser
        req.userID =  rootUser._id;

        next();
        console.log("checked try 3");

    }catch(err){
        res.status(401).send("hello");
        console.log(err);
    }
}


module.exports = Authenticate;