const express = require('express');
const cookieParser = require('cookie-parser');
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const user = require('./models/user');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render("index");
})

app.post('/create', (req, res) => {
    let { username, email, password, number } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            const user = await userModel.create({
                username,
                email,
                password: hash,
                number
            });
            let token = jwt.sign({ email }, "secretkey");
            res.cookie('token', token);
            res.redirect('login');
        });
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
        return res.send("Something went wrong!");
    }

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: user.email }, "secretkey");
            res.cookie('token', token);
            res.send('Yes you can login');
        } else {
            res.send("Something went wrong!");
        }
    })
})

app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect('/');
})

app.listen(3000, () => {
    console.log("Server started!")
})