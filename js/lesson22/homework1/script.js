let currentElement = null;

$(() => {
  $(".box").each((index, element) => {
    const colorArr = [
      "lightpink",
      "lightsalmon",
      "lightseagreen",
      "lightskyblue",
      "lightslategray",
    ];
    $(element).children(".item").css("background-color", colorArr[index]);
    $(element).click(() => {
      currentElement = $(element);

      $(".modal-container").css({
        backgroundColor: "#000000c7",
        zIndex: 3,
      });

      $(element)
        .children(".item")
        .animate({ zIndex: 4 }, 1)
        .animate(
          {
            top: window.innerHeight / 2 - 200,
            left: window.innerWidth / 2 - 200,
            width: 400,
            height: 400,
          },
          2000
        );
    });
  });
});
$(".modal-container").on("click", () => {
  console.log(currentElement);
  console.log(currentElement[0].offsetTop);

  $(".modal-container").css({
    backgroundColor: "#fff",
    zIndex: -3,
  });

  currentElement.children(".item").css({ zIndex: 2 }).animate(
    {
      top: currentElement[0].offsetTop,
      left: currentElement[0].offsetLeft,
      width: 150,
      height: 150,
    },
    2000
  );
  //   currentElement.children(".item").css({ top: "initial", left: "initial" });
  //   currentElement.css({ position: "relative" });
});
