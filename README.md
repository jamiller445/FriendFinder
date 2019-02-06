# FriendFinder

### FriendFinder node express application


*FriendFinder* is a node express application that presents to the site visitor a survey form asking the user to respond to a series of questions with a numerical value from one (strongly disagree) to five (strongly agree).  A difference value is derived by comparing the user's responses to survey questions to the answers entered from previous survey respondents.  The respondent with the least amount of difference is presented as the closest match to the current survey respondent and the name and photo of a previous respondent is returned to the browser.      


### Components

*app/data/friends.js*

    Array of previous respondents as objects

*apiRoutes.js*

    GET route to /api/friends returns JSON object of previous respondents

    POST route /api/friends submits form data entered in browser. Compatibililty logic runs here also.

*htmlRoutes.js*

    GET route to /survey displays the survey page survey.html

    GET route to / (default) displays the home page home.html

*server.js*

    Node express server running as a Heroku deployment

    