$(document).ready(() => {
  const checkInputs = () => {
    $("input").each(function () {
      if ($(this).prop("disabled") === true) {
        $(this).css("opacity", 0.7);
      } else {
        $(this).css("opacity", 1);
      }
    });
  };
  checkInputs();

  const backPositionArr = [
    {
      position: "0 0",
      number: 1,
    },
    {
      position: "-100px 0",
      number: 2,
    },
    {
      position: "-200px 0",
      number: 3,
    },
    {
      position: "-300px 0",
      number: 4,
    },
    {
      position: "0 -100px",
      number: 5,
    },
    {
      position: " -100px -100px",
      number: 6,
    },
    {
      position: "-200px -100px",
      number: 7,
    },
    {
      position: "-300px -100px",
      number: 8,
    },
    {
      position: "0 -200px",
      number: 9,
    },
    {
      position: "-100px -200px",
      number: 10,
    },
    {
      position: "-200px -200px",
      number: 11,
    },
    {
      position: "-300px -200px",
      number: 12,
    },
    {
      position: "0 -300px",
      number: 13,
    },
    {
      position: "-100px -300px",
      number: 14,
    },
    {
      position: "-200px -300px",
      number: 15,
    },
    {
      position: "-300px -300px",
      number: 16,
    },
  ];
  const imageRandom = () => {
    const newArr = backPositionArr.toSorted(() => Math.random() - 0.5);

    $(".piece").each(function (index) {
      $(this).css("background-position", `${newArr[index].position}`);
      $(this).text(newArr[index].number);
    });
  };
  imageRandom();
  let id = null;
  let sec = null;
  $("input[name='start']").on("click", () => {
    $(".result").sortable({
      connectWith: ".result",
    });
    sec = 59;
    id = setInterval(() => {
      if (sec < 10) {
        sec = "0" + sec;
      }
      $(".time").text(`00:${sec}`);
      sec -= 1;

      if (sec < 0) {
        clearInterval(id);
      }
    }, 1000);
    $("input[name='start']").prop("disabled", true);
    $("input[name='check']").prop("disabled", false);
    checkInputs();
  });

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let result = true;
  const checkResult = () => {
    $(".piece").each((index) => {
      if (numbers[index] != $(".piece").eq(index).text()) {
        result = false;
        return;
      }
    });
  };

  $("input[name='check']").on("click", () => {
    $(".focusScreen").css("display", "flex");
    $(".message").css("display", "flex");
    $(".check").css("display", "inline");
    const messageID = setInterval(() => {
      let secTimer = +sec + 1;
      if (sec < 9) {
        secTimer = "0" + secTimer;
      }
      const time = `00:${secTimer}`;
      $(".text").text(`You still have time, you sure? ${time}`);
    }, 1);

    $(".check").on("click", () => {
      $("input[name='check']").prop("disabled", true);
      checkInputs();
      $(".check").css("display", "none");
      clearInterval(id);
      clearInterval(messageID);
      checkResult();
      if (result && sec > 0) {
        $(".text").text(`Woohoo, well done, you did it!`);
        return;
      }
      $(".text").text(`It's a pity, but you lost!`);
    });
    $(".close").on("click", () => {
      $(".focusScreen").css("display", "none");
      $(".message").css("display", "none");
    });
  });

  $("input[name='newGame']").on("click", () => {
    window.location.reload();
  });
});
