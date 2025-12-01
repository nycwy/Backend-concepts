const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

//To encrypt (hash) the password
// app.get('/', (req, res) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash("myPlainTextedPassword", salt, function (err, hash) {
//             console.log(hash);
//         })
//     })
// })

//To decrypt (not exactly decryption but comparison between plain text password and hash)
app.get('/compare', (req, res) => {
    bcrypt.compare("myPlainTextedPassword", "$2b$10$baIDPTxXqKef5PnY5bOqpuonuc9yEb3upm.1bvuvC2KEZziY74HPy", function (err, result) {
        console.log(result);
    });
})

app.listen(3001, () => {
    console.log("Server started at port:", 3001);
})