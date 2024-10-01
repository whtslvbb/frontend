$(() => {
  const randomNumber = () => Math.round(Math.random() * 255);
  const randomX = () => Math.round(Math.random() * window.innerWidth);
  const randomY = () => Math.round(Math.random() * window.innerHeight);
  $(".element").click(() => {
    $(".element")
      .css({
        "background-color": `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`,
      })
      .animate(
        {
          width: randomNumber(),
          height: randomNumber(),
          top: randomY(),
          left: randomX(),
        },
        2000,
        "easeOutBounce"
      );
  });
});
