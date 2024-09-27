const mongoose = require('mongoose');

const solvedTestSchema = new mongoose.Schema({
   testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },  // Reference to the test
   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },  // Reference to the user
   solvedQuestions: [
      {
         questionId: { type: mongoose.Schema.Types.ObjectId, required: true },    // Reference to the question
         selectedAnswer: { type: String, required: true },                       // User's answer
         isCorrect: { type: Boolean, required: true }                            // Whether the answer is correct
      }
   ],
   score: { type: Number, required: true },                                       // User's total score
   dateSolved: { type: Date, default: Date.now }                                  // Date when the test was solved
});

const SolvedTest = mongoose.model('SolvedTest', solvedTestSchema);

module.exports = SolvedTest;
