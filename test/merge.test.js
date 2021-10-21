const {merge} = require('../src/merge ');
    
describe('merge', () => {
    it('should merge two objects', () => {
      expect(merge({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      });
    });
  });
  