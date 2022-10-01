const LNK_BOOK_XPATH = "//a[text()='%s']";
const TXT_SEARCH_BAR = "#searchBox";
const LNK_BOOKS_OF_STORE = "div[class ='action-buttons'] a";

export const BookStorePage = {
    navigate(){
        cy.visit('/books');
    },
    getBookLink(bookName){
        return cy.xpath(LNK_BOOK_XPATH.replace('%s', bookName));
    },
    inputSearchQuery(bookName){
        cy.get(TXT_SEARCH_BAR).type(bookName);
    },
    getListBook(){
        return cy.get(LNK_BOOKS_OF_STORE);
    }
}