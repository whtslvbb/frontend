const getImage = () => {
  const link = prompt("введіть силку на картинку");
  event.target.style.backgroundImage = `url(${link})`;
};

const arrBox = document.querySelectorAll(".box");

arrBox.forEach((value) => {
  value.addEventListener("click", getImage);
});
