//Callbacks
// a  call back is function that is passeedas argument  to another function.

const greetUser = (username, callback) => {
  console.log(callback(username));
};

greetUser("james", (username) => {
  return `hello ${username}`;
});

const add = (a, b, callback) => {
  return addFunction(a, b);
};

const addFunction = (a, b) => {
  console.log(a + b);
};

add(4, 6, (a, b) => {
  console.log(a + b);
});
