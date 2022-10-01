const BTN_ADD_TO_COLLECTION_XPATH = "//button[@id='addNewRecordButton' and contains(text(),'Add')]"

 export const BookDetailPage = {
    clickAddBookButton(){
        cy.xpath(BTN_ADD_TO_COLLECTION_XPATH).click();
    }
}