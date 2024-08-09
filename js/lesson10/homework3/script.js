const getLength = (array) => {
  const newArray = [];

  array.forEach((value) => {
    newArray.push(value.length);
  });

  console.log(newArray);

  return newArray;
};

getLength(["Ivan", "Pavlo", "Ira"]);
getLength(["Oleksiy", "Andriana"]);
