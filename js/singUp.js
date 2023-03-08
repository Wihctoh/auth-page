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
    throw new Error("email or number is not correct");
  }

  if (!/^\w{8,}$/gm.test(inpPass_.value)) {
    inpPass_.style = "border: 1px solid red";
    inpPass_.value = "";
    throw new Error("password must be at least 8 characters");
  }

  if (inpPass_.value != inpPassConfirm_.value) {
    inpPass_.style = "border: 1px solid red";
    inpPassConfirm_.style = "border: 1px solid red";
    inpPass_.value = "";
    inpPassConfirm_.value = "";
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
  } catch (error) {
    alert(error.message);
  }
});

document.querySelector(".login").addEventListener("click", function () {
  document.querySelector(".login").style = "border: 1px solid #fff";
});

document.querySelector(".pass").addEventListener("click", function () {
  document.querySelector(".pass").style = "border: 1px solid #fff";
});

document
  .querySelector(".confirm-password")
  .addEventListener("click", function () {
    document.querySelector(".confirm-password").style =
      "border: 1px solid #fff";
  });
