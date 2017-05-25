'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Question = models.question

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

// const index = (req, res, next) => {
//   let searchUserQuestions = { _survey: req.body.question._survey }
//   Question.find(searchUserQuestions)
//     .then(question => res.json({
//       question: question.map((e) =>
//         e.toJSON({ virtuals: true})), // no
//     }))
//     .catch(err => next(err))
// }

// indiscriminate index. We don't want this because we do not want the user to be able to return questions without first returning a survey
const index = (req, res, next) => {
  let searchUserQuestions = { _survey: req.query.question._id }
  Question.find(searchUserQuestions)
    .then(question => res.json({
      question: question.map((e) =>
        e.toJSON({ virtuals: true})), // no
    }))
    .catch(err => next(err))

}

const show = (req, res) => {
  res.json({
    question: req.question.toJSON({ virtuals: true}),
  })
}

// create is going to need to be called in congress with create survey so
// that survey can pass its ID to the questions
const create = (req, res, next) => {
  let question = Object.assign(req.body.question, {
    _survey: req.body.question._survey
    // this pretty much mandates that question be created in concert with
    // survey
  })
  Question.create(question)
    .then(question =>
      res.status(201)
        .json({
          question: question.toJSON({ virtuals: true, user: req.user }),
        }))
    .catch(next)
}

const update = (req, res, next) => {
  Question.findByIdAndUpdate(req.params.id, { $push: { results: req.body.question.results }}, function (err, question) {
    if (err) return handleError(err)
    res.send(question)
  })

  // Question.findById(req.params.id, function(err, question) {
  //   if (err) {
  //     console.log('hits error')
  //     res.status(422).send(err)
  //   } else {
  //     console.log('hits handling')
  //     question.results.push(req.body.question.results)
  //   }
  //   console.log('question outside question.save: ' + question)
  //   question.save(function (err, updatedQuestion) {
  //     console.log('updatedQuestion: ' + updatedQuestion)
  //     // console.log('res.question' + res.question)
  //     if (err) {
  //       res.status(500).send(err)
  //     }
  //     res.send(updatedQuestion)
  //     })
  // })
}

// allows for deletion of single question
const destroy = (req, res, next) => {
  req.question.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show', 'update'] },
  { method: setModel(Question), only: ['show'] },
  { method: setModel(Question, { forUser: true }), only: ['update', 'destroy'] },
], })
