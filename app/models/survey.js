'use strict'

const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  //
  questions: [] // herein we have a slight problem: I am not sure how to best represent that one survey has many questions
  //
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

// entirely possible I need to define the logic here. Still need to put more thought into how the logic will work

const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
