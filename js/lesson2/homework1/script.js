let count = 0;

if (prompt("Столиця України?").toLowerCase() === "київ") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця Канади?").toLowerCase() === "оттава") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця Німеччини?").toLowerCase() === "берлін") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця Франції?").toLowerCase() === "париж") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця США?").toLowerCase() === "вашингтон") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця Мексики?").toLowerCase() === "мехіко") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця Італії").toLowerCase() === "рим") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця Польщі?").toLowerCase() === "варшава") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця Японії?").toLowerCase() === "токіо") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (prompt("Столиця Китаю?").toLowerCase() === "пекін") {
  console.log("correct");
  count += 1;
  console.log(`now you have ${count} score`);
} else console.log("wrong");

if (count <= 1) {
  console.log(`your result is ${count} point  level: very bad`);
}

if (count >= 1 && count < 4) {
  console.log(`your result is ${count} point  level: bad`);
}

if (count >= 4 && count < 7) {
  console.log(`your result is ${count} point  level: good`);
}

if (count >= 7 && count <= 9) {
  console.log(`your result is ${count} point  level: very good`);
}

if (count === 10) {
  console.log(`your result is ${count} point  level: perfect`);
}
