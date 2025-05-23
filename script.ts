function greetUser(name: string): void {
    console.log(`Hello, ${name}`);
}
greetUser("Cat");

interface Person {
  name: string;
  age: number;
  city: string;
}

function printPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}
const person: Person = { name: "Jay", age: 30, city: "Berlin" };
printPersonInfo(person);

function squareNumber(num: number): number {
  return num * num;
}
console.log(squareNumber(5)); 
console.log(isEven(10)); 
console.log(isEven(7)); 

function isEven(num: number): boolean {
  return num % 2 === 0;
}

interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Name: ${student.name}, Grade: ${student.grade}`);
}
const student: Student = { name: "Max", grade: 88 };
printStudentInfo(student);


function logMessage(message: string): void {
  console.log(message);
}

logMessage("A cat tried to eat a plant");
