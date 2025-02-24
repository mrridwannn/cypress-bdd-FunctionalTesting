Feature: Product Checkout
  Scenario: User completes a purchase
    Given I have added a product to the cart
    And I open the checkout page
    Then I saw the payment page
