let Username = document.getElementById("login-username");
let Email = document.getElementById("login-email");
let Password = document.getElementById("login-password");
function data() {

    let arr = [{
        username: Username.value,
        email: Email.value,
        password: Password.value

    }];

    window.localStorage.setItem("logindetails", arr);

}

