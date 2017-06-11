'use strict'

const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  response: Boolean
})

const questionSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true
  },
  _survey: {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Survey',
   required: true
  },
 results: [answerSchema]
})

questionSchema.virtual('timesTaken').get(function () {
  return this.results.length
})

questionSchema.virtual('answerData').get(function () {
  // yes = 0
  // no = 0
  // for each item in results
    // if item.response === true yes++
    // else no++
  // not entirely sure how return will work. It has 2 values, which is kind of annoying

  // also not entirely sure of how we will get the results from every question in a survey.
    // probably calling this method in concert with the
    // get survey questions method
  // need to talk to tony asap tm, asking him about how he called the virtuals. Also need to ask him about how he fixed the surveyQuestions method.
})

// burndown
// questionSchema.virtual('avgScore').get(function () {
//   let avgScore =  this.sumOfAnswers / this.numberOfTimesAnswered
//   return avgScore
// })

const Question = mongoose.model('Question', questionSchema)



module.exports = Question
