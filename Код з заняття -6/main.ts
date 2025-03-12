// var, let, const
// var a: Type = value;

// Any

// let a: any;
// a = 0;
// a = 'SSS';

// String

// let firstName: string; // string
// firstName = 'Ivan';
// let lastName = 'Ivanov'; // string
// lastName = 'Petriv';
// lastName = 22;

// let firstName: string = 'Ivan';
// let lastName: string = 'Ivanov';
// let message: string = `Hello ${firstName} ${lastName}`;
// console.log(message);

// Number
// let b = 100;
// b = 200;
// let q: number = 200;

// Boolean
// let isActivate: boolean = true;
// let isValid: boolean = false;

// Null
// let some = null;
// some = 111;

// Undefined
// let und: undefined = undefined;

// Symbol
// let s1: symbol;
// let s2 = Symbol('bla');

// Bigint
// let bigNumber: bigint;
// Number.MAX_SAFE_INTEGER

// Array
// let arr1: any[] = [1,'qq', true, [10,29], null];
// let names: string[] = ['Ivan', 'Petro', 'Pavlo'];
// let colors: Array<string> = ['red', 'green', 'blue'];
// console.log(colors[0]);

// Tuple

// let userData: [number, string] = [1, 'Ivan'];
// userData = [2, 'qqqq']

// Unknown

// let q: unknown;
// // let s: number = q;
// let s1: any = q

// let s1: any;
// s1.name = 111;
// s1.name = '';

// let s2: unknown;
// s2.q = ''

// Enum

// enum Clubs { Arsenal, Chelsea, ManUn, ManCity };
// let pos: Clubs = Clubs.Arsenal;
// console.log(pos);

// enum Clubs { Arsenal=1, Chelsea=5, ManUn=7, ManCiti=10 };
// let pos: Clubs = Clubs.Arsenal;
// console.log(pos);

// enum Clubs { Arsenal=1, Chelsea=5, ManUn, ManCiti };
// let pos: Clubs = Clubs.ManCiti;
// console.log(pos);

// enum API { Category='../category', Products='../products' };
// let req: API = API.Category
// console.log(req);
// console.log(API['Category']);
// console.log(API[0]);

// enum Clubs { Arsenal=1, Chelsea=5, ManUn=7, ManCiti=10 };
// let pos: Clubs = Clubs.Arsenal;
// console.log(pos);
// console.log(Clubs[1]);

// Object
// let obj = { name: "Ivan" };

// Union
// let id: number | string;
// id = 'xxxx';
// id = 123;

// typeof

// type numbOrStr = number | string;
// let id: numbOrStr = 1;
// id = 'qqqq';

// let some: string = 'Ivan Ivanov';
// let strLen: number = (<string>some).length;
// let strLen2: number = (some as string).length;
// console.log(strLen);

// void, never

// function sayHello(): void {
//     console.log('Hello TS');
// }

// sayHello();

// function sayHello(name: string): void {
//     console.log(`Hello ${name}`);
// }

// sayHello('Ivan');

// function sayHello(name: string, sname: string): void {
//     console.log(`Hello ${name} ${sname}`);
// }
// sayHello('Ivan', 'Ivanov');

// function sayHello(name: string, sname?: string): void {
//     if(!sname){
//         console.log(`Hello ${name}`);
//     }
//     else{
//         console.log(`Hello ${name} ${sname}`);
//     }
// }

// sayHello('Ivan');
// sayHello('Ivan', 'Ivanov');

// function sayHello(name: string, sname: string = 'Guestovych'): void {
//     console.log(`Hello ${name} ${sname}`);
// }

// sayHello("Petro");
// sayHello("Petro", "Petriv");

// function sayHello(name: string, sname: string = 'Guestovych'): string {
//     return `Hello ${name} ${sname}`
// }

// let message: string = sayHello('Pavlo');
// console.log(message);

// function sum(...arg: Array<number>): number{
//     return arg.reduce((total, elem) => total + elem, 0);
// }

// console.log(sum(1,2,3));

// function strToArr(name: string): Array<string>{
//     return name.split('');
// }

// console.log(strToArr('Ivan'));

// let strToArr = (name: string): Array<string> => name.split('');

// function myError(message: string): never {
//     throw new Error(message);
// }

// let userLogin = document.querySelector('.login') as HTMLInputElement;
// console.log(userLogin.value);

// let link = document.querySelector('a') as HTMLAnchorElement;
// console.log(link.href);
// console.log(link.textContent);

enum UserType {
  Admin = "123",
  Manager = "manager",
}

// type UserType = "admin" | "manager";
interface IManager {
  name: string;
  role: UserType.Manager;
}

interface IAdmin {
  dupa: string;
  role: UserType.Admin;
}

type IUser = IManager | IAdmin;

const users: IUser[] = [
  {
    dupa: "name",
    role: UserType.Admin,
  },
  {
    name: "name",
    role: UserType.Manager,
  },
];

const allManagers = users.filter(({ role }) => role === UserType.Manager);

const a = (user: IUser) => {
  switch (user.role) {
    case UserType.Admin:
      user.dupa;
      break;
    default:
      break;
  }
};
