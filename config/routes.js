'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')
.resources('surveys')
.resources('questions')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.get('/user-surveys', 'surveys#userSurveys')
.patch('/edit-question/:id', 'questions#editQuestion')
.post('/add-question/:id', 'questions#addQuestion')
.get('/user-surveys/:id', 'surveys#surveysTaken')
.resources('users', { only: ['index', 'show'] })

// all routes created
