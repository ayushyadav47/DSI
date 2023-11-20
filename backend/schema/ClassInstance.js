import mongoose, { Schema } from 'mongoose';

const ClassInstanceSchema =new mongoose.Schema({
    class:{
        type: Schema.Types.ObjectId,
        ref: "Class Schema",
        require: true
    },
    section:{
        type: String,
        req: true
    },
    year:{
        type: String,
        req: true
    }
});

const ClassInstance=mongoose.model("ClassInstance Schema",ClassInstanceSchema);
export default ClassInstance;