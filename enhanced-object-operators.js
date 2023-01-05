//Enhanced Object Properties...removing redundancy when building objects

const brandPop = "BRAND";
const calculator = (brand, price) => ({
  [brandPop.toLowerCase()]: brand,
  price,
  getDiscount() {
    return this.price - this.price * 0.3;
  },
});

const casio = calculator("casio", "10");
console.log(casio);
console.log(casio.getDiscount());

const getCost = (item, price, locationFound) => ({
  item,
  price,
  locationFound,
  getDiscount() {
    return this.price - this.price * 0.3;
  },
});

const appleJuice = getCost("appleJuice", "4.99", "Bradfield");

console.log(appleJuice);
