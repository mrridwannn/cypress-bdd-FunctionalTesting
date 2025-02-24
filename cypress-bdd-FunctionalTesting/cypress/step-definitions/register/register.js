import RegisterPage from "../../pageObjects/RegisterPage/RegisterPage";
import userData from "../../fixtures/user.json";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the registration page", () => {
  RegisterPage.visit();
});

When("I enter valid registration details", () => {
  RegisterPage.enterFirstName(userData.firstName);
  RegisterPage.enterLastName(userData.lastName);
  RegisterPage.enterEmail(userData.email);
  RegisterPage.enterPassword(userData.password);
});

When("I agree to the terms and conditions", () => {
  RegisterPage.agreeToTerms();
});

When("I submit the registration form", () => {
  RegisterPage.submitRegistration();
});

Then("I should see a success message", () => {
  RegisterPage.verifyRegistrationSuccess();
});
