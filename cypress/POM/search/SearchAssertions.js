class SearchAssertions {
    verifySearchResults() {
      cy.url().should('include', 'search');
      cy.contains('lipstick').should('be.visible');
    }
  
    verifyNoResultsFound() {
      cy.url().should('include', 'search');
      cy.contains('No results found').should('be.visible');
    }
  
    verifyEmptySearch() {
      cy.url().should('not.include', 'search');
    }
  }
  
  export default SearchAssertions;
  