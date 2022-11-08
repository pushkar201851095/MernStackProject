const mongoose = require('mongoose');
const express = require('express');
const app = express();

const DB = 'mongodb+srv://user1:8NgwRWwoFNWr8jdl@cluster0.e6wh6ea.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("no connection");
})

// middleware 
const middlware = (req, res, next)=>{
    console.log("hellow middleware");
    next();
}


app.get('/', (req, res)=>{
    res.send("hello world from the server");
})

app.get('/about',middlware, (req, res)=>{
    res.send("about me from server")
});


app.get('/contact', (req, res)=>{
    res.send("contact me from server")
});


app.get('/signin', (req, res)=>{
    res.send("signin me from server")
});


app.get('/signup', (req, res)=>{
    res.send("signup me from server")
});

// console.log("subscribe"); 
app.listen(3005, ()=>{
    console.log("server running on 3005..")
})

// mQD7Y1JmAdEx2ZVM
// password 
// 8NgwRWwoFNWr8jdl

//   mongodb+srv://user1:<password>@cluster0.e6wh6ea.mongodb.net/?retryWrites=true&w=majority