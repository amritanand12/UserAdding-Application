const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
});

 const User= mongoose.model('User', userSchema);
module.exports = User;