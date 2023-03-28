class loginPage {
  elements = {
    pageloaded: () => cy.get('div[id="https://www.saucedemo.com/"]'),
    usernameInput: () => cy.get('input[id="user-name"]'),
    passwordInput: () => cy.get('input[id="password"]'),
    loginBtn: () => cy.get('input[id="login-button"]'),
    successTxt: () => cy.get(".title"),
    errorTxt: () => cy.get('h3[data-test="error"]"]'),
  };

  enterUsername(username) {
    this.elements.usernameInput().clear();
    this.elements.usernameInput().type(username);
  }

  enterPassword(password) {
    this.elements.passwordInput().clear();
    this.elements.passwordInput().type(password);
  }

  clickSubmit() {
    this.elements.loginBtn().click();
  }
}

export default loginPage;
