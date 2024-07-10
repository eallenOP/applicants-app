import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        const jsonData = JSON.parse(data);
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        const randomObject = jsonData[randomIndex];
        res.json(randomObject);
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});