import mongoose from 'mongoose';

const SubjectInstanceSchema =new mongoose.Schema({
    teacherID:{
        type: String,
        ref: "Teacher Schema",
        require: true
    },
    classinst:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassInstance Schema",
        require: true
    },
    subjectcode:{
        type: String,
        ref: "Subj Schema",
        require: true
    }
});

const SubjectInstance=mongoose.model("SubjectInstance Schema",SubjectInstanceSchema);
export default SubjectInstance;