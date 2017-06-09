'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Question = models.question

const mongoose = require('mongoose')
const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  let searchSurveyQuestions = { _survey: req.query.question._survey }
  console.log('this is req.query', req.query)
  Question.find(searchSurveyQuestions)
  let searchUserQuestions = { _survey: req.query.question._id }
  Question.find(searchUserQuestions)
    .then(question => res.json({
      question: question.map((e) =>
        e.toJSON({ virtuals: true})), // no
    }))
    .catch(err => next(err))
}

const show = (req, res) => {
  console.log('show questions function')
  res.json({
    question: req.question.toJSON({ virtuals: true}),
  })
}

// create is going to need to be called in congress with create survey so
// that survey can pass its ID to the questions
const create = (req, res, next) => {
  console.log('this is create question', req.body)
  let question = Object.assign(req.body.question, {
    _survey: req.body.question._survey
    // console.log('create question function', req.body.question)
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
}

const editQuestion = (req, res, next) => {
  req.question.update(req.body.question)
    .then(() => res.sendStatus(204))
    .catch(next)
}

// allows for deletion of single question
const destroy = (req, res, next) => {
  console.log('delete function')
  console.log('this is req', req)
  console.log('this is req.query', req.query)
  console.log('this is req.question', req.question)
  console.log('this is req.body', req.body)
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
  // { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  // { method: setModel(Question), only: ['show'] },
  { method: setModel(Question), only: ['show', 'update', 'destroy'] },
], })
