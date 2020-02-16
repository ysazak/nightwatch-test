module.exports = {
    '@tags': ['account-po'],
    'Login-pageobject' : function (browser) {
        const page = browser.page.login();

        page
            .navigate()
            .login('ysazak@suitsupply.com', 'P@ssw0rd1');
        
        browser
            .assert.urlContains('account')
            .assert.visible('.profile-information-columns')
            .saveScreenshot('tests_output/login.png');
    },

}