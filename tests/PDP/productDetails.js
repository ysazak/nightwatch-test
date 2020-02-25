var commong = require('../../helpers/common');

module.exports = {
    tags: ['PDP'],
    'Product Details': function (browser) {
        const productID = 'C1327';
        const productName = 'Havana Navy Jacket';
        var pageUrl = browser.launchUrl + '/' + productID + '.html';
        const page = browser.page.pdp();

        browser.url(pageUrl);
        page.assert.containsText('@productTitle', productName);
        page.assert.visible('@description');
        page.assert.visible('@selectSizeBtn');
        page.assert.visible('@addToCartBtn');
        page.assert.not.attributeEquals('@addToCartBtn', 'disabled', 'disabled');
    
        browser.end()
    }
}