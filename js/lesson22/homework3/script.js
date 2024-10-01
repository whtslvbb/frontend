$(() => {
  const randomNumber = () => Math.round(Math.random() * 255);
  const randomX = () => Math.round(Math.random() * window.innerWidth - 74);
  const randomY = () => Math.round(Math.random() * window.innerHeight - 74);

  setInterval(() => {
    let y = randomY();
    let x = randomX();
    if (y <= 74 || x <= 74) {
      y += 74;
      x += 74;
    }
    $(".element").animate(
      {
        top: y,
        left: x,
      },
      1000
    );
    setInterval(() => {
      const r = randomNumber();
      const g = randomNumber();
      const b = randomNumber();
      $(".element").css({
        "background-color": `rgb(${r}, ${g}, ${b})`,
        border: `3px solid rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
        "box-shadow": `0px 0px 24px 4px rgb(${r}, ${g}, ${b})`,
      });
    }, 500);
  }, 1000);
});
