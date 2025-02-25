class CheckoutPage {
    addToCart() {
      cy.get(':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]').first().click();
    }
  
    openCart() {
      cy.get('a[title="Shopping Cart"]').click();
      cy.get('h1').should('contain.text', 'Shopping Cart');
      cy.contains('a', 'Checkout').click();
    }
  
    proceedToCheckout() {
      cy.get("input[value='guest']").check();
      cy.get("#button-account").click();
    }
  
    paymentPage() {
      cy.get('h1').should('contain.text', 'Checkout');
      cy.get('div[class="text-end"]').should('contain.text', 'Confirm Order');
    }
  
  }
  
  export default new CheckoutPage();
  