export const brand = {
  brand: "AmigosCode",
  website: "www.amigoscode.com",
};

// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
//there can only be onne be one' export default' and many 'export'
export { add, subtract };
export default brand;
