const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

require('./db/conn');
const user = require('./model/userSchema');  // imported the schema

app.use(express.json());  // if any data comes in the form of json then convert that data into object

// we link the routerr files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT


// middleware 
const middlware = (req, res, next)=>{
    console.log("hellow middleware");
    next();
}


// app.get('/', (req, res)=>{
//     res.send("hello world from the server");
// })

app.get('/about',middlware, (req, res)=>{
    res.send("about me from server")
});


app.get('/contact', (req, res)=>{
    res.send("contact me from server")
});


// app.get('/signin', (req, res)=>{
//     res.send("signin me from server")
// });


app.get('/signup', (req, res)=>{
    res.send("signup me from server")
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