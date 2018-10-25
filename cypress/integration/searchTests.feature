Feature: The search test suite
	
Scenario Outline: Search by name
    Given I open application Home page
	And I clear search results
	And I see employee with city "<name>" under section "<section>"
	When I specify employee name "<name>"
	Then I see <resultSize> search result
	And I see employee with city "<name>" under section "<section>"
	And I clear search results
	
	Examples:
		|name           |resultSize|section|
		|gonzalez       |1         |Applied|
		|emma           |1         |Applied|
		|danielle moore |1         |Applied|
		|jul            |1         |Hired|


Scenario Outline: Search by name
    Given I open application Home page
	And I clear search results
	When I specify employee name "<name>"
	Then I see <resultSize> search result
	And I clear search results
	
	Examples:
		|name           |resultSize|
		|peter          |0         |
		
Scenario Outline: Search by city
    Given I open application Home page
	And I clear search results
	And I see employee with city "<city>" under section "<section>"
	When I specify employee city "<city>"
	Then I see <resultSize> search result
	And I see employee with city "<city>" under section "<section>"
	And I clear search results
	
	Examples:
		|city      |resultSize|section|
		|hereford  |1         |Applied|
		|worcester |1         |Applied|
		|shef      |1         |Hired  |


Scenario Outline: Search by city
    Given I open application Home page
	And I clear search results
	When I specify employee city "<city>"
	Then I see <resultSize> search result
	And I clear search results
	
	Examples:
		|city      |resultSize|
		|borzna    |0         |

		
	Scenario Outline: Search by both parameters
    Given I open application Home page
	And I clear search results
	When I specify employee name "<name>" and city "<city>"
	Then I see <resultSize> search result
	And I clear search results
	
	Examples:
		|name      |city     |resultSize|
		|lloyd     |hereford |1         |
		|borzna    |hereford |0         |
		|null      |worcester|0         |
		|linda ruiz|liverpool|1         |
		|dan       |card     |1         |