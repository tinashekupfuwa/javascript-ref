const formatter = Intl.NumberFormat("en", {
  notation: "compact",
  style: "currency",
  currency: "ZWD",
});

const breadCost = formatter.format(1_456_234);

console.log(breadCost);
const a = 4;
const b = 2;
const c = a + b + 5;

console.log(c);
