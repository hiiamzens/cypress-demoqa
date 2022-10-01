const { BookStorePage } = require("../../pages/book-application/book-store-page");

describe('Search book in book store', () => {
    before(function () {
        cy.fixture('book-store/query-search-books.json').as('querySearchBooks');
    });
    it.only('Search book in book store successfully', function () {
        for (let i = 0; i < this.querySearchBooks.queries.length; i++) {
            BookStorePage.navigate();
            BookStorePage.inputSearchQuery(this.querySearchBooks.queries[i]);
            BookStorePage.getListBook().each(function ($el) {
                expect($el.text().toLowerCase()).to.contain(this.querySearchBooks.queries[i].toLowerCase());
            })
        }
    });
});