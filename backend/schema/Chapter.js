import mongoose from 'mongoose';

const ChapterSchema =new mongoose.Schema({
    Chaptercode:{
        type: String,
        require: true,
        ref: "Chapter Schema"
    },
    name:{
        type:String,
        require: true
    },
});

const Chapter=mongoose.model("Chapter Schema",ChapterSchema);
export default Chapter;