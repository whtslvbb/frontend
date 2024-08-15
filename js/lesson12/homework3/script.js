document.querySelector(".box").addEventListener("mouseout", (e) => {
  saySecret(e.target, "purple", "orange", "black", "У мене є секрет");
});
document.querySelector(".box").addEventListener("mouseover", (e) => {
  saySecret(e.target, "yellow", "green", "blue", "Хочеш знати який?");
});
document.querySelector(".box").addEventListener("mousedown", (e) => {
  saySecret(e.target, "black", "yellow", "white", "А я тобі не скажу!");
});

document.querySelector(".box").addEventListener("mouseup", (e) => {
  saySecret(e.target, "yellow", "green", "blue", "Хочеш знати який?");
});

const saySecret = (element, backgroundColor, border, color, textContent) => {
  element.style.backgroundColor = `${backgroundColor}`;
  element.style.border = `4px solid ${border}`;
  element.style.color = `${color}`;
  element.textContent = `${textContent}`;
};
