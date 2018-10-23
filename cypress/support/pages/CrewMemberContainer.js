class CrewMemberContainer {
	
	getUserCity() {
		return cy.get('div.CrewMemeber-name > div:nth-child(2)');
	}
	
	getUserName() {
		return cy.get('div.CrewMemeber-name > div:nth-child(1)');
	}
	
	getUserSurname() {
		return cy.get('div.CrewMemeber-name > div:nth-child(1)');
	}
	
	crewMemberUp() {
		return cy.get('div.CrewMember-toolbar > button');
	}
	
	crewMemberDown() {
		return cy.get('div.CrewMember-toolbar > button');
	}
}

export default CrewMemberContainer;