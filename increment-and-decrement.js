//Increment and Decrement opeerations
var number = 0;

//Postfix // returns value before  increment
console.log("Postfix increment and deecrement");
console.log(number++);
console.log(number);
console.log(number--);
console.log(number);

//Prefix  //returns value after increment
console.log("Prefix incremnt and decrement");
var numberTwo = 0;
console.log(++numberTwo);
console.log(--numberTwo);

//for loop will start with 0 bfore incrment because of  the postfix.
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
