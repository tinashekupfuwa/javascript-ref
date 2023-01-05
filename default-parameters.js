const getBrand = (brand = "just a brand") => ({
  brand: "brand",
  website: `www.${brand.toLowerCase()}.com`,
});

console.log(getBrand("toyota"));
