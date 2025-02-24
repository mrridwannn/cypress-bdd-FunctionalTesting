class RegisterPage {
    visit() {
      cy.visit("https://demo.opencart.com/index.php?route=account/register");
    }
  
    enterFirstName(firstName) {
      cy.get("#input-firstname").type(firstName);
    }
  
    enterLastName(lastName) {
      cy.get("#input-lastname").type(lastName);
    }
  
    enterEmail(email) {
      cy.get("#input-email").type(email);
    }
  
    enterPassword(password) {
      cy.get("#input-password").type(password);
    }
  
    agreeToTerms() {
      cy.get("input[name='agree']").check();
    }
  
    submitRegistration() {
      cy.get("button[type='submit']").click();
    }
  
    verifyRegistrationSuccess() {
      cy.get("h1").should("contain", "Your Account Has Been Created!");
    }
  }
  
  export default new RegisterPage();
  