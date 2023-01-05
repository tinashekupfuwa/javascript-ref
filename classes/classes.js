//Classes

export class Person {
  constructor(firstName, lastName, nickName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.age = age;
    this.gender = gender;
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  get fullName() {
    console.log(`fullName ${this.firstName} ${this.lastName}`);
  }

  set nickName(nickName) {
    console.log(`the new nickname is ${nickName}`);
  }

  toString() {
    console.log(
      `
      FirstName : ${this.firstName},
      LastName : ${this.lastName}, 
      Age ${this.age}, 
      Gender : ${this.gender},
      FullName : ${this.fullName}
      `
    );
  }
}

export class Car {
  constructor(brand, model, color, year, mileage) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.color = color;
  }

  mentionColor() {
    console.log(`the color of the car is ${this.color}`);
  }

  claim() {
    console.log(`${this.brand} belongs to ${Person.name}`);
  }

  start() {
    console.log(`${this.brand},${this.model} has started`);
  }

  get whichCar() {
    console.log(`${this.brand} ${this.model}`);
  }

  set carColor(carColor) {
    this.color = carColor;
  }

  toString() {
    console.log(
      `Brand : ${this.brand}, Model ${this.model}, Year : ${this.year},Mileage : ${this.mileage}, Color : ${this.color}`
    );
  }
}

class SoftwareEngineer extends Person {
  constructor(
    firstName,
    lastName,
    nickName,
    age,
    gender,
    programmingLanguages
  ) {
    super(firstName, lastName, nickName, age, gender);
    this.programmingLanguages = programmingLanguages;
  }

  get fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  code() {
    console.log(
      `${this.fullName} knows how to code in ${this.programmingLanguages}`
    );
  }
}

export { SoftwareEngineer };
