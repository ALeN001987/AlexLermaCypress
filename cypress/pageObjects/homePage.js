class homePage{
    elements = {
        successTxt : () => cy.get('.title'),
        itemBackpack : 'add-to-cart-sauce-labs-backpack',
        bikeLight : 'add-to-cart-sauce-labs-bike-light',
       shoppingCart: () => cy.get('.shopping_cart_link')
        
    } 


    addItemToCart(itemToAdd){
        cy.get('[id="'+itemToAdd+'"]').click();
               
    }

    getNameTextItemSelected(ItemToValidate){
        if(cy.get(':nth-child(1) > .inventory_item_description').contains('Remove')){
            cy.get(':nth-child(1) > .inventory_item_description').contains(ItemToValidate);
        }
        //var element =cy.get(':nth-child(1) > .inventory_item_description').contains('Remove');
        return ItemToValidate;
    }

    navigateToShoppingCart(){
        this.elements.shoppingCart().click();
    }
}

export default homePage;