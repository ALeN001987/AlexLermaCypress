class checkoutPage{
    elements = {
        FirstName : () => cy.get('[data-test="firstName"]'),
        LastName: () => cy.get('[data-test="lastName"]'),
        zipCode: () => cy.get('[data-test="postalCode"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        finishButton: () => cy.get('[data-test="finish"]')
    } 

    fillCheckoutPage(firstName, lastName, zipCodeNumber){
        this.elements.FirstName().type(firstName);
        this.elements.LastName().type(lastName);
        this.elements.zipCode().type(zipCodeNumber);
        this.elements.continueButton().click();
    
    }

    finishOrder(){
        this.elements.finishButton().click();
    }

    validateFinishOrder(finishMessage){
        cy.get('.complete-header').contains(finishMessage);
        cy.get('.title').contains('Checkout: Complete!')
    }

}

export default checkoutPage;