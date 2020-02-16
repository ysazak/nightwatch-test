module.exports = {
    'My first test case': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('.navbar-header')
            //.assert.titleContains('Suitsupply Online Store | Don\'t just fit in, find your own perfect fit.')
            .assert.containsText('.support', 'Support' )
            .end();
    }
}