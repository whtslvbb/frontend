const getSqrt = (number) => {
  if (number === undefined) return console.log("Будь ласка, введіть число!");
  if (!isFinite(number)) return console.log("Повинно бути числове значення.");
  if (number === 0) return console.log("Введіть додатнє число");
  else return console.log(Math.sqrt(number));
};
getSqrt(0);
