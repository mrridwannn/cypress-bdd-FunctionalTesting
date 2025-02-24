import CheckoutPage from "../../pageObjects/CheckoutPage/CheckoutPage";
import userData from "../../fixtures/user.json";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have added a product to the cart", () => {
  cy.visit("https://demo.opencart.com");
  CheckoutPage.addToCart();
});

Given("I open the checkout page", () => {
  CheckoutPage.openCart();
});

When("I saw the payment page", () => {
  CheckoutPage.paymentPage();
});
