const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/setCookie', (req, res) => {
    res.cookie('login', true, { maxAge: 900000, httpOnly: true });
    res.send("Cookie set Successfully!");
})

app.get('/getCookie', (req, res) => {
    const loginDetail = req.cookies.login;
    res.send(loginDetail ? `User is Logged in` : `User is Logged out`);
})

app.get('/clearCookie', (req, res) => {
    res.clearCookie("login");
    res.send("Cookie deleted Successfully!");
})

app.listen(3000, () => {
    console.log("Server started and running on port:", 3000);
})