let n1 = 5;
function sum(n: number, n2: number) {
  return n + n2;
}
console.log(sum(n1, 3));

/////
function getTotal(num: Array<number>) {
  return num.reduce((acc, cur) => {
    return acc + cur;
  }, 4);
}
console.log(getTotal([3, 2, 1]));

// Get Suggestion
const user = {
  firstName: "Rupali",
  lastName: "Mohanty",
  role: "Developer",
};

console.log(user.firstName);

/// Type alias ///
type User = {
  name: string;
  age: number;
  address?: string;
};

// Question mark ? used for optinal

const user1: User = {
  name: "tapan",
  age: 24,
};

function login(userData: User): User {
  return userData;
}

console.log(login(user1));

type ID = number | string;

const userId: ID = 54321;
const userId1: ID = "tapan";

/// Interfaces ///

interface Transaction {
  payerAccount: number;
  payeeAccount: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transaction: Transaction[];
}

const transaction1: Transaction = {
  payeeAccount: 123,
  payerAccount: 456,
};

const bankAccount: BankAccount = {
  accountNumber: 12345,
  accountHolder: "Tapan",
  balance: 4500,
  isActive: true,
  transaction: [transaction1],
};

//Multiple interfaces reuse by extends
interface Book {
  name: string;
  price: number;
}

interface Ebook extends Book {
  // name: string;
  // price: number;
  fileSize: number;
  format: string;
}

interface Audiobook extends Ebook {
  // name: string;
  // price: number;
  // fileSize: number;
  // format: string
  duration: number;
}

const book: Audiobook = {
  name: "Economics",
  price: 650,
  fileSize: 300,
  format: "pdf",
  duration: 60,
};

//Merge Interfaces
interface Laptop {
  company: string;
  price: number;
}

interface Laptop {
  ram: number;
  ssd: number;
}

const laptop: Laptop = {
  company: "HP",
  price: 80000,
  ram: 16,
  ssd: 500,
};

//Type alias v/s Interfaces
//Mering not allowed
//Extends cannot use

/// Unions ///

type Id = number | string;

//Narrowing
function printId(id: Id) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId(22);

//////
function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}

console.log(getFirstThree("hello"));
console.log(getFirstThree([1, 2, 3]));

/// Generics ///
//Type any means no typescript
function logString(arg: string) {
  console.log(arg);
  return arg;
}
logString("Logged In");

function logNumber(arg: number) {
  console.log(arg);
  return arg;
}
logNumber(12345);

function logArray(arg: any) {
  console.log(arg);
  return arg;
}
logArray([5, 6, 7]);

//Avoid repetation
function logAnything<T>(arg: T): T {
  console.log(arg);
  return arg;
}
logAnything([7, 9]);
logAnything("No repetition");

//Example 1
interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}
const people: HasAge[] = [{ age: 30 }, { age: 50 }, { age: 10 }];

interface Player {
  name: string;
  age: number;
}
const players = [
  { name: "Jane", age: 30 },
  { name: "Lily", age: 24 },
  { name: "Maddy", age: 16 },
];
//Assertion(forcefully)
// const person = getOldest(players) as Player;

//Generics
const person = getOldest(players);
person.age;

//Example2
