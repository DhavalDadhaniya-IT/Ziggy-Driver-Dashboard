function authenticate_token(){
    console.log(localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token') == null){
        window.location.href = "../../login.html";
    }
    else{
        jwt = parseJwt(localStorage.getItem('access_token'));
        const data = {
            expiry_time: jwt.exp
        };
    
        const current = Date.now();
        // By default US English uses 12hr time with AM/PM
        // console.log(parseInt(current)) - (parseInt(data.expiry_time));
        if((parseInt(current)) - (parseInt(data.expiry_time))>0){ 
            console.log("Token Valid")
            window.location.href = "../../dashboard/dashboard.html";
        }
        else {
            // alert("You are about to signout");
            // cognitoUser.signOut();
            window.location.href = "../../login.html";
        }
    }    
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};