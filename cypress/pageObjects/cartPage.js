class cartPage{
    elements = {
        cartList : () => cy.get('.cart_list'),
        checkOutButton: () => cy.get('[data-test="checkout"]')
    } 

    getNameTextItemSelected(ItemToValidateCartPage){
      //should Contains the name of the item 
        cy.get('.cart_item_label').contains(ItemToValidateCartPage);
    }
    clickCheckout(){
        this.elements.checkOutButton().click();
    }
}

export default cartPage;