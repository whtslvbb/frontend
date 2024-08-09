const arrCopy = (arr) => {
  const newArr = arr.slice();
  return newArr;
};

const arr = arrCopy([1, 2, 3]);
const newArr = arrCopy([1, 2, 3, [10, 20]]);

console.log(arr, "arr");
console.log(newArr, "newArr");

newArr.push(1000);

console.log(arr, "arr");
console.log(newArr, "newArr");
