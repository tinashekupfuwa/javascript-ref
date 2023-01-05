const evenNumbers = new Set();
evenNumbers.add(1);
evenNumbers.add(3);
evenNumbers.add("mass media");
evenNumbers.add(true);

const zimbabweanCities = {
  city1: "Harare",
  city2: "Bulawayo",
  city3: "Gweru",
  city4: "kadoma",
};

evenNumbers.add(zimbabweanCities);
console.log(evenNumbers);
const newArray = Array.from(evenNumbers);
console.log(evenNumbers.has(3));

// Convert Set object to an Array object, with Array.from
