'use strict'

const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  results: []
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      let userId = (options.user && options.user._id) || false
      ret.editable = userId && userId.equals(doc._owner)
      return ret
    }
  }
})

surveySchema.virtual('addAnswer').patch(function addAnswer(data) {
  this.results.push(data)
  // do I need a return value for a non-get?
})

surveySchema.virtual('getStats').get(function stats() {
  // will parse the data we want and return it.
  // Until we have a better idea of how we want to model
  return res = `${this.prompt} has been answered ${this.results.length} times`
})

const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
