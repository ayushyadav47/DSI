import mongoose, { Schema } from 'mongoose';

const SchoolSchema =new mongoose.Schema({
    schoolID:{
        type:String,
        required: true
    },
    
    name: {
        type:String,
        required: true,
    },

    address: {
        type:String,
        // req: true
    },
    
    email:{
        type: String,
        // req: true
    },

    adminID:{
        type:String,
        required: true
    },

});

const School=mongoose.model("School Schema",SchoolSchema);
export default School;