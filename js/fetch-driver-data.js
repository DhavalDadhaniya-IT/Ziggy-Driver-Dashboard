function fetchDriverData() {
    //Obj of data to send in future like a dummyDb
    jwt = parseJwt(localStorage.getItem('access_token'));
    // console.log(jwt);
    const data = {
        Email_Id: jwt.email
    };

    //POST request with body equal on data in JSON format
    fetch('https://ad2hyolp7b.execute-api.us-east-1.amazonaws.com/v1/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
        console.log('Success:', data);
        document.getElementById("driver_name").innerHTML = data["data"].Name.S;
        document.getElementById("dname").innerHTML = data["data"].Name.S;
        document.getElementById("demail").innerHTML = data["data"].Email_Id.S;
        document.getElementById("dphone").innerHTML = data["data"].Mobile_Number.N;
        document.getElementById("d2_name").innerHTML = data["data"].Name.S;
    })
    //Then with the error genereted...
    .catch((error) => {
        console.error('Error:', error);
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