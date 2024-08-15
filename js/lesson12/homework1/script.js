const colorArr = ["red", "green", "yellow"];
let index = -1;
const showColor = () => {
  index++;
  if (index === 3) {
    index = 0;
  }
  return (event.target.style.backgroundColor = `${colorArr[index]}`);
};
document.querySelector(".box").addEventListener("mouseover", showColor);
document.querySelector(".box").addEventListener("mouseout", function () {
  event.target.style.backgroundColor = "purple";
});
