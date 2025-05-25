// Задача 1

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name, "dog"); 
    this.breed = breed;
  }

  sound(): void {
    console.log("The dog barks");
  }
}

const animal = new Animal("Leo", "lion");
animal.sound();

const dog = new Dog("Buddy", "Labrador");
dog.sound(); 
console.log(dog.name);    
console.log(dog.species); 
console.log(dog.breed);  

// Задача 2

class Library {
    static totalBook: number = 0;
    name: string;
    books: number;

    constructor(name: string) {
        this.name = name
        this.books = 0
    }

    addBook(): void {
        this.books++
        Library.totalBook++
    }
}
const lib1 = new Library("City Library");
lib1.addBook();
lib1.addBook();

const lib2 = new Library("School Library");
lib2.addBook();

console.log(`Total books: ${Library.totalBook}`); 
console.log(`${lib1.name} has ${lib1.books} books`); 
console.log(`${lib2.name} has ${lib2.books} books`);

// Задача 3

class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const bike = new Motorcycle("Yamaha", "MT-07", "Sport");
console.log(`Make: ${bike.make}`);   
console.log(`Model: ${bike.model}`); 
console.log(`Type: ${bike.type}`);   
