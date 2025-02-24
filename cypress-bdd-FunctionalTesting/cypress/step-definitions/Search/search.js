import SearchPage from "../../pageObjects/SearchPage/SearchPage";
import userData from "../../fixtures/user.json";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the homepage", () => {
  cy.visit("https://demo.opencart.com");
});

When("I search for {string}", (productName) => {
  SearchPage.searchProduct(productName);
});

Then("I should see relevant search results", () => {
  SearchPage.verifySearchResults(userData.searchQuery);
});
