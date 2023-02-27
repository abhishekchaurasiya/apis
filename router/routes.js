const express = require("express");
const { register, user_filter, sort_user } = require("../controller/userController");
const router = express.Router();

router.post("/register", register)
router.get("/getuser", user_filter)
router.get("/getall/sortuser", sort_user)

module.exports = router;
