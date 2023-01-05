//Generators
//You can't create generators using arrow functions.

const generator = function* () {
  yield 1;
  yield "AmigosCode";
  yield { name: "Alex", gender: "MALE" };
};

const gen = generator();
console.log(gen);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// const result = gen.next();
// while (!result.done) {
//   console.log(result.value);
//   result = gen.next();
// }

//Check the  MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
