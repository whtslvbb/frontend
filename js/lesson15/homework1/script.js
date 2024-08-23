const scrollDown = document.querySelector(".down");
const scrollUp = document.querySelector(".up");
const box = document.querySelector(".box");
const line = document.querySelector(".line");
const image = document.querySelector(".imgBox");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 450 && window.scrollY >= 200) {
    scrollDown.style.fontSize = `${window.scrollY / 7}px`;
  } else if (window.scrollY >= 450 && window.scrollY <= 800) {
    box.style.left = `${window.scrollY / 9}px`;
    line.style.width = `${window.scrollY / 1.5}px`;
  } else if (window.scrollY >= 750 && window.scrollY <= 1000) {
    image.style.right = `${window.scrollY / 4 - 150}px`;
  } else if (window.scrollY >= 1000 && window.scrollY <= 1400) {
    scrollUp.style.fontSize = `${50000 / window.scrollY}px`;
  }
});

scrollUp.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

scrollDown.addEventListener("click", () => {
  window.scroll({
    top: 800,
    behavior: "smooth",
  });
});
