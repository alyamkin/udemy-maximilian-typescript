// A first class decorator
/*
  function Logger(constructor: Function) {
    console.log('inside Logger function');
    console.log(constructor);
  }
  @Logger
  class Person {
    name: string = 'Andrey';

    constructor() {
      console.log('New person created...');
    }
  }

  const person = new Person();
*/

// Working with decorator factories

/*
  function Logger(logString: string) {
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }
  @Logger('LOGGING - PERSON')
  class Person {
    name: string = 'Andrey';

    constructor() {
      console.log('New person created...');
    }
  }

  const person = new Person();
*/

// Building more useful decorators

/*
  function WithTemplate(template: string, hookId: string) {
    return function (constructor: new () => Person) {
      console.log('Inside WithTemplate decorator');
      const appElement = document.getElementById(hookId);
      const person = new constructor();
      if (appElement) {
        appElement.innerText = person.name;
      }
    };
  }

  @WithTemplate('<h1>Hello Andrey</h1>', 'app')
  class Person {
    name: string = 'Andrey';

    constructor() {
      console.log('New person created...');
    }
  }
*/

// Adding Multiple Decorators.
// Decorator function execute in order top -> bottom, but execution function goes bottom -> up

/*
  function Logger(logMessage: string) {
    console.log('Decorator Logger');
    return function (constructor: Function) {
      console.log('Execution decorator Logger');
    };
  }

  function WithTemplate(template: string, hookId: string) {
    console.log('Decorator WithTemplate');
    return function (constructor: new () => Person) {
      console.log('Execution decorator WithTemplate');
      const appElement = document.getElementById(hookId);
      const person = new constructor();
      if (appElement) {
        appElement.innerText = person.name;
      }
    };
  }

  @WithTemplate('<h1>Hello Andrey</h1>', 'app')
  @Logger('Logger - Person')
  class Person {
    name: string = 'Andrey';

    constructor() {
      console.log('New person created...');
    }
  }
*/

// Diving into property decorators
// Accessor and parameter decorators

/*
  function Logger(target: any, propertyName: String | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
  }

  function Logger2(
    target: any,
    name: String | Symbol,
    description: PropertyDescriptor
  ) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(description);
  }

  function Logger3(
    target: any,
    name: string | Symbol,
    description: PropertyDescriptor
  ) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(description);
  }

  function Logger4(target: any, name: string | Symbol, position: number) {
    console.log('Property decorator');
    console.log(target);
    console.log(name);
    console.log(position);
  }

  class Product {
    @Logger
    title: string;
    private _price: number;

    @Logger2
    set price(value: number) {
      this._price = value;
    }

    constructor(title: string, price: number) {
      this.title = title;
      this._price = price;
    }

    @Logger3
    public getPriceWithTax(@Logger4 tax: number) {
      return this._price * (1 + tax);
    }
  }
*/

// Validation with Decorators

/*
  interface validationConfig {
    [constructorName: string]: {
      [propName: string]: string[];
    };
  }

  enum validators {
    required = 'required',
    positiveNumber = 'positiveNumber',
  }

  const registeredValidators: validationConfig = {};

  
  // registeredValidators = {
  //                           Course: {
  //                             title: ['reguired'],
  //                             price: ['positiveNumber']
  //                           }
  //                         }
  
  function Required(target: any, prop: string) {
    const constructorName = target.constructor.name; // Course
    registeredValidators[constructorName] = {
      ...registeredValidators[constructorName],
      [prop]: [validators.required],
    };
    console.log(registeredValidators);
  }

  function PositiveNumber(target: any, prop: string) {
    const constructorName = target.constructor.name; // Course
    registeredValidators[constructorName] = {
      ...registeredValidators[constructorName],
      [prop]: [validators.positiveNumber],
    };
    console.log(registeredValidators);
  }

  
  // obj = {
  //   title: 'Javascript',
  //   price: 200
  // }
  
  function validate(obj: any): boolean {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
      return true;
    }

    let isValid = true;

    for (let prop in objValidatorConfig) {
      for (let propValidator of objValidatorConfig[prop]) {
        switch (propValidator) {
          case validators.required: {
            isValid = isValid && !!obj[prop];
            break;
          }
          case validators.positiveNumber: {
            isValid = isValid && obj[prop] > 0;
            break;
          }
        }
      }
    }

    return isValid;
  }

  class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
      this.title = t;
      this.price = p;
    }
  }

  function createCourse(event: Event) {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const course = new Course(title, price);
    console.log(course);
    console.log(validate(course));
  }

  const validationForm = document.getElementById(
    'courseForm'
  )! as HTMLInputElement;
  validationForm.addEventListener('submit', createCourse);
*/

// Creating an Autobind Decorator

/*
  function Autobind(_: any, _2: string, description: PropertyDescriptor) {
    const originalMethod = description.value;
    const adjustedDescriptor = {
      enumerable: false,
      configurable: true,
      get() {
        return originalMethod.bind(this);
      },
    };

    console.log(adjustedDescriptor);
    return adjustedDescriptor;
  }
  class Printer {
    message = 'Print message';

    @Autobind
    printMessage() {
      console.log(this.message);
    }
  }

  const printer = new Printer();

  const button = document.getElementById('clickMe')!;
  button.addEventListener('click', printer.printMessage);
*/
