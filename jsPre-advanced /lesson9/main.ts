const getS = (selector: string): Element => document.querySelector(selector);

const data = document.forms["user"] as IFormData;

interface IPerson {
  login: string;
  password: string;
  email: string;
  id: number;
}

interface IFormData extends HTMLFormElement {
  login: HTMLInputElement;
  password: HTMLInputElement;
  email: HTMLInputElement;
  buttonEdit: HTMLInputElement;
  addUser: HTMLInputElement;
}

const dataArr: Array<IPerson> = [];

const isCorrectData = (): Boolean => {
  if (
    loginReg.test(data.login.value) &&
    passwordReg.test(data.password.value) &&
    emailReg.test(data.email.value)
  ) {
    data.addUser.disabled = false;
    data.buttonEdit.disabled = false;
    return true;
  }
  data.addUser.disabled = true;
  data.buttonEdit.disabled = true;
  return false;
};

const loginReg = /^[a-zA-z]{4,16}$/;
const emailReg = /^[a-zA-z0-9_\._\-]{2,}@[a-z]{2,}\.[a-z]{2,}$/;
const passwordReg = /^[a-zA-z0-9_\._\-_\_]{4,16}$/;

const clearInput = (): void => {
  data.login.value = "";
  data.password.value = "";
  data.email.value = "";
  data.login.style.border = "1px solid lightgrey";
  data.password.style.border = "1px solid lightgrey";
  data.email.style.border = "1px solid lightgrey";
};

data.login.oninput = (event: Event) => {
  const correct = loginReg.test((event.target as HTMLInputElement).value);

  if (correct) {
    data.login.style.border = "2px solid green";
  } else data.login.style.border = "2px solid red";
};

data.email.oninput = (event: Event) => {
  const correct = emailReg.test(data.email.value);
  if (correct) {
    data.email.style.border = "2px solid green";
  } else data.email.style.border = "2px solid red";
};

data.password.oninput = (event: Event) => {
  const correct = passwordReg.test(data.password.value);
  if (correct) {
    data.password.style.border = "2px solid green";
  } else data.password.style.border = "2px solid red";
};

const createId = (): number => Math.random();

console.log({ data });

data.addUser.addEventListener("click", () => {
  if (isCorrectData()) {
    const user = {
      id: createId(),
      login: data.login.value,
      password: data.password.value,
      email: data.email.value,
    };
    dataArr.push(user);
    clearInput();
    createList();
  }
});

const users = getS(".users");

const deleteUser = (userId) => {
  const index = dataArr.findIndex(({ id }) => id === userId);
  dataArr.splice(index, 1);
  data.addUser.style.display = "block";
  data.buttonEdit.style.display = "none";
  clearInput();
  createList();
};

const editUser = (userId: number) => {
  const index = dataArr.findIndex(({ id }) => id === userId);
  data.login.value = `${dataArr[index].login}`;
  data.password.value = `${dataArr[index].password}`;
  data.email.value = `${dataArr[index].email}`;

  data.addUser.style.display = "none";
  data.buttonEdit.style.display = "block";

  data.buttonEdit.addEventListener("click", () => {
    data.addUser.style.display = "block";
    data.buttonEdit.style.display = "none";
    dataArr[index].login = data.login.value;
    dataArr[index].password = data.password.value;
    dataArr[index].email = data.email.value;
    createList();
    clearInput();
  });
};

const createList = (): void => {
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

    num.textContent = `${index + 1}`;
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
