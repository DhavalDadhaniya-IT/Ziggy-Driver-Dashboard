function signOut(){
	var poolData = {
		UserPoolId: _config.cognito.userPoolId, // Your user pool id here
		ClientId: _config.cognito.clientId // Your client id here
	};

	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var cognitoUser = userPool.getCurrentUser();
	
	console.log(cognitoUser);
	if (cognitoUser == null){
		window.location.href = "../../login.html";
	}
	else{
		alert("You are about to signout");
		cognitoUser.signOut();
		window.localStorage.removeItem("access_token");
		window.location.href = "../../login.html";
	}
}