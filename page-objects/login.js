module.exports = {
    url: 'https://suitsupply.com/en-fi/login',
    elements: {
        'username': '#login-form-email',
        'password': '#login-form-password',
        'loginBtn': '.login-button',
        'errorBlock': 'form.login .alert'
    },
    commands: [{
        login: function(username, password) {
            const page= this;
            page
                .setValue('@username', username)
                .setValue('@password', password)
                .click('@loginBtn')
                .api.pause(3000);
            return this;
        }
    }]
}