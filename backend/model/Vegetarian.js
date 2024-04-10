const mongoose = require('mongoose');

const VegetarianSchema = new mongoose.Schema({
    recipeId: {
        type: Number,
        required: true
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    description: String, // Corrected typo: 'description' instead of 'discrip'
    reviews: String,
    ingredients: [{
        type: String
    }],
    instructions: [{
        type: String
    }]
});

const Vegetarian = mongoose.model("Vegetarian", VegetarianSchema); // Fixed model name
module.exports = Vegetarian;
