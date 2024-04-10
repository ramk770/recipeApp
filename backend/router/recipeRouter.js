const express = require('express');
const RecipeController = require('../controller/recipeContoller');
const Usercontroler = require('../controller/UserController');
const Vegcontroller = require("../controller/vegetarianController");
const NonvegController = require("../controller/NonVeg");
const router = express.Router();


router.route('/recipe')
.post(RecipeController.createRecipe)
.get(RecipeController.getallrecipe);
// .get(Usercontroler.product, RecipeController.getallrecipe);
router.route('/recipe/:id')
.get(RecipeController.getonerecipe);
router.route('/serach')
.get(RecipeController.searchFood);


//veg data get
router.route('/veg').get(Vegcontroller.getVegetarian);
//nonveg
router.route('/nonveg').get(NonvegController.getnnveg);


module.exports = router;