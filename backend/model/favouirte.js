const mongoose = require('mongoose');

const FavouirteSchema = new mongoose.Schema({
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
    discrip:String,
    reviews:String,
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

const Favouirte =mongoose.model("Recipe", FavouirteSchema);
module.exports = Recipe;

