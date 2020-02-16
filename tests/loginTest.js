module.exports = {
    '@tags': ['account'],
    'Login' : function (browser) {
        browser
            .url('https://suitsupply.com/en-fi/login')
            .setValue('#login-form-email', 'ysazak@suitsupply.com')
            .setValue('#login-form-password', 'P@ssw0rd1')
            .click('.login-button')
            // .assert.containsText('.dashboard-title', 'welcome, Yasar')
            .perform(function() {
                debugger;
            })
            .assert.urlContains('account')
            .assert.visible('.profile-information-columns')
            .saveScreenshot('tests_output/login.png');
    },

}