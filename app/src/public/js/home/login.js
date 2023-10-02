"use strict";

const login = () => {
    const req = {
        id : id.value,
        password : password.value
    };

    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    });
    // console.log(req);
    // console.log(JSON.stringify(req));
};

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);


// console.log(id);
// console.log(password);
// console.log(loginBtn);