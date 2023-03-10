const express = require('express')
const router = express.Router()
const {registerUser, login}= require("../controllers/auth");

router.route('/login').post(login);
router.route('/register').post(registerUser);

module.exports=router;