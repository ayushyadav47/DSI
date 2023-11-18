import mongoose from 'mongoose';

const SubjectSchema =new mongoose.Schema({
    code:{
        type: String,
        require: true
    },
    name:{
        type:String,
        require: true
    },
    classvalue:{
        type: Number,
        ref: "Class Schema",
        require: true
    },
});

const Subj=mongoose.model("Subj Schema",SubjectSchema);
export default Subj;