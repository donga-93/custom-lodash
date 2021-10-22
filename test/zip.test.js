const {zip} = require('../src/zip ');
  

describe('zip', () => {
    it('should return group elements in new array', () => {
      expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
        ['a', 1, true],
        ['b', 2, false],
      ]);
    });
  
    it('should return group elements when one array bigger', () => {
      expect(zip(['a', 'b'], [1, 2, 3], [true, false])).toEqual([
        ['a', 1, true],
        ['b', 2, false],
        [undefined, 3, undefined],
      ]);
    });
  });