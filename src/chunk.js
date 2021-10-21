const mySpliceRomovedItems = require('../src/shared/splice-removed-items');
const myPush = require('../src/shared/push');
const mySplicedArray = require('../src/shared/splice-array');
const myLength = require('../src/shared/length');

const chunk = (array, size) => {
  const results = [];

  while (myLength(array)) {
    const removed = mySpliceRomovedItems(array, 0, size);
    myPush(results, removed);
    // eslint-disable-next-line no-param-reassign
    array = mySplicedArray(array, 0, size);
  }
  return results;
};

module.exports = chunk;