const express = require("express");
const { registration, login } = require("../Controllers/Controllers");
const router = express.Router();

router.post("/login", login)

router.post("/register", registration)

module.exports = router