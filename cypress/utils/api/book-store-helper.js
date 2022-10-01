const { APIConstants } = require("../../constants/api-constants");
const { HeaderHelper } = require("../api/header-helper");
export const BookStoreHelper = {
    getAllBooks(userToken) {
        cy.request({
            method: 'GET',
            header: HeaderHelper.getUnauthorizedHeader(),
            url: APIConstants.BOOK_STORE_PREFIX + APIConstants.MANIPULATE_MANY_BOOK_ENDPOINT
        })
    },
    deleteAllBooks(userID, userToken) {
        cy.request({
            method: 'DELETE',
            header: HeaderHelper.getAuthorizedHeader(userToken),
            url: APIConstants.BOOK_STORE_PREFIX + APIConstants.MANIPULATE_MANY_BOOK_ENDPOINT + '?UserId=' + userID
        })
    },
    addListBookToProfile(userId, listIsbn, userToken) {
        cy.request({
            method: 'POST',
            header: HeaderHelper.getAuthorizedHeader(userToken),
            url: APIConstants.BOOK_STORE_PREFIX + APIConstants.MANIPULATE_MANY_BOOK_ENDPOINT,
            body: {
                userId: userId,
                collectionOfIsbns: [
                    listIsbn
                ]
            }
        })
    },
    getListBook() {
       return cy.request({
            method: 'GET',
            header: HeaderHelper.getUnauthorizedHeader(),
            url: APIConstants.BOOK_STORE_PREFIX + APIConstants.MANIPULATE_MANY_BOOK_ENDPOINT,
        })
    }
}