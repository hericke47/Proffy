import express from 'express';

const app = express();

app.get('/', function (request, response) {
    const users = [
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 20 },
    ]

    return response.json()
});

app.listen(3333);
