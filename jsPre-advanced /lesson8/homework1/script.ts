// interface IPerson {
//   name: string;
// }

// const gf: string = "sdswfsf";
// console.log(gf);

// const a = (para: IPerson): string => {
//   console.log(123123);
//   return para.name;
// };

// console.log(a({ name: "Vlad" }));
// let some1: any = 'Ivan Ivanov';
// let strLen21: number = some1.length;
// let strLen23: number = (some1 as string).length;
// console.log(strLen23);

let city: string;
city = "Kyiv";
city = "Lviv";
let address: string = city;
console.log(address);

// const checkNum = (number: number): void => {
//   if (number === 0) {
//     console.log("zero");
//     return;
//   }
//   number % 2 === 0 ? console.log("parne") : console.log("не парне");
// };

// const input = prompt("Введіть число:");
// if (!!input && Number.isInteger(+input)) {
//   checkNum(Number(input));
// }

function max(...arg: number[]): number {
  const acc: number = arg.reduce(
    (previousValue, currentValue) => {
      if (previousValue >= currentValue) {
        return previousValue;
      }
      return currentValue
    },
    0
  );
  return acc;
}

console.log(max(5, -2, 30, 6));

const getSqrt = (number: any) => {
    if (number<=0) {
        console.log('введіть більше 0');
        return
    }
    if (Number.isInteger(number)) {
        console.log(Math.sqrt(number));
        return 
    }
    console.log('Будь ласка, введіть число!');

};

const number = 'adada';
getSqrt(number);


