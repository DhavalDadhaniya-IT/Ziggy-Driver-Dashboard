function updateDriverProfile() {
    jwt = parseJwt(localStorage.getItem('access_token'));
    // console.log(jwt);
    const data = {
        Email_Id: jwt.email,
        Name: jwt.name,
    };

    fetch('https://ad2hyolp7b.execute-api.us-east-1.amazonaws.com/v1/data', {
	method: 'PUT',
	body: JSON.stringify({
		Email_Id: data.Email_Id,
        Name: data.Name,
		Mobile_Number: document.getElementById("driverPhone").value,
		Shift_Start: document.getElementById("shiftStart").value,
        Shift_End: document.getElementById("shiftEnd").value,
        Travel_Mode: document.getElementById("travelMode").value,
        Service_Type_Food: document.getElementById("food").value,
        Service_Type_Courier: document.getElementById("courier").value,
        Service_Type_Passenger: document.getElementById("passanger").value,
	}),
	headers: {
		'Content-type': 'application/json'
	}
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    });
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};