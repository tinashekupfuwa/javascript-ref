//Iterate maps

const map = new Map();

map.set("name", "James").set("age", 22).set("delete", true);
console.log(map.keys());
console.log(map.entries());

for (const k of map.keys()) {
  console.log(k);
}

for (const v of map.values()) {
  console.log(v);
}

for (const entry of map) {
  console.log(entry);
  console.log(entry[0]);
  console.log(entry[1]);
}
