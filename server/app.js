const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

require('./db/conn');  // connection script 
const user = require('./model/userSchema');  // imported the schema

app.use(express.json());  // if any data comes in the form of json then convert that data into object

// we link the routerr files to make our route easy
app.use(require('./router/auth'));       // here router auth files are written this means that all the routes written in routs.js files will run first then after that routes written below will run 

const PORT = process.env.PORT   //extracting port value from config_file .env


// middleware 
const middlware = (req, res, next)=>{
    console.log("hellow middleware");
    // res.send("middleware is talking!");
    next();
}



app.get('/about',middlware, (req, res)=>{
    res.cookie("test", "push ")
    res.send("about me from server")
});


app.get('/contact', (req, res)=>{
    res.send("contact me from server")
});


// console.log("subscribe"); 
app.listen(PORT, ()=>{
    console.log("server running on 3005..")
})

// mQD7Y1JmAdEx2ZVM
// password 
// 8NgwRWwoFNWr8jdl

//   mongodb+srv://user1:<password>@cluster0.e6wh6ea.mongodb.net/?retryWrites=true&w=majority




// "name":"Pushkar",
//     "email": "test1@pushkar.com",
//     "phone": 8896508766,
//     "work": "Eng..",
//     "password": "1234P",
//     "cpassword": "1234P"    