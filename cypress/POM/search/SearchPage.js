import searchLocators from './SearchLocators';

class SearchPage {
  visitHomePage() {
    cy.visit('https://www.kikocosmetics.com/en-us/');
  }

  agreeToNotice() {
    cy.get('#didomi-notice-agree-button').click();
  }

  openSearch() {
    cy.get(searchLocators.searchButton).click();
  }

  searchForTerm(term) {
    cy.get(searchLocators.searchInput).should('be.visible').type(`${term}{enter}`);
  }
}

export default SearchPage;
