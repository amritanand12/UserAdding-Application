const express = require('express')
const router = express.Router();
const User = require('../model/User')



//Router 1: for fetching User from the database using get request
router.get('/fetchUsers', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        // console.log(users)
    } catch (error) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
})
//Router 2: for adding User to the database using post request
router.post('/addUsers', async (req, res) => {
    try {
        const { name, age, phoneNo, grade } = req.body;
        const user = new User({ name, age, phoneNo, grade})

        const saveduser = await user.save()
        // console.log("hello", saveduser)
        res.json(saveduser);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
});

module.exports = router