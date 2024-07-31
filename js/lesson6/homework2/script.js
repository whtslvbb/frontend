const geomProgress = function (quantity, multiplier) {
  let result = "";
  let num = 1;
  let sum = 0;

  for (let index = 0; index < quantity; index++) {
    sum += num;
    result = result + " " + num;
    num = num * multiplier;
  }

  console.log(result);

  return sum;
};

console.log(geomProgress(4, 7));

const geomProgressF = function (quantity, multiplier) {
  const b1 = 1;

  const sum = (b1 * (Math.pow(multiplier, quantity) - 1)) / (multiplier - 1);

  return sum;
};

const result1 = geomProgressF(4, 7);

console.log(result1, "result1");

const recursive = (quantity, multiplier, orderedNumber = 1, sum = 0) => {
  if (quantity === 0) {
    return sum;
  }

  const currentSum = sum + orderedNumber;
  const currentOrderedNumber = orderedNumber * multiplier;

  return recursive(quantity - 1, multiplier, currentOrderedNumber, currentSum);
};

const result = recursive(4, 7);

console.log(result, "result");
