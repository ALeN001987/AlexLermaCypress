import loginPage from "../../pageobjects/loginPage";
import homePage from "../../pageObjects/homePage";
import cartPage from "../../pageObjects/cartPage";
import checkoutPage from "../../pageObjects/checkOutPage";

describe("Alex Lerma Test", () => {
  beforeEach(function () {
    // executes prior each test within it block
    cy.visit("https://www.saucedemo.com/");
  });

  it("End to End Scenario ", () => {
    const loginObj = new loginPage();
    const homePageObj = new homePage();
    const cartPageObj = new cartPage();
    const checkoutPageObj = new checkoutPage();
    loginObj.enterUsername("standard_user");
    loginObj.enterPassword("secret_sauce");
    loginObj.clickSubmit();
    loginObj.elements.successTxt().should("have.text", "Products");
    homePageObj.addItemToCart(homePageObj.elements.itemBackpack);
    var name = homePageObj.getNameTextItemSelected("Sauce Labs Backpack");
    homePageObj.navigateToShoppingCart();
    cartPageObj.getNameTextItemSelected(name);
    cartPageObj.clickCheckout();
    checkoutPageObj.fillCheckoutPage("Alex", "Lerma", "64117");
    checkoutPageObj.finishOrder();
    checkoutPageObj.validateFinishOrder("Thank you for your order!");
  });
});
