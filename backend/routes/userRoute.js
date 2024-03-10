// ./routes/userRoute.js

const express = require("express");
const {UserSignUp, UserLogin} = require("../controllers/userController");
const router = express.Router();

// 사용자 정보
router
.route("/signup")
    .post(UserSignUp);

router
.route("/login")
    .post(UserLogin);

module.exports = router;