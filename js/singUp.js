let errEl = document.createElement("p");

function addErrorMessageInLoginHTML() {
  const ErrMeslogin = document.querySelector(".first-input p");
  let ErrMesloginEl = errEl;

  ErrMesloginEl.setAttribute("class", "ErrMesloginEl");
  ErrMesloginEl.innerHTML =
    "enter your login in the format +37529... or example@gmail.com";
  ErrMeslogin.appendChild(ErrMesloginEl);
}

function addErrorMessageInPasswordHTML() {
  const ErrMeslogin = document.querySelector(".password");
  let ErrMesPassEl = errEl;

  ErrMesPassEl.setAttribute("class", "ErrMesPassEl");
  ErrMesPassEl.innerHTML = "password must be at least 8 characters";
  ErrMeslogin.appendChild(ErrMesPassEl);
}

function addErrorMessageInPasswordConfirmHTML() {
  const ErrMeslogin = document.querySelector(".passP");
  let ErrMesPassEl = errEl;

  ErrMesPassEl.setAttribute("class", "ErrMesPassEl2");
  ErrMesPassEl.innerHTML = "password mismatch";
  ErrMeslogin.appendChild(ErrMesPassEl);
}

let styleBorderRed = "border: 1px solid red";
let styleBorderGreen = "border: 1px solid #7FFF00";
let styleBorderWhite = "border: 1px solid #fff";

function isValid(inpLogin_, inpPass_, inpPassConfirm_) {
  if (!inpLogin_.value && !inpPass_.value && !inpPassConfirm_.value) {
    inpLogin_.style = styleBorderRed;
    inpPass_.style = styleBorderRed;
    inpPassConfirm_.style = styleBorderRed;

    throw new Error("enter your login and password");
  }

  if (
    !/^\+[0-9]{3,3}[0-9]{2,2}[0-9]{7,7}$/gm.test(inpLogin_.value) &&
    !/^\w+\@[a-zA-Z]+\.[a-z]{2,4}$/gm.test(inpLogin_.value)
  ) {
    inpLogin_.style = styleBorderRed;
    inpLogin_.value = "";

    addErrorMessageInLoginHTML();

    throw new Error("email or number is not correct");
  }

  if (!/^\w{8,}$/gm.test(inpPass_.value)) {
    inpPass_.style = styleBorderRed;
    inpPass_.value = "";

    addErrorMessageInPasswordHTML();

    throw new Error("password must be at least 8 characters");
  }

  if (inpPass_.value != inpPassConfirm_.value) {
    inpPass_.style = styleBorderRed;
    inpPassConfirm_.style = styleBorderRed;
    inpPass_.value = "";
    inpPassConfirm_.value = "";

    addErrorMessageInPasswordConfirmHTML();

    throw new Error("Password mismatch!");
  }
}

const inpLogin = document.querySelector(".login");
const inpPass = document.querySelector(".pass");
const inpPassConfirm = document.querySelector(".confirm-password");

document.querySelector(".btn-logIn").addEventListener("click", function () {
  try {
    isValid(inpLogin, inpPass, inpPassConfirm);

    alert("You are successfully registered in the system");

    inpLogin.style = styleBorderGreen;
    inpPass.style = styleBorderGreen;
    inpPassConfirm.style = styleBorderGreen;
  } catch (error) {
    alert(error.message);
  }
});

document.querySelector(".login").addEventListener("click", function () {
  this.style = styleBorderWhite;

  let del = document.querySelector(".ErrMesloginEl");

  if (del != null) {
    del.remove();
  }
});

document.querySelector(".pass").addEventListener("click", function () {
  this.style = styleBorderWhite;

  let del = document.querySelector(".ErrMesPassEl");

  if (del != null) {
    del.remove();
  }
});

document
  .querySelector(".confirm-password")
  .addEventListener("click", function () {
    this.style = styleBorderWhite;

    let del = document.querySelector(".ErrMesPassEl2");

    if (del != null) {
      del.remove();
    }
  });
