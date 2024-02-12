const getConnect = require('./connection');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    let data = await getConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})

app.listen(5500);