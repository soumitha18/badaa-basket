const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

const app = express()

const routers = require("./Routes/Routes")

app.use(express.json())

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database is connected")
})

app.use("/", routers)

app.listen(5000, () => {
    console.log(`SERVER RUNNING! 5000`)
})
