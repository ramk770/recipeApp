const NonVeg = require("../model/Nonvegetarian");
const nonveg = require("../model/Nonvegetarian");

exports.getnnveg = async (req,res) => {
    try{
        const nonveg =await NonVeg.find();
        console.log(nonveg);
        res.status(200).json({
            status:"success",
            data:{
                nonveg
            }
        })
    }
    catch(error){
        res.status(400).json({
            status:"fail",
            message:error
        })
    }

}