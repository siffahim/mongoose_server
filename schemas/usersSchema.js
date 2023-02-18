const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    password2: {
        type: String,
        require: true
    },
    feedback: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    term: Boolean

})

module.exports = usersSchema