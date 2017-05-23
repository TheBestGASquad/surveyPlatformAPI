// You ahve critical information stored in the mongoose study
'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Survey = models.survey

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Survey.find()
    .then(surveys => res.json({
      surveys: surveys.map((e) =>
        e.toJSON({ virtuals: true})), // no
    }))
    .catch(next);
}

const userSurveys = (req, res, next) => {
  let searchUserSurveys = { _owner: req.user._id };
  Survey.find(searchUserSurveys)
  .then(survey => survey ? res.json({ survey }) : next())
  .catch(err => next(err))
};

const show = (req, res) => {
  res.json({
    survey: req.survey.toJSON({ virtuals: true}),
  })
}

const create = (req, res, next) => {
  let survey = Object.assign(req.body.survey, {
    _owner: req.user._id,
  })
  Survey.create(survey)
    .then(survey =>
      res.status(201)
        .json({
          survey: survey.toJSON({ virtuals: true, user: req.user }),
        }))
    .catch(next)
}

// allows the current user update the title of a survey linked to them
const update = (req, res, next) => {
  // This works effectively for renaming our survey
  delete req.body._owner;  // disallow owner reassignment.
  req.survey.update(req.body.survey)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.survey.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  userSurveys,
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Survey), only: ['show'] },
  { method: setModel(Survey, { forUser: true }), only: ['update', 'destroy'] },
], });
