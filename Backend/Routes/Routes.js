const express = require("express");
const { registration, login, getLocation, addUserDetails, editUserDetails } = require("../Controllers/userControllers");
const { addProduct, getProducts, searchProducts, getAllProducts } = require('../Controllers/productControllers')
const router = express.Router();

router.post("/login", login)

router.post("/register", registration)

router.post("/addproduct", addProduct)

router.get("/getallproducts", getAllProducts)

router.get("/getproducts", getProducts)

router.get("/searchproduct", searchProducts)

router.get("/getlocation", getLocation)

router.post("/adduserdetails", addUserDetails)

router.post("/edituserdetails", editUserDetails)

module.exports = router