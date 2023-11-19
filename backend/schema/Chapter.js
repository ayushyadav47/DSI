import mongoose from 'mongoose';

const ChapterSchema =new mongoose.Schema({
    subjcode:{
        type: String,
        require: true,
        ref: "Chapter Schema"
    },
    chno:Number,
    name:{
        type:String,
        require: true
    },
});

const Chapter=mongoose.model("Chapter Schema",ChapterSchema);
export default Chapter;