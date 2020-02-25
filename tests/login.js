module.exports = {
    '@tags': ['account'],
    'Successful login' : function (browser) {
        const page = browser.page.login();

        page
            .navigate()
            .login(browser.globals.account.login_email, browser.globals.account.login_password);
        
        browser
            .assert.urlContains('account');
    },

    'Unsuccesful login' : function (browser) {
        const page = browser.page.login();
        const invalidEmail = 'mostlikely_999@unmatchingemail.xyz';
        const invalidPassword = 'mostLikelyunmatchingpassword999';

        page
            .navigate()
            .login(invalidEmail, invalidPassword);
        
        browser.assert.not.urlContains('account');
        page.assert.visible('@errorBlock');
    },

}