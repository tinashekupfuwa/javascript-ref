//Const. No re-assignment is allowed.

const city = "bulawayo";
const cityObject = {};
cityObject["city"] = "Bulawayo";
delete cityObject.city;
console.log(cityObject);
