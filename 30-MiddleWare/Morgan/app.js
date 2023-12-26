const express = require('express');
const morgan = require('morgan');
const app = express();


// app.use(morgan('common'))
app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), req.path);
    next();
});

const verifyPass = ((req, res, next) => {
    const { password } = req.query;
    if(password === "chickennugget"){
        next();
    }
    res.send("Sorry you need a password!");
});

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/woof', (req, res) => {
    res.send("Woof, woof!");
});

app.get("/secret",verifyPass, (req, res) => {
    res.send("Kirby is so cute!")
})

app.use((req, res) =>  {
    res.status(404).send('Not Found!');
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})