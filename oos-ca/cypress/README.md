# AUTOMATION PROJECT FOR CREW APPLICATION

Cypress BDD project to test application which represents dashboard with candidates.

### Running locally
`cd /your/project/path/`

`npm install cypress --save-dev` - install cypress as a part of your devenv.

`npm install --save-dev cypress-cucumber-preprocessor` - install cucumber preprocessor.

Follow instraction in README.md under "oos-ca" folder to start test application. Be carefull if you will run instraction from README.md under "oos-ca" first and only after will run instructions for cypress it will override node_modules/prop-types, so you will be unable to start test application. 

`npx cypress open`

### Running in docker
//TODO
