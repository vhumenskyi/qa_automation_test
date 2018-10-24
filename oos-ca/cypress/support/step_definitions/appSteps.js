// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {given} = require('cypress-cucumber-preprocessor')

// you can have external state, and also require things!
import MainPage from '../pages/MainPage';

const url = 'http://localhost:3000/'
const mainPage = new MainPage();

given('I open application Home page', () => {
  cy.visit(url);
})

when('I specify employee name {string} and city {string}', (name, city) => { 
	mainPage.search(name, city);
})

when('I specify employee city {string}', (city) => { 
	mainPage.searchByCity(city);
})

when('I specify employee name {string}', (name) => { 
	mainPage.searchByName(name);
})

then('I see {int} search result', (size) => {
  mainPage.checkResultsSize(size);
});

when('I clear search results', () => { 
	mainPage.clearSearchResult();
})

when('I move employee from {string} to {string} section by attribute {string}', (moveFrom, moveTo, attribute) => { 
	mainPage.moveEmployee(moveFrom, moveTo, attribute);
})

when('I see employee {string} under section {string}', (employee, section) => { 
	mainPage.checkSectionContainsEmployee(section, employee);
})

when('I see employee with city {string} under section {string}', (city, section) => { 
	mainPage.checkSectionContainsEmployee(section, city);
})

