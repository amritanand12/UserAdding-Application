const express = require('express');
require('dotenv').config()
const connectToMongo = require('./db');
const app = express();
var cors = require('cors');
const { config } = require('dotenv');


connectToMongo();
const port = process.env.process || 5000;

//If you want to use req.body, then we need to use middleware function
app.use(express.json())
app.use(cors())

//Available Route
app.use('/api/user', require('./route/user'))

// Step3: for deploying on heroku
if (process.env.NODE_ENV == 'production') {
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`app is listeining at port ${port}`)
})