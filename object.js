var person = {
  firstName: "jamila",
  age: 21,
  isFemale: true,
  balance: 100.32,
  dob: new Date(2022, 01, 10).toJSON(),
  address: {
    city: "Londdon",
    postCode: "SW9",
  },
};

console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address);
console.log(person.address.city);

//revise these
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));
