const inputArr = document.querySelectorAll("input");

const loginForm = document.forms["person"];

const person = document.querySelector(".name");

const position = document.querySelector(".position");

const creator = document.querySelector(".creator");

const data = document.querySelector(".data");

const profileButton = document.querySelector(".profileButton");

const showShadow = (e) => {
  if (e.target.type !== "submit" && e.target.type !== "radio") {
    e.target.style.boxShadow = "0px 0px 5px 3px lightblue";
    e.target.style.outline = "none";
  }
};

const hideShadow = (e) => {
  if (e.target.type !== "submit" && e.target.type !== "radio") {
    e.target.style.boxShadow = "none";
  }
};

inputArr.forEach((value) => {
  value.addEventListener("focus", showShadow);
  value.addEventListener("blur", hideShadow);
});

loginForm.jobs.addEventListener("focus", showShadow);
loginForm.jobs.addEventListener("blur", hideShadow);

loginForm.checkbox.addEventListener("click", () => {
  if (loginForm.checkbox.checked) {
    loginForm.button.style.backgroundColor = "rgb(1, 156, 1 , 1)";
    return;
  }

  loginForm.button.style.backgroundColor = "rgb(1, 156, 1 , 0.5)";
});

const isWho = (person) => {
  const photo = document.querySelector(".photo");
  photo.style.backgroundImage = `url(${person}.jpg)`;
};

const showData = (e) => {
  console.log(12313);
  
  e.preventDefault();
  person.textContent = loginForm.name.value + " " + loginForm.surname.value;
  isWho(loginForm.sex.value);
  position.textContent = loginForm.jobs.value;
  creator.style.display = "none";
  data.style.display = "flex";
};

const showLogin = () => {
  data.style.display = "none";
  creator.style.display = "flex";
  loginForm.name.value = "";
  loginForm.surname.value = "";
  loginForm.email.value = "";
  loginForm.jobs.value = "";
  loginForm.sex[0].checked = true;
  loginForm.checkbox.checked = false;
  loginForm.button.style.backgroundColor = "rgb(1, 156, 1 , 0.5)";
};

loginForm.button.addEventListener("submit", showData);

profileButton.addEventListener("click", showLogin);
