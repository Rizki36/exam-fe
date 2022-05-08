describe('Landing page', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit('/');
  });

  it('click books function', () => {
    cy.get('.book-item').each(($el) => {
      cy.wrap($el).click().focus();
    });
  });

  it('double click book function', () => {
    cy.get('.book-item').first().dblclick();
    // should redirect to book details page
    cy.url().should('include', '/books/');
  });

  it('search book function', () => {
    cy.get('#search-book-input')
      .type('Harry Potter')
      .invoke('val')
      .then((val) => {
        // enter search
        cy.get('#search-submit-button').click();
        // search input should be equal to the search value
        cy.get('#search-book-item').should('have.value', val);
        // page url should be include the search value
        cy.url().should('include', '/books?search=Harry+Potter');
      });
  });

  it('view more button function', () => {
    cy.get('#view-more-button').click();
    cy.url().should('include', '/books');
  });

  it('title button redirect function', () => {
    cy.get('#title-button').click();
    cy.url().should('include', '/');
  });

  it('favorite button redirect function', () => {
    cy.get('#favorite-button').click();
    cy.url().should('include', '/books?section=favorite');
  });

  it('profile button redirect function', () => {
    cy.get('#profile-button').click();
    cy.url().should('include', '/profile');
  });
});
