//Sets
//sets do not allow duplicates

const numbersArray = [1, 1, 2, 2, 3];
console.log(numbersArray);

const numbersSet = new Set();
numbersSet.add(1).add(1).add(2).add(2).add(3);

console.log(numbersSet);
console.log(numbersSet.delete(1)); //deletes an element inside the set and return true if the element is present
console.log(numbersSet);
console.log(numbersSet.has(2));
console.log(numbersSet.size);
//numbersSet.clear();//

for (const e of numbersSet) {
  console.log(e);
}

numbersSet.forEach((e) => console.log(e));

console.log(Array.from(new Set(numbersArray))); //removing duplicates from an rray using sets.
