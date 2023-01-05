//Switch
var gender = "F";

// switch (gender) {
//   case "MALE":
//     console.log("its a man");
//     break;
//   case "FEMALE":
//     console.log("its a woman");
//     break;
//   default:
//     console.log("Known");
// }

switch (gender) {
  case "M":
    console.log("its a man");
    break;
  case "F":
    if (gender == "F" || gender == "FEMALE") {
      console.log("its a woman");
    }
    break;
  default:
    console.log("alien");
}
