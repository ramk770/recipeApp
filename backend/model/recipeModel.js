const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        unique:true,
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
    // reviews: [{
    //     userId: String,
    //     username: String,
    //     rating: Number,
    //     comment: String
    // }],
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
})


const Recipe =mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;