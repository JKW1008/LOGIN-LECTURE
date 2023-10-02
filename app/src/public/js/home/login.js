"use strict";

const login = () => {
    const req = {
        id : id.value,
        password : password.value
    };

    // fetch();
    console.log(req);
};

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);


// console.log(id);
// console.log(password);
// console.log(loginBtn);