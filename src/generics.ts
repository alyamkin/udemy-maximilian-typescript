// Built-in Generics

/*
  const arr: Array<string> = ['Andrey'];

  console.log(arr[0].split(''));

  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello'), 2000);
  });

  promise.then((data) => console.log(data));
*/

// Creating a generic function

/*
  function merge<T, U>(objA: T, objB: U) {
    return { ...objA, ...objB };
  }

  const mergedObj = merge({ name: 'Andrey' }, { age: 39 });
*/

// Working with Constraints

/*
  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return { ...objA, ...objB };
  }

  const mergedObj = merge({ name: 'Andrey' }, { age: 39 });

  console.log(mergedObj);
*/

// Another Generic Function

/*
  interface Lengthy {
    length: number;
  }

  function countAndDescribe<T extends Lengthy>(element: T) {
    let description = 'Got not value';
    if (element.length === 1) {
      description = `Got 1 element`;
    } else if (element.length > 1) {
      description = `Got ${element.length} elements`;
    }
    return [element, description];
  }
*/

// The keyof Constraint

/*
  function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
  ) {
    return `Value is: ${obj[key]}`;
  }

  console.log(extractAndConvert({ name: 'Andrey' }, 'name'));
*/

// Generic Classes

/*
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
      return [...this.data];
    }
  }

  const stringStorage = new DataStorage<string>();
  stringStorage.addItem('Andrey');
  stringStorage.addItem('Yana');
  stringStorage.removeItem('Andrey');
*/

// Generic Utility Types

/*
  interface Book {
    title: string;
    description: string;
  }

  function createBook(title: string, description: string): Book {
    const book: Partial<Book> = {};
    book.title = 'title';
    book.description = 'description';
    return book as Book;
  }

  const names: Readonly<string[]> = ['Andrey', 'Yana'];
  names.push('Amelia', 'Anastasiia');
*/
