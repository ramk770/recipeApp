const Vegetarian = require('../model/Vegetarian');
//get the data veg
exports.getVegetarian = async (req,res) => {
    try{
        const veg = await Vegetarian.find();
        console.log(veg);
        res.status(200).json({
            status:"success",
            data:{
                veg
            }
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:"fail",
            message:"not get the vegetarian data"
        })

    }
}

