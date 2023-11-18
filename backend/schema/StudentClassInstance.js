import mongoose, { Schema } from 'mongoose';

const StudentClassInstanceSchema =new mongoose.Schema({
    teacherid:{
        type: String,
        ref: "Teacher Schema",
        require: true
    },
    classisnt:{
        type: Schema.Types.ObjectId,
        ref: "ClassInstance Schema",
        req: true
    },
    subjectcode:{
        type: String,
        ref: "Subj Schema",
        req: true
    }
});

const StudentClassInstance=mongoose.model("StudentClassInstance Schema",StudentClassInstanceSchema);
export default StudentClassInstance;