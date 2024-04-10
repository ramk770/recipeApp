const Recipe = require('../model/recipeModel');
const multer = require('multer');


// create recipe
exports.createRecipe = async (req,res) => {
    try{
        console.log(req.body);
        console.log(req.body);
        const recipe = await Recipe.create(req.body);
        console.log(recipe);
        res.status(200).json({
            status:'success',
            data:{
                recipe
            }
        })
      
    }catch(error){
        console.log(error)
        res.status(400).json({
            status:'fail',
            Message:error
        })

    }
}

// get the all the data
// exports.getallrecipe = async (req,res) => {
//     try{
//         const recipe = await Recipe.find();
//         res.status(200).json({
//             status:'success',
//             result:recipe.length,
//             data:{
//                 recipe
//             }
//         })
      
//     }catch(error){
//         res.status(400).json({
//             status:'fail',
//             Message:error
//         })

//     }

// }
exports.getallrecipe = async (req, res) => {
    try {
        const recipeName = req.query.name; // Assuming the recipe detail is provided in the query string

        // Constructing the filter based on the recipeName
        const filter = recipeName ? { name: { $regex: recipeName, $options: 'i' } } : {};

        const recipe = await Recipe.find(filter);

        res.status(200).json({
            status: 'success',
            result: recipe.length,
            data: {
                recipe
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            Message: error
        });
    }
};

//get the single data
exports.getonerecipe = async (req,res) => {
    try{
        const recipe = await Recipe.findById(req.params.id);
        res.status(200).json({
            status:'success',
            result:recipe.length,
            data:{
                recipe
            }
        })
      
    }catch(error){
        res.status(400).json({
            status:'fail',
            Message:error
        })

    }

}



// exports.serachfood = async (req,res) => {
//     try{
//         const result = await Recipe.aggregate(
//             [
//                 $serach:{
//                     index:"title",
//                     text:{
//                         query:req.params.key,
//                         path:{
//                             wildcard:"*"
//                         }
//                     }
//                 }
//             ]
//         )
//         res.status(200).json(result);
//     }catch(error){
//         res.status(400).json(
//             error
//         );
//     }
// }

/* Search recipe. */


  //get the favouirte food get and post the data 

exports.postfavouirte = async (req,res) => {
    try{


    }catch(error){

    }
}


exports.searchFood = async (req, res, next) => {
    try {
        const query = req.query.q;

        // Check if query is a string
        if (typeof query !== 'string') {
            return res.status(400).json({ message: 'Query must be a string' });
        }

        const searchString = { $text: { $search: query } };

        // Define the projection (columns) you want to return
        const projection = {
            _id: 0, 
            title: 1, 
            ingredients: 1
        };

        const recipes = await Recipe.find(searchString, projection);

        return res.status(200).send({ message: 'Search results:', data: recipes });
    } catch (error) {
        return res.status(400).send({ message: 'Error occurred in search!', error: error.message });
    }
};

