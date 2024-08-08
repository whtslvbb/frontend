const arrToString = (arr) => {
  const newArray = [];

  arr.forEach((value) => {
    newArray.push(value.toString());
  });

  console.log(newArray);

  return newArray
};

arrToString([1, 2, 3]);
arrToString([10, 200, 3333]);
