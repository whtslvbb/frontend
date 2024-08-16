const keyArr = document.querySelectorAll(".key");
const keyLetterArr = document.querySelectorAll(".letter");
const keyActionArr = document.querySelectorAll(".flexKey");
const content = document.querySelector(".content");

const enterText = (key) => {
  content.textContent += key;
};

const deleteText = () => {
  const editText = content.textContent.slice(0, -1);
  content.textContent = editText;
};

window.addEventListener("keydown", (e) => {
  console.log(e.code, "e");

  keyActionArr.forEach((value) => {
    if (e.code !== value.dataset.value) {
      return;
    }

    value.style.backgroundColor = "grey";
    value.style.color = "white";

    if (e.code === "Space") {
      console.log(123);

      enterText(" ");
      return;
    }

    if (e.code === "Tab") {
      e.preventDefault();
      enterText("\t");
      return;
    }

    if (e.code === "Enter") {
      enterText("\n");
      return;
    }

    if (e.code === "Backspace") {
      deleteText();
    }
  });

  keyLetterArr.forEach((value) => {
    if (value.dataset.value === e.code) {
      value.style.backgroundColor = "grey";
      value.style.color = "white";

      enterText(e.key);
    }
  });
});

window.addEventListener("keyup", (e) => {
  keyArr.forEach((value) => {
    if (value.dataset.value === e.code) {
      value.style.backgroundColor = "white";
      value.style.color = "black";
    }
  });
});
