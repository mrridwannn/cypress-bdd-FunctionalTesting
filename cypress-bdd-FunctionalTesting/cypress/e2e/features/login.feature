Feature: User Login

  Scenario: No match for email and password
    Given I open the login page
    When I enter an invalid email and password
    And I submit the login form
    Then I should see an error message

  Scenario: User successfully logs in
    Given I open the login page
    When I enter valid credentials
    And I submit the login form
    Then I should see my account page
