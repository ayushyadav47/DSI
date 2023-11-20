import mongoose, { Schema } from 'mongoose';

const StudentClassInstanceSchema =new mongoose.Schema({
    classinst:{
        type: Schema.Types.ObjectId,
        ref: "ClassInstance Schema",
        req: true
    },
    rollno:{
        type: Number,
        ref: "Student Schema",
        req: true
    }
});

const StudentClassInstance=mongoose.model("StudentClassInstance Schema",StudentClassInstanceSchema);
export default StudentClassInstance;