const express = require('express');
const morgan = require('morgan');
const app = express();

const AppError = require("./appError");

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
    throw new AppError('Password Required!', 401);
});

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/woof', (req, res) => {
    dog.bark();
    res.send("Woof, woof!");
});

app.get("/secret",verifyPass, (req, res) => {
    res.send("Kirby is so cute!")
});

app.get('/admin', (req, res) => {
    throw new AppError('Error : You are not an Admin!', 403);
})

app.use((req, res) =>  {
    res.status(404).send('Not Found!');
});

// app.use((err, req, res, next) => {
//     console.log("***********************************");
//     console.log("************* ERROR ****************");
//     console.log("***********************************");
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong..." } = err;
    res.status(status).send(message);
})
app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});