Feature: Product Search
  Scenario: User searches for a product
    Given I am on the homepage
    When I search for "MacBook"
    Then I should see relevant search results
