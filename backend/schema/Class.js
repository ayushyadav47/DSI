import mongoose from 'mongoose';

const ClassSchema =new mongoose.Schema({
    _id: Number,
});

const Class=mongoose.model("Class Schema",ClassSchema);
export default Class;