const getConnect = require("./connection");
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    let data = await getConnect();
    data = await data.find().toArray();
    res.send(data)
})

app.listen(5500);