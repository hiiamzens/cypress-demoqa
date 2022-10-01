const LBL_SUBMITTED_MESSAGE = ".modal-header div";
const LBL_FULL_NAME = "//td[text()='Student Name']/following-sibling::td";
const LBL_STUDENT_EMAIL = "//td[text()='Student Email']/following-sibling::td";
const LBL_GENDER = "//td[text()='Gender']//following-sibling::td";
const LBL_MOBILE = "//td[text()='Mobile']/following-sibling::td";
const LBL_DATE_OF_BIRTH = "//td[text()='Date of Birth']/following-sibling::td";
const LBL_SUBJECTS = "//td[text()='Subjects']/following-sibling::td";
const LBL_HOBBIES = "//td[text()='Hobbies']/following-sibling::td";
const LBL_PICTURE = "//td[text()='Picture']/following-sibling::td";
const LBL_ADDRESS = "//td[text()='Address']/following-sibling::td";
const LBL_STATE_AND_CITY = "//td[text()='State and City']/following-sibling::td";

export const RegisteredStudentForm = {
    getSubmitedMessage(){
        return cy.get(LBL_SUBMITTED_MESSAGE);
    },
    getFullname(){
        return cy.xpath(LBL_FULL_NAME);
    },
    getEmail(){
        return cy.xpath(LBL_STUDENT_EMAIL);
    },
    getGender(){
        return cy.xpath(LBL_GENDER);
    },
    getMobileNumber(){
        return cy.xpath(LBL_MOBILE);
    },
    getDateOfBirth(){
        return cy.xpath(LBL_DATE_OF_BIRTH);
    },
    getSubject(){
        return cy.xpath(LBL_SUBJECTS);
    },
    getHobby(){
        return cy.xpath(LBL_HOBBIES);
    },
    getPicture(){
        return cy.xpath(LBL_PICTURE);
    },
    getAddress(){
        return cy.xpath(LBL_ADDRESS);
    },
    getStateAndCity(){
        return cy.xpath(LBL_STATE_AND_CITY);
    },
}