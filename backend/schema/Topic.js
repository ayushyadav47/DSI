import mongoose from 'mongoose';

const TopicSchema =new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    topicno:Number,
    chapter:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Chapter Schema",
        require: true
    },
});

const Topic=mongoose.model("Topic Schema",TopicSchema);
export default Topic;