//Objects -  a collection key value pairs
const person = {
  firstName: "Jamila",
  age: 21,
  isFemale: true,
  balance: 100.32,
  dob: new Date(2000, 1, 28).toJSON(),
  address: {
    city: "London",
    postCode: "SW9",
  },
  toString: function () {
    return `Name: $(this.firstName) Age :${this.age}`;
  },
  deleteMe: true,
};

//adding new property
// person.lastName = "Ahmed";
person["lastName"] = "Ahmed";

//delete a value inside an object
delete person.deleteMe;
delete person["deleteMe"];

console.log(person.toString());
// console.log(person);

//looping  through an object

for (const p in person) {
  console.log(person); //
}

console.log(Object.keys(person));
console.log(Object.values(person));
