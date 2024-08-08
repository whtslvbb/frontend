const removeDuplicates = (array) => {
  const newArray = [];

  array.forEach((value) => {
    if (!newArray.includes(value)) {
      newArray.push(value);
    }
  });

  console.log(newArray);

  return newArray;
};

removeDuplicates(["html", "css", "html", "js"]);
removeDuplicates(["html", "css", "js", "html", "js", "python", "js", "scss"]);
