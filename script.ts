// Задача 1

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach(animal => {
  console.log(animal.makeSound());
});

// Задача 2

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: ColoredShape[] = [
  new ColoredCircle(5, "red"),
  new ColoredRectangle(4, 6, "blue")
];

shapes.forEach(shape => {
  console.log(`Color: ${shape.color}, Area: ${shape.calculateArea().toFixed(2)}`);
});

// Задача 3

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing machine is now ON.");
  }

  turnOff(): void {
    console.log("Washing machine is now OFF.");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is now ON.");
  }

  turnOff(): void {
    console.log("Refrigerator is now OFF.");
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach(appliance => {
  appliance.turnOn();
  appliance.turnOff();
});


// Задача 4

abstract class Account {
  protected balance: number = 0;
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private interestRate: number = 0.05;

  deposit(amount: number): void {
    this.balance += amount;
    this.balance += this.balance * this.interestRate;
    console.log(`Deposited with interest. Balance: ${this.balance.toFixed(2)}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. Balance: ${this.balance.toFixed(2)}`);
    }
  }
}

class CheckingAccount extends Account {
  private fee: number = 1;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. Balance: ${this.balance.toFixed(2)}`);
  }

  withdraw(amount: number): void {
    const total = amount + this.fee;
    if (total > this.balance) {
      console.log("Insufficient funds (including fee).");
    } else {
      this.balance -= total;
      console.log(`Withdrawn ${amount} with fee. Balance: ${this.balance.toFixed(2)}`);
    }
  }
}

const savings = new SavingsAccount();
savings.deposit(100);
savings.withdraw(50);

const checking = new CheckingAccount();
checking.deposit(100);
checking.withdraw(50);

// Задача 5

abstract class Media {
  abstract play(): void;
}

class Audio2 extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video");
  }
}

const mediaArray: Media[] = [new Audio2(), new Video()];

mediaArray.forEach(media => {
  media.play();
});

