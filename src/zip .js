const zip = (...arrays) => {
    let biggestArray = 0;
    for (let i = 0; i < arrays.length; i += 1) {
      if (biggestArray < arrays[i].length) {
        biggestArray = arrays[i].length;
      }
    }
    const newArr = [];
    for (let i = 0; i < biggestArray; i += 1) {
      const group = [];
      for (let n = 0; n < arrays.length; n += 1) {
        group.push(arrays[n][i]);
      }
      newArr.push(group);
    }
    return newArr;
  };

  module.exports = {zip};

    
  