const inputArr = document.querySelectorAll("input");

const formButton = document.querySelector(".moveButton");

const moveForm = document.forms["move"];

const placeholderForm = document.forms["placeholder"];

console.log(placeholderForm[0]);

placeholderForm[0].addEventListener("blur", () => {
  if (placeholderForm[0].value !== "") {
    placeholderForm[0].placeholder = placeholderForm[0].value;
    placeholderForm[0].value = "";
  }
});

const showShadow = () => {
  if (event.target.type === "text") {
    event.target.style.boxShadow = "0px 0px 2px 3px lightblue";
    event.target.style.outline = "none";
  } else event.target.style.boxShadow = "0px 0px 2px 3px lightgreen";
};

const hideShadow = () => {
  if (event.target.type === "text") {
    event.target.style.boxShadow = "none";
  } else {
    event.target.style.boxShadow = "none";
  }
};

inputArr.forEach((value) => {
  value.addEventListener("focus", showShadow);
  value.addEventListener("blur", hideShadow);
});

formButton.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "green";
});

formButton.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "rgb(2, 175, 2)";
});

formButton.addEventListener("click", () => {
  console.log(moveForm[0].value);

  if (moveForm[0].value !== "") {
    moveForm[2].value = moveForm[0].value;
    moveForm[0].value = "";
  }
});
