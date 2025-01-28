// Intersection types

/* 
  type Admin = {
    name: string;
    priveleges: string[];
  }

  type Employee = {
    name: string;
    startDate: Date;
  }

  type ElevatedEmployee = Admin & Employee;

  const elevatedEmployee: ElevatedEmployee = {
    name: 'Andrey',
    priveleges: ['create-server'],
    startDate: new Date
  }

  interface Admin {
    name: string;
    priveleges: string[];
  }

  interface Employee {
    name: string;
    startDate: Date;
  }

  interface ElevatedEmployee extends Admin, Employee {};

  const elevatedEmployee: ElevatedEmployee = {
    name: 'Andrey',
    priveleges: ['create-server'],
    startDate: new Date
  }

  type Type1 = number | string;
  type Type2 = string | boolean;
  type Combined = Type1 & Type2;

  const value: Combined = 'd';
*/

// Type Guards
/*
  type Combined = number | string;

  function add(a: Combined, b: Combined) {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.toString() + b.toString();
    }
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    }
  }

  type Admin = {
    name: string;
    priveleges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  type ElevatedEmployee = Admin & Employee;

  function printEmployeeInformation(empl: ElevatedEmployee) {
    if ('priveleges' in empl) {
      console.log('Priveleges: ', empl.priveleges);
    }
    if ('startDate' in empl) {
      console.log('startDate: ', empl.startDate);
    }
  }

  class Car {
    drive() {
      console.log('Car drive...');
    }
  }

  class Truck {
    drive() {
      console.log('Truck drive...');
    }

    loadCargo(amount: number) {
      console.log('Loading cargo...', amount);
    }
  }

  type Vehicle = Car | Truck;
  const v1: Car = new Car();
  const v2: Truck = new Truck();

  function useVehicle(vehicle: Vehicle) {
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(500);
    }
  }

  useVehicle(v2);
*/

// Discriminated Unions

/*
  const enum Animals {
    'bird',
    'horse',
  }
  interface Bird {
    type: Animals.bird;
    flyingSpeed: number;
  }

  interface Horse {
    type: Animals.horse;
    runningSpeed: number;
  }

  type Animal = Bird | Horse;

  function moveAnimal(animal: Animal) {
    let speed: number;

    switch (animal.type) {
      case Animals.bird: {
        speed = animal.flyingSpeed;
        break;
      }
      case Animals.horse: {
        speed = animal.runningSpeed;
      }
    }

    console.log(`Animal speed is: ${speed}`);
  }

  const bird: Bird = {
    type: Animals.bird,
    flyingSpeed: 50,
  };

  moveAnimal(bird);
*/

// Type Casting

/*
  const p = document.querySelector('p');
  const pById = document.getElementById('message') as HTMLParagraphElement;

  // const userInput = <HTMLInputElement>document.getElementById('user-input')!;
  const userInput = document.getElementById('user-input');

  if (userInput) {
    (userInput as HTMLInputElement).value = 'Hello';
  }
*/

// Index Properties

/*
  interface ErrorsContainer {
    [prop: string]: string
  }

  const errorsBatch: ErrorsContainer = {
    email: 'Invalid Email',
    userName: 'Must Start with capital letter',
    6: 'true'
  }
*/

// Function Overloads

/*
  type Combinable = string | number;

  function add(a: string, b: string): string;
  function add(a: number, b: number): number;
  function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  const result = add('5', '6');

  console.log(result.split(''));
*/

// Optional Chaining

/*
  const fetchedUserData = {
    id: 4,
    userName: 'John',
    job: { title: 'CEO', description: 'Owner of the company' },
  };

  console.log(fetchedUserData?.job?.title);
*/

// Nullish Coalexcing

/*
  const userInput = '';

  const storedData = userInput ?? 'DEFAULT';

  console.log(storedData);
*/
