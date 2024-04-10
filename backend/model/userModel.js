const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail, " pls provide the email format"],
        lowercase: true
    },
    password:{
        type:String,
        required:true,
        select:false
    
    },
    confirmPassword:{
        type:String,
        required:true,
        validate:{
            validator: function(el){
                return el === this.password;
            },
            message:"not match the password and confirmpassword"
        }
    },
    photo:String
});
// encrypting 
userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        return  next();
    }

    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
});
//comparing the password
userSchema.methods.comparePassword = async function(candidatePassword, userPassword) {
    return bcrypt.compare(candidatePassword, userPassword);
};



const User = mongoose.model('User', userSchema);


module.exports=User;