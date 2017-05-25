Survey Lemur

FRONT END DEPLOYED - https://thebestgasquad.github.io/FrontEnd/
FRONT END REPO - https://github.com/TheBestGASquad/FrontEnd
BACKEND REPO - https://github.com/TheBestGASquad/surveyPlatformAPI
BACKEND DEPLOYED - https://radiant-plains-78167.herokuapp.com/

Explanation of project:

The purpose of this application is to create custom surveys and collect the responses.  The user can create an account, create, update, and delete surveys.  These surveys will be stored in a database for the user.  The user will need to sign up, sign in, and press “Show My Surveys” for a list of his/her current surveys.  As these surveys are created, there is a delete and rename button next to each survey which will allow the user to rename or delete a survey.  The user can also click “View Survey” to see the questions that he/she created for each survey.

Process:

As a team we started the process by figuring out what functionalities we wanted in the app.  Then we started the back end by pair coding.  We built the backend using class notes and online resources.


Routes:

* (‘/surveys/‘, ’surveys#createSurveys’) - POST
* (‘/questions/‘, ‘questions#createQuestions’) - POST
* ('/user-surveys', 'surveys#userSurveys’) - GET
* (‘/questions, ‘questions#surveyQuestions’) - GET
* (‘/surveys/:id’, surveys#destroySurveys) - DELETE
* (‘/surveys/:surveyId’, surveys#updateSurveys) - PATCH
* (‘/questions/: id’, questions#answerQuestion) - PATCH
