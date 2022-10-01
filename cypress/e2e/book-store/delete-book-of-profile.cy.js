const { ProfilePage } = require("../../pages/book-application/profile-page");
const { LoginPage } = require("../../pages/book-application/login-page");
const { AlertPopup } = require("../../pages/book-application/alert-popup");
const { MessageConstants } = require("../../constants/message-constants");
const { AccountHelper } = require("../../utils/api/account-helper");
const { BookStoreHelper } = require("../../utils/api/book-store-helper");
describe('Delete book from profile', () => {
    before(function () {
        cy.fixture('book-store/delete-book-info.json').as('deleteBookInfo');
    });
    beforeEach(function () {
        LoginPage.navigate();   
        AccountHelper.getLoginRespond(this.deleteBookInfo.username, this.deleteBookInfo.password).then((response) => {
            AccountHelper.loginByAPI(this.deleteBookInfo.username, response.body.userId, response.body.token, response.body.expires);
            BookStoreHelper.getListBook().its('body').then((listBooks) => {
                let listIsbn;
                for (var i = 0; i <= listBooks.books.length; i++) {
                    cy.log(listBooks.books[i])
                    if (this.deleteBookInfo.bookName === listBooks.books[i].title) {
                        listIsbn = '"isbn": "' + listBooks.books[i].isbn + '"';
                        BookStoreHelper.addListBookToProfile(response.body.userId, listIsbn, response.body.token);
                    }
                }
           }) 
        })
        ProfilePage.navigate();
    });
    it.only('Delete book from profile successfully', function () {
        ProfilePage.getDeleteBookButton(this.deleteBookInfo.bookName).click();
        ProfilePage.clickConfirmDelete();
        AlertPopup.compareMessage(MessageConstants.MESSAGE_DELETE_BOOK_SUCCESSFULLY);
        ProfilePage.getBookLink(this.deleteBookInfo.bookName).should('not.exist');
    });
});