//Array Destructuring

const names = ["James", "Mariam", "Jamal", "Aisha", "Alex"];

/*
Repetative and not clean
const James = names[0];
const Mariam = names[1];
const Jamal = names[2];
*/

const [James, Mariam, Jamal, ...rest] = names;
// ...rest is being used by storing the remaining variables into rest
console.log(James);
console.log(Mariam);
console.log(Jamal);
console.log(rest);
