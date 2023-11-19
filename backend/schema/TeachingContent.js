import mongoose, { Schema } from 'mongoose';

const TeachingContentSchema =new mongoose.Schema({
    teacherID:{
        type:String,
        ref: "Teacher Schema",
        req: true
    },
    topic:{
        type:Schema.Types.ObjectId,
        ref: "Topic Schema",
        req: true
    },
    time:{
        type: Date,
    },
    promt:{
        type: String,
        req: true
    },
    content:{
        type: String,
        req: true
    }

});

const TeachingContent=mongoose.model("TeachingContent Schema", TeachingContentSchema);
export default TeachingContent;