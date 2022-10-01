const { APIConstants} = require ("../../constants/api-constants");
export const AccountHelper = {
    generateToken(username, password){
        return cy.request({
            method: 'POST',
            url: APIConstants.ACCOUNT_PREFIX + APIConstants.GENERATE_TOKEN_ENDPOINT,
            body:{
                'userName': username,
                'password': password
            },
        })
    },
    loginByAPI(username, userID, token, expires) {
        cy.setCookie("userName", username);
        cy.setCookie("userID", userID);
        cy.setCookie("token", token);
        cy.setCookie("expires", expires);
    },
    getLoginRespond(username, password){
        return cy.request({
            method: 'POST',
            url: APIConstants.ACCOUNT_PREFIX + APIConstants.LOGIN_ENDPOINT,
            body:{
                'userName': username,
                'password': password
            },
        })
    }
}