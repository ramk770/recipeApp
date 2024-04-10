const mongoose = require('mongoose');

const NonVegetarinSchema = new mongoose.Schema({
    recipeId: {
        type: String,
    },
    title: {
        type: String
    },
    image: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0
    },
    discrip: String,
    reviews: String,
    ingredients: [{
        type: String,
    }],
    instructions: [{
        type: String,
    }],
    cookingTime: {
        type: String,
    }
});

const NonVeg = mongoose.model("NonVegetarianRecipe", NonVegetarinSchema); // Change model name
module.exports = NonVeg;
