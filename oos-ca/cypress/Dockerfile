FROM cypress/base:10
RUN npm install --save-dev cypress
RUN npm install --save-dev cypress-cucumber-preprocessor
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run