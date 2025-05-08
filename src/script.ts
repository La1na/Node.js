//Задание 1
type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const obj: AdminUser = {
  name: "Jey",
  permissions: ["read", "write", "delete"],
  email: "randomemail@gmail.com",
};

console.log(obj);

//Задание 2

type Engine = {
  type: string;
  horsepower: number;
};

type Car = {
  make: string;
  model: string;
  engine: Engine;
  year?: number;
};

const cars: Car = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "V6",
    horsepower: 301,
  },
};

function displayCar(product: Car[]): void {
  product.forEach((car) => {
    console.log(
      `make: ${car.make}, model: ${car.model}, engine: ${car.engine.type}, ${
        car.engine.horsepower
      } HP, year: ${car.year ? car.year : "not specified"}`
    );
  });
}
displayCar([cars]);

//Задание 3

interface Product {
  name: string;
  price: number;
}

interface CalculateDiscountFn {
  (product: Product, discount: number): number;
}

const calculateDiscount: CalculateDiscountFn = (product, discount) => {
  const discountedPrice = product.price - product.price * (discount / 100);
  return Math.max(0, discountedPrice);
};

const product: Product = { name: "Ноутбук", price: 1000 };
const newPrice = calculateDiscount(product, 15);
console.log(newPrice);

//Задание 4

interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  {
    name: "La cat",
    salary: 50000,
  },
  {
    name: "La dog",
    salary: 80000,
  },
  {
    name: "Jey",
    salary: 654570,
  },
];

function getSalaries(employeeList: Employee[]): number[] {
  return employeeList.map((employee) => employee.salary);
}

console.log(getSalaries(employees));

//Задание 5

interface IPerson {
  firstName: string;
  lastName: string;
}

interface IStudent extends IPerson {
  grade: number;
}

function printPerson(param: IStudent): string {
  return `First name: ${param.firstName}, \n\n Last name: ${param.lastName}, \n\n ${param.grade}`;
}

console.log(printPerson({ firstName: "Randy", lastName: "Lenz", grade: 1 }));

//Задание 6

interface ConcatStringsFn {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStringsFn = (str1, str2) => {
  return str1 + str2;
};

console.log(concatStrings("Hello, ", "world!"));