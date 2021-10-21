const drop = require('../src/drop');

test('drop should return an empty array if n is more, than array length', () => {
  const array = [1, 2, 3];
  expect(drop(array, 5)).toEqual([]);
});

