var email;
var password;
var personalname;
var poolData;

function registerButton(){
	personalname = document.getElementById("rname").value;
	email = document.getElementById("remail").value;
	password = document.getElementById("rpassword").value;

	poolData = {
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
		// console.log(result);
		// console.log(err);
		if (err) {
			// console.log(err.message);
			alert(err.message || JSON.stringify(err));
			return;
		}

		var cognitoUser = result.user;
		console.log('user name is ' + cognitoUser.getUsername());
		alert("Please check your Email to verify and then please login again");
		window.location.href = "index.html";
	});
}
