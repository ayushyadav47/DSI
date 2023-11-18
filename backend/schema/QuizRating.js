import mongoose, { Schema } from 'mongoose';

const QuizRatingSchema =new mongoose.Schema({
    quizattemptid:{
        type:Schema.Types.ObjectId,
        ref: "QuizAttempt Schema",
        require: true
    },
    rating:{
        type: Number,
        default: 3
    },
    comments:{
        type:String,
    },
    

});

const QuizRating=mongoose.model("QuizRating Schema", QuizRatingSchema);
export default QuizRating;