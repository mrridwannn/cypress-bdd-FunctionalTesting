class LoginPage {
    visit() {
      cy.visit("https://demo.opencart.com/index.php?route=account/login");
    }
  
    enterEmail(email) {
      cy.get("#input-email").type(email);
    }
  
    enterPassword(password) {
      cy.get("#input-password").type(password);
    }
  
    submitLogin() {
      cy.get("button[type='submit']").click();
    }
  
    verifyLoginSuccess() {
      cy.get("h2").should("contain", "My Account");
    }
  }
  
  export default new LoginPage();
  