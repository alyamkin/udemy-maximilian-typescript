// Basics

// class Department {
//   // name: string;
//   private employees: string[] = [];

//   // constructor(n: string) {
//   //   this.name = n;
//   // }

//   constructor(private readonly id: string, public name: string) {}

//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     // this.id = 5;
//     this.employees.push(employee);
//   }

//   printEmployees() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const accounting = new Department('d1', 'Accounting');
// accounting.addEmployee('Bill');
// accounting.addEmployee('John');

// accounting.printEmployees();

// accounting.describe();

// const accountingCopy = {
//   name: 'DUMMY',
//   age: 23,
//   describe: accounting.describe,
// };
// accountingCopy.describe();

// Inheritance
abstract class Department {
  protected employees: string[] = [];

  static fiscalYear = 2025;

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  admins: string[] = [];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  // constructor(id: string, public reports: string[]) {
  //   super(id, 'Accounting');
  //   this.lastReport = reports[0];
  // }

  // for singleton pattern
  private constructor(id: string, public reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static get getInstance() {
    if (AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    }
    AccountingDepartment.instance = new AccountingDepartment('d2', []);
    return AccountingDepartment.instance;
  }

  get mostRecentReport() {
    if (!this.lastReport) {
      throw Error('No reports available');
    }
    return this.lastReport;
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw Error('Please define report');
    }
    this.addReport(value);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }

  addEmployee(employee: string) {
    if (employee === 'Andrey1') {
      return;
    }
    this.employees.push(employee);
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }
}

// const itDepartment = new ITDepartment('id1', ['Andrey']);
// console.log(itDepartment);

// const accountingDepartment = new AccountingDepartment('id2', []);
// accountingDepartment.describe();

// singleton pattern
const accounting = AccountingDepartment.getInstance;
const accounting2 = AccountingDepartment.getInstance;

console.log(accounting, accounting2);
