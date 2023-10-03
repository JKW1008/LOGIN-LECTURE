"use strict";

const register = () => {
  const req = {
    id: id.value,
    name: name.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  console.log(req);

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
  console.log(req);
  console.log(JSON.stringify(req));
};

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  password = document.querySelector("#password"),
  confirmPassword = document.querySelector("#confirm-password"),
  registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click", register);

// console.log(id);
// console.log(password);
// console.log(loginBtn);
