import mongoose, { Schema } from 'mongoose';

const QuizSchema =new mongoose.Schema({
    topic:{
        type:Schema.Types.ObjectId,
        ref: "Topic Schema",
        require: true
    },

});

const Quiz=mongoose.model("Quiz Schema", QuizSchema);
export default Quiz;