import LoginPage from "../../pageObjects/LoginPage/LoginPage";
import userData from "../../fixtures/user.json";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  LoginPage.visit();
});

When("I enter an invalid email and password", () => {
  LoginPage.enterEmail(userData.invalidUser.email);
  LoginPage.enterPassword(userData.invalidUser.password);
});

When("I enter valid credentials", () => {
  LoginPage.enterEmail(userData.validUser.email);
  LoginPage.enterPassword(userData.validUser.password);
});

When("I submit the login form", () => {
  LoginPage.submitLogin();
});

Then("I should see my account page", () => {
  LoginPage.verifyLoginSuccess();
});

Then("I should see an error message", () => {
  LoginPage.verifyLoginFailed();
});
