const { ProfilePage } = require("../../pages/book-application/profile-page");
const { LoginPage} = require("../../pages/book-application/login-page");
const { BookStorePage } = require("../../pages/book-application/book-store-page");
const { BookDetailPage } = require("../../pages/book-application/book-detail-page");
const { AlertPopup} = require("../../pages/book-application/alert-popup");
const { MessageConstants} = require("../../constants/message-constants");
const { AccountHelper } = require("../../utils/api/account-helper");
describe('Add book to collection', () => {
    before(function () {
        cy.fixture('book-store/add-book-info.json').as('addBookInfo');
    });
    beforeEach(function () {
        LoginPage.navigate();
        AccountHelper.getLoginRespond(this.addBookInfo.username, this.addBookInfo.password).then((response)=>{
            AccountHelper.loginByAPI(this.addBookInfo.username, response.body.userId, response.body.token, response.body.expires);
            
        })
        ProfilePage.navigate();
        ProfilePage.deleteBookSuccessfully(this.addBookInfo.bookName);
        BookStorePage.navigate();
    });
    it.only('Add book to collection successfully', function () {
        BookStorePage.inputSearchQuery(this.addBookInfo.bookName);
        BookStorePage.getBookLink(this.addBookInfo.bookName).click();
        BookDetailPage.clickAddBookButton();
        AlertPopup.compareMessage(MessageConstants.MESSAGE_ADD_BOOK_SUCCESSFULLY);
        ProfilePage.navigate();
        ProfilePage.getBookLink(this.addBookInfo.bookName).should('be.visible');
    });
});