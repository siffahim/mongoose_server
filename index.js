const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const cors = require("cors")
const mongoose = require("mongoose")
const routerHandler = require("./routers/routerHandlers")
require('dotenv').config()

//middleware
app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lyhqa.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Successfully Connected")
    }).catch(err => {
        console.log(err.message)
    })

app.use('/users', routerHandler)

app.get("/", (req, res) => {
    res.send("hello World")
})

app.listen(port, () => {
    console.log(`Register app listen on port:${port}`)
})