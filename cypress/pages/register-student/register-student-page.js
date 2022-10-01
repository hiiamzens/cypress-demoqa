require('cypress-xpath');

const REGISTER_URL = "/automation-practice-form";
const TXT_FIRST_NAME = "#firstName";
const TXT_LAST_NAME = "#lastName";
const TXT_EMAIL = "#userEmail";
const RDO_GENDER_XPATH = "//label[contains(text(), '%s')]";
const TXT_MOBILE_NUMBER = "#userNumber";
const DTP_DATE_OF_BIRTH = "#dateOfBirthInput";
const DDL_YEAR_OF_BIRTH = "//select[contains(@class,'year-select')]";
const DDL_MONTH_OF_BIRTH = "//select[contains(@class,'month-select')]";
const OPT_DAY_OF_BIRTH_XPATH = "//div[contains(@aria-label,'month')]//div[contains(@class,'day') and text()= '%s']";
const TXT_SUBJECTS = "#subjectsInput";
const OPT_SUBJECTS_XPATH = "//div[@id='subjectsContainer']//div[text()= '%s' and @id]";
const CHK_HOBBIES_XPATH = "//label[contains(@for,'hobbies') and contains(text(), '%s')]";
const BTN_UPLOAD_PICTURE = "input[id=uploadPicture]";
const TXA_CURRENT_ADDRESS = "#currentAddress";
const DDL_STATE = "//div[@id='state']//div[text()='Select State']";
const OPT_STATE_XPATH = "//div[@id='state']//div[contains(@id,'select') and text()= '%s']";
const DDL_CITY = "//div[@id='city']//div[text()='Select City']";
const OPT_CITY_XPATH = "//div[@id='city']//div[contains(@id,'select') and text()= '%s']";
const BTN_SUBMIT = "#submit";

 export const RegisterStudentPage = {
    navigate(){
        cy.visit(REGISTER_URL);
    },
    inputFirstName(firstName) {
        cy.get(TXT_FIRST_NAME).type(firstName);
    },
    inputLastName(lastName){
        cy.get(TXT_LAST_NAME).type(lastName);
    },
    inputEmail(email){
        cy.get(TXT_EMAIL).type(email);
    },
    selectGender(gender){
        cy.xpath(RDO_GENDER_XPATH.replace('%s', gender)).click();
    },
    inputMobileNumber(mobileNumber){
        cy.get(TXT_MOBILE_NUMBER).type(mobileNumber);
    },
    openDOBPicker(){
        cy.get(DTP_DATE_OF_BIRTH).click();
    },
    selectDateOfBirth(day, month, year){
        cy.xpath(DDL_YEAR_OF_BIRTH).select(year);
        cy.xpath(DDL_MONTH_OF_BIRTH).select(month);
        cy.xpath(OPT_DAY_OF_BIRTH_XPATH.replace('%s', day)).click();
    },
    inputSubject(subject){
        cy.get(TXT_SUBJECTS).type(subject);
        cy.xpath(OPT_SUBJECTS_XPATH.replace('%s', subject)).click();
    },
    selectHobby(hobby){
        cy.xpath(CHK_HOBBIES_XPATH.replace('%s', hobby)).click();
    },
    inputPicture(picturePath){
        cy.get(BTN_UPLOAD_PICTURE).attachFile(picturePath);
    },
    inputAddress(address){
        cy.get(TXA_CURRENT_ADDRESS).type(address);
    },
    selectState(state){
        cy.xpath(DDL_STATE).click();
        cy.xpath(OPT_STATE_XPATH.replace('%s', state)).click();
    },
    selectCity(city){
        cy.xpath(DDL_CITY).click();
        cy.xpath(OPT_CITY_XPATH.replace('%s', city)).click();
    },
    clickSubmitButton(){
        cy.get(BTN_SUBMIT).click();
    }
}