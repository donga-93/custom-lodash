const toPairs = (obj) => {
    const newArr = [];
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i += 1) {
      newArr.push([keys[i], obj[keys[i]]]);
    }
    return newArr;
  };

  module.exports = {toPairs};