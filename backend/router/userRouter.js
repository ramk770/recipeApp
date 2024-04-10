const express = require('express');
const UserController = require('../controller/UserController');
const router = express.Router();

//useer router

router.route('/register').post(UserController.register);
router.route('/login').post(UserController.login);
//user get data
router.route("/user").get(UserController.product , UserController.findMe);

module.exports = router;