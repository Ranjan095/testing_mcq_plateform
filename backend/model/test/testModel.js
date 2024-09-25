const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
   questionText: { type: String, required: true },
   options: [{ type: String, required: true }],
   correctAnswer: { type: String, required: true }
});

const testSchema = new mongoose.Schema({
   testName: { type: String, required: true },
   questions: [questionSchema],
   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]  // New field to store assigned users
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
