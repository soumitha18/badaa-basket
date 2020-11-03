const { loginValidation, registerValidation } = require("../Validation/Validation")
const User = require("../Models/User")
const Product = require("../Models/Product")
const bcrypt = require("bcryptjs");

const registration = async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
        return res.status(400).send("Email already exists in the database");
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
}

const login = async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).send("Email or password is wrong");
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");
    res.send({ user, Message: "Login Successfully!" });
}

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

        let result = products.filter(item => item.name.toLowerCase().includes(name))

        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = { registration, login, addProduct, getAllProducts, searchProducts, getProducts }