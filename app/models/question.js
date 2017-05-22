'use strict'

const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({ response: Boolean })

const questionSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true
  },
  _survey: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Survey',
   required: true,
 }
 results: [answerSchema]
})

const Question = mongoose.model('Question', surveySchema)

module.exports = Question
