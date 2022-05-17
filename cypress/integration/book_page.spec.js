describe('book page', () => {
  beforeEach(() => {
    // clear local storage
    localStorage.clear();

    // viewport size
    cy.viewport('iphone-xr');

    // visit the book page
    cy.visit('/books');
  });

  it('open tabs function', () => {
    // open book tab
    cy.get('#books-tab').click().should('have.class', 'tab-active');

    // open favorite tab
    cy.get('#favorite-tab').click().should('have.class', 'tab-active');
  });

  it('pagination function', () => {
    // open book tab
    cy.get('#books-tab').click();

    // click first category
    cy.get('.category-option').first().click();

    // find first book
    cy.get('.book-item')
      .first()
      .then(($book) => {
        // find title element of first book
        const $title = $book.find('.book-title');

        // get title text
        const title = $title.text();

        // click next page
        cy.get('#next-pagination-button').click();

        // find first book title of next page
        // then compare with previous first book title
        // and should be different
        cy.get('.book-item')
          .first()
          .find('.book-title')
          .should('not.have.html', title);
      });
  });

  it('search function', () => {
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

        // type search text
        cy.get('#search-book-input').type(title);

        // find first book title
        cy.get('.book-item')
          .first()
          .find('.book-title')
          .should('have.html', title);
      });
  });

  it('favorite function', () => {
    /* Length of Books To Check */
    const lengthCheck = 2;

    for (let index = 0; index < lengthCheck; index += 1) {
      // open book tab
      cy.get('#books-tab').click();

      // click first category
      cy.get('.category-option').first().click();

      // find books
      cy.get('.book-item')
        .eq(index)
        .then(async ($book) => {
          // click book to open book details
          cy.wrap($book).click();

          // click favorite button
          cy.get('#favorite-button').click();

          // click close detail button
          // eslint-disable-next-line cypress/no-force
          cy.get('#close-button').click({ force: true });

          // click favorite tab
          cy.get('#favorite-tab').click();

          // find title element
          const $currentTitle = $book.find('.book-title');

          // get title text
          const currentTitle = $currentTitle.text();

          cy.contains(currentTitle).should('be.visible');
        });
    }
  });
});
