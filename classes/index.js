import { Person, Car, SoftwareEngineer } from "./classes.js";

const tinashe = new Person("Tinashe", "Kupfuwa", "tintin", 31, "Male");
const tapiwa = new Person("Tapiwa", "Kupfuwa", "taps", "Female", 31);
const allen = new SoftwareEngineer("Allen", "Phenduka", "manCool", 22, "MALE", [
  "Python",
  "Java",
  "Go",
]);

const Mazda = new Car("Mazda", "323", "blue", 1996, "2500km");

//Properties
// console.log(Mazda.brand);
// console.log(Mazda.whichCar); //getter, getting model and brand
// console.log(Mazda.mentionColor());
// Mazda.carColor = "Red"; //setter , setting a new property value to the object.

//Behaviours
// console.log(tinashe.eat());
// console.log(tinashe.sleep());
// console.log(tinashe.toString());
// console.log(Mazda.claim());
// console.log(Mazda.start());
// console.log(Mazda.toString());

//Inheritance

console.log(allen.eat());
console.log(allen.sleep());
console.log(allen.toString());
console.log(allen.code());
