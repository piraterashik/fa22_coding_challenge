Hey! Thanks for your interest in joining Hack4Impact BU! We require prospective impact team members to complete this coding challenge for two reasons: 1) So they have a basic understanding of some possible obstacles they will face when working on one of our partner’s projects and 2) to see if the Impact Team is currently the right place for you.

As much as this is an examination to join the Impact Team, this in turn assesses your current abilities as well. If you find this challenge a bit too difficult or you would like to have more exposure to these technologies & those similar feel free to contact us at bostonuniversity@hack4impact.org and express interest in joining the Junior Development Team.

Without further ado, please complete the following (note, appropriate places for these actions items to be completed will be denoted with comments in the code):

Preliminary:

- create a remote repository and connect to a directory on your machine

1. In the backend directory:

- In your terminal run 'npm init -y; npm install nodemon -g; npm install cors mongoose express'

  NOTE: after this, you can run 'npx nodemon server' in the terminal to run the server when you please. nodemon allows us to run the server and concurrently update it by saving our 'backend' directory files.

- Initialize the Express app

- Create a database on MongoDB & connect it to your application

- Create a ‘task’ schema (‘taskSchema’) with a 'String' data type & make it required.

- Create PUT (update operation) & DELETE (delete operation) request routes

2. In the frontend directory:

- In your terminal run 'npm i axios'

- Create the update (PUT request) & delete (DELETE request) functions in services/taskServices.js

- Create update (PUT request) & delete (DELETE request) operations (using the previous 2 functions)

- Create ‘CreateTask’ component (this should make a POST request, hence using the create operation already implemented in services/taskServices.js)

Feel free to change the design if you’d like. Please send us a ZIP file of your code to our aforementioned email address within 1 week with the subject line of “F22 Coding Challenge - [insert your full name]”. We look forward to your submission!
