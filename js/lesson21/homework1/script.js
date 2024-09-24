$(document).ready(() => {
  $(".green")
    .slideDown()
    .animate(
      {
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        height: "0px",
      },
      60000
    )
    .animate(
      {
        height: "445px",
        borderTopLeftRadius: "26px",
        borderTopRightRadius: "26px",
      },
      60000
    );
  const time = setInterval(() => {
    console.log($(".number").text());
    $(".number").text(`${$(".number").text() - 1}`);
    if ($(".number").text() == 0) {
      clearInterval(time);
    }
  }, 60000);
});
