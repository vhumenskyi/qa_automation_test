Feature: The move test suite

Scenario: Move card employee 
    Given I open application Home page
	And I clear search results
	When I move employee from "Applied" to "Interviewing" section by attribute "gonzalez"
	And I move employee from "Hired" to "Interviewing" section by attribute "julia"
	And I move employee from "Interviewing" to "Hired" section by attribute "gonzalez"
	And I move employee from "Interviewing" to "Applied" section by attribute "julia"
	And I move employee from "Applied" to "Interviewing" section by attribute "worcester"