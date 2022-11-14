const mongoose = require('mongoose');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]

})






userSchema.pre('save', async function(next){   // this part of code will run just before the save method of Schema. 
    console.log("this part running..");
    if(this.isModified('password')){   // otherwise when user sign happens it will run. to avoide that we will use isModified.
        this.password = await bcrypt.hash(this.password, 12) 
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})
 // user schema is an instance so we need to call method for using that instance. 
userSchema.methods.generateAuthToken = async function(){    // annonymus function that will run 
    try{
        let tokenPush = jwt.sign({_id:this._id},process.env.SECRET_KEY);  // we need to pass two parameter in sign function 1. payload & 2. Secret key(private key)
        // in above line of code by using this._id we are accessing the id of users those login details we are filling in to login 
        this.tokens = this.tokens.concat({token:tokenPush});
        await this.save();
        return token;
    }catch(err){    
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;