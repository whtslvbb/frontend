const name1 = prompt("Введіть ім'я");
if (name1 === "Ім'я") {
  const password = prompt("Введіть пароль");
  if (password === "ЛОГОС") {
    console.log("Ласкаво просимо!");
  } else if (password === "") {
    console.log("Вхід скасований");
  } else console.log("Пароль невірний");
} else if (name1 === "" || name1 == null) {
  console.log("Вхід скасований");
} else console.log("Я вас не знаю");
