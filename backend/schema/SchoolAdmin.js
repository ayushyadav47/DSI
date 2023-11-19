import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SchoolAdminSchema =new mongoose.Schema({
    schooladminID:{
        type:String,
        required: true
    },
    
    schoolID:{
        type:String,
        ref: "School Schema",
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

SchoolAdminSchema.methods.checkPswd=function(password){
    return bcrypt.compare(password,this.password)
}
SchoolAdminSchema.methods.genToken=function(){
    const input={
        id: this._id
    }
    const key=process.env.PRIVATE_KEY

    const token=jwt.sign(input,key,{expiresIn: 1000000});
    return token;
}

const SchoolAdmin=mongoose.model("SchoolAdmin Schema",SchoolAdminSchema);
export default SchoolAdmin;