'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Question = models.question

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

// index and show is going to be largely the same as they are in
// survey. Show will be indiscriminate while index will be linked
// to the ID of its owner
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
  });
  Question.create(question)
    .then(question =>
      res.status(201)
        .json({
          question: question.toJSON({ virtuals: true, user: req.user }),
        }))
    .catch(next)
}

// basically using standard issue long form update here. Not sure if it will work or If I will need something more elaborate. Also need to plan for the strong probability that it is simply not possible to touch the array without some form of authentication.
const update = (req, res, next) => {
  Question.findById(req.params.id, function(err, question) {
    if (err) {
      res.status(422).send(err);
    } else {
      // I am actually unsure of exactly what will be pushed to the results array. Using req.params.data as a standin until I hit this problem head on.
          question.results = question.results.push(req.params.data)
    }
    question.save(function (err, updatedQuestion) {
        if (err) return handleError(err);
        res.send(updatedQuestion);
      });
  })
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
