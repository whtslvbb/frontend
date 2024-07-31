const a = parseInt(prompt("Enter the first number"));
const b = parseInt(prompt("Enter the second number"));

const isPrime = (num) => {
  if (num <= 1) return false; 
  if (num === 2) return true; 
  if (num % 2 === 0) return false;

  for (let i = 3; i <= num / 2; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const simpleNumbers = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

simpleNumbers(a, b);
