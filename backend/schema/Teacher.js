import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const TeacherSchema =new mongoose.Schema({
    teacherid:{
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
        req: true
    },

    school:{ // TODO:

    },
});

TeacherSchema.methods.checkPswd=function(password){
    return bcrypt.compare(password,this.password)
}
TeacherSchema.methods.genToken=function(){
    const input={
        id: this._id
    }
    const key=process.env.PRIVATE_KEY

    const token=jwt.sign(input,key,{expiresIn: 1000000});
    return token;
}

const Teacher=mongoose.model("Teacher Schema",TeacherSchema);
export default Teacher;