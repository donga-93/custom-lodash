const myLength = require('../src/shared/length');
const mySlice = require('../src/shared/slice');

const take = (array, num) => {
  const length = myLength(array);
  if (num === undefined) {
    return mySlice(array, 0, 1);
  }
  if (num > length) {
    return array;
  }
  return mySlice(array, 0, num);
};

module.exports = take;