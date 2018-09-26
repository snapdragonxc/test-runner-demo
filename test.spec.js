let add = require('./add.js');
let multiply = require('./multiply.js');
let { test, verify } = require('./runner.js');

test('The add function', () => {
  let expected = 8;
  let actual = add(3, 5);
  verify(expected, actual);
})

test('The multiply function', () => {
  let expected = 12;
  let actual = multiply(3, 4);
  verify(expected, actual);
});
