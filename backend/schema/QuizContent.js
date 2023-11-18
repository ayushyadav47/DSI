import mongoose, { Schema } from 'mongoose';

const QuizContentSchema =new mongoose.Schema({
    quizid:{
        type:Schema.Types.ObjectId,
        ref: "Quiz Schema",
        require: true
    },
    qno:{
        type: Number,
        req: true
    },
    ques:{
        type:String,
        req: true
    },
    ans:{
        type:String,
        req: true
    }

});

const QuizContent=mongoose.model("QuizContent Schema", QuizContentSchema);
export default QuizContent;