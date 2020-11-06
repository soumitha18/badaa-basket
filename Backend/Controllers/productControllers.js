const Product = require("../Models/Product")

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


        const products = await Product.find(search_params)
        res.send(products)

    } catch (err) {
        res.status(400).send(err)
    }
}

const searchProducts = async (req, res) => {
    try {
        const name = req.query.name.toLowerCase()

        let products = await Product.find()

        let result = products.filter(item => item.productName.toLowerCase().includes(name))

        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = {addProduct, getAllProducts, searchProducts, getProducts,}