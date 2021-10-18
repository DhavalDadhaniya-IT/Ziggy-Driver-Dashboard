function logIn(){
    var authenticateData = {
        Username: document.getElementById("semail").value,
        Password: document.getElementById("spassword").value
    };
    event.preventDefault();
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticateData);

    var poolData = {
        UserPoolId: _config.cognito.userPoolId, // Your user pool id here
        ClientId: _config.cognito.clientId // Your client id here
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var userData = {
        Username: document.getElementById("semail").value,
        Pool: userPool
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            var accessToken = result.getIdToken().getJwtToken();

            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
		    AWS.config.region = _config.cognito.region;

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: _config.cognito.userPoolId, // your identity pool id here
                Logins: {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.us-east-1.amazonaws.com/us-east-1_JRUYNllt9': result
                        .getIdToken()
                        .getJwtToken(),
                },
            });

            //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            AWS.config.credentials.refresh(error => {
                if (error) {
                    console.error(error);
                } else {
                    // Instantiate aws sdk service objects now that the credentials have been updated.
                    // example: var s3 = new AWS.S3();
                    console.log('Successfully logged!');
                }
            });

            console.log(accessToken);
            localStorage.setItem('access_token', accessToken);

            window.location.href = "dashboard/dashboard.html";
        },

        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
        },
    });
}