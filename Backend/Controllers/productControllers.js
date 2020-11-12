const mongoose = require('mongoose')
const Product = require("../Models/Product")
const db = mongoose.connection

const addProduct = async (req, res) => {

}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).send(products)
    } catch (err) {
        res.status(400).send(err)
    }
}

const getProducts = async (req, res) => {
    try {
        const search_params = {}

        if (req.query.category) {
            search_params["category"] = req.query.category
        }
        if (req.query.subCategory) {
            search_params["subCategory"] = req.query.subCategory
        }
        if (req.query.brandName) {
            search_params["brandName"] = req.query.brandName
        }
        if (req.query.productName) {
            search_params["productName"] = req.query.productName
        }
 
        // const products = await Product.find(search_params).sort({ mrp: -1 }).collation({ locale: "en_US", numericOrdering: true })
        const products = await Product.find(search_params)

        if(req.query.sort===""){
           return  res.send(products)
        }
        if(req.query.sort==="alpha"){
            const sortedProducts = products.sort((product1,product2)=> product1.productName - product2.productName )
            return  res.send(sortedProducts)
        }
        if(req.query.sort==="asc"){
            const sortedProducts = products.sort((product1,product2)=> product1.mrp[0] - product2.mrp[0] )
            return  res.send(sortedProducts)
        }
        if(req.query.sort==="desc"){
            const sortedProducts = products.sort((product1,product2)=> product2.mrp[0] - product1.mrp[0] )
            return  res.send(sortedProducts)
        }
        if(req.query.sort==="descdiscount"){
            const sortedProducts = products.sort((product1,product2)=> (product2.mrp[0] - (product2.mrp[0] *(100 - Number(product2.offer))/100).toFixed(2)) - (product1.mrp[0] - (product1.mrp[0] *(100 - Number(product1.offer))/100).toFixed(2) ))
            return  res.send(sortedProducts)
        }
        if(req.query.sort==="ascdiscount"){
            const sortedProducts = products.sort((product1,product2)=> (product1.mrp[0] - (product1.mrp[0] *(100 - Number(product1.offer))/100).toFixed(2)) - (product2.mrp[0] - (product2.mrp[0] *(100 - Number(product2.offer))/100).toFixed(2) ))
            return  res.send(sortedProducts)
        }
       

    } catch (err) {
        res.status(400).send(err)
    }
}

const searchProducts = async (req, res) => {
    try {
        await Product.find({
            productName: {
                $regex: req.query.name,
                $options: "i"
            }
        }, function (err, data) {
            res.send(data)
        })
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = { addProduct, getAllProducts, searchProducts, getProducts }