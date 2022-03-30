const express = require('express')

const db = require('./db.js')
const utils = require('./utils.js');

const app = express();

app.use(express.json()) //för att kunna ta emot en body i json format


app.get('/', (req, res) => {
    res.send("HAAAAAJJJJJJJJ")
})




app.listen(2000, () => {
    console.log("http://localhost:2000/")
})