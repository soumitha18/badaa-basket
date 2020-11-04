const express = require("express");
const { registration, login, addProduct, getProducts, searchProducts, getAllProducts, getLocation, addUserDetails } = require("../Controllers/Controllers");
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