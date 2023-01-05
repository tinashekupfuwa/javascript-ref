var names = ["Alex", "Jamila", "Joe", "Aisha"];

var i = 0;

do {
  console.log(names[i]);
  i++;
} while (i < names.length); // executes before checking condition

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

while (i < names.length) {
  console.log(names[i]);
  i++;
}

//-------------------------------------------------
//for-of loop
for (const name of names) {
  // for off construct
  console.log(name);
}

console.log("-----------------------------------");
//for-each
names.forEach((name) => {
  console.log(name);
});
