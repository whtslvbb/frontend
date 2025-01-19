const data = document.forms["signUp"];

const getBySelector = (selector) => document.querySelector(selector);

const body = getBySelector("body");
const nameReg = /^[a-zA-z]{2,20}$/;
const emailReg = /^[a-zA-z0-9_\._\-]{2,}@[a-z]{2,}\.[a-z]{2,}$/;
const passwordReg = /^\w{8,15}$/;

const inputs = document.querySelectorAll("input");

console.log(inputs);

const showError = (correct) => {
  event.target.parentElement.children[1].style.fontSize = "14px";
  if (correct) {
    event.target.style.borderColor = "lightgreen";
    return;
  }
  event.target.style.borderColor = "red";
};

inputs.forEach((value) => {
  value.addEventListener("focus", () => {
    value.parentElement.children[1].style.fontSize = "14px";
    value.parentElement.children[1].style.top = "8px";
  });
  value.addEventListener("blur", () => {
    if (value.parentElement.children[0].value === "") {
      value.parentElement.children[1].style.fontSize = "20px";
      value.parentElement.children[1].style.top = "18px";
    }
  });
});
data.firstName.oninput = (e) => {
  const correct = nameReg.test(event.target.value);
  showError(correct);
};

data.lastName.oninput = () => {
  const correct = nameReg.test(event.target.value);
  showError(correct);
};

data.email.oninput = () => {
  const correct = emailReg.test(event.target.value);
  showError(correct);
};

data.password.oninput = () => {
  const correct = passwordReg.test(event.target.value);
  showError(correct);
};

const handleMouseOver = () => {
  data.button.style.backgroundColor = "rgb(10, 127, 200)";
};

const handleMouseOut = () => {
  data.button.style.backgroundColor = "rgb(36, 167, 248)";
};

const isRight = () =>
  nameReg.test(data.firstName.value) &&
  nameReg.test(data.lastName.value) &&
  emailReg.test(data.email.value) &&
  passwordReg.test(data.password.value);

const isCorrectData = () => {
  if (isRight()) {
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

const saveData = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const isEmail = users.some(
    (value) => value.email.toLowerCase() === data.email.value.toLowerCase()
  );
  if (!isEmail) {
    const newUser = {
      firstName: data.firstName.value,
      lastName: data.lastName.value,
      email: data.email.value,
      password: data.password.value,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.assign("./signIn.html");

    return;
  }
  
  getBySelector(".email").textContent = "The Email already exist";
  getBySelector(".error").style.display = "flex";
  localStorage.setItem("users", JSON.stringify(users));
};

data.button.addEventListener("click", saveData);
