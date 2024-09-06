// Завдання 1. forEach

const arr = [5, 6, 7, 8, 9];
let sum = 0;

arr.forEach((value) => {
  sum += value;
});
console.log("Завдання 1", sum);

// 'Завдання 2'

const mapArr = arr.map((value) => value ** 2);
console.log("Завдання 2", mapArr);

// 'Завдання 3'

const country = [
  { name: "Ivan", country: "Ukraine" },
  { name: "Petro", country: "Ukraine" },
  { name: "Miguel", country: "Cuba" },
];

const isUA = () => country.every(({ country }) => country === "Ukraine");

console.log("Завдання 3", isUA());

// 'Завдання 4'

console.log(
  "Завдання 4",
  country.some((value) => value === "Ukraine")
);

// 'Завдання 5'

const filterArr = [1, "string", [3, 4], 5, [6, 7]];

const newFilterArr = filterArr.filter((value) => Array.isArray(value));

console.log("Завдання 5", newFilterArr);

// 'Завдання 6'

const reduceArr = [1, 2, 3, 0, 4, 5, 6];

const { sum: reduceSum } = reduceArr.reduce(
  (acc, currentValue) => {
    if (acc.isStop) {
      return acc;
    }

    if (currentValue === 0) {
      return {
        ...acc,
        isStop: true,
      };
    }

    return {
      ...acc,
      sum: acc.sum + currentValue,
    };
  },
  { isStop: false, sum: 0 }
);

const { counter } = reduceArr.reduce(
  (acc, currentValue) => {
    if (acc.sum < 10) {
      return {
        counter: acc.counter + 1,
        sum: acc.sum + currentValue,
      };
    }

    return {
      sum: acc.sum + currentValue,
      counter: acc.counter,
    };
  },
  { sum: 0, counter: 0 }
);

console.log("Завдання 6", reduceSum);
console.log("Завдання 6", counter);

// 'Завдання 7'

const anyArr = [1, -2, 3, 0, 4, -5, 6, -11];

const newAnyArr = anyArr
  .filter((value) => value >= 0)
  .map((value) => Math.sqrt(value));
console.log("Завдання 7", newAnyArr);
