const mongoose = require("mongoose")
const express = require("express")
const router = express.Router();
const usersSchema = require('../schemas/usersSchema')
const User = new mongoose.model("User", usersSchema)


router.get('/', async (req, res) => {
    try {
        const data = await User.find({})
        res.status(200).json({
            result: data,
            message: "Success"
        })
    } catch (err) {
        res.status(500).json({
            error: "There was a server side error"
        })
    }
})

router.post('/', (req, res) => {
    const newUser = new User(req.body)
    newUser.save((err) => {
        if (err) {
            res.status(500).json({
                error: 'There was server side error'
            })
        } else {
            res.status(200).json({
                message: "User inserted successfully"
            })
        }
    })

})

module.exports = router;