// number, string, boolean
/*
function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return num1 + num2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
*/

// object
/*
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'Andrey',
  age: 38,
};

console.log(person.name);
*/

// Array
/*
type Person = {
  name: string;
  age: number;
  hobbies: string[];
};

const person: Person = {
  name: 'Andrey',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: string[];
favoriteActivities = ['Dancing'];

console.log(person.name);

for (const hobbie of person.hobbies) {
  console.log(hobbie.toUpperCase());
  // console.log(hobbie.map());
}
*/

// Tuple
/*
type Person = {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
};

const person: Person = {
  name: 'Andrey',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: [1, 'author']
};

person.role.push('addition role'); // exeption
person.role[0] = '1';
*/

// Enums
/*
enum Role {
  'ADMIN',
  'READ_ONLY',
  'AUTHOR',
}

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
};

const person: Person = {
  name: 'Andrey',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('The user is admin');
}
*/

// any
/*
let favoriteActivities: any[];
favoriteActivities = [30, 'Andrey', true];
*/

// Union types
/*
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(39, 42);
console.log(combinedAges);

const combinedNames = combine('Andrey', 'Yana');
console.log(combinedNames);
*/

// Literal Types
/*
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-text' | 'as-number'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    result = +result;
  } else {
    result = result.toString();
  }
  return result;
}

const combinedAges = combine(39, 42, 'as-number');
console.log(combinedAges);

const combinedAgesAsString = combine('39', '42', 'as-number');
console.log(combinedAgesAsString);

const combinedNames = combine('Andrey', 'Yana', 'as-text');
console.log(combinedNames);
*/

// Type Aliases / Custom Types
/*
type Conbinable = string | number;
type ConversionDescription = 'as-text' | 'as-number';

function combine(
  input1: Conbinable,
  input2: Conbinable,
  resultConversion: ConversionDescription
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    result = +result;
  } else {
    result = result.toString();
  }
  return result;
}

const combinedAges = combine(39, 42, 'as-number');
console.log(combinedAges);

const combinedAgesAsString = combine('39', '42', 'as-number');
console.log(combinedAgesAsString);

const combinedNames = combine('Andrey', 'Yana', 'as-text');
console.log(combinedNames);
*/

// Function Return Types & void
/*
function add(num1: number, num2: number): number {
  return num1 + num2;
}

function printResult(value: number): void {
  console.log(value);
}

printResult(add(15, 3));
*/

// Functions as Types
/*
function add(num1: number, num2: number): number {
  return num1 + num2;
}

function printResult(value: number): void {
  console.log(value);
}

let combineValue: (n1: number, n2: number) => number;
combineValue = add;

console.log(combineValue(2, 3));
*/

// Function Types and Callbacks
/*
function addAndHandle(num1: number, num2: number, cb: (n: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(3, 5, (num) => console.log(num));
*/

// The unknown Type
/*
let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "Andrey";

if(typeof userInput === 'string') {
  userName = userInput;
}
*/

// The never Type
/*
function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError('Something went wrong', 500);

*/
