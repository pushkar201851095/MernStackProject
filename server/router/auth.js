const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
// const jwt = require("jsonwebtoken");

//connection to database is requied now to save the post data into the db
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello router js");
});

//  using promises
// router.post('/register', (req, res)=>{

//     const {name, email, phone, work, password, cpassword} = req.body;

//     if(!name || !email|| !phone|| !work|| !password || !cpassword){
//         return res.status(422).json({eroor:"plz filled the field properly" });
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already exists"});
//         }

//         const user = new User({name, email, phone, work, password, cpassword})

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfuly"})
//         }).catch((err)=> res.status(500).json({error: "Faild to registered"}))
//     }).catch(err=>{console.log(err)})
// })

// using async await method

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body; // destructuring of elements.

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ eroor: "plz filled the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matching" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    // const userRegister =
    await user.save();
    res.status(201).json({ message: "user registered successfuly" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  let token;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ eroor: "plz filled the field properly" });
    }

    const userLogin = await User.findOne({ email: email }); // "User" already imported on the top
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      console.log("user is logging in .... ");
      // console.log(userLogin);

      const token = await userLogin.generateAuthToken();
      console.log("token is : ", token); 

      res.cookie("jw-token", token,{         
        expires: new Date(Date.now()+ 25892000),
        httpOnly:true  
      });
 
      if (!isMatch) {
        res.status(400).json({ error: "user error password" });
      } else {
      
        res.json({ message: "user sigin successfuly.." });  
      }
    } 
    else{
        res.json({error: "User does not exits."});
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
