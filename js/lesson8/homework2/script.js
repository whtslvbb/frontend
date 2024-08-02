const isCorrect = (isEmail) =>
  isEmail ? console.log("correct email") : console.log("wrong email");

const email = prompt("enter email");
const isValid =
  email.includes("@") && email.slice(-1) !== "@" && email[0] !== "@";

isCorrect(isValid);

