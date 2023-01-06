//Arrays

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number));
// console.log(numbers[2]); //indexings

numbers.push(20); //inserting into an  array

// console.log(numbers);
const indexOFFive = numbers.indexOf(5); //indexOf()is used when we are looking for the position of an elemnt in an arrays
console.log(indexOFFive);
numbers.splice(indexOFFive, 1); //splice is for deleting
// console.log(numbers);

//array-maps.map allows transformation

const numberTimesTwo = numbers.map((number) => {
  return number * 2;
});

console.log(numberTimesTwo);

console.log(numbers.map((number)))
