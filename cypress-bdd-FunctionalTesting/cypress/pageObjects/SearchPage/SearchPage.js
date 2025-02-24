class SearchPage {
    searchProduct(productName) {
      cy.get("input[name='search']").type(productName);
      cy.get('button[data-lang="en-gb"]').click();
    }
  
    verifySearchResults(productName) {
      cy.get(".product-thumb").should("contain", productName);
    }
  }
  
  export default new SearchPage();
  