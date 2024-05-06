import SearchPage from '../POM/search/SearchPage';
import SearchAssertions from '../POM/search/SearchAssertions';

const searchPage = new SearchPage();
const searchAssertions = new SearchAssertions();

describe('Search Functionality', () => {
  beforeEach(() => {
    searchPage.visitHomePage();
    searchPage.agreeToNotice();
    searchPage.openSearch();
  });

  it('successfully searches for a term', () => {
    searchPage.searchForTerm('lipstick');
    searchAssertions.verifySearchResults();
  });

  it('searches for an invalid term', () => {
    searchPage.searchForTerm('kjsvhjb');
    searchAssertions.verifyNoResultsFound();
  });

  it('empty search', () => {
    searchPage.searchForTerm('');
    searchAssertions.verifyEmptySearch();
  });
});
