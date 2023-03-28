import loginPage from "../../pageobjects/loginPage";
import homePage from "../../pageObjects/homePage";
import cartPage from "../../pageObjects/cartPage";
import checkoutPage from "../../pageObjects/checkOutPage";

describe("Alex Lerma Test", () => {
  beforeEach(function () {
    // executes prior each test within it block
    cy.visit("https://www.saucedemo.com/");
  });

  it("Verify Login successful", () => {
    const loginObj = new loginPage();
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickSubmit();
    loginObj.elements.successTxt().should("have.text", "Products");
  });
});
