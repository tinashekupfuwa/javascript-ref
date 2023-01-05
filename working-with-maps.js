const map = new Map(); //creates a new Map
map.set("firstName", "James").set("age", "22").set("delete", true); //Sets the value for a key in a Map

console.log(map);
console.log(map.size); //Returns the number of elements in a Map
console.log(map.has("tapiwa")); //Returns true if a key exists in a Map
console.log(map.get("firstName")); //Gets the value for a key in a Maps
console.log(map.delete("delete")); //Removes a Map element specified by the key

console.log(map.size);

//convert mape to an object

console.log(Object.fromEntries(map.entries()));
console.log(map.size);
map.clear();

/*Creating a new map----------------------------- */
const fruitCost = new Map([
  ["oranges", 400],
  ["pineapples", 600],
  ["apples", 150],
]);

const beverages = new Map();

beverages
  .set("Coca-Cola", 100)
  .set("Mirinda", 200)
  .set("Cascade", 0.5)
  .set("Fanta", 250);

//The set() method can also be used to change existing Map values:
//The get() method gets the value of a key in a Map:

const amountOfFruits = fruitCost.size;
const amountOfBeverages = beverages.size;
// console.log(amountOfFruits);
// console.log(amountOfBeverages);
// console.log(beverages.get("Coca-Cola"));

//forEach on maps.

fruitCost.forEach((value, key) => {
  console.log(`${key} = $${value}`);
});

//entries
let x = "";
for (const fruit of fruitCost.entries()) {
  console.log(fruit);
}

console.log(fruitCost.values());

//----------------------------------------------------
