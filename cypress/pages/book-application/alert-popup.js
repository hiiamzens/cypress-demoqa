export const AlertPopup = {
    compareMessage(successfullyMessage){
        return cy.on('window:alert', (msg) => {
            expect(msg).to.equal(successfullyMessage);
        })  
    }
}