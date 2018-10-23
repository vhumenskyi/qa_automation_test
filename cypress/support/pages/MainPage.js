import CrewMemberContainer from './CrewMemberContainer';
import SearchForm from './SearchForm';

class MainPage {
	
	goToMainPage() {
		cy.visit('http://localhost:3000/');
	}
	
	 constructor() {
		this.searchForm = new SearchForm();
	}
	
	search(name, city) {
		this.searchForm.fillName(name);
		this.searchForm.fillCity(city);
		this.searchForm.submitSearch();
	}
	
	searchByName(name) {
		this.searchForm.fillName(name);
		this.searchForm.submitSearch();
	}
	
	searchByCity(city) {
		this.searchForm.fillCity(city);
		this.searchForm.submitSearch();
	}
	
	checkResultsSize(size) {
		cy.get('div.CrewMember-container').should('have.length', size);
	}
	
	checkResultsAttribute(size) {
		cy.get('div.CrewMember-container').should('have.length', size);
	}
	
	clearSearchResult() {
		this.searchForm.clearSearch();
	}
	
	moveEmployee(moveFrom, moveTo, byAttribute) {
		
		switch (moveFrom) {
		  case 'Applied':
			this.moveUp(moveFrom, moveTo, byAttribute);
			break;
		  case 'Interviewing':
			if (moveTo == 'Applied') {
				this.moveDowm(moveFrom, moveTo, byAttribute);
			} else {
				this.moveUp(moveFrom, moveTo, byAttribute);
			}
			break;
		  case 'Hired':
			this.moveDowm(moveFrom, moveTo, byAttribute);
			break;
		}
	}
	
	moveDowm(moveFrom, moveTo, byAttribute) {
		this.clickDownOrUp(moveFrom, byAttribute, false);
		this.checkSectionContainsEmployee(moveTo, byAttribute);
	}
	
	moveUp(moveFrom, moveTo, byAttribute) {
		this.clickDownOrUp(moveFrom, byAttribute, true);
		this.checkSectionContainsEmployee(moveTo, byAttribute);
	}
	
	checkSectionContainsEmployee(section, attribute) {
		cy.get('div.App-column').contains(section).parent().find('div.CrewMember-container').contains(attribute);
	}
	
	clickDownOrUp(moveFrom, attribute, isUp) {
		cy.get('div.App-column').contains(moveFrom).parent().find('div.CrewMember-container').contains(attribute).parent().parent().parent().contains(isUp ? '>' :'<').click();
	}
}

export default MainPage;