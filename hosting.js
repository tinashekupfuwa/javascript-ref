//why using the var keyword is bad practice
//Hoisting, means the interprator looks at  all the variables declared using vara nd pushes them to the top
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("value of i outside  loop :" + i);
