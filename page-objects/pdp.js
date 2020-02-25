const commands = {
    isAddToCartActive() {

    },    
    selectSize() {
        this.waitForElementVisible('@submitButton', 1000)
        .click('@submitButton')
        .api.pause(1000);

        return this; // Return page object for chaining
    }
};
  
module.exports = {
    commands: [commands],
    elements: {
        productTitle: {selector: 'h1.product-name'},
        description: {selector: '.sub-title'},
        selectSizeBtn: {selector: '.select-size-btn'},
        addToCartBtn: {selector: '.js-add-to-cart'}
    }
};
  