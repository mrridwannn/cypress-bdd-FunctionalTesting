Feature: User Login
  Scenario: User successfully logs in
    Given I open the login page
    When I enter valid credentials
    And I submit the login form
    Then I should see my account page
