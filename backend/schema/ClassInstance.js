import mongoose from 'mongoose';

const ClassInstanceSchema =new mongoose.Schema({
    classvalue:{
        type: Number,
        ref: "Class Schema",
        require: true
    },
    section:{
        type: String,
        req: true
    },
    year:{
        type: Number,
        req: true
    }
});

const ClassInstance=mongoose.model("ClassInstance Schema",ClassInstanceSchema);
export default ClassInstance;