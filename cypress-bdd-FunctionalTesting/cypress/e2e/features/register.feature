Feature: User Registration
  Scenario: User successfully registers
    Given I open the registration page
    When I enter valid registration details
    And I agree to the terms and conditions
    And I submit the registration form
    Then I should see a success message
