const getConnect = require('./connection');
const express = require('express');
const app = express();

app.use(express.json());

app.put('/:name', async (req, res) => {
    let data = await getConnect();
    let result = await data.updateOne(
        // { name: req.body.name },
        { name: req.params.name },
        { $set: req.body })
    console.log(result)
    res.send("updated");
})

app.listen(5500);