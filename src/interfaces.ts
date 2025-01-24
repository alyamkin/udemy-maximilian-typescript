// Basics

// interface Person {
//   name: String;
//   age: Number;

//   greet(phrae: string): void;
// }

// let user1: Person;

// user1 = {
//   name: 'Andrey',
//   age: 39,

//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };

// user1.greet('Hello');

// Interface and classes
interface Named {
  name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log(`${phrase}`);
    }
  }
}

const user: Greetable = new Person();
user.greet('Hello there!');

// Interface as function type
// type AddFn = (n1: number, n2: number) => number;
interface AddFn {
  (n1: number, n2: number): number;
}

const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};
