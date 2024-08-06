const gerArea = (radius) => {
  if (radius === undefined) return console.log("Будь ласка, введіть радіус!");
  if (!isFinite(radius)) return console.log("Повинно бути числове значення.");
  else return console.log(Math.PI * Math.pow(radius, 2));
};
gerArea(3);
