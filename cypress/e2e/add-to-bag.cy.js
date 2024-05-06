import AddToBagLocators from '../POM/add-to-bag/AddToBagLocators';
import AddToBagAssertions from '../POM/add-to-bag/AddToBagAssertions';

describe('Add to Bag Functionality', () => {
    const addToBagAssertions = new AddToBagAssertions();

    beforeEach(() => {
        cy.visit('https://www.kikocosmetics.com/en-us');
        cy.get('#didomi-notice-agree-button').click(); 
    });

    it('Empty bag', () => {
        cy.get('a.header_headerElement__5VRsS[href="/en-us/cart/"]').click();
        cy.contains('Your bag is empty').should('be.visible');
    });

    it('Add item to bag and check product in bag', () => {
        cy.visit('https://www.kikocosmetics.com/en-us/p/new-luxurious-lashes-waterproof-mascara-13767/');
        cy.get(AddToBagLocators.addToBagButton).click();
        cy.get(AddToBagLocators.viewBagButton).scrollIntoView().click(); 
        addToBagAssertions.verifyProductInBag('New Luxurious Lashes Waterproof Mascara');
    });
});