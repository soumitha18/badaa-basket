const express = require("express");
const { registration, login, getLocation, addUserDetails } = require("../Controllers/userControllers");
const {addProduct, getProducts, searchProducts, getAllProducts} = require('../Controllers/productControllers')
const router = express.Router();

router.post("/login", login)

router.post("/register", registration)

router.post("/addproduct", addProduct)

router.get("/getallproducts", getAllProducts)

router.get("/getproducts", getProducts)

router.get("/searchproduct", searchProducts)

router.get("/getlocation", getLocation)

router.post("/adduserdetails", addUserDetails)

module.exports = router