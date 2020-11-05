const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

const app = express()

const routers = require("./Routes/Routes");
// const products = require("./products")
// const Product = require("./Models/Product");

app.use(express.json())

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, async () => {
    // await Product.insertMany(products)
    //     .then(res => console.log("Data Added"))
    //     .catch(err => console.log(err))
    console.log("Database is connected")
})

app.use("/", routers)

app.listen(5000, () => {
    console.log(`SERVER RUNNING! 5000`)
})
