const TXT_SEARCH_BAR = "#searchBox";
const LNK_PROFILE_BOOK_XPATH = "//div[@class='action-buttons']//a[text()='%s']";
const BTN_CONFIRM_DELETE = "#closeSmallModal-ok";
const BTN_DELETE_BOOK_XPATH = "//a[text()='%s']/ancestor::div[@role='rowgroup']//child::span[@title='Delete']";
const BTN_DELETE_ALL_BOOKS = "//div[contains(@class ,'buttonWrap')]//button[text()='Delete All Books']";
const BTN_CONFIRM_DELETE_ALL_BOOKS = "#closeSmallModal-ok";
const LNK_BOOKS_OF_PROFILE = "div[class ='action-buttons'] a";
export const ProfilePage = {
    navigate() {
        cy.visit("/profile");
    },
    getDeleteBookButton(bookName) {
        return cy.xpath(BTN_DELETE_BOOK_XPATH.replace('%s', bookName));
    },
    inputSearchQuery(bookName) {
        cy.get(TXT_SEARCH_BAR).type(bookName);
    },
    getBookLink(bookName) {
        return cy.xpath(LNK_PROFILE_BOOK_XPATH.replace('%s', bookName));
    },
    clickConfirmDelete() {
        cy.get(BTN_CONFIRM_DELETE).click();
    },
    deleteAllBooks() {
        cy.xpath(BTN_DELETE_ALL_BOOKS).click();
        cy.get(BTN_CONFIRM_DELETE_ALL_BOOKS).click();
    },
    getListBook() {
        return cy.get(LNK_BOOKS_OF_PROFILE);
    },
    deleteBookSuccessfully(bookName) {
        cy.checkIfElementsExist(LNK_BOOKS_OF_PROFILE).then(($result) => {
            if ($result) {
                cy.get(LNK_BOOKS_OF_PROFILE).each(($el) => {
                    if ($el.text().includes(bookName)) {
                        cy.xpath(BTN_DELETE_BOOK_XPATH.replace('%s', bookName)).click();
                        cy.get(BTN_CONFIRM_DELETE).click();
                    }
                });
            }
        })
    }
}