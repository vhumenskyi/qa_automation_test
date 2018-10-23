class SearchForm {

	fillName(value) {
		const nameField = cy.get('#name');
		nameField.clear();
		nameField.type(value);
		
		return this;
    }
	
	fillCity(value) {
		const cityField = cy.get('#city');
		cityField.clear();
		cityField.type(value);
		
		return this;
    }
	
	submitSearch() {
		const submitButton = cy.get('#filters > button:nth-child(3)');
		submitButton.click();
	}
	
	clearSearch() {
		const clearButton = cy.get('#filters > button:nth-child(4)');
		clearButton.click();
	}	
}

export default SearchForm;