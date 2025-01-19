const data = document.forms["signUp"];

const getBySelector = (selector) => document.querySelector(selector);

const body = getBySelector("body");
const emailReg = /^[a-zA-z0-9_\._\-]{2,}@[a-z]{2,}\.[a-z]{2,}$/;
const passwordReg = /^\w{8,15}$/;

const inputs = document.querySelectorAll("input");

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
  emailReg.test(data.email.value) && passwordReg.test(data.password.value);

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

const checkProfile = (user) => {
  getBySelector(".content").style.display = "none";
  getBySelector(".blank").style.display = "flex";
  console.log(getBySelector(".name"));
  getBySelector(".name").textContent = user.firstName + " " + user.lastName;
  getBySelector(".profileEmail").textContent = user.email;
};

const confirmData = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.email === data.email.value);
  localStorage.setItem("users", JSON.stringify(users));
  
  if (!user) {
    getBySelector(".error").textContent = "Can't find this email";
    getBySelector(".error").style.display = "flex";
    return;
  }

  if (user.password === data.password.value) {
    getBySelector(".error").style.display = "none";
    checkProfile(user);
    return;
  }

  getBySelector(".error").textContent = "Wrong password";
  getBySelector(".error").style.display = "flex";
};

data.button.addEventListener("click", confirmData);
