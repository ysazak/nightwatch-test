module.exports = {
    url: 'https://suitsupply.com/en-fi/login',
    elements: {
        'username': '#login-form-email',
        'password': '#login-form-password'
    },
    commands: [{
        login: function(username, password) {
            const page= this;
            page
                .setValue('@username', username)
                .setValue('@password', password)
                .click('.login-button');
            return this;
        }
    }]
}