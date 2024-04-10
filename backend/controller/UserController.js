const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');
// register page
exports.register = async (req,res) =>{
    try{
        const user = await User.create(req.body);
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRETE,
            {expiresIn: process.env.JWT_EXPIRES_IN});
        res.status(200).json({
            status:"success",
            token,
            data:{
                user
            }
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:"fail",
            message:error
        })

    }
    
}
// login page
exports.login = async (req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message:" email and password is not provider "
            })
        }
        const user = await User.findOne({email}).select("+password");

        if (!user || !(await user.comparePassword(password, user.password))){
            
            return  res.status(400).json({
                message:" user password and password is not match "
            })
        }
const token = jwt.sign({id:user._id}, process.env.JWT_SECRETE,
            {expiresIn: process.env.JWT_EXPIRES_IN});
        res.status(200).json({
            status:"success",
            token,
            data:{
                user
            }
        })
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:"fail",
            message:error
        })
    }
}

// get the user data

exports.getuserdata = async (req,res) => {
    try{
       const user = await User.find();
       
       res.status(200).json({
        status:'success',
        data:{
            user
        }
        
       })

    }catch(error){
        console.log(error);
        res.status(400).json({
            status:'error',
            message:error
           })


    }
}

exports.product = async (req, res, next) => {
    // 1. Getting the token
    console.log("product route")
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
    
        return res.status(400).json({
            status:'fail',
            message:"You are not logged in"
           })
    }
 

    // 2. Verify the token
    try {
        const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRETE);
        console.log(decode);
        
        // Continue with your logic
    
        // For example, you might attach the decoded user information to the request
        req.user = decode;
        next();
    } catch (error) {
        return res.status(400).json({
            status:'invalid user',
            message:error
           })
    }
};

//data

exports.findMe = async(req,res,next) => {
    try{
        const user = await User.findById(req.user.id);
        res.status(200).json({
            status:'success',
            data:{
                user
            }
        })
    }catch(error){
        return console.log(error);
        res.status(400).json({
            status:'error',
            message:error
           })

    }

}
