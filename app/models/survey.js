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

// one of these two methods will be the way in which we add data to
// the results array
surveySchema.methods.addaAnswer = function (data) {
  this.result.push(data)
}

// // I do not think this is the correct method. Virtuals do not persist to the database
// // and we need ot persist at the moment.
// surveySchema.virtual('addAnswer').patch(function addAnswer(data) {
//   this.results.push(data)
// })
//
// surveySchema.virtual('getStats').get(function stats() {
//   // will parse the data we want and return it.
//   // Until we have a better idea of how we want to model
//   return `${this.prompt} has been answered ${this.results.length} times`
// })

const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
