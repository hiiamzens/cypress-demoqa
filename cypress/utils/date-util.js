export const DateUtil = {
    convertStringToLocalDateFormat(dateString){
        return new Date(dateString).toLocaleDateString();
    },
    getCurrentDateString(){
        return new Date().toLocaleDateString();
    }
}