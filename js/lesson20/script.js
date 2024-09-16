const getS = (selector) => document.querySelector(selector);

const data = document.forms["user"];

const dataArr = [];

const body = getS("body");

const isCorrectData = () => {
  if (
    loginReg.test(data.login.value) &&
    passwordReg.test(data.password.value) &&
    emailReg.test(data.email.value)
  ) {
    data.button.disabled = false;
    data.buttonEdit.disabled = false;
    return;
  }
  data.button.disabled = true;
  data.buttonEdit.disabled = true;
};

body.addEventListener("click", isCorrectData);

const loginReg = /^[a-zA-z]{4,16}$/;
const emailReg = /^[a-zA-z0-9_\._\-]{2,}@[a-z]{2,}\.[a-z]{2,}$/;
const passwordReg = /^[a-zA-z0-9_\._\-_\_]{4,16}$/;

const clearInput = () => {
  data.login.style.border = "1px solid lightgrey";
  data.password.style.border = "1px solid lightgrey";
  data.email.style.border = "1px solid lightgrey";
};

data.login.oninput = () => {
  const correct = loginReg.test(event.target.value);
  if (correct) {
    data.login.style.border = "2px solid green";
  } else data.login.style.border = "2px solid red";
};

data.email.oninput = () => {
  const correct = emailReg.test(event.target.value);
  if (correct) {
    data.email.style.border = "2px solid green";
  } else data.email.style.border = "2px solid red";
};

data.password.oninput = () => {
  const correct = passwordReg.test(event.target.value);
  if (correct) {
    data.password.style.border = "2px solid green";
  } else data.password.style.border = "2px solid red";
};

const createId = () => Math.random().toString();

data.button.addEventListener("click", () => {
  const user = {
    id: createId(),
    login: data.login.value,
    password: data.password.value,
    email: data.email.value,
  };
  dataArr.push(user);
  data.login.value = "";
  data.password.value = "";
  data.email.value = "";
  clearInput();
  createList();
});

const users = getS(".users");

const deleteUser = (userId) => {
  const index = dataArr.findIndex(({ id }) => id === userId);
  dataArr.splice(index, 1);
  createList();
};

const editUser = (userId) => {
  const index = dataArr.findIndex(({ id }) => id === userId);
  data.login.value = `${dataArr[index].login}`;
  data.password.value = `${dataArr[index].password}`;
  data.email.value = `${dataArr[index].email}`;
  data.button.style.display = "none";
  data.buttonEdit.style.display = "block";
  data.buttonEdit.addEventListener("click", () => {
    data.button.style.display = "block";
    data.buttonEdit.style.display = "none";
    dataArr[index].login = data.login.value;
    dataArr[index].password = data.password.value;
    dataArr[index].email = data.email.value;
    createList();
    data.login.value = "";
    data.password.value = "";
    data.email.value = "";
    clearInput();
  });
};

const createList = () => {
  users.innerHTML = "";
  dataArr.forEach(({ id, login, password, email }, index) => {
    const wrapper = document.createElement("tr");

    const num = document.createElement("td");
    const loginBox = document.createElement("td");
    const passwordBox = document.createElement("td");
    const emailBox = document.createElement("td");
    const editBox = document.createElement("td");
    const deleteBox = document.createElement("td");
    const editBth = document.createElement("button");
    const deleteBth = document.createElement("button");

    editBth.className = "edit";
    deleteBth.className = "delete";
    wrapper.className = "box";

    num.textContent = index + 1;
    loginBox.textContent = login;
    passwordBox.textContent = password;
    emailBox.textContent = email;
    editBth.textContent = "Edit";
    deleteBth.textContent = "Delete";

    editBox.appendChild(editBth);
    deleteBox.appendChild(deleteBth);
    wrapper.appendChild(num);
    wrapper.appendChild(loginBox);
    wrapper.appendChild(passwordBox);
    wrapper.appendChild(emailBox);
    wrapper.appendChild(editBox);
    wrapper.appendChild(deleteBox);
    users.appendChild(wrapper);

    deleteBth.addEventListener("click", () => {
      deleteUser(id);
    });
    editBth.addEventListener("click", () => {
      editUser(id);
    });
  });
};
