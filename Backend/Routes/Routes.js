const express = require("express");
const { registration, login, getLocation, addUserDetails, editUserDetails } = require("../Controllers/userControllers");
const { addProduct, getProducts, searchProducts, getAllProducts } = require('../Controllers/productControllers')
const { getOrder, capturePayment } = require("../Controllers/paymentController")
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

router.get('/order', getOrder)

router.post("/capture/:paymentId", capturePayment)

module.exports = router