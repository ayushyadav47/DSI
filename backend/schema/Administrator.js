import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const AdministratorSchema =new mongoose.Schema({
    adminID:{
        type:String,
        required: true
    },
    
    password: {
        type:String,
        // required: true,
    },

    firstname: {
        type:String,
        required: true,
    },
    middlename: {
        type:String,
    },
    lastname: {
        type:String,
    },
    
    email:{
        type: String,
        // req: true
    },

});

AdministratorSchema.methods.checkPswd=function(password){
    return bcrypt.compare(password,this.password)
}
AdministratorSchema.methods.genToken=function(){
    const input={
        id: this._id
    }
    const key=process.env.PRIVATE_KEY

    const token=jwt.sign(input,key,{expiresIn: 1000000});
    return token;
}

const Administrator=mongoose.model("Administrator Schema",AdministratorSchema);
export default Administrator;