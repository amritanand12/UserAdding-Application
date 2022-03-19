const mongoose = require('mongoose');
require('dotenv').config()
// console.log(process.env.MONGODB)
// dotenv.config({ path: './config.env' });
const mongoURI = process.env.MONGODB;
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

 module.exports = connectToMongo;
