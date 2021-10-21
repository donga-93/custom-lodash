const dropWhile = require('../src/dropWhile');

test(`dropWhile function creates a slice of array excluding elements dropped from the beginning. 
Elements are dropped until predicate returns falsey.`, () => {
  expect(dropWhile([
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ], (v) => !v.active)).toStrictEqual([ { user: 'pebbles', active: true } ]);
  expect(methods.dropWhile([1, 2, 3, 4, 1], (v) => v < 2)).toStrictEqual([ 2, 3, 4, 1 ]);
  expect(methods.dropWhile('Hold Your Color', (v) => v === v.toUpperCase())).toStrictEqual([ 'o', 'l', 'd', ' ', 'Y', 'o', 'u', 'r', ' ', 'C', 'o', 'l', 'o', 'r' ]);
  expect(methods.dropWhile({a: 5, b: 10}, (v) => v % 2)).toStrictEqual([]);
  expect(methods.dropWhile(10, (v) => v > 2)).toStrictEqual([]);
});