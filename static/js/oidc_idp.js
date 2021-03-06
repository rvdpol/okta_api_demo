var oktaSignIn = new OktaSignIn({
    baseUrl: 'https://[[base_url]]',
    clientId: '[[aud]]',
    redirectUri: '[[redirect]]',
    authParams: {
        issuer: 'https://[[base_url]]/oauth2/[[iss]]',
        display: 'popup',
        responseType: ['id_token', 'token'],
        scopes: [[scopes]],
    },

    idps: [[idps]],

    customButtons: [[btns]],
});

oktaSignIn.renderEl(
    {el: '#okta-login-container'},
    function (res) {
        var key = '';
        if (res[0]) {
            key = Object.keys(res[0])[0];
            oktaSignIn.tokenManager.add(key, res[0]);
        }
        if (res[1]) {
            key = Object.keys(res[1])[0];
            oktaSignIn.tokenManager.add(key, res[1]);
        }
        if (res.status === 'SUCCESS') {
            login(oktaSignIn.tokenManager.get('idToken'), oktaSignIn.tokenManager.get('accessToken'));
        }
    }
);
