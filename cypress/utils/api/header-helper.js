export const HeaderHelper = {
    getUnauthorizedHeader(){
        return 'Content-Type: application/json'

    },
    getAuthorizedHeader(userToken){
        return {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + userToken
        }
    }
}