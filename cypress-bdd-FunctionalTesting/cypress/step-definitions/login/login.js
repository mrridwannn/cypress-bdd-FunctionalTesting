import LoginPage from "../../pageObjects/LoginPage/LoginPage";
import userData from "../../fixtures/user.json";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  LoginPage.visit();
});

When("I enter valid credentials", () => {
  LoginPage.enterEmail(userData.email);
  LoginPage.enterPassword(userData.password);
});

When("I submit the login form", () => {
  LoginPage.submitLogin();
});

Then("I should see my account page", () => {
  LoginPage.verifyLoginSuccess();
});
