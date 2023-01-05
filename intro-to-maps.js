const person = {
  firstName: "James",
  age: 2,
};

const map = new Map();
map.set("firstName", "James");
map.set("age", "2");
map.set("age", "3"); //overiding the  age key, the key  has to be unique
map.set({ age: "foo" }, "2");

console.log(map);
