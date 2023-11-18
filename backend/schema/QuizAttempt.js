import mongoose from 'mongoose';

// const numParams=4

const QuizAttemptSchema =new mongoose.Schema({
    time:{
        type:Date,
        req:true,
    },
    quizid:{
        type:Schema.Types.ObjectId,
        ref: "Quiz Schema",
        require: true
    },
    studentclassinstid:{
        type: Schema.Types.ObjectId,
        ref: "StudentClassInstance Schema",
        require: true
    },

    // crtitcal thinking
    param1:{
        type: Number,
        default: 0
    },

    // creativity
    param2:{
        type: Number,
        default: 0
    },

    // social context
    param3:{
        type: Number,
        default: 0
    },

    // morals
    param4:{
        type: Number,
        default: 0
    },
});

const QuizAttempt=mongoose.model("QuizAttempt Schema",QuizAttemptSchema);
export default QuizAttempt;