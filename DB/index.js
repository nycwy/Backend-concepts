const express = require('express');
const app = express();
const userModel = require('./userModel')

app.get('/', (req, res) => {
    res.send("Hello Home route");
})

app.get('/create', async (req, res) => {
    const newUser = await userModel.create({
        name: "Rohit",
        username: "rs1",
        email: "rs@gmail.com"
    });
    res.send(newUser);
})

app.get('/read', async (req, res) => {
    const user1 = await userModel.find();
    res.send(user1)
})

app.get('/update', async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate({ username: "rs1" }, { name: "Rohit Sharma" }, { new: true });
    res.send(updatedUser);
})

app.get('/delete', async (req, res) => {
    const deletedUser = await userModel.findOneAndDelete({ username: "sk1" });
    res.send(`Hello Mr. ${deletedUser.name} your account has been deleted`);
})


app.listen(3000, ()=> console.log("Server is running"));