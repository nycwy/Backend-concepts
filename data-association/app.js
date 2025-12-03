const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send("Running");
});

app.get('/create', async (req, res) => {
    const user = await userModel.create({
        username: "Santosh",
        email: "sk@gmail.com",
        age: 24
    });
    res.send(user);
});

app.get('/post/create', async (req, res) => {
    const post = await postModel.create({
        user: "69305f5c5deef4438cd7517e",
        postdata: "Hello everyone, how are you!"
    });
    let user = await userModel.findOne({ _id: "69305f5c5deef4438cd7517e" });
    user.posts.push(post._id);
    await user.save();

    res.send({ user, post });
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});