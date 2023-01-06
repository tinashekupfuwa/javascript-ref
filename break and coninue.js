//Break and Continue

for (var i = 0; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    break; //run above code, and stop when condition has been reached. referee
  }
}

for (var i = 0; i <= 10; i++) {
  if (i == 5) {
    continue; //run code below after reaching  a condition.security guard.
  }
  console.log(i);
}


