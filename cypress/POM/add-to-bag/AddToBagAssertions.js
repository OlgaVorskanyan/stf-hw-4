class AddToBagAssertions {
    verifyProductInBag(productName) {
      cy.contains(productName).should('be.visible');
    }
  }
  
  export default AddToBagAssertions;
  