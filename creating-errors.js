//Creating errors , use the Error class

class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "myError";
  }
}

// const error = new MyError("oops");
// console.log(error.name);
// console.log(error.message);
// console.log(error.stack);

const divide = (n1, n2) => {
  if (n2 === 0) {
    throw new MyError("Cannot divide using 0");
  }
  return n1 / n2;
};

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error);
}
