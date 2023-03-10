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

function errorMessges3HtmlStyle() {
  const ErrMeslogin = document.querySelector(".passP");
  let ErrMesPassEl = document.createElement("p");

  ErrMesPassEl.setAttribute("class", "ErrMesPassEl2");
  ErrMesPassEl.innerHTML = "password mismatch";
  ErrMeslogin.appendChild(ErrMesPassEl);
}

function isValid(inpLogin_, inpPass_, inpPassConfirm_) {
  if (!inpLogin_.value && !inpPass_.value && !inpPassConfirm_.value) {
    inpLogin_.style = "border: 1px solid red";
    inpPass_.style = "border: 1px solid red";
    inpPassConfirm_.style = "border: 1px solid red";

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

  if (inpPass_.value != inpPassConfirm_.value) {
    inpPass_.style = "border: 1px solid red";
    inpPassConfirm_.style = "border: 1px solid red";
    inpPass_.value = "";
    inpPassConfirm_.value = "";

    errorMessges3HtmlStyle();

    throw new Error("Password mismatch!");
  }
}

document.querySelector(".btn-logIn").addEventListener("click", function () {
  try {
    const inpLogin = document.querySelector(".login");
    const inpPass = document.querySelector(".pass");
    const inpPassConfirm = document.querySelector(".confirm-password");

    isValid(inpLogin, inpPass, inpPassConfirm);

    alert("You are successfully registered in the system");

    inpLogin.style = "border: 1px solid #7FFF00";
    inpPass.style = "border: 1px solid #7FFF00";
    inpPassConfirm.style = "border: 1px solid #7FFF00";
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

document
  .querySelector(".confirm-password")
  .addEventListener("click", function () {
    this.style = "border: 1px solid #fff";

    let del = document.querySelector(".ErrMesPassEl2");

    if (del != null) {
      del.remove();
    }
  });
