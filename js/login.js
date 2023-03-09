function errorMessges1HtmlStyle() {
  const ErrMeslogin = document.querySelector(".first-input p");
  let ErrMesloginEl = document.createElement("p");

  ErrMesloginEl.setAttribute("class", "ErrMesloginEl");
  ErrMesloginEl.innerHTML =
    "enter your login in the format +37529... or example@gmail.com";
  ErrMeslogin.appendChild(ErrMesloginEl);
}

function errorMessges2HtmlStyle() {
  const ErrMeslogin = document.querySelector(".password");
  let ErrMesPassEl = document.createElement("p");

  ErrMesPassEl.setAttribute("class", "ErrMesPassEl");
  ErrMesPassEl.innerHTML = "password must be at least 8 characters";
  ErrMeslogin.appendChild(ErrMesPassEl);
}

function isValid(inpLogin_, inpPass_) {
  if (!inpLogin_.value && !inpPass_.value) {
    inpLogin_.style = "border: 1px solid red";
    inpPass_.style = "border: 1px solid red";

    throw new Error("enter your login and password");
  }

  if (
    !/^\+[0-9]{3,3}[0-9]{2,2}[0-9]{7,7}$/gm.test(inpLogin_.value) &&
    !/^\w+\@[a-zA-Z]+\.[a-z]{2,4}$/gm.test(inpLogin_.value)
  ) {
    inpLogin_.style = "border: 1px solid red";
    inpLogin_.value = "";

    errorMessges1HtmlStyle();

    throw new Error("email or number is not correct");
  }

  if (!/^\w{8,}$/gm.test(inpPass_.value)) {
    inpPass_.style = "border: 1px solid red";
    inpPass_.value = "";

    errorMessges2HtmlStyle();

    throw new Error("password must be at least 8 characters");
  }
}

document.querySelector(".btn-logIn").addEventListener("click", function () {
  try {
    const inpLogin = document.querySelector(".login");
    const inpPass = document.querySelector(".pass");

    isValid(inpLogin, inpPass);

    inpLogin.style = "border: 1px solid #7FFF00";
    inpPass.style = "border: 1px solid #7FFF00";

    alert("You are successfully authorized in the system");
  } catch (error) {
    alert(error.message);
  }
});

document.querySelector(".login").addEventListener("click", function () {
  this.style = "border: 1px solid #fff";

  let del = document.querySelector(".ErrMesloginEl");

  if (del != null) {
    del.remove();
  }
});

document.querySelector(".pass").addEventListener("click", function () {
  this.style = "border: 1px solid #fff";

  let del = document.querySelector(".ErrMesPassEl");

  if (del != null) {
    del.remove();
  }
});
