const sum = () => {
  let sum = 0;
  return (step) => {
    sum = sum + step;
    console.log(sum);
  };
};
const result = sum();
result(3);
result(5);
result(200);
