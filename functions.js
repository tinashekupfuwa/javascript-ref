// Functions
//A function is a set of statements that perform a task.

const carType = (brand, model, type, year) => {
  //always store functions in a const
  return {
    brand: brand,
    model: model,
    type: type,
    year: year,
  };
};

const getSchool = (school) => ({
  //if you have 1 parameter, no need for parenthesis
  //if you are returning anobject, you can just putting brackets before the braces and also  remove the return key
  school: school,
});

const subtrtact = (a, b) => a - b;

const calculate = (a, b, sign = "") => {
  switch (sign) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
    case "*":
      return a * b;
      break;
    default:
      return "Choose a sign";
  }
};

console.log(calculate(8, 2, "+"));

const toyotaHilux = carType("Toyota", "Hilux", "4x4", "2021");
// console.log(toyotaHilux);
console.log(JSON.stringify(toyotaHilux));

console.log(getSchool("Rugare"));

// invoking a function
//arguments is what a function recieves
