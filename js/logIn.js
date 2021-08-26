var email;
var password;
var poolData;

function logInButton(){
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
            var accessToken = result.getAccessToken().getJwtToken();
            window.location.href = "dashboard/demo.html";
            console.log(accessToken);
        },

        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
        },
    });
}