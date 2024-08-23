const inputText = document.querySelector(".inputText");

const button = document.querySelector(".button");

const tasks = document.querySelector(".tasks");

const decryption = document.querySelector(".decryption");

const alarm = document.querySelector(".alarm");

const cross = document.querySelector(".cross");

cross.addEventListener("click", () => {
  alarm.style.display = "none";
});

const showMessage = (text) => {
  alarm.style.display = "flex";
  decryption.textContent = text;
};

const showList = (textContent) => {
  const wrapper = document.createElement("div");
  const input = document.createElement("input");
  const text = document.createElement("span");

  input.type = "checkbox";
  input.className = "task";
  text.textContent = textContent;

  wrapper.appendChild(input);
  wrapper.appendChild(text);
  tasks.appendChild(wrapper);

  input.addEventListener("click", (e) => {
    if (
      e.target.checked &&
      e.target.parentElement.parentElement.childElementCount > 1
    ) {
      e.target.parentElement.remove();
      return;
    }
    e.target.checked = false;

    showMessage("Останній таск зі списку ви не можете видалити");
  });
};

const createList = () => {
  if (inputText.value !== "") {
    const text = inputText.value;

    showList(text);

    inputText.value = "";

    return;
  }

  showMessage("Пусте поле не можна добавити");
};

button.addEventListener("focus", (e) => {
  e.target.style.boxShadow = "0px 0px 3px 3px grey";
});

button.addEventListener("blur", (e) => {
  e.target.style.boxShadow = "none";
});

button.addEventListener("click", createList);

// const tasksWrapper = document.querySelector(".tasks");

// const createId = () => Math.random().toString();

// const tasks = [];

// const addNewTask = () => {
//   const task = {
//     id: createId(),
//     name: inputText.value,
//   };

//   tasks.push(task);

//   createList();
// };

// const createList = () => {
//   tasksWrapper.innerHTML = "";

//   tasks.forEach(({ id, name }) => {
//     const wrapper = document.createElement("div");
//     const input = document.createElement("input");
//     input.type = "checkbox";
//     input.className = "task";
//     const text = document.createElement("span");
//     text.textContent = name;
//     wrapper.appendChild(input);
//     wrapper.appendChild(text);
//     tasksWrapper.appendChild(wrapper);

//     input.addEventListener("click", (e) => {
//       if (e.target.checked) {
//         const index = tasks.findIndex((task) => task.id === id);
//         tasks.splice(index, 1);
//         createList();
//       }
//     });
//   });
// };

// button.addEventListener("click", addNewTask);
