describe('book details page', () => {
  beforeEach(() => {
    // clear local storage
    localStorage.clear();

    // viewport size
    cy.viewport('iphone-xr');

    // visit the book page
    cy.visit('/books');
  });

  it('open page function', () => {
    // open book tab
    cy.get('#books-tab').click();

    // click first category
    cy.get('.category-option').first().click();

    // find first book
    cy.get('.book-item')
      .first()
      .then(($book) => {
        // find title element
        const $title = $book.find('.book-title');

        // get title text
        const title = $title.text();

        // click book to open book details
        cy.wrap($book).click();

        // click favorite button
        // eslint-disable-next-line cypress/no-force
        cy.get('#read-button').click({ force: true });

        // should redirect to book details page
        cy.url().should('include', '/books/');

        // the page must contain the same title as the book that was clicked
        cy.contains(title).should('be.visible');
      });
  });

  it('favorite button function', () => {
    // open book tab
    cy.get('#books-tab').click();

    // click first category
    cy.get('.category-option').first().click();

    // find first book
    cy.get('.book-item')
      .first()
      .then(($book) => {
        // find title element
        const $title = $book.find('.book-title');

        // get title text
        const title = $title.text();

        // click book to open book details
        cy.wrap($book).click();

        // click favorite button
        // eslint-disable-next-line cypress/no-force
        cy.get('#read-button').click({ force: true });

        // should redirect to book details page
        cy.url().should('include', '/books/');

        // click favorite button
        cy.get('#favorite-button').click();

        // back to books page
        cy.get('#back-button').click();

        // the page should equal the book page url
        cy.url().should('eq', `${Cypress.config().baseUrl}/books`);

        // click favorite button
        // eslint-disable-next-line cypress/no-force
        cy.get('#favorite-tab').click();

        // favorite tab should contain the book title
        cy.contains(title).should('be.visible');
      });
  });
});
