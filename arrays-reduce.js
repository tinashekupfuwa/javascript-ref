//Arrays Reduce
//reduce functions are used to reduce an array to a single value
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((accumulator, current) => {
  return accumulator + current;
});

console.log(result);
