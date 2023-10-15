const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/tacos', (req, res) => {
    res.send("Get /tacos response...");
})

app.post('/tacos', (req, res) => {
    const { meat, quantity } = req.body;
    // console.log(req.body);
    // console.log(meat, quantity);
    res.send(`Here are your ${ quantity } ${ meat } tacos! Thank You!`);
})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})