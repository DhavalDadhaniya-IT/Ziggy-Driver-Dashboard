function profile_authenticate_token(){
    // console.log(localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token') == null){
        window.location.href = "../../login.html";
    }
}