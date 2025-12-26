import express from 'express';

const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke A",
            content: "This is joke A"
        },
        {
            id: 2,
            title: "Joke B",
            content: "This is joke B"
        },
        {
            id: 3,
            title: "Joke C",
            content: "This is joke C"
        },
        {
            id: 4,
            title: "Joke D",
            content: "This is joke D"
        },
    ]
    res.send(jokes);
});

const port = process.env.PORT || 3000;



app.listen(port, () => {
    console.log(`Server is running at http://localhost: ${port}`);
});