const data = document.forms["signUp"];

const getBySelector = (selector) => document.querySelector(selector);

const body = getBySelector("body");

const firstNameError = getBySelector(".firstName");
const lastNameError = getBySelector(".lastName");
const emailError = getBySelector(".email");
const passwordError = getBySelector(".password");

const nameReg = /^[a-zA-z]{2,20}$/;
const emailReg = /^[a-zA-z0-9_\._\-]{2,}@[a-z]{2,}\.[a-z]{2,}$/;
const passwordReg = /^\w{8,15}$/;

const inputs = document.querySelectorAll("input");

console.log(inputs);

const showError = (correct, value, error) => {
  error.textContent = "Please provide a valid";
  event.target.parentElement.children[3].style.fontSize = "14px";

  if (correct) {
    event.target.style.borderColor = "lightgreen";
    error.style.display = "none";
    event.target.parentElement.children[1].style.display = "none";
    event.target.parentElement.children[2].style.display = "flex";

    return;
  }

  event.target.parentElement.children[1].style.display = "flex";
  event.target.parentElement.children[2].style.display = "none";
  error.textContent += value;
  error.style.display = "flex";
  event.target.style.borderColor = "lightgray";
};

data.firstName.oninput = (e) => {
  const correct = nameReg.test(event.target.value);
  showError(correct, " First name", firstNameError);
};

inputs.forEach((value) => {
  value.addEventListener("focus", () => {
    value.parentElement.children[3].style.fontSize = "14px";
    value.parentElement.children[3].style.top = "8px";
  });
  value.addEventListener("blur", () => {
    if (value.parentElement.children[0].value === "") {
      value.parentElement.children[3].style.fontSize = "20px";
      value.parentElement.children[3].style.top = "18px";
    }
  });
});

data.lastName.oninput = () => {
  const correct = nameReg.test(event.target.value);
  showError(correct, " Last name", lastNameError);
};

data.email.oninput = () => {
  const correct = emailReg.test(event.target.value);
  showError(correct, " Email address", emailError);
};

data.password.oninput = () => {
  const correct = passwordReg.test(event.target.value);
  showError(correct, " Password", passwordError);
};

const handleMouseOver = () => {
  data.button.style.backgroundColor = "rgb(10, 127, 200)";
};

const handleMouseOut = () => {
  data.button.style.backgroundColor = "rgb(36, 167, 248)";
};

const isCorrectData = () => {
  if (
    nameReg.test(data.firstName.value) &&
    nameReg.test(data.lastName.value) &&
    emailReg.test(data.email.value) &&
    passwordReg.test(data.password.value) &&
    data.check.checked
  ) {
    data.button.disabled = false;
    data.button.style.backgroundColor = "rgb(36, 167, 248)";
    data.button.addEventListener("mouseover", handleMouseOver);
    data.button.addEventListener("mouseout", handleMouseOut);

    return;
  }
  data.button.removeEventListener("mouseover", handleMouseOver);
  data.button.removeEventListener("mouseout", handleMouseOut);
  data.button.disabled = true;
  data.button.style.backgroundColor = "lightskyblue";
};

body.addEventListener("click", isCorrectData);

const black = getBySelector(".black");
const alertW = getBySelector(".alert");
const start = getBySelector(".button");

data.button.addEventListener("click", () => {
  black.style.backgroundColor = "rgb(0, 0, 0 , 0.3)";
  black.style.zIndex = "1";
  alertW.style.marginBottom = "0px";
  alertW.style.opacity = "1";
});

start.addEventListener("click", () => {
  window.location.reload();
});
