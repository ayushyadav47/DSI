import mongoose from 'mongoose';

const ClassSchema =new mongoose.Schema({
    classvalue: Number,
    curriculum: String
});

const Class=mongoose.model("Class Schema",ClassSchema);
export default Class;