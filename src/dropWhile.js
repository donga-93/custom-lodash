const myLength = require('../src/shared/push');
const mySlice = require('../src/shared/slice');

function dropWhile(arr, cb) {
    const result = [];
    if (!arr.length) {
      return result;
    }
    let firstFalsyItem;
    for (let i = 0; i < arr.length; i += 1) {
      if (!cb(arr[i])) {
        firstFalsyItem = i;
        break;
      }
    }
    for (let i = firstFalsyItem; i < arr.length; i += 1) {
      push(result, arr[i]);
    }
    return result;
  }

  module.exports = {
    dropWhile,
  };