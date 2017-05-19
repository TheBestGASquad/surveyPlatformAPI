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
    .then(examples => res.json({
      examples: surveys.map((e) =>
        e.toJSON({ virtuals: true})), // no
    }))
    .catch(next);
}

const show = (req, res) => {
  res.json({
    example: req.survey.toJSON({ virtuals: true, user: req.user }),
  });
};
