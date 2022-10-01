const TXT_USERNAME = "#userName";
const TXT_PASSWORD = "#password";
const BTN_LOGIN = "#login";
export const LoginPage = {
    navigate() {
        cy.visit('login')
    },
    loginSuccessfully(username, password){
        cy.get(TXT_USERNAME).type(username);
        cy.get(TXT_PASSWORD).type(password);
        cy.get(BTN_LOGIN).click();
    }
}