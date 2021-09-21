function signUp(){
	var personalname = document.getElementById("rname").value;
	var email = document.getElementById("remail").value;
	var password = document.getElementById("rpassword").value;

	var poolData = {
		UserPoolId: _config.cognito.userPoolId, // Your user pool id here
		ClientId: _config.cognito.clientId // Your client id here
	};
	event.preventDefault(); 
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var attributeList = [];

	var dataEmail = {
		Name: 'email',
		Value: email,
	};

	var dataPersonalName = {
		Name: 'name',
		Value: personalname,
	};

	var attributeEmail= new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
	var attributePersonalName = new AmazonCognitoIdentity.CognitoUserAttribute(dataPersonalName);

	attributeList.push(attributeEmail);
	attributeList.push(attributePersonalName);

	userPool.signUp(email, password, attributeList, null, function(err, result) {
		if (err) {
			console.error(err);
			console.error(err.message);
			alert(err.message || JSON.stringify(err));
			return;
		}

		var cognitoUser = result.user;
		console.log('user name is ' + cognitoUser.getUsername());
		alert("Please check your Email to verify and then please login again");
		window.location.href = "index.html";
	});
}
