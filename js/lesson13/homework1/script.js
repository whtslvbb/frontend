const getValue = (e) => e.target.dataset.value;

const showBox = (display1, display2) => {
  const boxColor = document.querySelector(".boxColor");
  boxColor.style.display = `${display1}`;

  const boxImage = document.querySelector(".boxImage");
  boxImage.style.display = `${display2}`;
};

const showColor = () => {
  showBox("flex", "none");

  const colorArr = document.querySelectorAll(".boxColor>.block");

  colorArr.forEach((value) => {
    value.addEventListener("click", (e) => {
      const color = getValue(e);
      document.body.style.backgroundImage = ``;
      document.body.style.backgroundColor = `${color}`;
    });
  });
};

const showImage = () => {
  showBox("none", "flex");

  const imageArr = document.querySelectorAll(".boxImage>.block");

  imageArr.forEach((value) => {
    value.addEventListener("click", (e) => {
      const image = getValue(e);
      
      document.body.classList.add("images");
      document.body.style.backgroundImage = `url(./images/${image})`;
    });
  });
};

document.querySelector(".color").addEventListener("click", showColor);
document.querySelector(".image").addEventListener("click", showImage);
