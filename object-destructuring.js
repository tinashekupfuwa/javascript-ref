//Object Destructuring
var person = {
  firstName: "jamila",
  age: 21,
  isFemale: true,
  balance: 100.32,
  dob: new Date(2022, 01, 10).toJSON(),
  address: {
    city: "London",
    postCode: "SW9",
  },
};

const {
  firstName: name, //renaming firstName to name
  age,
  isFemale,
  address: { city }, //extracting the city from within address object.
} = person;

console.log(firstName, age, isFemale, city);
