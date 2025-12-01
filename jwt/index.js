const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    let token = jwt.sign({ email: "xyz@ex.com" }, "Secret");
    res.cookie("token", token);
    res.send("Done!");
})

app.get('/read', (req, res) => {
    let data = jwt.verify(req.cookies.token, "Secret");
    console.log(data);
})

app.listen(3002, () => {
    console.log("Server started!");
})