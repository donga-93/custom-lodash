/* eslint-disable no-unused-vars */
const take = require('../src/take');

test('filter should add the filtered elements to a new array and return that array', () => {
  const arr = [1, 2, 3, 4, 18, 28];
  const result = [18, 28];
  expect(arr.filter((value) => value > 15)).toEqual(result);
});