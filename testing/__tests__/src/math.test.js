const add = require("../../src/math.js");

test("Can add numbers", () => {
  //given
  const number1 = 1;
  const number2 = 2;
  const expected = 3;
  //when
  const actual = add(number1, number2);
  //then
  expect(actual).toBe(expected);
});
