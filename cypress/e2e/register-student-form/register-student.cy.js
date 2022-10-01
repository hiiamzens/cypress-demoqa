const { RegisterStudentPage } = require("../../pages/register-student/register-student-page");
const { RegisteredStudentForm } = require("../../pages/register-student/registered-student-form");
const { MessageConstants } = require("../../constants/message-constants");
const { DateUtil } = require("../../utils/date-util");
describe('Register student information', () => {
  beforeEach(function () {
    cy.fixture('register-information/register_information.json').as('registerInformation');
    RegisterStudentPage.navigate();
  });
  it.only('Register successfully with all fields', function () {
    cy.get('@registerInformation').then((registerInformation) => {
      const [firstName, ...rest] = this.registerInformation.fullName.split(' ');
      const lastName = rest.join(' ');
      const [day, month, year] = this.registerInformation.dateOfBirth.split(' ');
      RegisterStudentPage.inputFirstName(firstName);
      RegisterStudentPage.inputLastName(lastName);
      RegisterStudentPage.inputEmail(this.registerInformation.email);
      RegisterStudentPage.selectGender(this.registerInformation.gender);
      RegisterStudentPage.inputMobileNumber(this.registerInformation.mobile);
      RegisterStudentPage.openDOBPicker();
      RegisterStudentPage.selectDateOfBirth(day, month, year);
      const subjectArray = [];
      for (let i = 0; i < this.registerInformation.subjects.length; i++) {
        RegisterStudentPage.inputSubject(this.registerInformation.subjects[i]);
        subjectArray.push(this.registerInformation.subjects[i]);
      }
      RegisterStudentPage.selectHobby(this.registerInformation.hobby);
      const imagePath = 'register-information/register_student_image.jpg';
      RegisterStudentPage.inputPicture(imagePath);
      RegisterStudentPage.inputAddress(this.registerInformation.currentAddress);
      RegisterStudentPage.selectState(this.registerInformation.state);
      RegisterStudentPage.selectCity(this.registerInformation.city);
      RegisterStudentPage.clickSubmitButton();
      RegisteredStudentForm.getSubmitedMessage().should('have.text', MessageConstants.MESSAGE_SUBMITED_FORM);
      RegisteredStudentForm.getFullname().should('have.text', this.registerInformation.fullName);
      RegisteredStudentForm.getEmail().should('have.text', this.registerInformation.email);
      RegisteredStudentForm.getGender().should('have.text', this.registerInformation.gender);
      RegisteredStudentForm.getMobileNumber().should('have.text', this.registerInformation.mobile);
      RegisteredStudentForm.getDateOfBirth().should(($dateOfBirth) => {
        const dateOfBirth = $dateOfBirth.text().replace(',', " ");
        expect(dateOfBirth).to.equal(this.registerInformation.dateOfBirth);
      });
      RegisteredStudentForm.getSubject().should('have.text', subjectArray.join(', '));
      RegisteredStudentForm.getHobby().should('have.text', this.registerInformation.hobby);
      RegisteredStudentForm.getPicture().should('have.text', imagePath.split("/").pop());
      RegisteredStudentForm.getAddress().should('have.text', this.registerInformation.currentAddress);
      RegisteredStudentForm.getStateAndCity().should('have.text', this.registerInformation.state + " " + this.registerInformation.city);
    });
  });
  it.only('Register successfully with mandatory fields', function () {
    cy.get('@registerInformation').then((registerInformation) => {
      const [firstName, ...rest] = this.registerInformation.fullName.split(' ');
      const lastName = rest.join(' ');
      RegisterStudentPage.inputFirstName(firstName);
      RegisterStudentPage.inputLastName(lastName);
      RegisterStudentPage.selectGender(this.registerInformation.gender);
      RegisterStudentPage.inputMobileNumber(this.registerInformation.mobile);
      RegisterStudentPage.clickSubmitButton();
      RegisteredStudentForm.getSubmitedMessage().should('have.text', MessageConstants.MESSAGE_SUBMITED_FORM);
      RegisteredStudentForm.getFullname().should('have.text', this.registerInformation.fullName);
      RegisteredStudentForm.getGender().should('have.text', this.registerInformation.gender);
      RegisteredStudentForm.getMobileNumber().should('have.text', this.registerInformation.mobile);
      RegisteredStudentForm.getDateOfBirth().should(($dateOfBirth) => {
        const dateOfBirth = DateUtil.convertStringToLocalDateFormat($dateOfBirth.text());
        expect(dateOfBirth).to.equal(DateUtil.getCurrentDateString());
      });
    });
  });
});