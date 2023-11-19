import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const StudentSchema =new mongoose.Schema({
    rollno:{
        type:Number,
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
    
    DOB:{
        type: Date,
        req: true
    },

    schoolID:{
        type:String,
        ref: "School Schema",
        required: true
    },

    studentclassinst:{
        type: Schema.Types.ObjectId,
        ref: "StudentClassInstance Schema",
        req: true
    }
});

StudentSchema.methods.checkPswd=function(password){
    return bcrypt.compare(password,this.password)
}
StudentSchema.methods.genToken=function(){
    const input={
        id: this._id
    }
    const key=process.env.PRIVATE_KEY

    const token=jwt.sign(input,key,{expiresIn: 1000000});
    return token;
}

const Student=mongoose.model("Student Schema",StudentSchema);
export default Student;